import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">

    <div className="footer-top" style={{backgroundImage: `url('https://i.ibb.co/zsYTqBm/footer-illustration.png')`}}>
      <div className="container">

        <div className="footer-brand">

          <a href="" className="logo">SnackMate<span className="span">.</span></a>

          <p className="footer-text">
            Where Authentic Taste Meets Vegetarian Delight
          </p>

          <ul className="social-list">

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

        <ul className="footer-list">

         

        </ul>

        <ul className="footer-list">

        

        </ul>

       

      </div>
    </div>

    <div className="footer-bottom" >
      <div className="container">
        <p className="copyright-text">
          &copy; 2024 <a href="#" className="copyright-link">SnackMate</a> All Rights Reserved.
        </p>
      </div>
    </div>

  </footer>

  )
}

export default Footer