import { useNavigate } from "react-router-dom"
import { STATE } from '../../logic/state.js'

import ProjectList from "./projectlist";

export function ProjectPage() {

    const navigation = useNavigate();

    console.log( STATE.Get('test'));

    return (
        <>
            <div>
                <h1>Projects</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet repudiandae quae commodi, quod laborum! Iste minima at est quaerat rerum accusamus ducimus, dolore aut. Ad non amet provident assumenda!</p>
            </div>
            <button onClick={()=>navigation(-1)}>back</button>
            <ProjectList />
        </>
    )
}


export default ProjectPage;