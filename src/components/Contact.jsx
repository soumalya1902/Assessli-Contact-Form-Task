import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formDataSet = e.target;  
    const sheetData = new FormData(formDataSet);
      // console.log(formDataSet);
    fetch(
      "https://script.google.com/macros/s/AKfycbwLAZx4KlntJvJxQXAh4aEU7WZ0q-14f1FJr4nCfIXsXYOiZ05zZnLfKZnuIVx3BCymhw/exec",
      {
        method: "POST",
        body: sheetData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setFormData({
    name: '',
    email: '',
    phone: '',
    message: ''
    })
  };

  return (
    <div className="min-w-[30%] mx-auto p-6 bg-white rounded-lg shadow-lg font-serif">
      <div className='title flex items-center justify-center'>
        <h2 className="text-2xl text-[#3C3633] font-semibold uppercase mb-4">Soumalya's Contact Form</h2>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-[#3C3633] font-bold px-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input mt-1 block bg-[#EEEDEB] p-2 rounded-xl w-full"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-[#3C3633] font-bold px-2">Email Id</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-[#EEEDEB] p-2 rounded-xl"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-[#3C3633] font-bold px-2">Contact Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-[#EEEDEB] p-2 rounded-xl"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-[#3C3633] font-bold px-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea mt-1 block w-full bg-[#EEEDEB] p-2 rounded-xl"
            rows="4"
            placeholder="Enter your message"
            required
          />
        </div>
        <div className='flex itmes-center justify-center'>
          <button type="submit" className="bg-[#0C2D57] hover:bg-zinc-800 text-white font-semibold py-2 px-4 rounded">
          Submit
        </button>
        </div>
        
      </form>
    </div>
  );
};

export default Contact;
