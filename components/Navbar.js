import Link from "next/link";
import {motion} from "framer-motion";

//TODO: shrink code with props
//TODO: fix gray space sizing around nav buttons


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
                        <motion.li whileHover={{ scale:1.25 }}>
                            <Link href="/">
                                <a className="bg-diffGray rounded-2xl p-2 hover:bg-opacity-50
                        duration-500 hover:text-white">Home</a>
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ scale:1.25 }}>
                            <Link href="/about/me">
                                <a className="bg-diffGray rounded-2xl p-2 hover:bg-opacity-50
                        duration-500 hover:text-white">About me</a>
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ scale:1.25 }}>
                            <Link href="/blog">
                                <a className="bg-diffGray rounded-2xl p-2 hover:bg-opacity-50
                        duration-500 hover:text-white">Blog posts</a>
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ scale:1.25 }}>
                            <Link href="/contact">
                                <a className="bg-diffGray rounded-2xl p-2 hover:bg-opacity-50
                        duration-500 hover:text-white">Contact</a>
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ scale:1.25 }}>
                            <Link href="/about/website">
                                <a className="bg-diffGray rounded-2xl p-2 hover:bg-opacity-50
                        duration-500 hover:text-white">About website</a>
                            </Link>
                        </motion.li>
                    </ul>
                </nav>
            </motion.div>
        </div>
    );
}

export default Navbar;