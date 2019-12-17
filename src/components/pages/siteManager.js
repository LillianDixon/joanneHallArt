import React, { Component } from 'react';
import ManagerForm from "../siteManager/managerForm";
import ManagerSideBar from "../siteManager/managerSideBar";
import axios from 'axios';


export default class SiteManager extends Component {
  constructor(){
    super()

    this.state={
      postedItems: [],
      postToEdit: {},
    }

    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.getPastItems = this.getPastItems.bind(this);
    this.getCurrentItems = this.getCurrentItems.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearPostToEdit = this.clearPostToEdit.bind(this);
  }

  clearPostToEdit(){
    this.setState({
      postToEdit: {}
    });
  }

  handleEditClick(post){
    this.setState({
      postToEdit: post
    });
  }

  getCurrentItems(){
    axios.get("https://joanneapi.herokuapp.com/current")
    .then(response => {
      console.log('response', response)
      this.setState({
        postedItems: [...response.data]
      })
    }).catch (error => {
      console.log('error', error)
    })
  }

  getPastItems(){
    axios.get("https://joanneapi.herokuapp.com/past")
    .then(response => {
      console.log('get post response', response)
    }).catch (error => {
      console.log('error', error)
    })
  }

  getCurrentItems(){
    axios.get("https://joanneapi.herokuapp.com/current")
    .then(response => {
      console.log('get current response', response)
    }).catch (error => {
      console.log('error', error)
    })
  }


  handleFormSubmissionError(error){
    console.log('handleFormsubmissionError error', error)
  }


  handleNewFormSubmission(post){
    this.setState({
      postedItems: [post].concat(this.state.postedItems)
    })
  }

  componentDidMount(){
    this.getCurrentItems();
    this.getPastItems();
  }

  render() {
    return (
        <div className="site-manager-wrapper">
            <ManagerForm 
              handleNewFormSubmission={this.handleNewFormSubmission}
              handleFormSubmissionError={this.handleFormSubmissionError}
              getPastItems={this.getPastItems}
              getCurrentItems={this.getCurrentItems}
              clearPostToEdit = {this.clearPostToEdit}
              postToEdit = {this.state.postToEdit}
            />
            <ManagerSideBar 
              getPastItems={this.getPastItems}
              getCurrentItems = {this.getCurrentItems}
              handleEditClick = {this.handleEditClick}
            />

      </div>
    );
  }
}