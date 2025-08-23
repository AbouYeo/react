import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
    return (
        <section className="md:px-20  px-4 container mx-auto mt-2">
            <div className="flex justify-between items-center">
                <Link
                    className=" border rounded py-1.5 px-3 shadow-2xl text-2xl"
                    to="/"
                >
                    LES NOUVELLES VIES
                </Link>
                <nav className="flex justify-between gap-4">
                    <Link
                        className="hover:bg-zinc-500 px-4 py-1.5 rounded"
                        to="/login"
                    >
                        {" "}
                        Se connecter
                    </Link>
                    <Link
                        className="hover:bg-zinc-500 px-4 py-1.5 rounded"
                        to="/about"
                    >
                        {" "}
                        About
                    </Link>
                    <Link
                        className="hover:bg-zinc-500 px-4 py-1.5 rounded"
                        to="/users"
                    >
                        {" "}
                        Users
                    </Link>
                </nav>
            </div>

            <Outlet />
        </section>
    );
}

export default App;
