import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddArt = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Art Details:', { name, description, price, image });
    // Navigate to another page or show a success message
    navigate('/dashboard-artist');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-[#5C0601] mb-4">Add New Art</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
      <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5C0601] focus:border-[#5C0601]"
          />
        </div>
        {image && (
          <div className="mb-4">
            <img src={image} alt="Uploaded Art" className="w-full h-auto rounded-md shadow-md" />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5C0601] focus:border-[#5C0601]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5C0601] focus:border-[#5C0601]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5C0601] focus:border-[#5C0601]"
            required
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-[#5C0601] text-white font-semibold rounded-md shadow-sm hover:bg-[#7A1F0A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C0601]"
        >
          Add Art
        </button>
      </form>
    </div>
  );
};

export default AddArt;