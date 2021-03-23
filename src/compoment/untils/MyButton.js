import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
const MyButton = () => {
    return (
        <Button
            href="https://www.uefa.com/uefachampionsleague/"
            variant="contained"
            size="small"
            style={{
                background:'darkblue',
                color: 'white'
            }}
           
        >
            Link chi tiết
        </Button>
    );
};

export default MyButton;