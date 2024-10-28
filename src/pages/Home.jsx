import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skill from '../components/Skill'
import Contact from './Contact'


const Home = () => {
  return (
    <div id='home' >
          <Hero />
          <Skill />
          <Projects />
          <Contact />
    </div>
  
  )
}

export default Home