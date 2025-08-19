import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
    return (
        <section className="md:px-20  px-4 container mx-auto">
            <div>
                <Link to="/">LES NOUVELLES VIES</Link>
                <nav>
                    <Link to="/login"> Se connecter</Link>
                    <Link to="/about"> About</Link>
                    <Link to="/users"> Users</Link>
                </nav>
            </div>

            <Outlet />
        </section>
    );
}

export default App;
