import AboutImage from '../../assets/now.png'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.Desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                On a web development odyssey for a year, perpetually growing wiser, and striving to surpass myself every day.
                </p>
                <p>
                Hello, I'm Gautam Buddh from Haryana, India. A Full stack web developer currently pursuing a Computer Engineering degree specializing in Data Science. With a focus on delivering excellence with patience, I have successfully completed numerous projects and gained insights into industry standards. I am now actively seeking job opportunities to apply my skills and contribute to your projects. Please find my resume below. Let's connect and explore how I can add value to your team!</p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About
