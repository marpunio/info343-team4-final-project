import React from 'react';


export default class MenuPage extends React.Component {
    render() {
        return(
            <div className="container-1">
                <h1 colspan="4" align="center" className="menu-header" style={{paddingBottom: 15 + "px"}}>PICK YOUR FAVORITE <span className="udon-red">NOODLE!</span></h1>
                <div className="udon-title-1">Soup Udon
                    <div className="menu-japanese col-md-6">かけうどん</div>
                    <p className="menu-desc">Udon noodles served hot in our original dashi broth with sliced green onions and grated fresh ginger. Vegetarian broth also available.</p>
                    <img src="freshudon1.png" alt="udon1"/>
                </div>
                <div className="udon-title-2">Sauce Udon
                    <div className="menu-japanese col-md-6">ぶっかけうどん</div>
                    <div className="menu-desc">Udon noodles served hot or chilled and lightly dressed with our dashi-shoyu sauce, sliced green onions, fresh grated ginger and Ten-kasu.</div>
                    <img src="freshudon2.png" alt="udon2"/>
                </div>
                <div className="udon-title-3">Zaru Udon
                    <div className="menu-japanese">ざるうどん</div>
                    <div className="menu-desc">Udon noodles served chilled with a frangrant soy dipping sauce, sliced green onion, grated fresh ginger, Ten-kasu and wasabi (upon request) to add to your dipping sauce.</div>
                    <img src="freshudon3.png" alt="udon3"/>
                </div>
                <div className="udon-title-4">On-tama Udon
                    <div className="menu-japanese">温玉ぶっかけうどん</div>
                    <div className="menu-desc">Udon noodles served hot or chilled and lightly dressed with our dashi-shoyu sauce, an On-tama (hot spring egg), sliced green onion and grated fresh ginger.</div>
                    <img src="freshudon4.png" alt="udon4"/>
                </div>
                <div className="udon-title-5">Oroshi Udon</div>
                    <div className="menu-japanese">おろしぶっかけうどん</div>
                    <div className="menu-desc">Udon noodles served hot or chilled with generous helpings of grated daikon radish, our dashi-shoyu sauce, sliced green	onions, grated fresh ginger and a lemon wedge for squeezing.</div>
                    <img src="freshudon5.png" alt="udon5"/>
                <div className="udon-title-6">Niku Udon
                    <div className="menu-japanese">肉うどん</div>
                    <div className="menu-desc">Udon noodles served as soup or sauce noodles with sukiyaki braised beef, onions, sliced green onions and grated fresh ginger.</div>
                    <img src="freshudon6.png" alt="udon6"/>
                </div>
                <div className="udon-title-7">Kitsune Udon
                    <div className="menu-japanese">きつねうどん</div>
                    <div className="menu-desc">Udon noodles served hot with our extra thick fried and marinated tofu (Atsu-age), sliced green onions &amp; grated fresh ginger.</div>
                    <img src="freshudon7.png" alt="udon7"/>
                </div>
                <div className="udon-title-8">Curry Udon
                    <div className="menu-japanese">カレーうどん</div>
                    <div className="menu-desc">Udon noodles served in our spicy Japanese curry dashi soup with beef, onions, and sliced green onions.</div>
                    <img src="freshudon8.png" alt="udon8"/>
                </div>
                <div className="udon-title-9">Tan Tan Udon
                    <div className="menu-japanese">担々うどん</div>
                    <div className="menu-desc">Udon noodles served hot or chilled, topped with our spicy Tan Tan pork and sliced green onions.</div>
                    <img src="freshudon9.png" alt="udon9"/>
                </div>
                <div className="udon-title-10">Ume Niku Oroshi
                    <div className="menu-japanese">梅肉おろしうどん</div>
                    <div className="menu-desc">Udon noodles served with sukiyaki braised beef, topped with sliced green onions, grated fresh ginger and minced pickled umeboshi plum.</div>
                    <img src ="freshudon10.png" alt="udon10" />
                </div>
                <div className="udon-title-11">Goma Zaru Udon
                    <div className="menu-japanese">ごま笊うどん</div>
                    <div className="menu-desc">Chilled fresh udon noodles served on a zaru mat with our signature sesame dipping sauce and sliced green onions on the side. Have it with or without chili oil.</div>
                    <img src="freshudon11.png" alt="udon11"/>
                </div>
                <div className="udon-title-12">Tan Tan Goma Zaru
                    <div className="menu-japanese">担々ごま笊うどん</div>
                    <div className="menu-desc">Chilled fresh udon noodles served on a zaru mat with our signature sesame dipping sauce, sliced green onions, and a spicy Tan Tan pork on the side. For the spicy food lovers!</div>
                    <img src="freshudon12.png" alt="udon12"/>
                </div>
                <h2 colspan="4" align="center" className="menu-header" style={{paddingBottom: 15 + "px"}}>ADD YOUR FAVORITE<span className="udon-red"> TOPPINGS &amp; SIDES!</span></h2>
                    <div className="container">
                        <div class>Tempura</div>
                    </div>
            </div>
        );
    }
}