import './score.css';

const Score = (props) => {
    return(
        <div className='scoreTile'>
            <p className='scoreText'>SCORE</p>
            <p className='score' id='score'>{props.value}</p>
            <p className='prevScore' id='prevScore'>{props.prevValue}</p>
        </div>
    )
}

export default Score;