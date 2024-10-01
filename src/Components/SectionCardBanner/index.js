import CardBanner from '../CardBanner';
import './SectionCardBanner.css'

const SectionCardBanner = () => {
    return (
        <section className='cards-banner'>
                <CardBanner imagem="../../img/Ellipse1.png" descricao='Conheça os personagens'/>
                <CardBanner imagem="../../img/Ellipse 2.png" descricao='Mergulhe nesse Universo'/>
            <CardBanner imagem="../../img/Ellipse 3.png" descricao='Desfrute das histórias' />
        </section>
    )
}

export default SectionCardBanner;