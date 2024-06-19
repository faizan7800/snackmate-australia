import { useLayoutEffect} from 'react'
import Hero from './Hero';
import Header from './Header';

const VegPuff = () => {

    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
      },[])
  return (
    <>
    
    <Header isVeg={true}/>
    <Hero featureImage={"https://i.ibb.co/b2PGv11/image3.png"} product='yes' name={""}/>
    <section className="section section-divider white promo">
        
    <div className="container">
      <h2 className="h2 section-title" style={{textAlign: "center", marginBottom: "20px"}}>
        Vegetarian Veg  <span className="span">Puffs</span>
      </h2>
      <p className='text-gray-500 text-bold font-lora text-2xl mb-6 text-center'>Scroll The Cards Horizontly to Read</p>
      <ul className="promo-list has-scrollbar">

<li className="promo-item">
  <div className="promo-card">


    <h3 className="h3 card-title">Introduction </h3>

    <p className="card-text">
    In the heartland of India, where culinary traditions intertwine with cultural heritage, there exists a culinary gem that captivates the senses and tantalizes the taste buds: the Vegetarian Veg Puff. Hailing from the vibrant region of North India, this delectable snack is a testament to the region's rich culinary tapestry and its penchant for flavor-packed delights
    </p>


  </div>
</li>

<li className="promo-item">
  <div className="promo-card">

    <h3 className="h3 card-title">The Origins</h3>

    <p className="card-text">
    The origins of the Vegetarian Veg Puff can be traced back to the bustling streets and quaint bakeries of North India, where it has long been a beloved snack among locals and visitors alike. Drawing inspiration from the flaky goodness of puff pastry and the robust flavors of Indian spices, this culinary marvel embodies the perfect marriage of East and West

    </p>

  </div>
</li>

<li className="promo-item">
  <div className="promo-card">

  
    <h3 className="h3 card-title">The Ingredients</h3>

    <p className="card-text">
    At the heart of the Vegetarian Veg Puff lies a medley of fresh vegetables, carefully selected for their flavor and texture. From tender potatoes to crisp peas and carrots, each ingredient lends its unique character to the filling, creating a harmonious blend of tastes and textures. But it is the masterful infusion of spices – the fragrant cumin, the earthy coriander, the fiery red chili – that elevates the humble vegetables to culinary greatness, imbuing the filling with a depth of flavor that is truly unforgettable
    </p>


  </div>
</li>

<li className="promo-item">
  <div className="promo-card">

  
    <h3 className="h3 card-title">The Preparation</h3>

    <p className="card-text">
    The magic of the Vegetarian Veg Puff lies not only in its ingredients but also in its preparation. Meticulously crafted by skilled hands, each puff pastry is lovingly filled with the flavorful vegetable mixture, ensuring that every bite is a symphony of taste and texture. Baked to golden perfection, the flaky pastry encases the savory filling, creating a tantalizing contrast of crispness and tenderness that is simply irresistible
    </p>


  </div>
</li>

<li className="promo-item">
  <div className="promo-card">

    <h3 className="h3 card-title">The Experience</h3>

    <p className="card-text">
    To bite into a Vegetarian Veg Puff is to embark on a culinary journey unlike any other. As you sink your teeth into the flaky pastry, you are greeted by a burst of flavors that dance on your palate – the warmth of the spices, the sweetness of the vegetables, the richness of the pastry. It is a sensory experience that transports you to the bustling streets and bustling markets of North India, where every bite is a celebration of flavor and tradition

    </p>

  </div>
</li>


<li className="promo-item">
  <div className="promo-card">

    <h3 className="h3 card-title">Conclusion</h3>

    <p className="card-text">
    In a world filled with culinary delights, the Vegetarian Veg Puff stands out as a shining example of North India's culinary prowess. With its harmonious blend of fresh vegetables, aromatic spices, and flaky pastry, it embodies the essence of the region's rich culinary heritage. So, the next time you find yourself craving a snack that is as flavorful as it is satisfying, look no further than the Vegetarian Veg Puff – a true taste of North India's culinary excellence
    </p>

  </div>
</li>


</ul>

    </div>
  </section>
  </>
  )
}

export default VegPuff