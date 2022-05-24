import './rules.css';

const Rules = (props) => {
    return(
        <div className='rulesScreen' id='rulesScreen'>
            <div className='rulesCard'>
                <div className='rulesHeader'>
                    <p>RULES</p>
                    <img src={props.close} className='close' onClick={props.onClick} />
                </div>
                <img src={props.rules} className='rules' />
            </div>
        </div>
    )
}

export default Rules;