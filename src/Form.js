import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      body: body,
      userId: 1, // Assuming a user ID for the post
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
        console.log('Post created:', response.data);
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });

    // Reset form values
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
