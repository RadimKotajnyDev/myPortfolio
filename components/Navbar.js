import Link from "next/link";
import {motion} from "framer-motion";

const Navbar = () => {
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
                        <li>
                            <Link href="/">
                                <a className="bg-diffGray rounded-2xl p-2 hover:bg-opacity-50
                        duration-500 hover:text-white">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about/me">
                                <a className="bg-diffGray rounded-2xl p-2 hover:bg-opacity-50
                        duration-500 hover:text-white">About me</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a className="bg-diffGray rounded-2xl p-2 hover:bg-opacity-50
                        duration-500 hover:text-white">Blog posts</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a className="bg-diffGray rounded-2xl p-2 hover:bg-opacity-50
                        duration-500 hover:text-white">Contact</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about/website">
                                <a className="bg-diffGray rounded-2xl p-2 hover:bg-opacity-50
                        duration-500 hover:text-white">About website</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </motion.div>
        </div>
    );
}

export default Navbar;