import React from 'react';
import Fade from 'react-reveal/Fade'

const Footer = () => {
    return (
        <Fade delay={250}>
            <footer className="bck_darkblue">
            <h3>Hoàng Minh Hải</h3>
        
            <div className="footer_coppyright">
                    <p>Email: haibg1998b@gmail.com</p>
                    <p>SDT: 0336589785</p>
                    <p>Link github: https://github.com/HaiHoangMinh/football-spa</p>
                    <p>@Nocoppyrights</p>
            </div>
            </footer>
        </Fade>
        
    );
};

export default Footer;