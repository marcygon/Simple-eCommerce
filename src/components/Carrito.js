import React from 'react'
import '../Style/CarritoStyle.css'
// import { FaShoppingBasket, FaAngleLeft, FaPaypal } from 'react-icons/fa'

function Carrito() {
  return (
    <div className='carrito'>
        <header className='headerCarrito'>
            <nav id='menuCarrito'>
                {/* <FaAngleLeft className='iconsMenu'/> */}
                <h3 id='tituloCarrito'>Shopping Cart</h3>
                {/* <FaShoppingBasket className='iconsMenu' /> */}
                {/* añadir boton con la cantidad de productos*/}
            </nav>
        </header>
        <main>
            <div className='productsCart'>
                <div className='itemsCart'>
                    <div className='imgItemCart'>

                    </div>
                    <div className='infoItemCart'>
                        <h5 className='itemNameCart'>pizza 1</h5>
                        <p className='itemTypeCart'>barbacoa</p>
                        <h6 className='itemPriceCart'>5.00</h6>
                    </div>
                    <div className='itemQuantity'>
                        <button id='lessItems'>-</button>
                        <input id='totalItems' type='text' value='0'></input>
                        <button id='moreItems'>+</button>
                    </div>
                </div>
                <div className='footerCart'>
                    <div className='discountCart'>
                        <button className='btn' id='discount'>Discount Code</button>
                        <button className='btn' id='totalPriceCart'>Total 5.00</button>
                    </div>
                    <div className='paymentCart'>
                        <button className='btn2' id='checkout'>Checkout</button>
                        {/* <button className='btn2' id='paypal'>Checkout with <FaPaypal /> Paypal</button> */}
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Carrito