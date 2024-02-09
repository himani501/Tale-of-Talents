import React from "react";
import {Navbar} from "../Components/Navbar";
import {Introduction} from "./Introduction";
import Footer from '../Components/Footer';
export const Home = () => {
    return (
        <div>
            <Navbar/>
            <Introduction/>
            <Footer/>
        </div>
    )
}