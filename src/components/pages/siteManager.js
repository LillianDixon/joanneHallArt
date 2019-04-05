import React, { Component } from 'react';
import ManagerForm from "../siteManager/managerForm";
import ManagerSideBar from "../siteManager/managerSideBar";


export default class SiteManager extends Component {
  constructor(props){
    super(props)

    this.state={
      postedItems: [],
    }

  }



  render() {
    return (
        <div className="site-manager-wrapper">
            <ManagerForm 
            />
            <ManagerSideBar />
      </div>
    );
  }
}