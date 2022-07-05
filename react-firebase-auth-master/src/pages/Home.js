import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import { Header } from "../components/Header";
import PlaceToVisit from "../components/PlaceToVisit";


const useStyles = makeStyles((theme)=>({
  root:{
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/funciona.jpg'})`,
   
    
    //backgroundColor: '#23394d',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}));
export  function Home(){
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <CssBaseline/>
      <Header />
      <PlaceToVisit/>
    </div>
  )
}