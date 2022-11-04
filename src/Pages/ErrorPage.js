import {useState} from "react";

function ErrorPage(){

    const breakSomething=()=> {
       setErrorProne(null);

    }
    const [errorProne,setErrorProne]=useState({breakMe:"Click to Break Me"});


    return(
    <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
            <h1 className="display-1 fw-bold">Error Tester</h1>
            <p className="fs-3"> {errorProne.breakMe}.</p>
            <button className={"btn btn-warning"} onClick={breakSomething}> Break Me</button>

        </div>
    </div>)
}

export default  ErrorPage;
