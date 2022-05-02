import Skill from "@/components/Skill/Skill"
import { useNavigate } from 'react-router';
import './Project.scss';

export default function Project({project, reversed}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/project/${project._id}`)
    }

    return (
        <div className={"project" + (reversed ? ' reversed' : '')}>
            <div className="figure-wrapper">
                <img src={project.images[0]} alt="" />
            </div>
            <div className="content">
                <div>
                    <h3 data-aos="fade-up">{project.name}</h3>
                    <p data-aos="fade-up">{project.description}</p>
                </div>
                <div className='project__skills'>
                {project.languages.map((language, index) => (
                    <Skill key={index} icon="images/flutter.svg" name={language} />
                ))}
                </div>
                <button className="project__btn" onClick={handleClick}><img src="images/more.svg" alt="" /></button>
            </div>
        </div>
    )
}