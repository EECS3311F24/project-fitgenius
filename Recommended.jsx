import Leg from './Leg.jpeg'
import {Link} from 'react-router-dom'
import Chest from './Chest.jpeg'
import Arm from './Arm.jpeg'
import Back from './Back.jpeg'

function Recommended(){
    return (
        
    <div className="exercise-grid">
    <div className="exercise">
        <h2>Leg</h2>
        <Link to="/leg">
            <img src={Leg} className="PhotoLeg" alt="Leg"/>
        </Link>
    </div>

    <div className="exercise">
        <h2>Chest</h2>
        <Link to="/chest">
            <img src={Chest} className="PhotoChest" alt="Chest"/>
        </Link>
    </div>

    <div className="exercise">
        <h2>Arm</h2>
        <Link to="/arm">
            <img src={Arm} className="PhotoArm" alt="Arm"/>
        </Link>
    </div>

    <div className="exercise">
        <h2>Back</h2>
        <Link to="/back">
            <img src={Back} className="PhotoBack" alt="Back"/>
        </Link>
    </div>
</div>
    )
    
}
export default Recommended