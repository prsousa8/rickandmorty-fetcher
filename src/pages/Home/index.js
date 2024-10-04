import Banner from '../../Components/Banner';
import Contact from '../../Components/Contact';
import History from '../../Components/History';
import SectionCardBanner from '../../Components/SectionCardBanner';
import SectionData from '../../Components/SectionData';
import './Home.css';

const Home = () => {
    return (
        <>
        <main>
            <Banner />
            <SectionCardBanner />
            <History
                imagem='../../img/5164749-Photoroom 1.png'
                titulo='Como começou...'
                descricao='A série foi inspirada por uma paródia animada de "De Volta para o Futuro", criada por Roiland, chamada "The Real Animated Adventures of Doc and Mharti". Dan Harmon ficou impressionado com o trabalho de Roiland e os dois se uniram para desenvolver "Rick and Morty". Harmon trouxe sua experiência como criador de "Community", enquanto Roiland trouxe seu estilo de humor e animação.'
            />
            <History
                imagem='../../img/rick-and-morty-portal-gun-hd-wallpaper-uhdpaper 1.png'
                titulo='Piloto...'
                descricao='No episódio piloto, Rick arrasta Morty para uma aventura perigosa em outra dimensão para coletar sementes de "Mega Trees". Isso estabelece o tom da série, mostrando o relacionamento caótico e às vezes abusivo entre Rick e Morty, bem como a natureza bizarra e imprevisível das aventuras que eles enfrentam.'
            />
            <SectionData />
            <Contact />
            </main>
            </>
    )
}

export default Home;