import Link from "next/link"


const NavBar = () => {
  return (
    <div className="header">
      <h1>Curso NEXTJs <span>Data Users</span></h1>
      <nav className="nav">
        <Link className="link" href="/">Home</Link>
        <Link className="link" href="/about">About</Link>
        <Link className="link" href="/posts">Posts</Link>
      </nav>
    </div>
  )
}

export default NavBar