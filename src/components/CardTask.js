import React from "react";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';
import {CardContent, CssBaseline, Typography} from "@material-ui/core";

export class CardTask extends React.Component{

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className="layout">
                    <Card>
                        <CardContent>
                            <div className="gridCard">
                                <div>
                                    <Typography variant="h6">
                                        {this.props.info.description} 
                                        {this.props.info.status === 'In Progress' ? <InboxIcon alt="progress"/> : <div/>}
                                        {this.props.info.status === 'Ready' ? <InboxIcon alt="ready"/> : <div/>}
                                        {this.props.info.status === 'Completed' ? <InboxIcon alt="completed"/> : <div/>}
                                    </Typography>
                                </div>
                            </div>
                            <Typography variant="h6">
                                {this.props.info.status} - {new Date(this.props.info.dueDate).toDateString()}
                            </Typography>
                            <Typography variant="h6">
                                {this.props.info.responsible.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </main>
            </React.Fragment>
        );
    }
}