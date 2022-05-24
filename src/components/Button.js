const Button = (props) => {
    return (
        <div className={props.borderClass + props.symbol}>
            <div className={props.buttonClass}>
                <img src={props.src} alt={props.symbol} />
                <button className='psuedoButton' onClick={props.onClick} value={props.symbol} />
            </div>
        </div>
    )
}

Button.defaultProps = {
    buttonClass: 'button',
    borderClass: 'buttonBorder '
  }

export default Button;