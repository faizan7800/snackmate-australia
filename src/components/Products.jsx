import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Products = () => {
    const navigate = useNavigate()
  return (
    <section className="section section-divider white blog" id="blog" style={{padding:'45px 0px'}}>
        <div className="container">

          <p className="section-subtitle">Latest Foods</p>

          <h2 className="h2 section-title">
            SnackMate Latest <span className="span">Foods</span>
          </h2>

          <ul className="blog-list">

            <li>
              <div className="blog-card">

                <div className="card-banner">
                  <img src="https://i.ibb.co/M61FhHc/image1.png" loading="lazy"
                    alt="What Do You Think About Cheese Pizza Recipes?" className="w-100"/>

                  <div className="badge">Samosa</div>
                </div>

                <div className="card-content">


                  <h3 className="h3">
                    <Link to="/veg-samosa" className="card-title">Vegetarian Potato Samosas</Link>
                  </h3>

                  <p className="card-text">
                    In the colorful tapestry of Indian cuisine, few dishes hold as much allure and universal appeal as the humble yet tantalizing potato samosa. A culinary masterpiece cherished across the length and breadth of the Indian subcontinent...
                  </p>

                  <Link to={'/veg-samosa'} className="btn-link">
                    <span>More About It</span>

                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </Link>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <div className="card-banner">
                  <img src="https://i.ibb.co/b2PGv11/image3.png" loading="lazy"
                    alt="What Do You Think About Cheese Pizza Recipes?" className="w-100"/>

                  <div className="badge">Puff</div>
                </div>

                <div className="card-content">


                  <h3 className="h3">
                    <Link to="/veg-puff" className="card-title">Vegetarian Veg Puffs</Link>
                  </h3>

                  <p className="card-text">
                    In the heartland of India, where culinary traditions intertwine with cultural heritage, there exists a culinary gem that captivates the senses and tantalizes the taste buds: the Vegetarian Veg Puff. Hailing from the vibrant region of North India...
                  </p>

                  <Link to={'/veg-puff'} className="btn-link">
                    <span>More About It</span>

                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </Link>

                </div>

              </div>
            </li>
            <li>
              <div className="blog-card">

                <div className="card-banner">
                  <img src="https://i.ibb.co/CM5Xsnz/image2.png" loading="lazy"
                    alt="What Do You Think About Cheese Pizza Recipes?" className="w-100"/>

                  <div className="badge">Rice</div>
                </div>

                <div className="card-content">


                  <h3 className="h3">
                    <Link to="/veg-rice" className="card-title">Vegetarian Curry Rice</Link>
                  </h3>

                  <p className="card-text">
                    In the realm of comfort food, few dishes offer the same level of satisfaction and warmth as a steaming plate of vegetarian curry rice. A culinary masterpiece beloved by millions around the world, vegetarian curry rice embodies...
                  </p>

                  <Link to={'/veg-rice'} className="btn-link" >
                    <span>More About It</span>

                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </Link>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default Products