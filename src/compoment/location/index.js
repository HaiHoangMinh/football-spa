import React from 'react';

const Location = () => {
    return ( <
        div className = "location_wrapper" >

        <
        iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44036.779816199596!2d6.203955655285444!3d46.383299655240315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c432f772f0867%3A0x6fb7d41a1241af47!2zTnlvbiwgVGjhu6V5IFPEqQ!5e0!3m2!1svi!2s!4v1616517844353!5m2!1svi!2s"
        width = "100%"
        height = "500px"
        frameBorder = "0"
        allowFullScreen = "" > < /iframe>

        <
        div className = "location_tag" >
         <
        /div>

        <
        /div>
    );
};

export default Location;