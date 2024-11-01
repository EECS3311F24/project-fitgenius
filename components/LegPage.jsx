
import { useNavigate } from 'react-router-dom';

function LegPage(){
  const navigate = useNavigate();
  
  return(
      <div >
          <h1 className="LegName">Leg</h1>
          <ul className="LegList">
              <li>
              <button onClick={() => navigate("leg-press")}>Leg Press</button>
                </li>
              <li>
              <button onClick={() => navigate("bulgarian-split-squat")}>Bulgarian Split Squat</button>
                </li>
              <li>
              <button onClick={() => navigate("front-squat")}>Front Squat</button>
                </li>
              <li>
              <button onClick={() => navigate("leg-extension")}>Leg Extension</button>
                </li>
          </ul>

      </div>
  )

}
export default LegPage;