import './score.css';

const Score = (props) => {
    return(
        <div className='scoreTile'>
            <p className='scoreText'>SCORE</p>
            <p className='score'>{props.value}</p>
        </div>
    )
}

export default Score;