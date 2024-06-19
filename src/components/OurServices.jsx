import React from 'react'

const OurServices = () => {
  return (
    <section className="section section-divider white promo" style={{padding:'45px 0px'}}>
        
    <div className="container" >
      <h2 className="h2 section-title" style={{textAlign: "center", marginBottom: "20px"}}>
        Our <span className="span">Services</span>
      </h2>
      <ul className="promo-list has-scrollbar">

        <li className="promo-item">
          <div className="promo-card" style={{height:"250px"}}>


            <h3 className="h3 card-title">SERVICE I</h3>

            <p className="card-text">
            Business to Business (B2B) Vegetarian Food and Snacks provider. Our products cover hot fresh meals, hot snacks as well as packaged snacks.
              
            </p>


          </div>
        </li>

        <li className="promo-item">
          <div className="promo-card" style={{height:"250px"}}>

            <h3 className="h3 card-title">SERVICE II</h3>

            <p className="card-text">
            We are a leading Vegetarian snacks supplier to major retail chains in Australia, across Melbourne, Sydney, Brisbane, Adelaide and Perth.
            </p>

          </div>
        </li>

        <li className="promo-item">
          <div className="promo-card" style={{height:"250px"}}>

          
            <h3 className="h3 card-title">SERVICE III</h3>

            <p className="card-text">
            On request, we can design, craft and add new food products to our range, custom make bulk food products for your retail chains across Australia.
            </p>


          </div>
        </li>

      </ul>

    </div>
  </section>
  )
}

export default OurServices