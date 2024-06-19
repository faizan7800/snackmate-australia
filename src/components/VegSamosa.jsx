import { useLayoutEffect} from 'react'
import Hero from './Hero';
import Header from './Header';

const VegSamosa = () => {

    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
      },[])
  return (
    <>
     <Header isVeg={true}/>
    <Hero featureImage={"https://i.ibb.co/M61FhHc/image1.png"} product='yes' name={""}/>
    <section className="section section-divider white promo">
        
    <div className="container">
      <h2 className="h2 section-title" style={{textAlign: "center", marginBottom: "20px"}}>
        Vegetarian Potato  <span className="span">Samosas</span>
      </h2>
      <p className='text-gray-500 text-bold font-lora text-2xl mb-6 text-center'>Scroll The Cards Horizontly to Read</p>
      <ul className="promo-list has-scrollbar">

<li className="promo-item">
  <div className="promo-card">


    <h3 className="h3 card-title">Introduction</h3>

    <p className="card-text">
    In the colorful tapestry of Indian cuisine, few dishes hold as much allure and universal appeal as the humble yet tantalizing potato samosa. A culinary masterpiece cherished across the length and breadth of the Indian subcontinent, the vegetarian potato samosa stands as a testament to the rich heritage and diverse flavors of the region.
      
    </p>


  </div>
</li>

<li className="promo-item">
  <div className="promo-card">

    <h3 className="h3 card-title">A Bite of History</h3>

    <p className="card-text">
    Tracing its roots back centuries, the potato samosa has traversed continents and cultures, evolving into the beloved snack we know today. Believed to have originated in the Middle East before finding its way to the Indian subcontinent, the samosa has become an integral part of Indian culinary tradition, adored for its versatility and irresistible taste

    </p>

  </div>
</li>

<li className="promo-item">
  <div className="promo-card">

  
    <h3 className="h3 card-title">The Perfect Blend</h3>

    <p className="card-text">
      At the heart of the vegetarian potato samosa lies a harmonious blend of flavors and textures. The filling, a symphony of diced potatoes, fragrant spices, and aromatic herbs, is a testament to the culinary artistry of India. From the earthy warmth of cumin to the fiery kick of chili, each ingredient plays its part in creating a filling that is as flavorful as it is satisfying
    </p>


  </div>
</li>

<li className="promo-item">
  <div className="promo-card">

  
    <h3 className="h3 card-title">Crafted with Care</h3>

    <p className="card-text">
    Crafting the perfect samosa is no small feat – it requires skill, patience, and a keen eye for detail. The dough, rolled thin and folded delicately around the savory filling, is a testament to the craftsmanship of the samosa maker. Each samosa is then lovingly fried to golden perfection, resulting in a crispy exterior that gives way to a tender and flavorful center.
    </p>


  </div>
</li>

<li className="promo-item">
  <div className="promo-card">

    <h3 className="h3 card-title">A Sensory Experience</h3>

    <p className="card-text">
    To bite into a vegetarian potato samosa is to embark on a sensory journey unlike any other. The first crunch yields to a burst of flavors – the subtle sweetness of the potatoes, the warmth of the spices, the tang of the herbs. With each bite, you are transported to the bustling streets and bustling markets of India, where the aroma of freshly fried samosas fills the air and beckons you to indulge.

    </p>

  </div>
</li>


<li className="promo-item">
  <div className="promo-card">

    <h3 className="h3 card-title">A Culinary Tradition</h3>

    <p className="card-text">
    In a world of ever-changing food trends and fads, the vegetarian potato samosa remains a timeless classic, cherished by food lovers of all ages and backgrounds. Whether enjoyed as a savory snack on a lazy afternoon or served as an appetizer at a festive gathering, the samosa never fails to delight and satisfy

    </p>

  </div>
</li>


<li className="promo-item">
  <div className="promo-card">

    <h3 className="h3 card-title">Conclusion</h3>

    <p className="card-text">
    In the world of Indian cuisine, few dishes hold as much sway and universal appeal as the vegetarian potato samosa. With its irresistible blend of flavors, crispy exterior, and tender filling, it embodies the essence of India's rich culinary heritage. So, the next time you crave a taste of India, reach for a piping hot samosa and savor the magic of this iconic snack

    </p>

  </div>
</li>


</ul>

    </div>
  </section>
  </>
  )
}

export default VegSamosa