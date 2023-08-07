import Image from "next/image";
import style from "./Navbar.module.scss"
import Link from "next/link";

const Navbar = () => {
    return (
        <>
        <nav className={style.Navbar}>

            <div className={style.icon}>
                <Image
                 src="/assets/images/logobold.jfif"
                 alt=""
                 width={25}
                 height={25}
                />
                <h1>Ortuk</h1>
            </div>

            <div className={style.navButton}>
                <Link href={"/"}>
                    <p>Home</p>
                </Link>
            </div>

        </nav>
        
        </>
    );
}
 
export default Navbar;