import axios from 'axios';
import { useEffect, useState } from 'react';
import './Homepage.scss'

import Skill from '@/components/Skill/Skill';
import Project from '@/components/Project/Project';


export default function Homepage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (loading) fetchProjects();
    }, [])
  
    const fetchProjects = () => {
      axios.get(process.env.REACT_APP_API_URL+'projects')
        .then((res) => {
          setProjects(res.data.projects);
          setLoading(false);
        })
    }

    return(
        <div className="homepage__container">
          <header>
            <p data-aos="fade-up" data-aos-delay="300">Portfolio.</p>
          </header>
          <section className="hero">
            <div className='hero__overlay-left'></div>
            <div className="hero__content">
              <h1 data-aos="fade-up" data-aos-delay="800">BOINET<br/>Lucas<span>.</span></h1>
            </div>
          </section>
          <section className='about-me'>
            <h2 id="about-title" data-aos="fade-up">About me 👋</h2>
            <div data-aos="fade-up" className='about-me__wrapper'>
              <div>
                <img src="images/moi.jpg" alt="" />
                <p>👨‍💻</p>
              </div>
              <div>
                <div className='about-me__window-header'>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h3 data-aos="fade-up">Hello, @you !</h3>
                <p data-aos="fade-up">I'm 21, currently living in Lyon (69100). I started to be interested by programming and more specifically about web development around the age of 14. I started like everyone else, with the siteduzero now known as openclassrooms. Apart from dev, I like playing video games, listen to music and watching movies/anime (toudoummm) !</p>
                <p data-aos="fade-up">My path:</p>
                <ul>
                  <li data-aos="fade-up">👉 Fullstack web developer at Tokatab (2021 - Lyon)</li>
                  <li data-aos="fade-up">👉 Bachelor 3 Web dev & mobile (2021 to 2024, - Lyon)</li>
                  <li data-aos="fade-up">👉 Computer Science DUT (2019 to 2021 - Grenoble)</li>
                </ul>
                <div className='about-me__skills'>
                  <Skill name="VueJS" />
                  <Skill name="React" />
                  <Skill name="laravel" />
                  <Skill name="Typescript" />
                  <Skill name="NodeJS" />
                  <Skill name="SQL" />
                  <Skill name="MongoDB" />
                  <Skill name="Flutter" />
                </div>
              </div>
            </div>
          </section>
          <section className='projects-list'>
            <h2 data-aos="fade-up">My projects 💻</h2>
            {projects.map((project, index) => (
              <Project key={project._id} project={project} reversed={index % 2 !== 0} />
            ))}
          </section>
        </div>
    )
}