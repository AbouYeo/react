import { useState } from "react";
import "./App.css";
import RadioShow from "./components/RadioShow";
import UsersAsGrid from "./pages/users/users_as_grid/UsersAsGrid";
import UsersAsTable from "./pages/users/users_as_table/UsersAsTable";
import USERS_DATA from "./utils/Data";

const USERS = USERS_DATA.USERS_DATA;

function App() {
    const [showTable, setShowTable] = useState(true);

    const handleChange = (value: string) => {
        setShowTable(value == "tableau");
    };

    return (
        <>
            <RadioShow onChange={handleChange} showTable={showTable} />
            <section className="md:px-20  px-4 container mx-auto">
                {showTable ? (
                    <UsersAsTable users={USERS} />
                ) : (
                    <div className="grid gap-4  md:grid-cols-2 ">
                        <UsersAsGrid users={USERS} />
                    </div>
                )}
            </section>
        </>
    );
}

export default App;
