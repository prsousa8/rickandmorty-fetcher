import './Card-Banner.css'

const CardBanner = (props) => {
    return (
        <div className='card-banner'>
            <img src={props.imagem} alt='imagem'/>
            <p>{props.descricao}</p>
        </div>
    )
}

export default CardBanner;