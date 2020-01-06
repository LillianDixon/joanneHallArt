
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import DeleteCurrent from './deleteCurrent';
import DeletePast from './deletePast';
import Update from "./update";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropzone from 'react-dropzone';
import DropzoneComponent from 'react-dropzone-component';

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";


const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET
const CLOUDINARY_UPLOAD_URL = process.env.CLOUDINARY_UPLOAD_URL

export default class ManagerSideBar extends Component {
    constructor(props){
        super(props)

        this.state={
            current: [],
            past: [],
            id: 0,
            title: '',
            description: '',
            img_url: '',
            category: 'current',
            formHidden: true,
            uploadedFile:null,
            uploadedFileCloudinaryUrl: '',
            imgSrc:null,
        }
        
        this.editPost = this.editPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
            formHidden: !this.state.formHidden
        })
    }



    componentDidMount(){
        fetch("https://joanneapi.herokuapp.com/current", {
            method: 'GET',
            headers: {
                'accepts': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({current: data})})
        .catch(err => {
            console.log("Fetch erroron current sidebar" + err)
        })

        
        fetch("https://joanneapi.herokuapp.com/past", {
            method: 'GET',
            headers: {
                'accepts': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({past: data})})
        .catch(err => {
            console.log("Fetch error on past sidebar" + err)
        })
    }

  


    render() {
        return (
            <div className='sidebar-wrapper'>
                <h1>Posts</h1>
                <div className="current-wrapper">
                    <h2>Current</h2>
                    {this.state.current.map((post) => (
                        <div key={post[0]}>
                            <Link className="title" to={`../artworkCurrent/${post[0]}`}>{post[1]}</Link>
                            <h3>{post[2]}</h3>
                            <img src={post[3]}></img>
                            <div className="delete-update">
                                <DeleteCurrent className="delete"  id={post[0]}/>
                                 <Update className="update" rec={post} 
                                /> 
                                {/* <a 
                                    className='edit-icon'
                                    // onClick={() => this.props.handleEditClick(post)}
                                    onClick={() => this.props.editPost(post)}
                                >
                                    <FontAwesomeIcon icon = "edit" />
                                </a> */}
                                </div>

                        </div>
                    ))}
                </div>

                <div className="past-wrapper">
                    <h2>Past</h2>
                    {this.state.past.map((post) => (
                        <div key={post[0]}>
                            <Link className="title" to={`../artworkPast/${post[0]}`}>{post[1]}</Link>
                            <h3>{post[2]}</h3>
                            <img src={post[3]}></img>
                            <div className="delete-update">
                            <DeletePast className="delete" id={post[0]}/>
                            <Update className="update" rec={post} />
                            
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        );
    }
}