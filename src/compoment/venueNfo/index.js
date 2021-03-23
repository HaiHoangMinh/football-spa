import React from 'react';
import icon_calendar from '../../resource/images/icons/calendar.png';
import icon_location from '../../resource/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';

const VenueNfo = () => {
    return (
        <div className="bck_black">
                <div className="center_wrapper">
                    <div className="vn_wrapper">
                        
                        
                    <Zoom>
                    <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon"
                                    style={{
                                        background:`url(${icon_calendar})`

                                    }}
                                    
                                    
                                    ></div>
                                    <div className="vn_title"

                                    >
                                        Match & Time
                                    </div>
                                    <div className="vn_desc">
                                        MCI - BAY : 27 April 2021 - 2.45 am
                                        RMA - CHE : 28 April 2021 - 2.45 am
                                        MUN - ROM : 29 April 2021 - 0.45 am
                                        ARS - VIL : 29 April 2021 - 2.45 am
                                    </div>
                                </div>
                            </div>
                        </div>
                                

                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon"
                                    style={{
                                        background:`url(${icon_location})`

                                    }}
                                    
                                    
                                    ></div>
                                    <div className="vn_title"

                                    >
                                        Địa điểm 
                                    </div>
                                    <div className="vn_desc">
                                        Trận 1: Allianz Arena - Etihad
                                        <div></div>
                                        Trận 2: Santiago - Stamford Bridge
                                        <div></div>
                                        Trận 3: Old Trafford - Olimpico
                                        <div></div>
                                        Trận 4:Emirates - El Madrigal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    
                    
                    </div>

                </div>
            
        </div>
    );
};

export default VenueNfo;