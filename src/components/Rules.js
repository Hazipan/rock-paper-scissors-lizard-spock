import './rules.css';

const Rules = (props) => {
    return(
        <div className='rulesScreen hideRules' id='rulesScreen'>
            <div className='rulesCard'>
                <div className='rulesHeader'>
                    <p>RULES</p>
                    <img src={props.close} className='close' onClick={props.onClick} alt='close' />
                </div>
                <img src={props.rules} className='rules' alt='rules' />
            </div>
        </div>
    )
}

export default Rules;