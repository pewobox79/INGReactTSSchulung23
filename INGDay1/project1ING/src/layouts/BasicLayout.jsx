import Header from "../components/Header";
import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
export default function BasicLayout({ children }) {
    return (
        <div >
            <Header />
            <main style={{ minHeight: "100vh" }}>
                {children}
            </main>
            <Footer />
        </div>
    )
}