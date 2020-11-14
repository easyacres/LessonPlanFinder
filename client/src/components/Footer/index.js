import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div class="container">
                <div class="row">

                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p> </p>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p class="foot">Contact Us</p>
                        <p>(770)777-7777</p>
                        <p>LessonPlanner@gmail.com</p>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">

                    </div>

                </div>
            </div>

            <footer className="subFooter">
            <h6>Made with <i class="far fa-heart"></i> by LessonPlanner</h6>
            </footer>
        </footer>



    );
}
export default Footer;