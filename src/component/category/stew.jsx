import Card from "../card"


const Stew = ({props}) => {
    const filterData = props.map((post,index) => {
        console.log(post.categoryTitle)
        if (post.categoryTitle === 'Stew') {
            return (
                <Card props={post} index={index}/>
            )
        }else(
            console.log('not find')
        )
    })

    return (
        <>
        <div className="row">
            {filterData}
        </div>
        </>
    );
}

export default Stew;