import React, { Component } from 'react';
import DailyBottle from './client/images/staple_products/DailyBottle.png';
import DailySoap from './client/images/daily_products/DailySoap.png';
import DailyScrub from './client/images/daily_products/DailyScrub.png';


export default class Dailycleanse extends Component {
    render() {
        return (
            <div>
                <DailyBottle />
                <h5>Reverence Aromatique Hand Wash</h5>
                <p>Woody, earthy, smoky aroma</p>

                <DailySoap />
                <h5>Body Cleansing Slab</h5>
                <p>Enriched with Bergamot Rind, Tahitian</p>

                <DailyScrub />
                <h5>Redemption Body Scrub</h5>
                <p>Bamboo Stem and Pumice, to polish skin</p>

                <p><strong>For hands and body</strong></p>

                <h3>Daily cleansing</h3>

                <p>Ensure impeccable hygiene with our range of mild yet efficacious formulations </p>


            </div>

        )
    }
}
