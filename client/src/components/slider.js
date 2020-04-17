import React from 'react';

function Products() {
    return(
        <React.Fragment>
            <div class = "container" id="myContainer">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
            </div>

            <span onclick="openNav()">open</span>
            <div id="main">

            </div>
        </React.Fragment>
    )
}

export default Products;