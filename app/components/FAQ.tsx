'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is the ideal size for a LinkedIn profile picture?",
    answer: "The ideal size for a LinkedIn profile picture is 400x400 pixels. LinkedIn recommends using a square image between 400x400 and 7680x7680 pixels, with a file size under 8MB. This ensures your photo displays clearly across all devices and LinkedIn features."
  },
  {
    question: "How do I add the OpenToWork feature on my LinkedIn profile?",
    answer: "To add the OpenToWork feature, go to your LinkedIn profile and click on the 'Open to' button near the top of your profile. Select 'Finding a new job' and customize your job preferences. You can choose to share this with all LinkedIn members or only with recruiters. This feature signals to your network and potential employers that you're open to new opportunities."
  },
  {
    question: "What are the dimensions for a LinkedIn background/cover photo?",
    answer: "The recommended dimensions for a LinkedIn background (cover) photo are 1584x396 pixels. This wide image appears behind your profile picture and can be used to showcase your personal brand, industry, or professional interests. Make sure the important elements are centered, as the image may be cropped differently on various devices."
  },
  {
    question: "What does PFP mean in the context of LinkedIn?",
    answer: "PFP in the context of LinkedIn stands for 'Profile Picture' or 'Picture For Profile'. It refers to the main image you use on your LinkedIn profile, which appears next to your name and headline. A professional, high-quality PFP is crucial for making a good first impression on potential employers, clients, or connections."
  },
  {
    question: "How can I optimize my LinkedIn profile image?",
    answer: "To optimize your LinkedIn profile image: 1) Use a high-quality, professional headshot. 2) Ensure good lighting and a neutral background. 3) Make your face occupy about 60% of the frame. 4) Keep the image current and reflective of your appearance. 5) Use the recommended size of 400x400 pixels. 6) Dress appropriately for your industry. 7) Use a friendly, approachable expression to appear more personable and professional."
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
            >
              <span className="font-semibold text-gray-900">{item.question}</span>
              {openItems.includes(index) ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {openItems.includes(index) && (
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 