import { Outlet } from "react-router-dom";
// import Card from "./card";
import Nav from "./nav";
import Payment from "./payment/payment";
const FirstLayout = ({props}) => {
    // console.log(props)
    return (
        <>
            <div className='parrent'>
                <div className="left">
                    <Nav />
                    <Outlet />
                </div>
                <div className="right">
                    <div className="payment">
                        <Payment props={props}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FirstLayout;