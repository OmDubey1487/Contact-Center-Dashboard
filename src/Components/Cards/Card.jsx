import './Card.css'

const Card = ({ children, background = 'white', width, height, className }) => {
    const cardStyle = {}
    if (width) cardStyle["width"] = width;
    if (height) cardStyle["height"] = height

    return (
        <div className={`card bg-${background} ${className ? className : ''}`} style={cardStyle}>
            {children}
        </div>
    )
}

export default Card;