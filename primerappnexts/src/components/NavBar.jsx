import Link from "next/link"

const NavBar = () => {
  return (
    <div>
        <h1>Navbar</h1>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            
        </ul>
    </div>
  )
}

export default NavBar