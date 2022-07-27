import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-darkGray text-diffWhite flex flex-col h-screen text-center">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;