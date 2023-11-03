import NavBar from "@/components/Navbar";
import { Users } from "@/components/Users";

const fetchUser = async () => {
    const res = await fetch('https://reqres.in/api/users');
    const dataUser = await res.json();
    return (dataUser.data);

}

const HomePage = async () => {
    const users = await fetchUser();
    return (
        <>
            <Users users={users} />
        </>
    )
}

export default HomePage