const ResultButton = (props) => {
    let winner = '';
    if(props.winner){winner = 'winner'}
    return (
        <div className='resultButtonContainer'>
            <div className='buttonShadow' />
            <div className={winner} />
            <div className={props.borderClass + props.symbol + props.party}>
                <div className={props.buttonClass}>
                    <img src={props.src} alt={props.symbol} />
                </div>
            </div>
        </div>
    )
}

ResultButton.defaultProps = {
    buttonClass: 'button',
    borderClass: 'buttonBorder resultButton '
}

export default ResultButton;