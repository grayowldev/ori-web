import Link from "next/link";
import Image from "next/image";


export default function SideNavbar() {
    return(
        <nav className='side-navbar'>
            <div className="logo">
                <Link href={"/"}>
                    <Image
                        src="/logo2.png"
                        width={90}
                        height={100}
                        alt="logo"/>
                </Link>
            </div>

            <div>
                <Link href="/" className={"nav-link"}>
                    Dashboard
                </Link>
            </div>
            <div>
                <Link href="/inventory" className={"nav-link"}>Inventory</Link>
            </div>
            <div>
                <Link href="/ordering" className={"nav-link"}>Ordering</Link>
            </div>
            <div>
                <Link href="/branch" className={"nav-link"}>Branches</Link>
            </div>
            <div>
                <Link href="/bin" className={"nav-link"}>Bins</Link>
            </div>
            <div>
                <Link href="/settings" className={"nav-link"}>Settings</Link>
            </div>

        </nav>
    )
}
