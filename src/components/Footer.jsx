import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <a>Copyright © {currentYear}</a>
        </footer>
    );
}

export default Footer;