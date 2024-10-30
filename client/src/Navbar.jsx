import {Link} from 'react-router-dom'

const Navbar=()=>{ 
    return(
        <nav>
            <div>
            <Link to="/" className='HomeRoute'>Home</Link>
            <Link to="/recommended" className='Recommended'>Recommended</Link>
            </div>
        </nav>
    )
}
export default Navbar;