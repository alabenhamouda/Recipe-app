import React, {Component} from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList';
import Navbar from './Navbar';

export default class RecipeApp extends Component {
    render() {
        return (
            <div>
                <header><Navbar /></header>
                <RecipeList
                recipes={[
                    {
                        title: 'Spaguett',
                        ingredients: ['spaguet', 'sauce'],
                        img: "https://i.imgur.com/HNQ0QZz.png",
                        instructions: "Make a spaguet then eat it."
                    },
                    {
                        title: 'Lasagna',
                        img: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Best-Lasagna_exps36333__TH133086D07_23_6b_RMS-1-696x696.jpg",
                        ingredients: ["9 lasagna noodles", "3/4 pound ground beef", "1 medium onion, diced"],
                        instructions: 'Cook noodles according to package directions; drain. Meanwhile, in a Dutch oven, cook sausage, beef and onion over medium heat 8-10 minutes or until meat is no longer pink, breaking up meat into crumbles. Add garlic; cook 1 minute. Drain.'
                    },
                    {
                        img: "https://images.media-allrecipes.com/userphotos/720x405/4684123.jpg",
                        title: "soup",
                        ingredients: ["3 tablespoons butter", "1 large onion, diced"],
                        instructions: "just don't do soup, testes like shit lol."
                    },
                    {
                        img: "https://images.media-allrecipes.com/userphotos/720x405/4684123.jpg",
                        title: "soup",
                        ingredients: ["3 tablespoons butter", "1 large onion, diced"],
                        instructions: "just don't do soup, testes like shit lol."
                    }
                ]}
                />
            </div>
        )
    }
}