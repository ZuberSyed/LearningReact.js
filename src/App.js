import React from "react"
import ProductsData from "./ProductsData"
import productitems from "./productitems"
import "./style.css"

function App(){
    const dataitems = productitems.map(item => <ProductsData 
                                                    key={item.id}
                                                    items={item}
                                                    /*We can also write:
                                                        name={item.name}
                                                         price={item.price}
                                                         description={item.description}*/
                                                />)
    return(<div className="products">
        {dataitems}
    </div>)
}


export default App