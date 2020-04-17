import React from 'react';
import OpenNav from './openNav'
import CloseNav from './closeNav'

function Products() {
    return(
        <React.Fragment>
            <div class = "container" id="myContainer">
                <a href="javascript:void(0)" class="closebtn" onClick={CloseNav}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
            </div>

            <button onClick={OpenNav}>open</button>
            <div id="main">

            </div>
            <OpenNav/>
            <CloseNav/>
        </React.Fragment>
    )
}

export default Products;