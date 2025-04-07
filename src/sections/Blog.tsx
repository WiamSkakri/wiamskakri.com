import React from 'react';
import { FileText } from 'lucide-react';

function Blog() {
  const posts = [
    {
      title: 'Building Scalable React Applications',
      date: 'March 15, 2024',
      preview: 'Learn the best practices for building large-scale React applications that can grow with your needs.',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'The Future of Web Development',
      date: 'March 1, 2024',
      preview: 'Exploring upcoming trends and technologies that will shape the future of web development.',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <FileText className="text-gray-400" size={24} />
        <h1 className="text-3xl font-handwriting">Blog</h1>
      </div>
      <div className="space-y-8">
        {posts.map((post, index) => (
          <div key={index} className="border border-[#E6E6E6] dark:border-neutral-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-handwriting text-gray-500 dark:text-gray-400">{post.date}</span>
                <span className="text-lg font-handwriting text-gray-500 dark:text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-handwriting mb-2">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{post.preview}</p>
              <button className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-handwriting text-lg">
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;