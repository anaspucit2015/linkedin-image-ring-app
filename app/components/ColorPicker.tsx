'use client'

import { HexColorPicker } from 'react-colorful'
import { X } from 'lucide-react'

interface ColorPickerProps {
  color: string
  onChange: (color: string) => void
  onClose: () => void
}

export default function ColorPicker({ color, onChange, onClose }: ColorPickerProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Choose Color</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <HexColorPicker
        color={color}
        onChange={onChange}
        className="w-full"
      />
      
      <div className="flex items-center space-x-3">
        <div
          className="w-8 h-8 rounded border-2 border-gray-300"
          style={{ backgroundColor: color }}
        />
        <span className="text-sm font-mono">{color}</span>
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={onClose}
          className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          onClick={onClose}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Apply
        </button>
      </div>
    </div>
  )
} 