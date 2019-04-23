import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import uuid from 'uuid';


const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET
const CLOUDINARY_UPLOAD_URL = process.env.CLOUDINARY_UPLOAD_URL

export default class ManagerForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: '',
            title: "",
            category: "current",
            description: "",
            img_url: '',
            imgSrc: null
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onImageDrop = this.onImageDrop.bind(this);
        this.clearForm = this.clearForm.bind(this);
        
    }


    

    onImageDrop(files){
        this.setState({
            uploadedFile: files[0]
        })
        const currentFile = files[0]
        const myFileItemReader = new FileReader()
        myFileItemReader.addEventListener("load", () => {
            this.setState({
                imgSrc: myFileItemReader.result
            })
        }, false)
        myFileItemReader.readAsDataURL(currentFile)
    }

    handleSubmit(event){
        event.preventDefault();

        let title = this.state.title 
        let description = this.state.description
        let category = this.state.category
        
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', this.state.uploadedFile);
            upload.end((err, response) => {
                if (err){
                    console.log(err)
                }
                if (response.body.secure_url !== '') {
                    this.setState({
                        img_url: response.body.secure_url
                    
                    })
                    let img_url = this.state.img_url
                    
                
                    if(category === "current"){
            
                        fetch(`https://joanne-hall-art-api.herokuapp.com/current/input`,{
                            method: 'post',
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({title, description, img_url})
                        })
                        .then(response => {return response.json();})
                        .then(responseData=> {console.log (responseData)
                            return responseData})
                        .catch(err => {
                            console.log("Fetch error" + err)
                        })
                    } else if(category === "past"){
                        
            
                        fetch(`https://joanne-hall-art-api.herokuapp.com/past/input`,{
                            method: 'post',
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({title, description, img_url})
                        })
                        .then(response => {return response.json();})
                        .then(responseData=> {console.log (responseData)
                            return responseData})
                        .catch(err => {
                            console.log("Fetch error" + err)
                        })
                    }else{
                        console.log("fetch error")
                    }
                }
            })
        this.clearForm()
    }

    clearForm(){
        this.setState({
            uploadedFile: null,
            uploadedFileCloudinaryUrl: '',
            title: "",
            category: "current",
            description: "",
            img_url: '',
            imgSrc: null
        })
    }

    
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

    render() {
        const {imgSrc} = this.state
        return (
            <div className="upload-form-wrapper">
                <h1>New Post</h1>
                <form onSubmit={this.handleSubmit} className="upload-form">
                    <input
                        className="upload-element"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <input
                        className="upload-element"
                        type="text"
                        name="description"
                        placeholder="Description"
                        
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <select
                        className="upload-select"
                        name="category"
                        vlaue={this.state.category}
                        onChange={this.handleChange}
                    >
                        <option value="current">Current</option>
                        <option value="past">Past</option>
                    </select>
                    <div className='img-upload'>
                          <div>
                              {imgSrc !== null ? 
                                <div>
                                    <img src={imgSrc}  style={{width: '325px'}}/>
                                </div > :
                                <Dropzone
                                    onDrop={this.onImageDrop}
                                    multiple={false}
                                    accept="image/jpg,image/jpeg,image/png"
                                    name="img_url"
                                    vlaue={this.state.img_url}
                                    onChange={this.handleChange}
                                >
                                    <div >Drop and image or click to upload a picture</div>
                                </Dropzone>
                              }
                          </div>
                          <div>
                              {this.state.uploadedFileCloudinaryUrl === '' ? null : 
                              <div>
                                  <p>{this.state.uploadedFile.name}</p>
                                  <img src={this.state.uploadedFileCloudinaryUrl} />
                              </div>}
                          </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
             
            </div>
        );
    }
}