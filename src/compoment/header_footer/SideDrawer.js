import React from 'react';
import {scroller} from 'react-scroll'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { element } from 'prop-types';


const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -170
        });
    }

     return (
        
        <Drawer
        anchor="right"
        open={props.open}
        onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=> scrollToElement('feature')}>
                    Thời gian coutdown
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('venue UFOs')}>
                    Chi tiết trận đấu
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('hightlights')}>
                    Thông tin giảm giá
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('pricing')}>
                    Thông tin vé
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('location')}>
                    Trụ sở mua vé
                </ListItem>

                

            </List>
        </Drawer>
    );
};

export default SideDrawer;