import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import request from 'superagent';
import Dropzone from 'react-dropzone';

import DropzoneComponent from 'react-dropzone-component';


const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET
const CLOUDINARY_UPLOAD_URL = process.env.CLOUDINARY_UPLOAD_URL

class Update extends Component {
    constructor(props){
        super(props)

        this.state={
            id: 0,
            title: '',
            description: '',
            img_url: '',
            category: 'current',
            formHidden: true,
            // display: 'hidden',
            uploadedFile:'',
            uploadedFileCloudinaryUrl: '',
            img:" ",
        }
        
        this.editPost = this.editPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentConfig=this.componentConfig.bind(this);
        this.djsConfig=this.djsConfig.bind(this);
        this.handleImageDrop=this.handleImageDrop.bind(this);
    }

    handleImageDrop(){
        return{ 
            addedfile: (file) => this.setState({uploadedFile: file}),
        }
    }

    componentConfig(){
        return{
            iconFileTypes: [".jpg", ".png"],
            showFiletypeIcon: true,
            postUrl: 'https://httpbin.org/post'
        }
    }

    djsConfig(){
        return{
            addRemoveLinks: true,
            maxFiles: 1
        }
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state)
        let id = this.state.id;
        let title = this.state.title;
        let description = this.state.description;
        let category = this.state.category;


        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', this.state.uploadedFile);
            upload.end((err, response) => {
                if (err){
                    console.log('cloudinary error', err)
                }
                if (response.body.secure_url !== '') {
                    console.log('cloudinary response', response)
                    this.setState({
                        img_url: response.body.secure_url
                    
                })
                let img_url = this.state.img_url

                fetch(`https://joanneapi.herokuapp.com/update_${category}/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({title: title, description: description, category: category, img_url: img_url})
                }).then(res => res.json())
                .then(responseData => {return responseData})
                .then(() => {this.props.history.push('/siteManager')})
                .catch(err => console.log(err))
            };
        })
        this.setState({
            formHidden: !this.state.formHidden,
        })
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    editPost(post){
        this.setState({
            id: post[0],
            title: post[1],
            description: post[2],
            img_url: post[3],
            formHidden: !this.state.formHidden,
            // display: 'block',
        })
    }



    render() {
        return (
            <div>
               <a
              className="action-icon"
              onClick={() => this.editPost(this.props.rec)}>
              <FontAwesomeIcon icon="edit" />
                </a>

                <form 
                    onSubmit={this.handleSubmit} 
                    style = {{display: this.state.formHidden ? 'none' : "block"}} 
                >
                    <div>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                        <textarea type="textarea" name="description" value={this.state.description} onChange={this.handleChange} />
            
                        <div className='image-uploaders'>

                            <DropzoneComponent
                                config={this.componentConfig()}
                                djsConfig={this.djsConfig()}
                                eventHandlers={this.handleImageDrop()}
                            >
                                <div>Change Photo</div>
                            </DropzoneComponent> 
                        </div>

                            <a 
                                className='edit-icon'
                                // onClick={() => this.props.handleEditClick(post)}
                                onClick={() => this.props.editPost(post)}
                            >
                                <FontAwesomeIcon icon = "edit" />
                            </a>
                        <select
                            name="category"
                            vlaue={this.state.category}
                            onChange={this.handleChange}
                        >
                            <option value="current">Current</option>
                            <option value="past">Past</option>
                        </select>
                        <input type="submit" value="submit" />
                    </div>
                </form>
                
            </div>
        );
    }
}

export default withRouter(Update)