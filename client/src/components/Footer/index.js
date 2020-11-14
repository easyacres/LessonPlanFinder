import React from 'react';
import "./Footer.css";
import { NavbarBrand, Navbar, Container} from "react-bootstrap"

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="row">

                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p> </p>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p className="foot">Contact Us</p>
                        <p>(770)777-7777</p>
                        <p>LessonPlanner@gmail.com</p>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    </div>

                </div>
            </Container>

            <footer className="subFooter">
            <h6>Made with <i className="far fa-heart"></i> by LessonPlanner</h6>
            </footer>
        </footer>



    );
}
export default Footer;

//FOR STICKY FOOTER

// function Footer() {
   
//         return(
//             <div className="fixed-bottom">  
//                 <Navbar color="dark" dark>
//                     <Container>
//                         <NavbarBrand>Footer</NavbarBrand>
//                     </Container>
//                 </Navbar>
//             </div>
//         )
// }
// export default Footer