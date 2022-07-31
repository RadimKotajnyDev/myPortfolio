import Link from "next/link";
import {motion} from "framer-motion";

//TODO: fix gray space sizing around nav buttons

const aClasses = "bg-diffGray rounded-2xl p-2 hover:bg-opacity-50 duration-500 hover:text-white";

const Navbar = () => {
    const NavList = ({children}) => {
        return (
            <motion.li whileHover={{ scale:1.25 }} >
                {children}
            </motion.li>
        );
    }
    return (
        <div>
            <motion.div
                animate={{ scale:1, opacity:1 }}
                initial={{ scale:.5, opacity:0 }}
                transition={{ duration: 1 }}
            >
                <nav className="bg-lightGray drop-shadow-2xl
                    text-diffWhite font-medium rounded-3xl m-5 mx-[500px] mb-10">
                    <ul className="flex flex-row space-x-10 p-5 justify-center">
                        <NavList>
                            <Link href="/">
                                <a className={aClasses}>Home</a>
                            </Link>
                        </NavList>
                        <NavList>
                            <Link href="/about/me">
                                <a className={aClasses}>About me</a>
                            </Link>
                        </NavList>
                        <NavList>
                            <Link href="/blog">
                                <a className={aClasses}>Blog posts</a>
                            </Link>
                        </NavList>
                        <NavList>
                            <Link href="/contact">
                                <a className={aClasses}>Contact</a>
                            </Link>
                        </NavList>
                        <NavList>
                            <Link href="/about/website">
                                <a className={aClasses}>About website</a>
                            </Link>
                        </NavList>
                    </ul>
                </nav>
            </motion.div>
        </div>
    );
}

export default Navbar;