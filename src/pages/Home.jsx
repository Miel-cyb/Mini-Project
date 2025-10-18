import Header from '../components/Hero'
import FeaturesSection from '../components/FeatureSection'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import ScrollReveal from '../components/ScrollReveal';


const Home = () => {
  return (
    <>
      <Header />
      <ScrollReveal>
        <FeaturesSection />
      </ScrollReveal>
      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>
      
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      <Footer />
    </>)}

export default Home
