import './style.css'


export default function Card({ title, description, cover }) {
    return (
        <div className='card'>
            <img src={cover} alt='Card Cover' />
            <h3>{title} </h3>
            <p>{description}</p>
        </div>
    )
}