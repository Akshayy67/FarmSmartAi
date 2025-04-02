import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Agriculture',
      excerpt: 'Discover how artificial intelligence is revolutionizing farming practices and improving crop yields.',
      image: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'March 15, 2024',
      category: 'Technology',
    },
    {
      title: 'Sustainable Farming Practices',
      excerpt: 'Learn about the latest sustainable farming techniques and how they benefit both farmers and the environment.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'March 10, 2024',
      category: 'Sustainability',
    },
    {
      title: 'Maximizing Crop Yields',
      excerpt: 'Expert tips on how to optimize your crop yields using smart farming technologies.',
      image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'March 5, 2024',
      category: 'Farming Tips',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            FarmSmart AI Blog
          </h1>
          <p className="text-xl text-gray-600">
            Latest insights, tips, and updates from the world of smart farming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <button className="text-green-600 font-semibold hover:text-green-700">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-green-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest farming tips and updates
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;