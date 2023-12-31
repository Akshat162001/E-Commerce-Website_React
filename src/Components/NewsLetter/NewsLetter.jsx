import React from 'react'
import './NewsLetter.css';
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on your Email</h1>
      <p>Subscirbe to our Newsletter and stay updates with it</p>
    <div>

    <input type="email" placeholder='your email id' />
    <button>Subscribe</button>
  
    </div>
    </div>
  )
}

export default NewsLetter
