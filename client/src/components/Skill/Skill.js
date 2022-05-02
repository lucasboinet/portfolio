import './Skill.scss';

export default function Skill({ name, icon }) {
    return (
        <div className="skill" data-aos="fade-up"><img src={icon} alt="" />{name}</div>
    )
}