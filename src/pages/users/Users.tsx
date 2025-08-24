import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import RadioShow from "../../components/RadioShow";
import SearchBar from "../../components/SearchBar";
import UsersAsGrid from "../../components/UsersAsGrid";
import UsersAsTable from "../../components/UsersAsTable";
import USERS_DATA from "../../utils/Data";

const USERS = USERS_DATA;

function Users() {
    const [showTable, setShowTable] = useState(true);
    const [users, setUsers] = useState(USERS);
    const [filterOrder, setFilterOrder] = useState(0);

    const handleChange = (value: string) => {
        setShowTable(value == "tableau");
    };

    const handleSearch = (value: string) => {
        const FILTERED_USERS = USERS.filter((user) => {
            return (
                user.firstName.toLowerCase().includes(value.toLowerCase()) ||
                user.lastName.toLowerCase().includes(value.toLowerCase())
            );
        });

        setUsers(FILTERED_USERS);
    };

    //Gestion du filtrage des utilisateurs selon differents critères
    const handleFilterUsers = (value: number) => {
        setFilterOrder(value);
        let usersFiltered;
        switch (value) {
            //Filtrer les hommes d´abord
            case 1:
                usersFiltered = [...users].sort((user1, user2) => {
                    if (user1.gender == "male" && user2.gender !== "male") {
                        return -1;
                    }
                    if (user1.gender != "male" && user2.gender == "male") {
                        return 1;
                    } else {
                        return 0;
                    }
                });
                setUsers(usersFiltered);
                break;
            //Filtrer les femmes d´abord
            case 2:
                usersFiltered = [...users].sort((user1, user2) => {
                    if (user1.gender == "female" && user2.gender !== "female") {
                        return -1;
                    }
                    if (user1.gender != "female" && user2.gender == "female") {
                        return 1;
                    } else {
                        return 0;
                    }
                });
                setUsers(usersFiltered);
                break;
            //Filtrer par age croissant
            case 3:
                usersFiltered = [...users].sort(
                    (user1, user2) => user1.age - user2.age
                );
                setUsers(usersFiltered);
                break;
            //Filtrer par age décroissant
            case 4:
                usersFiltered = [...users].sort(
                    (user1, user2) => user2.age - user1.age
                );
                setUsers(usersFiltered);
                break;
            //Filtrer par l´alphabet A-Z
            case 5:
                usersFiltered = [...users].sort((user1, user2) =>
                    user1.firstName.localeCompare(user2.firstName)
                );
                setUsers(usersFiltered);
                break;
            //Filtrer par l´alphabet Z-A
            case 6:
                usersFiltered = [...users].sort((user1, user2) =>
                    user2.firstName.localeCompare(user1.firstName)
                );
                setUsers(usersFiltered);
                break;
        }
    };

    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <>
            <RadioShow onChange={handleChange} showTable={showTable} />

            <SearchBar
                filterOrder={filterOrder}
                onSearch={handleSearch}
                onFilter={handleFilterUsers}
            />
            <div>
                {isMobile ? (
                    <div className="grid gap-4  md:grid-cols-2 ">
                        <UsersAsGrid users={users} />
                    </div>
                ) : showTable ? (
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
