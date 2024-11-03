import { useNavigate } from 'react-router-dom';

function BackPage() {
    const navigate = useNavigate();

    return(
        <div>
            <h1 className="BackName">Back</h1>
            <ul className="BackList">
                <li>
                    <button onClick={() => navigate("/row")}>Row</button>
                </li>
                <li>
                    <button onClick={() => navigate("/deadlift")}>Deadlift</button>
                </li>
                <li>
                    <button onClick={() => navigate("/seated-cable-rows")}>Seated Cable Rows</button>
                </li>
                <li>
                    <button onClick={() => navigate("/dumbell-row")}>Dumbell Row</button>
                </li>
                <li>
                    <button onClick={() => navigate("/arm-leg-raise")}>Arm Leg Raise</button>
                </li>
            </ul>
        </div>
    )
}

export default BackPage;
