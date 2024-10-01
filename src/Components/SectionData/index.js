import Statistic from '../Statistic';
import './SectionData.css';

const SectionData = () => {
    return (
        <section className='sectionData'>
            <Statistic imagem='../../img/sentiment_satisfied_24dp_FILL0_wght400_GRAD0_opsz24 1.svg' dado='Personagens: 826' />
            <Statistic imagem='../../img/location_on_24dp_FILL0_wght400_GRAD0_opsz24 1.svg' dado='Localizações: 126' />
            <Statistic imagem='../../img/movie_24dp_FILL0_wght400_GRAD0_opsz24 1.svg' dado='Episódios: 51'/>
        </section>
    )
}

export default SectionData;