import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import SkillsSection from '../components/SkillsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
} 