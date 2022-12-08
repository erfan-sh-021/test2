import React, { Component } from 'react';
import { addTocart } from '../redux/action';
import cartStore from '../redux/store';
class Card extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    componentDidMount(){
        this.unsubscribe=cartStore.subscribe(()=>{
            console.log(cartStore.getState());
            this.setState( this.props );
        })
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    addtocartHandler(){
        cartStore.dispatch(addTocart(this.props.props))
    }
    
    render() { 
        // const AddButton = document.querySelector('.cardBottom>button');
        // const PayButton = document.querySelector('.payButton ');
        // const Cardd = document.querySelector('.card');
        
        // AddButton.addEventListener(('click'), function () {
        //     AddButton.classList.add('deactive');
        //     PayButton.classList.remove('deactive');
        //     Cardd.classList.add('hover');
        // })
    
        // console.log(AddButton)
        return ( 
            <div className="card "  style={{ width: '25rem', margin: '10px' }}>
            <div className="cardTop">
                <div className="cardLeft">
                    <h5 className="card-title">{this.props.props.foods[0].title}</h5>
                    <p className="card-text overflow-hidden">{this.props.props.foods[0].description}</p>
                </div>
                <div className="cardRight">
                    <img src={this.props.props.foods[0].imageUrl} className="card-img-top" alt="..." />
                </div>
            </div>
            <div className="cardBottom">
                <span>price: ${this.props.props.foods[0].price}</span>
                <button onClick={this.addtocartHandler.bind(this)}  id='cardBottom_1' href="#" className="btn btn-primary " >Add</button>
            </div>
            <div className="payButton deactive">
                <button>-</button>
                <span></span>
                <button>+</button>
            </div>
        </div>
         );
    }
}
 
export default Card;