import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
    return (
        <section className="md:px-20  max-sm:px-4 container  mt-2 mx-2">
            <div className="flex justify-between items-center w-full mx-2 ">
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
