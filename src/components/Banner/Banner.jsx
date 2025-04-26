import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
      <div className="content">
        <h1 className='title'>Movie Name</h1>
        <div className="babber_buttons">
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui dolor ipsam placeat distinctio ducimus quam excepturi porro natus, pariatur, iure amet reiciendis illo, deserunt iste hic eum blanditiis maxime!</h1>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner