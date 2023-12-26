import { useRouteError } from "react-router-dom"

const Error = () => {

    const err = useRouteError();
    return (
        <div>
            <h1>Oops!!</h1>
            <p>Something is wrong</p>


        </div>
    )
}
export default Error