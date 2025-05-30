import DbConnection from "../config/connection";
import seedUsers from "./userSeeders";

DbConnection().then(() => {
    seedUsers();
})