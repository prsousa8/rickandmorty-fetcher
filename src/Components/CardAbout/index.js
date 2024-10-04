import './CardAbout.css';

const CardAbout = () => {
    return (
        <div className='CardAbout'>
            <img src='../../img/Rectangle 10.svg' />
            <div>
                <h5>Sobre...</h5>
                <p className='informacoes'>Este site tem o objetivo de explorar o Universo de Rick and Morty, mostrando informações dos seus personagens e estátisticas no desenvolvimento da animação.

                A API utilizada para obtenção de informações encontra-se disponível no site https://rickandmortyapi.com/. </p></div>
        </div>
    )
}

export default CardAbout;