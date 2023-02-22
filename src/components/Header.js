// import { FaInbox, FaAlignRight} from 'react-icons/fa';

function Header({cantidad}) {
    return (
    <header className="header">
        <h1 id='vitto'>Pizzeria<br></br>Don Vito</h1>
        <nav >
            {/* <FaInbox className='icon'/> */}
            <button id='contador'>{cantidad}</button>
            {/* <FaAlignRight className='icon'/> */}
        </nav>
    </header>
)
}

export default Header