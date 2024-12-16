import './button.css'

const Button = ({onClick, caption}) => {
    return (
        <div className="action">
            <button onClick={onClick}>{caption}</button>
        </div>
    )
}

export default Button;