import './Card.css';

function Card() {
    return (
        <div className="card">
            <img src="/portrait.jpg" alt="Portrait Photo"/>
            <h1>Brett Pine</h1>
            <p>Front End Web Developer</p>
            <p>West Sussex, UK</p>
            <a href="https://brettpine.co.uk" target="_blank">Portfolio</a>
            <a href="https://github.com/brettpine" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/brettpine/" target="_blank">LinkedIn</a>
            <a href="mailto:<brettpine@hotmail.co.uk>" target="_blank">Email</a>
            <a className="CV" href="https://www.brettpine.co.uk/assets/BrettPineCV2025.pdf" target="_blank">Download CV</a>
        </div>
    )
}

export default Card;
