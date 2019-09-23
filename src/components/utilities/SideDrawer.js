import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    
    return (

        <Drawer anchor="left" open={props.open} onClose={()=>props.onClose(false)}>
           
            <List component="nav">

                <ListItem button style={{ color:"@dark-font",fontSize:"1.2rem",
                                        fontFamily:"@main-font",textTransform:"capitalize",
                                        fontWeight:"600",padding:"1.5rem 2.5rem"}}>
                    dogs
                </ListItem>

                <ListItem button style={{ color:"@dark-font",fontSize:"1.2rem",
                                        fontFamily:"@main-font",textTransform:"capitalize",
                                        fontWeight:"600",padding:"1.5rem 2.5rem"}}>
                    articles
                </ListItem>

                <ListItem button style={{ color:"@dark-font",fontSize:"1.2rem",
                                        fontFamily:"@main-font",textTransform:"capitalize",
                                        fontWeight:"600",padding:"1.5rem 2.5rem"}}>
                    about
                </ListItem>

                <ListItem button style={{ color:"@dark-font",fontSize:"1.2rem",
                                        fontFamily:"@main-font",textTransform:"capitalize",
                                        fontWeight:"600",padding:"1.5rem 2.5rem"}}>
                contact
                </ListItem>

            </List>

        </Drawer>
    );
};

export default SideDrawer;