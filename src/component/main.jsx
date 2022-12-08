import MainCategory from "./category/mainCategory";

const Main = ({props}) => {
    // console.log(props)
    return (
        <>
            <div className='parrent'>           
                    <MainCategory props={props} />
            </div>
        </>
    );
}

export default Main;