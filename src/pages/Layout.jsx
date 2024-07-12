import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import Home from './Home';

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar />
                <Home />
            <Footer />
        </ScrollToTop>
    )
}

export default Layout;