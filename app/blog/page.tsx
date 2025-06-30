import FAQ from '../components/FAQ'

const blogPosts = [
  {
    title: 'LinkedIn Open to Work Feature: What It Means and How to Use It',
    description: "Learn how to effectively use LinkedIn's Open to Work feature to boost your job search visibility and attract potential employers.",
    date: '12/10/2024',
  },
  {
    title: 'Wie füge ich das Hiring-Abzeichen auf meinem LinkedIn-Profil hinzu?',
    description: 'Eine Schritt-für-Schritt-Anleitung zum Hinzufügen des Hiring-Abzeichens auf Ihrem LinkedIn-Profil, um potenzielle Kandidaten anzuziehen.',
    date: '04/09/2023',
  },
  {
    title: 'How to Remove the Open to Work Banner from Your LinkedIn Profile',
    description: "Learn the step-by-step process to remove the Open to Work banner from your LinkedIn profile when you're no longer job searching.",
    date: '03/09/2023',
  },
  {
    title: 'Where to Download a PNG Version of the LinkedIn Hiring Badge',
    description: 'Learn how to obtain and use the official LinkedIn Hiring badge in PNG format for your profile or job postings.',
    date: '02/09/2023',
  },
  {
    title: 'How to Add LinkedIn Open to Work Badge to Your Profile?',
    description: 'Learn how to effectively use the LinkedIn "Open to Work" badge to boost your job search visibility.',
    date: '01/09/2023',
  },
]

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-center mb-10">Blog Posts</h1>
      <div className="space-y-4 mb-16">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.description}</p>
            </div>
            <span className="text-xs text-gray-400 mt-2 md:mt-0 md:ml-4">{post.date}</span>
          </div>
        ))}
      </div>
      <FAQ />
    </main>
  )
} 