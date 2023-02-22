import pizzas from "./Pizzas"


function Article({cantidad, addCantidad}) {
    
    const products = pizzas.map((item) =>{
        return (
            <article className="article">
                <div>
                    <img src={item.url} alt='' className="pizzaimg"/>
                </div>
                <div className="caja">
                    <h4>{item.name}</h4>
                    <h6>{item.type}</h6>
                    <p>${item.price}</p>
                    <button className="button" id="suma" onClick={()=>addCantidad(cantidad++)}> + </button>
                </div>
            </article>
    )
    })
    return(
        products
    )
}

export default Article