import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = ()=>{
    return(
        <div>
            <div>PageNotFound</div>
            <Link to='/'>Go home</Link>
        </div>
    )
}
export default PageNotFound;