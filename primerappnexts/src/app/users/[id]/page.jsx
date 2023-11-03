 
import Link from "next/link";

const GetUser = async (id) => {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const dataUser = await res.json();
    return (dataUser.data);

}
const UserPage = async ({ params }) => {
const datoUser = await GetUser(params.id);

    return (
        <>
            <div className="container-user-id">
                <div className="info">
                    <h1>{datoUser.first_name} {datoUser.last_name}</h1>
                    <p>{datoUser.email}</p>
                </div>
                <img className='imagen' src={datoUser.avatar} alt="" />
            </div>
           
        </>
    )
}
export default UserPage