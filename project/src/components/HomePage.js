import React from 'react';
import {Link} from 'react-router-dom'; 
import constants from './constants';

export default class HomePage extends React.Component {
    render() {
        return(
            <div className="container align-items-center">
                <h2>Fresh Japanese Udon Noodles in Seattle!</h2>
                <p><strong>U<span className="udon-red">:D</span>on Fresh Japanese Noodle Station</strong> is a pair of Seattle restaurants specializing in serving fresh, house-made udon noodles cooked to order and delivered in a fast, entertaining, and interactive fashion. Our guests can watch the udon noodles being made, as they customize their meal with freshly prepared toppings and sides to their preference.</p>
                <div className="udon-red menu-header" style={{lineHeight: 40 + "px"}}>Come experience <strong style={{color: "black"}}>U<span className="udon-red">:D</span>on</strong>‘s new Capitol Hill location!</div>
                <div style={{fontWeight: "normal", fontSize:15.5 + "px"}}>Celebrate the <span className="udon-red"><strong>Grand Opening</strong></span> of our second amazing udon restaurant experience, right in the heart of Seattle’s Capitol Hill. Near the corner of 12th and E Pine streets, in the new 12th Avenue Arts Building, we’re excited to show off an <span className="udon-red"><strong>expanded menu</strong></span> that includes <span className="udon-red"><strong>new and unique udon noodle styles</strong></span> and side items, along with all our signature and most popular dishes served at our flagship U-District store. <span className="udon-red"><strong>Plus beer and sake!</strong></span> How tasty does that sound, Seattle? See you there, and bring your appetite!</div>
                <div className="udon-red menu-header" style={{lineHeight: 40 + "px"}}><strong style={{color: "black"}}>U<span className="udon-red">:D</span>on</strong> Business Hours:</div>
                <span style={{fontWeight:"normal",fontSize:16 + "px"}}><strong>Our <span className="udon-red">NEW</span> Capitol Hill location:</strong>
                    <ul className="hours-list">
                        <li><strong>Monday – Saturday</strong>: 11:30am – 10:00pm</li>
                        <li><strong>Sunday</strong>: 11:30am – 9:30pm</li>
                    </ul>
                    <strong>University District location:</strong>
                    <ul className="hours-list">
                        <li><strong>Sunday – Thursday</strong>: 11:30am – 9:30pm</li>
                        <li><strong>Friday &amp; Saturday</strong>: 11:30am – 10:00pm</li>
                    </ul>
                    <strong><span className="udon-red">Holiday hours</span> at both locations:</strong>
                    <ul className="hours-list">
                        <li><strong>Thanksgiving Day (11/23)</strong>: Closed all day</li>
                        <li><strong>Black Friday (11/24)</strong>: Closed all day</li>
                        <li><strong>Christmas Eve (12/24)</strong>: 11:30am – 8:30pm</li>
                        <li><strong>Christmas Day (12/25)</strong>: Closed all day</li>
                        <li><strong>New Years Day (1/1)</strong>: Closed all day</li>
                    </ul>
                </span>
                <Link to={constants.routes.menu}>View our <span class="udon-red">Menu!</span></Link>
                <div className="udon-red">Taste our amazing noodle specials at <strong style={{color: "black"}}>U<span className="udon-red">:D</span>on</strong>!</div>
                <div style={{fontWeight: "normal", fontSize: 15.5 + "px"}}>Try our hand-made Sanuki udon in two new chilled styles for a little variety.</div>
                <div className="specials" style={{fontSize: 16 + "px"}}>Goma Zaru Udon</div>
                {/* <img src={https://udonseattle.files.wordpress.com/2013/06/menu-goma-zaru.png?w=640}> */}
                <div style={{fontSize: 14 + "px", lineHeight: 16 + "px", fontWeight: "normal"}}>Chilled fresh udon noodles served on a zaru mat with our signature sesame dipping sauce and sliced green onions on the side. Have it with or without <span class="udon-red">chili oil</span>!</div>
                <div className="specials" style={{fontSize: 16 + "px"}}>Tan Tan Goma Zaru Udon</div>
                {/* <img src="https://udonseattle.files.wordpress.com/2013/06/menu-tan-tan-goma-zaru-2.png?w=640"> */}
                <div style={{fontSize: 14 + "px", lineHeight: 16 + "px", fontWeight: "normal"}}><span class="udon-red">For the spicy food lovers!</span> Chilled fresh udon noodles served on a zaru mat with our signature sesame dipping sauce, sliced green onions, and a spicy Tan Tan pork on the side.</div>
            </div>
        );
    }
}