import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import "./style.css"

export default function Register(){
    return (
        <React.Fragment>
            <CssBaseline />
            <main className="layout">
                <Paper className="paper">
                    <Typography variant="h2">Register</Typography>
                    <Avatar className="avatar">
                        <LockIcon />
                    </Avatar>
                    <form className="form">
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">username</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">password</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                autoFocus
                            />
                        </FormControl>
                        <br/>
                        <br/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                        >
                            Create
                        </Button>
                        <br/>
                        <br/>
                        <Link href="./login" variant="body2"> Back </Link>
                    </form>
                </Paper>
            </main>
        </React.Fragment>
    );
}