import React from "react";
import {CardTask} from "./CardTask";
import {ListItem, Drawer, Divider, CssBaseline, Toolbar} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Link from "@material-ui/core/Link";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({}));

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    }

    state = {
        open: false,
        task: [
            {
                "description": "Implement Login view",
                "responsible": {
                    "name": "Carlos Castañeda",
                    "email": "admin@gmail.co"
                },
                "status": "In Progress",
                "dueDate": new Date()
            },
            {
                "description": "Implement Login controller ",
                "responsible": {
                    "name": "Carlos Castañeda",
                    "email": "admin@gmail.co"
                },
                "status": "Ready",
                "dueDate": new Date()
            },
            {
                "description": "Facebook Integration",
                "responsible": {
                    "name": "Carlos Castañeda",
                    "email": "admin@gmail.co"
                },
                "status": "Completed",
                "dueDate": new Date()
            }
        ]
    };

    render() {
        const {classes} = this.props;
        const Buttonstyle = {         
            position: "fixed",
            bottom: "30px",
            right:"30px"  
        }; 
        const fistyle = {         
            position: "absolute",
            top: "10px",
            right:"30px"  
        }; 
        return (
            <div>
                <CssBaseline/>
                <AppBar position="fixed" color="primary">
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton onClick={this.handleDrawerOpen} color="inherit" aria-label="Menu" >
                            <MenuIcon/>
                        </IconButton>
                    </Toolbar>

                    <IconButton style={fistyle} href="/FilterTask"><MoreVertIcon/></IconButton>
                  
                </AppBar>
                <Fab color="secondary" aria-label="add" style={Buttonstyle} href="/NewTask">
                    <AddIcon/>
                </Fab> 
                <br/><br/><br/>
                <Drawer open={this.state.open} variant="persistent" anchor="left">
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <div className={classes.list}>
                        <List>
                            <ListItem>
                                <AssignmentIndOutlinedIcon />
                                <ListItemText primary="Carlos Castaneda" secondary="Admin" />
                            </ListItem>
                        </List>
                        <div className="right">
                            <PermIdentityOutlinedIcon alt="edit"/>
                        </div>
                    </div>
                    <Divider/>
                    <div className="bottom">
                        <MeetingRoomOutlinedIcon alt="logout"/>
                        <Link href="./">Logout</Link>
                    </div>
                </Drawer>
                <main className={classNames(classes.content,{[classes.contentShift]: this.state.open})}>
                    <div />
                    {this.state.task.map(task => {
                        return (<CardTask info={task}/>);
                    })}
                </main>

            </div>
        );
    }

    handleDrawerOpen() {
        this.setState({
            open: true
        });
    };

    handleDrawerClose() {
        this.setState({
            open: false
        });
    };
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(useStyles, {withTheme: true})(Home);