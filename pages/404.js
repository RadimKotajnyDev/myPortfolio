import Link from "next/link";

const NotFound = () => {
    return (
        <div className="text-center m-3 space-y-3">
            <h1 className="text-4xl font-medium">Ooooops...</h1>
            <h1 className="text-5xl font-bold">ERROR 404</h1>
            <h2 className="text-3xl font-normal">This page cannot be found.</h2>
            <p className="text-lg">
                Go back to <Link href="/">
                <a className="hover:text-cyan-700 hover:font-bold underline hover:no-underline">homepage</a>
            </Link>
            </p>
        </div>
    );
}

export default NotFound;