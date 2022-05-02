import { useEffect, useState } from 'react';
import axios from 'axios';
import './Details.scss';
import { Navigate, useParams } from 'react-router-dom';

export default function Details() {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [displayedImage, setDisplayedImage] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        if(loading) fetchProject();
    }, [id])

    const fetchProject = () => {
        axios.get(process.env.REACT_APP_API_URL+'/projects/'+id)
            .then((res) => {
                setProject(res.data.project)
                setLoading(false)
            })
            .catch((err) => console.error(err));
    }

    if (loading && !project) {
        return <div>Loading...</div>
    }

    return (
        <div className='details__container'>
            <div className='images-container'>
                <img data-aos="fade-up" src={project.images[displayedImage]} alt="" />
            </div>
            <div data-aos="fade-up" className='right-side-panel'>
                <a href="/">&larr; Back to project list</a>
                <h1>{project.name}</h1>
                <p className='date'>{project.date}</p>
                <div className='images-section'>
                    <h4>Select image</h4>
                    <div className='images-wrapper'>
                        {project.images.map((image, index) => (
                            <div key={image} className={displayedImage === index ? 'selected' : ''} onClick={() => setDisplayedImage(index)}>
                                {index + 1}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='languages-section'>
                    <h4>Languages used</h4>
                    <div className='languages-wrapper'>
                        {project.languages.map((lang) => (
                            <p key={lang}>{lang}</p>
                        ))}
                    </div>
                </div>
                <div className='description-section'>
                    <h4>What is it?</h4>
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    )
}