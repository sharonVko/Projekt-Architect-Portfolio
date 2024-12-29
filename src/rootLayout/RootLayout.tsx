import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import { useEffect, useState } from "react";


const RootLayout = () => {

    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const loadingTime = setTimeout(() => setLoading(false), 4000); /* setting to false after 4 seconds */
        return () => clearTimeout(loadingTime); /* deleting timeout */
    },[]);


    return ( 
        <>
       {/* show loader when state true, else show content */}
        {loading? (
        <Loader/>
        ):(
        <>
        <Header/>
        <main>
        <Outlet/>
        </main>
        <Footer/>
        </>
    )}
        </>
     );
}
 
export default RootLayout;