import { useNavigate } from 'react-router-dom';


/**This component renders a navigation interface that allows users to 
 * navigate back to different exercise-related pages in the application.  */
function ArmPage() {
    const navigate = useNavigate();

    return(
        <div>
            <h1 className="ArmName">Arm</h1>
            <ul className="ArmList">
                <li>
                <button className="exercise-button" onClick={() => navigate("/hammer-curl")}>Hammer Curl</button>
                </li>
                <li>
                    <button className="exercise-button" onClick={() => navigate("/bicep-curl")}>Bicep Curl</button>
                </li>
                <li>
                    <button className="exercise-button" onClick={() => navigate("/tricep-dips")}>Tricep Dips</button>
                </li>
                <li>
                    <button className="exercise-button" onClick={() => navigate("/overhead-tricep-extension")}>Overhead Tricep Extension</button>
                </li>
            </ul>
        </div>
    )
}

export default ArmPage;
