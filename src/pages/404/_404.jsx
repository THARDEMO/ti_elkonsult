import './_404.css'
import { Link } from 'react-router-dom'; 

const _404 = () => {
    
    return ( 
        <div id='_404-grid' className="gridContainer">

            <div style={{animationDelay:'0ms'}} className='_404Div'>
                <h1><em>404</em></h1>
            </div>

            <div style={{animationDelay:'0ms'}} className='vertical-aligned'>
                <h2 >This page does not exist</h2>
            </div>

            <div style={{animationDelay:'0ms'}}></div>

            <div style={{animationDelay:'0ms'}} className='resourceDiv'>
                <Link className='internal-link' to={'/'}>Återvänd →</Link>
            </div>
        </div>
     );

}

export default _404;