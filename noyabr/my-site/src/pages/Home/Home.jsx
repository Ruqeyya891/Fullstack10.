import Hero from '../../components/Hero';
import ImageCard from '../../components/ImageCard';
import TextImageSection from '../../components/TextImageSection';
import TestimonialCard from '../../components/TestimonialCard'
import CtaSection from '../../components/CtaSection'
import './Home.css'

const cards = [
    {
        image: 'public/images/card1.png',
        title: 'Subtitle',
        text: 'Body text for whatever you would like to add more to the subtitle.'
    },
    {
        image: 'public/images/card2.png',
        title: 'Subtitle',
        text: 'Body text for whatever you would like to expand on the main topic.'
    },
    {
        image: 'public/images/card3.png',
        title: 'Subtitle',
        text: 'Body text for whatever you would like to share additionally.'
    },
]

const items = [
    { title: 'Subtitle', text: 'Body text for whatever you would like to expand on the main topic.' },
    { title: 'Subtitle', text: 'Body text for whatever you would like to say. Add key points and quotes.' },
    { title: 'Subtitle', text: 'Body text for whatever you would like to add more to the main point.' },
]

const wideCards = [
    { image: 'public/images/card4.png', title: 'Subtitle', text: 'Body text for whatever you would like to add more to the subtitle.' },
    { image: 'public/images/card5.png', title: 'Subtitle', text: 'Body text for whatever you would like to expand on the main topic.' },
]

const reviews = [
    { quote: '"A magnificent praise"', avatar: 'public/images/avatar1.png', name: 'Name', role: 'Description' },
    { quote: '"A fantastic comment"', avatar: 'public/images/avatar2.png', name: 'Name', role: 'Description' },
    { quote: '"An enthusiastic review"', avatar: 'public/images/avatar3.png', name: 'Name', role: 'Description' },
]

export default function Home() {
    return (
        <>
            <Hero
                title="Título de la página de inicio"
                text="Subtítulo que establece el contexto, comparte más información sobre el sitio web o, en general, motiva a la gente a seguir navegando. "
                buttonText="Button"
                image="public/images/hero.png"
            />

            <section className="section container">
                <h2>Encabezado de sección</h2>
                <div className="grid grid-3">
                    {cards.map((c, i) => <ImageCard key={i} {...c} />)}
                </div>
            </section>

            <TextImageSection heading="Section heading" items={items} image="public/images/split.png" />

            <section className="section container">
                <h2>Encabezado de sección</h2>
                <div className="grid grid-2">
                    {wideCards.map((c, i) => <ImageCard key={i} wide {...c} />)}
                </div>
            </section>

            <section className="section container">
                <h2>Encabezado de sección</h2>
                <div className="grid grid-3">
                    {reviews.map((r, i) => <TestimonialCard key={i} {...r} />)}
                </div>
            </section>

            <CtaSection heading="Section heading" />
        </>
    )
}