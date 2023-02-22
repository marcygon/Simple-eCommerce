import albaca from './imgs/albaca.png'
import tomate from './imgs/tomate.png'
import romero from './imgs/romero.png'


function Background() {
    return (
    <div className='fondos'>
        <img src={albaca} alt='albaca' id='albaca'/>
        <img src={tomate} alt='tomate' id='tomate'/>
        <img src={romero} alt='romero' id='romero'/>
    </div>
)
}

export default Background