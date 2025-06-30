'use client'

import { Type, Plus, Circle } from 'lucide-react'

interface TextEditorProps {
  text: string
  setText: (text: string) => void
  fontSize: number
  setFontSize: (size: number) => void
  onAddText: () => void
  onAddRingText: () => void
}

export default function TextEditor({
  text,
  setText,
  fontSize,
  setFontSize,
  onAddText,
  onAddRingText
}: TextEditorProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Text Content
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="Enter your text here..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Font Size: {fontSize}px
        </label>
        <input
          type="range"
          min="12"
          max="72"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>12px</span>
          <span>72px</span>
        </div>
      </div>

      <div className="space-y-2">
        <button
          onClick={onAddText}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Text
        </button>
        
        <button
          onClick={onAddRingText}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center justify-center"
        >
          <Circle className="w-4 h-4 mr-2" />
          Add Ring Text
        </button>
      </div>
    </div>
  )
} 