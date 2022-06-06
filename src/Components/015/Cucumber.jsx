import { Link, Outlet } from "react-router-dom";
function Cucumber() {

    return (
        <>
            <h1>Cucumber</h1>
            <div className="links">
                <Link to="green">Green Bridge</Link>
                <Link to="pink">Pink Bridge</Link>
                <Link to="crimson">Crimson Bridge</Link>
            </div>
            <div className="kvadratas">
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default Cucumber;