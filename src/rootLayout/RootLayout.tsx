import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import { useEffect, useState } from "react";


const RootLayout = () => {

    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const loadingTime = setTimeout(() => setLoading(false), 4000);
        return () => clearTimeout(loadingTime)
    },[]);


    return ( 
        <>
       
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