import { Link } from 'react-router-dom';
import './Character.css';

const Character = ({ imagem, descricao, nome, estado, especie, last, first }) => {
    return (
            <div className='character'>
                <img src={imagem} alt={descricao} />
                <div>
                    <h5>{nome}</h5>
                    <p className='estado'>{estado} - {especie}</p>
                    <p className='label'>Last know location:</p>
                    <p className='location'>{last}</p>
                    <p className='label'>First seen in:</p>
                    <p className='location'>{first}</p>
                </div>
            </div>
    )
}

export default Character;