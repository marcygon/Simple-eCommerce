import Article from "./components/Article.js";
import Header from "./components/Header.js";
import './Style/Style.css'
import Background from "./components/backgrounds.js";
import { useState } from "react";
import Carrito from "./components/Carrito";

function App() {

 const [cantidad, setCantidad] = useState(0)

  const addCantidad = (valor) => {
    setCantidad(valor)
  }
  

  return (
    
    // <Carrito />)
    <body>
      <Header cantidad = {cantidad} />
      <main className="main">
        <h1 id='h1'>Best food in <br/> Barcelona</h1>
        <div className="pizzasdiv">
          <Article cantidad = {cantidad} addCantidad = {addCantidad}/>
        </div>
      <Background />
      </main>
    </body>
  );
}

export default App;
