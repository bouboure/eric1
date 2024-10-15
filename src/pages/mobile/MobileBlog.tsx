import React from 'react';
import { Link } from 'react-router-dom';

const MobileBlog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'My First International Tournament',
      date: 'March 15, 2024',
      excerpt: 'Last week, I had the incredible opportunity to participate in my first international youth soccer tournament. The experience was both challenging and rewarding...',
    },
    {
      id: 2,
      title: 'Training Routine: A Day in My Life',
      date: 'March 1, 2024',
      excerpt: "Many of you have been asking about my training routine. In this post, I'll take you through a typical day in my life as a young soccer player...",
    },
    {
      id: 3,
      title: 'Overcoming Injuries: My Comeback Story',
      date: 'February 15, 2024',
      excerpt: "Injuries are a part of any athlete's journey. In this post, I want to share my experience with a recent ankle injury and how I worked to overcome it...",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-3">{post.date}</p>
            <p className="text-gray-700 text-sm mb-3">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline text-sm">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileBlog;