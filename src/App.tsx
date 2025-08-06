import "./App.css";
import Users from "./pages/Users";
import USERS_DATA from "./utils/Data";

const USERS = USERS_DATA.USERS_DATA;

function App() {
    return (
        <section className="grid md:grid-cols-2 gap-4 container-sm">
            <Users users={USERS} />
        </section>

        // <table className="users-table mx-auto md:text-base ms:text-sx container-sm bg-gray-400 ">
        //     <thead>
        //         <th className="border-3 md:p-2"> FirstName</th>
        //         <th className="border-3 md:p-2">Last Name</th>
        //         <th className="border-3 md:p-2">Phone</th>
        //         <th className="border-3 md:p-2">Email</th>
        //         <th className="border-3 md:p-2">Company</th>
        //     </thead>
        //     <tbody>
        //         <Users users={USERS} />
        //     </tbody>
        // </table>
    );
}

export default App;
