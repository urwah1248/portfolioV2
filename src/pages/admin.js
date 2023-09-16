import React, { useState } from 'react'

const admin = () => {
    const [formData, setFormData] = useState({
        title: '',
        detail: '',
        img: '',
        repo: '',
        prev: ''
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
          title: '',
          detail: '',
          img: '',
          repo: '',
          prev: ''
        });
      };
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
      
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-lg mx-auto'>
            <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} />
            <input type="text" name="detail" id="detail" value={formData.detail} onChange={handleChange} />
            <input type="text" name="img" id="img" value={formData.img} onChange={handleChange} />
            <input type="text" name="repo" id="repo" value={formData.repo} onChange={handleChange} />
            <input type="text" name="prev" id="prev" value={formData.prev} onChange={handleChange} />
        <button type="submit" className='bg-white'>Add Project</button>
      </form>
    </div>
  )
}

export default admin