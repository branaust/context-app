import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles'
import Switch from "@material-ui/core/Switch"
import styles from './styles/NavbarStyles'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { ThemeContext } from './contexts/ThemeContext'


class Navbar extends Component {
    static contextType = ThemeContext

    render() {
        const { isDarkMode, toggleTheme } = this.context
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <span>🚩</span>
                        </IconButton>
                        <Typography variant="h6" className={classes.title} color='inherit'>
                            App Title
                        </Typography>
                        <Switch onChange={toggleTheme} />
                        < div className={classes.grow} />
                        <div className={classes.search} >
                            <div className={classes.searchIcon} >
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }} />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

}


export default withStyles(styles)(Navbar)