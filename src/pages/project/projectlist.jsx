import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const ProjectList = () => {

    const projects = ['Malmö-hjälp', 'Sweco-beskiktning'];
    const elements = [];

    for( const project of projects) {
        
        elements.push( 
            <li key={uuidv4()}>
                <Link to={`/projects/${project}`}>{project}</Link>
            </li>
        );
    }

    return <ul>{elements}</ul>;

}

export default ProjectList;