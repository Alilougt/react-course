export default function Fruit({fruits}) {
    const fruitsList = fruits.map((fruit) => {
        return (<li>{fruit}</li>)
    })
    return(<>
    <h2 className="heading-one">List of Fruits</h2>
    <ul>
        {fruitsList}
    </ul>
    </>)
}