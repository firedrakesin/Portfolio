import React from 'react'
import In from '../Images/ecomm.jpg'
import Por from '../Images/socialmedia.jpg'
import chat from "../Images/cyber1.jpg"


const Other = () => {

  return (
    <>
    <div className='otherbg'>
      <h2 className='work'>WHAT ELSE I DO ?</h2>
      <p className='workk'>Living, learning, & leveling up<br/> one day at a time.</p>
      <img src={In} alt='in' className='rounded-image' />
      <img src={Por} alt='por' className='rounded-image'  />
      <img src={chat} alt='chat' className='rounded-image'  />
    </div>
  </>
  )
}

export default Other

