import React, {FunctionComponent} from 'react'
import { Link } from 'react-router-dom';

const Products:FunctionComponent = () => {
        return(
           <>
            <div>
                this is Products page
            </div>
            <Link to="/">go to DashBoard</Link>
           </>
        )
}

export default Products;