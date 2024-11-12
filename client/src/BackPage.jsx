import { useNavigate } from 'react-router-dom';

/**This component renders a navigation interface that allows users to 
 * navigate back to different exercise-related pages in the application.  */
function BackPage() {
    const navigate = useNavigate();

    return(
        <div>
            <h1 className="BackName">Back</h1>
            <ul className="BackList">
                <li>
                    <button className="exercise-button" onClick={() => navigate("/row")}>Row</button>
                </li>
                <li>
                    <button className="exercise-button" onClick={() => navigate("/deadlift")}>Deadlift</button>
                </li>
                <li>
                    <button className="exercise-button" onClick={() => navigate("/seated-cable-rows")}>Seated Cable Rows</button>
                </li>
                <li>
                    <button className="exercise-button" onClick={() => navigate("/dumbell-row")}>Dumbbell Row</button>
                </li>
                <li>
                    <button className="exercise-button" onClick={() => navigate("/arm-leg-raise")}>Arm Leg Raise</button>
                </li>
            </ul>
        </div>
    )
}

export default BackPage;
