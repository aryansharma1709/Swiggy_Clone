import { useRouteError } from "react-router-dom";

function Error(){
    const error =useRouteError();
        return (<>
            <h1>error page</h1>
            <h1> status : {error.status}-{error.statusText}</h1>
            <h1>error: {error.data}</h1>
        </>)
}
export default Error;