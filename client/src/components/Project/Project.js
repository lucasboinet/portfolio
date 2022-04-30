import Skill from "@/components/Skill/Skill"
import './Project.scss';

export default function Project({project, reversed}) {
    return (
        <div className={"project " + (reversed && 'reversed')}>
            <div className="figure-wrapper">
                <img src={project.images[0]} alt="" />
            </div>
            <div className="content">
                <h3 data-aos="fade-up">{project.name}</h3>
                <p data-aos="fade-up">{project.description}</p>
                <div className='project__skills'>
                {project.languages.map((language, index) => (
                    <Skill key={index} icon="images/flutter.svg" name={language} />
                ))}
                </div>
            </div>
        </div>
    )
}