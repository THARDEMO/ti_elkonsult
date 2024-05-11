import { useNavigate } from "react-router-dom"
import { STATE } from "../../logic/state.js";

function Home() {

    const navigate = useNavigate();

    STATE.Post( 'test', 'hello world');

    return (
        <>
            <div>
                <h1>Ti Elkonsult</h1>
                <p>Hello who am i page osv</p>
            </div>
            <button className="linkBtn" onClick={() => navigate( 'projects')}>Projects</button>

        </>
    )
}


export default Home;