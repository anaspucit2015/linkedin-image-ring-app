import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">Profile Photo App</span>
          </div>
          <nav className="flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            <Link href="/blog" className="text-white hover:text-gray-300">Blog</Link>
            <Link href="/faqs" className="text-white hover:text-gray-300">FAQs</Link>
            <Link href="/profile-photo-editor" className="text-white hover:text-gray-300">Profile Photo Editor</Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 