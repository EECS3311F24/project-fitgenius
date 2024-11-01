import { useNavigate } from 'react-router-dom';

function ChestPage() {
    const navigate = useNavigate();

    return(
        <div>
            <h1 className="ChestName">Chest</h1>
            <ul className="ChestList">
                <li>
                    <button onClick={() => navigate("/bench-press")}>Bench Press</button>
                </li>
                <li>
                    <button onClick={() => navigate('cable-crossover')}>Cable Crossover</button>
                </li>
                <li>
                    <button onClick={() => navigate('parallel-bar-dip')}>Parallel Bar Dip</button>
                </li>
                <li>
                    <button onClick={() => navigate('push-up')}>Push Up</button>
                </li>
                <li>
                    <button onClick={() => navigate('plank-rotations')}>Plank Rotations</button>
                </li>
            </ul>
        </div>
    )
}

export default ChestPage;
