import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Built with <Heart className="inline w-4 h-4 text-red-500" /> by Varun Jaggi
          </p>
        </div>
      </div>
    </footer>
  )
} 