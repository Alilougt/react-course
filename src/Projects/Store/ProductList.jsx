import { useState,useEffect } from "react"
import Products from "./Products"
export default function ProductList () {
    const [productList, setProductList] = useState([])
    const [filterdProducts,setFilterdProducts] = useState([])
    const [searchInput,setSearchInput] = useState('')


    const displayProduct = () => {
        return filterdProducts.map((product,key) => {
        return <Products products = {product} key={key}/>})
    }

    const getProducts = () => {
        const products  = fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setProductList(data))
        return products
    }

    useEffect(()=> {
        if(productList.length > 0) {console.log(productList)}
    },[productList])

    useEffect(()=> {
        getProducts()
    },[])

    useEffect(()=> {
        setFilterdProducts(productList)
    },[productList])

    const handleSearch = (e) => {
        e.preventDefault()
        const filter = productList.filter(
            product => product.title.toLowerCase().includes(searchInput))

        setFilterdProducts(filter)
        
        console.log(filter)
    }

    return <div className="container-fluix mx-auto mx-75 my-3">
        <h2>Search: </h2>
        <form>
            <div className="mb-3">
                <label className="form-label">Search</label>
                <input
                    type="text"
                    name=""
                    id=""
                    className="form-control col-auto"
                    placeholder=""
                    aria-describedby="helpId"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </form>
        <h2>Products list: </h2>
        <table className="table">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Desciption</th>
                    <th>Category</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {displayProduct()}
            </tbody>
        </table>
    </div>
}