import HeaderImage from '../../assets/now.jpg'
import data from './data'
import './header.css'
import { TypeAnimation } from 'react-type-animation'
const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h4 className="typewriter">
            <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'I am Dhruv Mehta',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'I am Full Stack Developer',
              1000,
              'I am Competitive Programmer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h4>
        <p>
        Welcome to my portfolio website! As a passionate full-stack developer, I invite you to explore my collection of projects. From web applications to innovative solutions, feel free to browse..Let's connect and discuss how I can contribute to your next project!
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header