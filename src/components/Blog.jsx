// Blog.jsx
import React from 'react';
import './Blog.css'; // Import the CSS file for styling

const blogPosts = [
  {
    title: 'Top 10 Things to Do in the Maldives',
    snippet: 'Discover the best activities and attractions in the Maldives, from snorkeling to luxury spa treatments.',
    date: 'October 10, 2024',
  },
  {
    title: 'A Guide to the Maldives’ Overwater Bungalows',
    snippet: 'Learn everything about staying in an overwater bungalow, including the best time to visit and what to expect.',
    date: 'September 15, 2024',
  },
  {
    title: 'Maldives: The Ultimate Honeymoon Destination',
    snippet: 'Find out why the Maldives is considered one of the top honeymoon destinations in the world.',
    date: 'August 30, 2024',
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>Blog & News</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-snippet">{post.snippet}</p>
            <p className="blog-date">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
