import './Card.css'

const Card = ({ children, background = 'white', width, height }) => {
    const cardStyle = {}
    if (width) cardStyle["width"] = width;
    if (height) cardStyle["height"] = height

    return (
        <div className={`card bg-${background}`} style={cardStyle}>
            {children}
        </div>
    )
}

export default Card;