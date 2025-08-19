import { useState } from "react";
import RadioShow from "../../components/RadioShow";
import UsersAsGrid from "../../components/UsersAsGrid";
import UsersAsTable from "../../components/UsersAsTable";
import USERS_DATA from "../../utils/Data";

const USERS = USERS_DATA.USERS_DATA;

function Users() {
    const [showTable, setShowTable] = useState(true);

    const handleChange = (value: string) => {
        setShowTable(value == "tableau");
    };
    return (
        <>
            <RadioShow onChange={handleChange} showTable={showTable} />
            <div>
                {showTable ? (
                    <UsersAsTable users={USERS} />
                ) : (
                    <div className="grid gap-4  md:grid-cols-2 ">
                        <UsersAsGrid users={USERS} />
                    </div>
                )}
            </div>
        </>
    );
}

export default Users;
