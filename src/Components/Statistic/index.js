import './Statistic.css';

const Statistic = (props) => {
    return (
        <div className='statistic'>
            <img src={props.imagem} />
            <p>{props.dado}</p>
        </div>
    )
}

export default Statistic;