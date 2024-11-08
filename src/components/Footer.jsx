import React from 'react'
import './footer.css'
function Footer() {
  return (
   <footer id='footer' className='footer'>
    <div className='copyright'>
        &copy; Copyright{' '}

        <strong>
            <span>HP Creation</span>
        </strong>
        . All Rights Reserved
    </div>

    <div className='credits'>
        Designed by <a href="#">Hanumant Pisal</a>
    </div>
   </footer>
  )
}

export default Footer;
