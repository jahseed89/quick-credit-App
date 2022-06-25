import "./cards.scss";

const Cards = (props)=>{
    return (
        <div className="card__container">
            <span>{props.icon}</span>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <p>{props.desc2}</p>
        </div>
    )
}
export default Cards;