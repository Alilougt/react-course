export default function Products(products) {
    return <>
        <tr>
            <td>{products.products.id}</td>
            <td>{products.products.title}</td>
            <td>P{products.products.price}</td>
            <td>{products.products.description}</td>
            <td>{products.products.category}</td>
            <td> <img src={products.products.image} alt={products.products.title} width={250}/> </td> 

        </tr>        
    </>
}