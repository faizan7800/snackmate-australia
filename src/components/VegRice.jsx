import { useLayoutEffect} from 'react'
import Hero from './Hero';
import Header from './Header';

const VegRice = () => {

    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
      },[])
  return (
    <>
     <Header isVeg={true}/>
    <Hero featureImage={"https://i.ibb.co/CM5Xsnz/image2.png"} product='yes' name={""}/>
    <section className="section section-divider white promo">
        
    <div className="container">
      <h2 className="h2 section-title" style={{textAlign: "center", marginBottom: "20px"}}>
        Vegetarian Curry  <span className="span">Rice</span>
      </h2>
      <p className='text-gray-500 text-bold font-lora text-2xl mb-6 text-center'>Scroll The Cards Horizontly to Read</p>

      <ul className="promo-list has-scrollbar">

<li className="promo-item">
  <div className="promo-card">


    <h3 className="h3 card-title">A Culinary Journey</h3>

    <p className="card-text">
    In the realm of comfort food, few dishes offer the same level of satisfaction and warmth as a steaming plate of vegetarian curry rice. A culinary masterpiece beloved by millions around the world, vegetarian curry rice embodies the perfect marriage of hearty ingredients, aromatic spices, and soul-soothing flavors
      
    </p>


  </div>
</li>

<li className="promo-item">
  <div className="promo-card">

    <h3 className="h3 card-title">A Global Fusion</h3>

    <p className="card-text">
    While the roots of curry rice can be traced back to the Indian subcontinent, its popularity has transcended borders and cultures, evolving into a global phenomenon cherished by food lovers of all backgrounds. From the fragrant curries of India to the savory stews of Japan, curry rice has taken on countless forms, each one reflecting the unique culinary traditions of its region

    </p>

  </div>
</li>

<li className="promo-item">
  <div className="promo-card">

  
    <h3 className="h3 card-title">The Heart of the Dish</h3>

    <p className="card-text">
    At the heart of vegetarian curry rice lies a rich and flavorful curry sauce, simmered to perfection with an array of aromatic spices and herbs. From earthy cumin and coriander to fiery chili and turmeric, each spice lends its own distinct flavor profile to the sauce, creating a symphony of tastes that dance on the palate
    </p>


  </div>
</li>

<li className="promo-item">
  <div className="promo-card">

  
    <h3 className="h3 card-title">A Bounty of&nbsp; Vegetables</h3>

    <p className="card-text">
    One of the hallmarks of vegetarian curry rice is its abundance of vegetables, which not only add color and texture to the dish but also pack a nutritional punch. From tender potatoes and carrots to crisp bell peppers and peas, the vegetable medley in curry rice offers a delightful array of flavors and nutrients that are sure to satisfy even the most discerning palate
    </p>


  </div>
</li>

<li className="promo-item">
  <div className="promo-card">

    <h3 className="h3 card-title"> Served with Love</h3>

    <p className="card-text">
    Whether served over a bed of fluffy rice or alongside a stack of warm naan bread, vegetarian curry rice is a dish that brings people together and warms the soul. The aroma of the spices fills the air, tantalizing the senses and beckoning diners to indulge in its hearty goodness
    </p>

  </div>
</li>


<li className="promo-item">
  <div className="promo-card">

    <h3 className="h3 card-title">A Versatile Classic</h3>

    <p className="card-text">
    What sets vegetarian curry rice apart is its versatility – it can be customized to suit individual tastes and dietary preferences. Whether you prefer a mild and creamy curry or a spicy and bold one, there is a variation of curry rice to suit every palate

    </p>

  </div>
</li>


<li className="promo-item">
  <div className="promo-card">

    <h3 className="h3 card-title">Conclusion</h3>

    <p className="card-text">
    In a world filled with culinary delights, vegetarian curry rice stands out as a timeless classic that never fails to satisfy. With its hearty ingredients, aromatic spices, and soul-soothing flavors, it embodies the essence of comfort food at its finest. So, the next time you crave a taste of warmth and nostalgia, treat yourself to a steaming plate of vegetarian curry rice and embark on a culinary journey like no other
    </p>

  </div>
</li>


</ul>



    </div>
  </section>
  </>
  )
}

export default VegRice