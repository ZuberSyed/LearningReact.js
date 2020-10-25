import React from "react"
import "./style.css"

function ProductsData(props){
        return (
        <div>
            <h4>{props.items.name}</h4>
            <h5>{props.items.price.toLocaleString("en-IN",{style:"currency",currency:"INR"})}</h5>
            <p>{props.items.description}</p>
            <hr/>
        </div>
            )
}
export default ProductsData