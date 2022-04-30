import axios from 'axios';
import { useEffect, useState } from 'react';
import './Homepage.scss'

export default function Homepage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (!loading) fetchProjects();
    }, [])
  
    const fetchProjects = () => {
      axios.get(process.env.REACT_APP_API_URL+'/projects')
        .then((res) => {
          setProjects(res.data.projects);
          loading = false;
        })
    }

    return(
        <div className="homepage__container">
          <header>
            <p>Portfolio.</p>
          </header>
          <section className="hero">
            <div className='hero__overlay-left'></div>
            <div className="hero__content">
              <h1 data-aos="fade-up">BOINET<br/>Lucas<span>.</span></h1>
            </div>
          </section>
        </div>
    )
}