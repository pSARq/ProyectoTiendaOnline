import React, { useState, useEffect } from 'react'

function HomePage() {
    const [products, setProducts] = useState([]);
    const numbers = [1, 2, 3, 4, 5];
    //[ <li>1</li>,  <li>2</li>,  <li>3</li>,  <li>4</li>,  <li>5</li>]
    const listItems = numbers.map((number) =>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
    );
    const getProduts = async () => {
        try {
            const response = await fetch("http://localhost:3001/get-products");
            const jsonResponse = await response.json();
            const responseProducts = jsonResponse.data;
            const listProducts = responseProducts.map((product) =>
                <tr>
                    <th scope="row">{product.id}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.description}</td>
                </tr>
            );
            setProducts(listProducts)
        }
        catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getProduts();
    }, []);
    return (
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {products}
                </tbody>
            </table>
        </div>
    )
}

export default HomePage
