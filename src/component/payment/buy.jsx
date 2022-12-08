import '../../css/buy.css'
import { addTocart } from '../../redux/action';
import cartStore from '../../redux/store';
const Buy = () => {
    const Order = document.querySelector('.Orderr');
    const OrderButton = document.querySelector('.orderButton>button');
    const ErrorMessage = document.querySelector('.errorMessage');
    const CancelButton = document.getElementById('.errorMessage');


    const clickHandler = () => {
        ErrorMessage.classList.remove('deactive')
    }
    const errorHandler =()=>{
        ErrorMessage.classList.add('deactive')
        
    }
    const AddToCartHandler = ()=>{
        cartStore.dispatch(addTocart(this.state))
    }
    return (
        <>
            <div className="Orderr">
                <div className="orderButton ">
                    <button onClick={clickHandler}>order</button>
                </div>
                <div className="errorMessage deactive">
                    <div className="topCard">
                        <h4>Are you certain about your request?</h4>
                    </div>
                    <div className="bottomCard">
                        <button id='Cancel' onClick={errorHandler}>Cancel</button>
                        <button onClick={AddToCartHandler} id='Confirm'>Confirm</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Buy;