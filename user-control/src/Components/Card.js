import './Card.css';

function Card(props){
    return (
        <div className={`card ${props.mode}`}>
           {props.children}
        </div>
    )
}

export default Card;
