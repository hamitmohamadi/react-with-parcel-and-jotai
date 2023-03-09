import {useAtom} from "jotai";
import {loggedInUser} from "../stores/stores";

const ComponentC = () => {
    const [user,] = useAtom(loggedInUser);
    return (
        <>
            <h1>Component C</h1>
            <div>You are logged in as
                <strong>{user.fullName}</strong>
            </div>
        </>
    )
}
export default ComponentC;