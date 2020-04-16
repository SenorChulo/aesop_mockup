import React,{Component} from 'react'
import image1 from '../images/handWash.png';
import image2 from '../images/handbalm.png';
import image3 from '../images/oilBurner.png';
import image4 from '../images/deodorizer2.png';
import image5 from '../images/deodorizer.png';

class AromaticProducts extends Component {
    constructor(props){
        super(props)
        this.state={
            products:[
            {
                productName:'Resurrection Aromatique Hand Wash',
                description:'A gentle formulation containing oils of Orange, Rosemary and Lavender to effectively cleanse the hands without drying them out.',
                image:image1
            },
            {
                productName:'Reverence Aromatique Hand Balm',
                description:'A rich, skin-softening balm containing carefully selected emollient ingredients, including Potassium Lactate, to soften the skin and provide sustained hydration.',
                image:image2
            },
            {
                productName:'Béatrice Oil Burner Blend',
                description:'A warm, enlivening blend of earthy and citrus notes to ground spirits and stimulate the senses.',
                image:image3
            },
            {
                productName:'Istros Aromatique Room Spray',
                description:'A union of enlivening florals and Tobacco, Istros stimulates the atmosphere with aromas of the bazaar.',
                image:image4
            },
            {
                productName:'Post-Poo Drops',
                description:'A botanical bathroom deodoriser that effectively neutralises disagreeable smells with crisp notes of citrus peel and discreet florals.',
                image:image5
            }]
        }
    }
    render(){
        return(
            this.state.products.map((product,index)=>{return(
                <React.Fragment>
                    <div className='box'>
                    <img src={product.image} alt="main" width='100%' height='200px'></img>

                    <h3>{product.productName}</h3><caption>{product.description}</caption>
                  <div>
                  </div>                         
                    </div>

                </React.Fragment>
            )})
 

        
         )
    }
}
export default AromaticProducts;