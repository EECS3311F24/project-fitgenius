import {Link} from 'react-router-dom'

const Navbar=()=>{ 
    return(
        <nav>
            <div>
            <Link to="/" className='HomeRoute'>Home</Link>
            <Link to="/recommended" className='Recommended'>Recommended</Link>
            <Link to="/plan" className='PlanPageRoute'>Plan Page</Link>
            <Link to="/saved-plans" className='SavedPlansPageRoute'>Saved Plans Page</Link>

            </div>
        </nav>
    )
}
export default Navbar;