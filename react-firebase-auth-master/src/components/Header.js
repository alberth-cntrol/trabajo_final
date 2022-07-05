import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { FaAtlassian } from "react-icons/fa";



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',

    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',

    },
    icon: {
        color: '#e07924',
        fontSize: '2rem',
    },
    //cambio aca
    colorText: {
        color: '#e07924',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#e07924',
        fontSize: '4rem',
    },
    buttonMostrar:{
        color:'#e07924',

    },
}));

export function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.colorText}>
                        <FaAtlassian />
                    </h1>

                    <h1 className={classes.appbarTitle}>

                        Digital<span className={classes.colorText}>Lockeed.</span>
                    </h1>

                </Toolbar>
            </AppBar>

            <Collapse in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Bienvenido a <br /> Digital
                        <span className={classes.colorText}>Lockeed.</span>
                    </h1>
                    <div>
                        <button
                            className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black" style={{backgroundColor:'#e07924'}}>
                            <Link to="/mostrar" style={{ textDecoration: 'none', color: '#fff' }} >
                                Ver Registro
                            </Link>
                        </button>
                    </div>

                    <Scroll to='place-to-visit' smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown}></ExpandMoreIcon>
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
}