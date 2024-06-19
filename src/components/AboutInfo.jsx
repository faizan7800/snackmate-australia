import React from 'react'

const AboutInfo = () => {
  return (
    <section className="section section-divider white promo" style={{padding:'45px 0px'}}>
        
        <div className="container" >
          <h2 className="h2 section-title" style={{textAlign: "center", marginBottom: "20px"}}>
         <span className="span">SnackMate</span> Unique Offerings
          </h2>
          <p className='text-gray-500 text-bold font-lora text-2xl mb-6 text-center'>Scroll The Cards Horizontly to Read</p>
          <ul className="promo-list has-scrollbar">

            <li className="promo-item">
              <div className="promo-card" style={{height:"300px"}}>


                <h3 className="h3 card-title">Fresh Ingredients</h3>

                <p className="card-text">
                We use the most fresh, locally sourced ingredients to ensure the highest quality and taste in every dish.
                  
                </p>


              </div>
            </li>

            <li className="promo-item">
              <div className="promo-card" style={{height:"300px"}}>

                <h3 className="h3 card-title">Authentic Recipes</h3>

                <p className="card-text">
                Our recipes are crafted by experienced and authentic North Indian chef who bring generations of culinary tradition to each meal.

                </p>

              </div>
            </li>

            <li className="promo-item">
              <div className="promo-card" style={{height:"300px"}}>

              
                <h3 className="h3 card-title">Pure Vegetarian</h3>

                <p className="card-text">
                We do not use any meat, meat products, egg or egg products in our preparations. We are pure vegetarians and know the value of serving delicious vegetarian food to our vegetarian friends.
                </p>


              </div>
            </li>

            <li className="promo-item">
              <div className="promo-card" style={{height:"300px"}}>

              
                <h3 className="h3 card-title">Eco-Friendly</h3>

                <p className="card-text">
                We are committed to sustainable practices from Eco-friendly packaging to reducing food waste.
                </p>


              </div>
            </li>

            <li className="promo-item">
              <div className="promo-card" style={{height:"300px"}}>

                <h3 className="h3 card-title">Conclusion</h3>

                <p className="card-text">
                Our food is cooked and made in licensed commercial kitchens which are fully compliant with Government rules and regulations.

                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default AboutInfo