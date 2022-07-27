import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-lightGray text-diffWhite font-medium rounded-2xl m-5">
            <ul className="flex flex-row space-x-10  p-5 justify-center">
                <li>
                    <Link href="/">
                        <a className="bg-moreLightGray rounded-2xl p-2">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about/me">
                        <a className="bg-moreLightGray rounded-2xl p-2">About Me</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a className="bg-moreLightGray rounded-2xl p-2">Blog posts</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a className="bg-moreLightGray rounded-2xl p-2">Contact</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about/website">
                        <a className="bg-moreLightGray rounded-2xl p-2">About Website</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;