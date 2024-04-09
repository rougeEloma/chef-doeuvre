import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import { cards, projects } from "../../datas/data";
import CatCard from "../../components/category-card/CatCard";

const Home = () => {
    return (
        <div className="home">
            <br/><br/><br/>
            <Featured/>
            <TrustedBy/>
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map(card => (
                <CatCard card={card} key={card.id} />
                ))}
            </Slide>
            
        </div>
    )
}

export default Home;