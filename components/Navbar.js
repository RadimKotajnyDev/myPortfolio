import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about/me">
                        <a>About Me</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a>Blog Post</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about/website">
                        <a>About Website</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}


export default Navbar;