import React from 'react'

function Card(title, detail, img, repo, prev){
  return (
    <div className="card text-gray-400">
      <img className='thumbnail' src={img} alt="Expense Tracker" />
      <h4 className='card-header'>{title}</h4>
      <p className='text-sm'>{detail}</p>
      
      <div className="links flex justify-between">
        <a className='hover:underline' href={repo}>Github ↗</a>
        <a className='hover:underline' href={prev}>Preview ↗</a>
      </div>
    </div>
  )
}

export default Card