
import Hero from '../components/Hero'
import AboutInfo from '../components/AboutInfo'
import About from '../components/About'
import Products from '../components/Products'
import FoodsMore from '../components/FoodsMore'
import Contact from './Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import OurServices from '../components/OurServices'
const Home = () => {
  return (
    <>
    
   <Header/>
    <main>
    <article>
    <Hero/>
    <Products/>
    <OurServices/>
    <AboutInfo/>
    <About/>
    <Contact/>
    </article>
    </main>
    </>
  )
}

export default Home