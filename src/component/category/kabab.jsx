import '../../css/card.css';
import Card from '../card';
const Kabab = ({props}) => {
    const filterData = props.map((post,index) => {
        if (post.categoryTitle === 'Kebab') {
            
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

export default Kabab;