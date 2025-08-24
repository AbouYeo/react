import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
    return (
        <section className=" container  mt-2 mx-1  md:mx-auto">
            <div className="flex justify-between items-center  ">
                <Link
                    className=" border rounded py-1 px-2 shadow-xl text-xs "
                    to="/"
                >
                    LES NOUVELLES VIES
                </Link>
                <nav className="flex justify-between gap-4">
                    <Link
                        className="hover:bg-zinc-500 px-2 py-1 rounded "
                        to="/login"
                    >
                        {" "}
                        Se connecter
                    </Link>
                    <Link
                        className="hover:bg-zinc-500 px-2 py-1 rounded "
                        to="/about"
                    >
                        {" "}
                        About
                    </Link>
                    <Link
                        className="hover:bg-zinc-500 px-2 py-1 rounded "
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
