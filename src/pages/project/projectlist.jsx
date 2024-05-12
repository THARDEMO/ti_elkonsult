import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const ProjectList = () => {

    const projects = ['Malmö-hjälp', 'Sweco-beskiktning'];
    const elements = [];

    for( const project of projects) {
        
        elements.push( 
            <li key={uuid()}>
                <Link to={`/projects/${project}`}>{project}</Link>
            </li>
        );
    }

    return <ul>{elements}</ul>;

}

export default ProjectList;