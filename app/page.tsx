'use client'

import { useState, useRef, useEffect } from 'react'
import { fabric } from 'fabric'
import { Upload, Download } from 'lucide-react'
import ImageUploader from './components/ImageUploader'
import CanvasEditor from './components/CanvasEditor'
import TextEditor from './components/TextEditor'
import ColorPicker from './components/ColorPicker'
import FAQ from './components/FAQ'

export default function Home() {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [text, setText] = useState('#Write Text Here')
  const [textColor, setTextColor] = useState('#ffffff')
  const [ringColor, setRingColor] = useState('#5b9138')
  const [fontSize, setFontSize] = useState(32)
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [colorPickerType, setColorPickerType] = useState<'text' | 'ring'>('ring')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Helper: Draw text along a bottom arc, left-to-right, not upside down
  function drawTextOnArc(ctx: CanvasRenderingContext2D, str: string, centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number, color: string, font: string) {
    ctx.save()
    ctx.font = font
    ctx.fillStyle = color
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    // Calculate total arc length for the text
    const arcLength = endAngle - startAngle
    // Calculate angle per character
    const anglePerChar = arcLength / str.length
    let angle = startAngle
    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      ctx.save()
      ctx.translate(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle))
      ctx.rotate(angle + Math.PI / 2)
      ctx.fillText(char, 0, 0)
      ctx.restore()
      angle += anglePerChar
    }
    ctx.restore()
  }

  // Draw everything on a native canvas for full control
  useEffect(() => {
    if (!canvasRef.current) return
    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return
    // Clear
    ctx.clearRect(0, 0, 320, 320)
    // Draw image (cover)
    if (uploadedImage) {
      const img = new window.Image()
      img.src = uploadedImage
      img.onload = () => {
        // Calculate cover
        const size = 320
        const aspect = img.width / img.height
        let drawWidth = size, drawHeight = size
        let dx = 0, dy = 0
        if (aspect > 1) {
          drawWidth = size * aspect
          dx = -(drawWidth - size) / 2
        } else {
          drawHeight = size / aspect
          dy = -(drawHeight - size) / 2
        }
        ctx.save()
        ctx.beginPath()
        ctx.arc(160, 160, 160, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.clip()
        ctx.drawImage(img, dx, dy, drawWidth, drawHeight)
        ctx.restore()
        // Draw filled arc (bottom background)
        ctx.save()
        ctx.beginPath()
        // Arc from 200deg to -20deg (bottom, left-to-right)
        const arcStart = Math.PI * 1.1
        const arcEnd = Math.PI * 1.9
        ctx.moveTo(160, 160)
        ctx.arc(160, 160, 160, arcStart, arcEnd, false)
        ctx.closePath()
        ctx.fillStyle = ringColor
        ctx.globalAlpha = 0.95
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.restore()
        // Draw text along arc (lower, left-to-right)
        if (text) {
          drawTextOnArc(
            ctx,
            text,
            160,
            160,
            130, // lower radius for text
            arcStart,
            arcEnd,
            '#fff',
            `bold ${fontSize}px Arial`
          )
        }
      }
    } else {
      // Draw empty circle
      ctx.save()
      ctx.beginPath()
      ctx.arc(160, 160, 160, 0, 2 * Math.PI)
      ctx.closePath()
      ctx.fillStyle = '#f3f4f6'
      ctx.fill()
      ctx.restore()
    }
  }, [uploadedImage, text, ringColor, fontSize])

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl)
    if (canvas) {
      fabric.Image.fromURL(imageUrl, (img) => {
        canvas.clear()
        // Make image a circle mask
        const scale = Math.min(320 / img.width!, 320 / img.height!)
        img.scale(scale)
        img.set({
          left: (320 - img.width! * scale) / 2,
          top: (320 - img.height! * scale) / 2,
          clipPath: new fabric.Circle({
            radius: 160,
            left: 160,
            top: 160,
            originX: 'center',
            originY: 'center',
          }),
        })
        canvas.add(img)
        canvas.renderAll()
      })
    }
  }

  const addRingText = () => {
    if (canvas) {
      // Remove previous ring text and ring
      canvas.getObjects().forEach((obj) => {
        if (obj.type === 'circle' || obj.type === 'text') {
          canvas.remove(obj)
        }
      })
      // Add ring
      const ring = new fabric.Circle({
        left: 160,
        top: 160,
        radius: 150,
        fill: 'transparent',
        stroke: ringColor,
        strokeWidth: 16,
        originX: 'center',
        originY: 'center',
      })
      canvas.add(ring)
      // Add curved text (simulate with normal text for now)
      const textObject = new fabric.Text(text, {
        left: 160,
        top: 260,
        fontSize: fontSize,
        fill: ringColor,
        fontFamily: 'Arial',
        originX: 'center',
        originY: 'center',
        angle: 0,
      })
      canvas.add(textObject)
      canvas.renderAll()
    }
  }

  const downloadImage = () => {
    if (canvasRef.current) {
      const dataURL = canvasRef.current.toDataURL('image/png')
      const link = document.createElement('a')
      link.download = 'profile-photo.png'
      link.href = dataURL
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const openColorPicker = (type: 'text' | 'ring') => {
    setColorPickerType(type)
    setShowColorPicker(true)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[80vh] py-8">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-md mx-auto p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center mb-4">
            LinkedIn Profile Open to Work Badge Frame Generator
          </h2>
          <div className="w-80 h-80 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 mb-4 border-none relative">
            <canvas ref={canvasRef} width={320} height={320} className="rounded-full" />
            {!uploadedImage && (
              <span className="absolute text-gray-400 text-center w-full">Upload an image to get started</span>
            )}
          </div>
          <div className="w-full space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
              <ImageUploader onImageUpload={handleImageUpload} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Enter Text</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900"
                placeholder="#Write Text Here"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Change Color</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-1">
                  <input
                    type="radio"
                    checked={colorPickerType === 'ring'}
                    onChange={() => openColorPicker('ring')}
                  />
                  <span>Ring</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="radio"
                    checked={colorPickerType === 'text'}
                    onChange={() => openColorPicker('text')}
                  />
                  <span>Text</span>
                </label>
                <div
                  className="w-8 h-8 rounded border-2 border-gray-300 cursor-pointer"
                  style={{ backgroundColor: colorPickerType === 'ring' ? ringColor : textColor }}
                  onClick={() => openColorPicker(colorPickerType)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Change Font Size</label>
              <input
                type="range"
                min={16}
                max={64}
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-green-700"
              />
            </div>
            <button
              onClick={downloadImage}
              disabled={!uploadedImage}
              className="w-full bg-green-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center mt-2 text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download
            </button>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="max-w-3xl w-full mx-auto mt-16">
          <FAQ />
        </div>
      </div>
      {/* Color Picker Modal */}
      {showColorPicker && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Choose {colorPickerType === 'text' ? 'Text' : 'Ring'} Color
            </h3>
            <ColorPicker
              color={colorPickerType === 'text' ? textColor : ringColor}
              onChange={colorPickerType === 'text' ? setTextColor : setRingColor}
              onClose={() => setShowColorPicker(false)}
            />
          </div>
        </div>
      )}
    </>
  )
} 