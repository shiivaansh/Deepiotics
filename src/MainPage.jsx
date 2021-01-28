import React, { useState, useRef } from "react";
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import PropTypes from "prop-types";
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Navbar1 from './Navbar1';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import MiniNav from "./MiniNav";
const MainPage = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 250,
        top: 35,
        color: "blue",
      },
      '& .MuiInputBase-input': {
        color:'red',
      },
      '&. .MuiInput-root':{
          color:'red',
      },
      '&. .MuiFormHelperText-root':{
          color:'blue',
      },
    },
    
  }));
  const classes = useStyles();
  

  
  const [image, setImage] = useState("");
  const inputFile = useRef(null);

  const handleFileUpload = e => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;

      var parts = filename.split(".");
      const fileType = parts[parts.length - 1];
      console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.

      setImage(files[0]);
    }
  };

  const onButtonClick = () => {
    inputFile.current.click();
    var  x= document.getElementById("upload");
    document.getElementById("one").src = "img/logo.png"
  
  };
  
  
  return (
    <>
    <Navbar1/>
      <div className='form-container'>
        
       <div className='form-content-left'>
         <MiniNav/>
          {/* <img className='form-img' src='img/white.png' alt='lungs' id='one' /> */}
        </div>
    <div className='form-content-right'>
    <h4>
          Please add the following details!
        </h4>
      <form className={classes.root} noValidate autoComplete="off">
      
      <div>
        <TextField  defaultValue="" helperText="Pateint's Name" />
        <TextField
        //   error
        //   id="standard-error-helper-text"
        //   label="Error"
          defaultValue=""
         
          helperText=" Age"
        />
      </div>
      <div>
        <TextField
         helperText="Sex"
          defaultValue=""
        //   variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          helperText="Symptoms"
          multiline
          rows={2}
          defaultValue=""
          variant="filled"
        />
      </div>
      {/* <Button onClick={this.handleFileSelect} color="primary" aria-label="upload picture" component="span" margin-left= "90px">
          <PhotoCamera />
        </Button> */}
         <input
        style={{ display: "none" }}
        // accept=".zip,.rar"
        ref={inputFile}
        id='upload'
        onChange={handleFileUpload}
        type="file"
      />
        <a className="form-input-btn" href="" onClick={onButtonClick}>Select files</a>
        <h4><></></h4>
      <a href='/MainPage' className='form-input-btn' type='submit'>
          Submit Report
        </a>
      
    </form>
  

    </div>
    </div>
    </>
  );
};

export default MainPage;