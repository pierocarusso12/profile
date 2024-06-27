import ReactDOM from "react-dom";
import React from 'react';
import { Navbar } from "./Navbar";
import {Home} from "./Home";
import {About} from "./About"
import {Services} from "./Services"
import {Work} from "./Work"
import {Testimonial} from "./Testimonial";
import {Contact} from "./Contact";  
import {Footer} from "./Footer"
import 'remixicon/fonts/remixicon.css';
import "../src/index.css";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
      <React.Fragment>
        <Navbar />
        <Home />
        <About/>
        <Services/>
        <Work/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      </React.Fragment>
    );


