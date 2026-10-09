import { useEffect, useState } from "react";

function Products({ goHome }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("https://dummyjson.com/products?limit=8")
            .then(response => response.json())
            .then(data => setProducts(data.products));

    }, []);

    return (

        <div className="page">

            <button className="back" onClick={goHome}>
                ← Back
            </button>

            <h1>🛍️ Product Catalog</h1>

            <div className="data-grid">

                {products.map(product => (

                    <div className="data-card" key={product.id}>

                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />

                        <h2>{product.title}</h2>

                        <p>{product.description}</p>

                        <h3>₹{product.price}</h3>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Products;