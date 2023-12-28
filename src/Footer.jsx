import React from 'react'

const Footer = () => {
    let dates = new Date

  return (
    <div className='footer'>copyright &copy; {dates.getFullYear()} All rights reserved and designed by Ak </div>
  )
}

export default Footer