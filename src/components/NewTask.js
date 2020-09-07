import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Avatar from '@material-ui/core/Avatar';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./style.css"

export default function NewTask() {
    return (
    <React.Fragment>
        <CssBaseline />
        <main className="layout">
            <Paper className="paper">
                <Typography variant="h2">New Task</Typography>
                <Avatar className="avatar">
                    <InboxIcon />
                </Avatar>
                <FormControl margin="normal" fullWidth>
                    <InputLabel>Description</InputLabel>
                    <Input id="description" name="description" autoComplete="description" />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel>Responsible</InputLabel>
                    <Input id="responsible" name="responsible" autoComplete="responsible" />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel>Status (Ready/In Progress/Completed)</InputLabel>
                    <Input id="status" name="status" autoComplete="status" />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel>Due Date (date picker)</InputLabel>
                    <Input id="date" name="date" autoComplete="date" />
                </FormControl>
                <br/>
                <br/>
                <Button type="submit" variant="contained" color="primary">
                    Add
                </Button>
            </Paper>
        </main>
    </React.Fragment>
    );
  }