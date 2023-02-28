import Grid from '@mui/material/Grid';
import Productcards from "./Productcards";
import styles from './Card.module.css'


const cards = [
    { id: 1, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 3, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 4, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 5, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 6, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 7, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 8, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 9, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 9", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

export default function SearchedProduct() {

    const width = {
        width: "100%"
    }
    return (

        <div className="row">
            {cards.map((card) => (
                <div className="col-md-12" key={card.id}>
                    <Productcards
                        imageUrl={card.imageUrl}
                        title={card.title}
                        description={card.description}
                    />
                </div>
            ))}
        </div>


    );
}