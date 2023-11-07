
import Link from "next/link"
/**
 * Este es componente servidor
 */
export const Users = ({ users }) => {
    return (
        <ul className="container-user" >

            {users.map((user) => (
                <Link className="link" href={`/users/${user.id}`} key={user.id} >
                    <div className="container-user">
                        <div className="li-user">
                            <img className='imagen' src={user.avatar} alt="" />
                            <div className="info">
                                <h2> {user.id} {user.first_name}  {user.last_name}</h2>
                                <p>Email : <span> {user.email} </span></p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </ul >
    )
}
