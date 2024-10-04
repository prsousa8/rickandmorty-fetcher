import './Characters.css'
import Character from "../../Components/Character";
import Title from "../../Components/Title";
import { useEffect, useState } from "react";

const Characters = () => {
    const [numberPages, setNumberPages] = useState(0);
    const [count, setCount] = useState(1);
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = (pageNumber) => {
        fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setNumberPages(data.info.pages);
            })
            .catch(error => console.error('Erro ao carregar os personagens:', error));
    };

    useEffect(() => {
        fetchCharacters(count);
    }, [count]);


    return (
        <main>
            <Title titulo="Conheça os personagens do Universo de Rick e Morty!" />
            <section className="characters-principal">
                <div className='botaopage'>
                    <p>Página</p>
                    <button onClick={() => setCount(count - 1)} disabled={count === 1}>
                        <img src='../../img/icons8-menos-50 1.svg' />
                    </button>
                    <p>{count}</p>
                    <button onClick={() => setCount(count + 1)} disabled={count === numberPages} >
                        <img src='../../img/icons8-circled-plus.svg' /> 
                    </button>
                </div>
                <div className='characters'>
                    {characters.map(character => (
                        <Character imagem={character.image} descricao={character.name} nome={character.name} estado={character.status} especie={character.species} last={character.location.name} first={character.origin.name} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Characters;