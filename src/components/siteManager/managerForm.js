import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import request from 'superagent';


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
            img_url: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onImageDrop = this.onImageDrop.bind(this);
    }

    postDelete(){
        fetch(`https://joanne-hall-art-api.herokuapp.com/delete_current/${props.id}`, {
            method: 'DELETE',
            headers: {
                "Content=type": "application/json"
            }
        })
        .then(respnse => {return Response.json()})
        .catch(err => {
            console.log("Fetch error" + err)
        })
    }
    

    onImageDrop(files){
        this.setState({
            uploadedFile: files[0]
        })
   //     this.handleImageUpload(files[0])
    }

    handleImageUpload(file){
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);

        upload.end((err, response) => {
            if (err){
                console.log(err)
            }
            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                })
                return response.body.secure_url
            }
        })
    }

    // handleImageUpload(props){
    //     let upload = request.post(CLOUDINARY_UPLOAD_URL)
    //                         .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    //                         .field('file', this.state.uploadedFile);
                            
    //     upload.end((err, response) => {
    //         if (err){
    //             console.log(err)
    //         }
    //         if (response.body.secure_url !== '') {
    //             this.setState({
    //                 img_url: response.body.secure_url
    //             })
    //             return props.response.body.secure_url
    //         }
    //     })
    // }

    handleSubmit(event){
        event.preventDefault();

        let title = this.state.title
        let description = this.state.description
        let img_url = this.handleImageUpload(this.state.uploadedFileCloudinaryUrl)
        let category = this.state.category

        

        fetch(`https://joanne-hall-art-api.herokuapp.com/${category}/input`,{
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
    }

    
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <select
                        name="category"
                        vlaue={this.state.category}
                        onChange={this.handleChange}
                    >
                        <option value="current">Current</option>
                        <option value="past">Past</option>
                    </select>
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <div className='photos'>
                          <div>
                              <Dropzone
                                  onDrop={this.onImageDrop}
                                  multiple={false}
                                  accept="image/jpg,image/jpeg,image/png"
                                  name="img_url"
                                  vlaue={this.state.img_url}
                                  onChange={this.handleChange}
                              >
                                  <div>Drop and image or click to upload a picture</div>
                              </Dropzone>
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