'use client'

import { forwardRef } from 'react'

interface CanvasEditorProps {
  uploadedImage: string | null
}

const CanvasEditor = forwardRef<HTMLCanvasElement, CanvasEditorProps>(
  ({ uploadedImage }, ref) => {
    return (
      <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
        <canvas
          ref={ref}
          className="block"
          style={{ width: '400px', height: '400px' }}
        />
        {!uploadedImage && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <p className="text-gray-500 text-center">
              Upload an image to get started
            </p>
          </div>
        )}
      </div>
    )
  }
)

CanvasEditor.displayName = 'CanvasEditor'

export default CanvasEditor 