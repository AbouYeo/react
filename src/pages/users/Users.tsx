import { useState } from "react";
import RadioShow from "../../components/RadioShow";
import SearchBar from "../../components/SearchBar";
import UsersAsGrid from "../../components/UsersAsGrid";
import UsersAsTable from "../../components/UsersAsTable";
import USERS_DATA from "../../utils/Data";

const USERS = USERS_DATA.USERS_DATA;

function Users() {
    const [showTable, setShowTable] = useState(true);
    const [users, setUsers] = useState(USERS);

    const handleChange = (value: string) => {
        setShowTable(value == "tableau");
    };

    const handleInput = (value: string) => {
        console.log("handleInput appelé");
        const FILTERED_USERS = USERS.filter((user) => {
            return (
                user.firstName.toLowerCase().includes(value.toLowerCase()) ||
                user.lastName.toLowerCase().includes(value.toLowerCase())
            );
        });

        setUsers(FILTERED_USERS);
        console.log(FILTERED_USERS);
    };

    return (
        <>
            <RadioShow onChange={handleChange} showTable={showTable} />

            <SearchBar onChange={handleInput} />
            <div>
                {showTable ? (
                    <UsersAsTable users={users} />
                ) : (
                    <div className="grid gap-4  md:grid-cols-2 ">
                        <UsersAsGrid users={users} />
                    </div>
                )}
            </div>
        </>
    );
}

export default Users;
