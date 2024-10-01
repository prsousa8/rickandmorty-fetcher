import './History.css';

const History = (props) => {
    return (
        <section className='history' style={{flexDirection: props.estilo}}>
            <img src={props.imagem} />
            <div>
                <h2>{props.titulo}</h2>
                <p>{props.descricao}</p>
            </div>
        </section>
    )
}

export default History;