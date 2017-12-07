import React from 'react';
import MenuItem from './MenuItem';

export default class MenuPage extends React.Component {
    render() {
        return(
            <div className="bg-light py-2">
                <h1 className="my-2 text-center selection-1">T h e  &nbsp; <span class="udon-red">S e l e c t i o n</span></h1>
                <h3 className="text-center selection-2">Noodles for every occasion</h3>
                <div className="container d-flex flex-wrap justify-content-center">

                    <MenuItem udonClass="udon-title-1" soupName="Soup Udon" japaneseName="かけうどん"
                        descr="Udon noodles served hot in our original dashi broth with sliced green onions and grated fresh ginger. Vegetarian broth also available."
                        src="freshudon1.png" alt="udon1"/>
                    <MenuItem udonClass="udon-title-2" soupName="Sauce Udon" japaneseName="ぶっかけうどん"
                        descr="Udon noodles served hot or chilled and lightly dressed with our dashi-shoyu sauce, sliced green onions, fresh grated ginger and Ten-kasu."
                        src="freshudon2.png" alt="udon2"/>
                    <MenuItem udonClass="udon-title-3" soupName="Zaru Udon" japaneseName="ざるうどん"
                        descr="Udon noodles served chilled with a frangrant soy dipping sauce, sliced green onion, grated fresh ginger, Ten-kasu and wasabi (upon request) to add to your dipping sauce."
                        src="freshudon3.png" alt="udon3"/>
                    <MenuItem udonClass="udon-title-4" soupName="On-tama Udon" japaneseName="温玉ぶっかけうどん"
                        descr="Udon noodles served hot or chilled and lightly dressed with our dashi-shoyu sauce, an On-tama (hot spring egg), sliced green onion and grated fresh ginger."
                        src="freshudon4.png" alt="udon4"/>        
                    <MenuItem udonClass="udon-title-5" soupName="Oroshi Udon" japaneseName="おろしぶっかけうどん"
                        descr="Udon noodles served hot or chilled with generous helpings of grated daikon radish, our dashi-shoyu sauce, sliced green   onions, grated fresh ginger and a lemon wedge for squeezing."
                        src="freshudon5.png" alt="udon5"/>
                    <MenuItem udonClass="udon-title-6" soupName="Niku Udon" japaneseName="肉うどん"
                        descr="Udon noodles served as soup or sauce noodles with sukiyaki braised beef, onions, sliced green onions and grated fresh ginger."
                        src="freshudon6.png" alt="udon6"/>
                    <MenuItem udonClass="udon-title-7" soupName="Kitsune Udon" japaneseName="きつねうどん"
                        descr="Udon noodles served hot with our extra thick fried and marinated tofu (Atsu-age), sliced green onions &amp; grated fresh ginger."
                        src="freshudon7.png" alt="udon7"/>
                    <MenuItem udonClass="udon-title-8" soupName="Curry Udon" japaneseName="カレーうどん"
                        descr="Udon noodles served in our spicy Japanese curry dashi soup with beef, onions, and sliced green onions."
                        src="freshudon8.png" alt="udon8"/>
                    <MenuItem udonClass="udon-title-9" soupName="Tan Tan Udon" japaneseName="担々うどん"
                        descr="Udon noodles served hot or chilled, topped with our spicy Tan Tan pork and sliced green onions."
                        src="freshudon9.png" alt="udon9"/>
                    <MenuItem udonClass="udon-title-10" soupName="Ume Niku Oroshi" japaneseName="梅肉おろしうどん"
                        descr="Udon noodles served with sukiyaki braised beef, topped with sliced green onions, grated fresh ginger and minced pickled umeboshi plum."
                        src="freshudon10.png" alt="udon10"/>   
                    <MenuItem udonClass="udon-title-11" soupName="Goma Zaru Udon" japaneseName="ごま笊うどん"
                        descr="Chilled fresh udon noodles served on a zaru mat with our signature sesame dipping sauce and sliced green onions on the side. Have it with or without chili oil."
                        src="freshudon11.png" alt="udon11"/>   
                    <MenuItem udonClass="udon-title-12" soupName="Tan Tan Goma Zaru" japaneseName="担々ごま笊うどん"
                        descr="Chilled fresh udon noodles served on a zaru mat with our signature sesame dipping sauce, sliced green onions, and a spicy Tan Tan pork on the side. For the spicy food lovers!"
                        src="freshudon12.png" alt="udon12"/>  
                </div>
            </div>
        );
    }
}