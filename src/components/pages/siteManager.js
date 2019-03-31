import React, { Component } from 'react';
import ManagerForm from "../siteManager/managerForm";
import ManagerSideBar from "../siteManager/managerSideBar";


export default class SiteManager extends Component {


  render() {
    return (
        <div>
            <ManagerForm />
            <ManagerSideBar />
      </div>
    );
  }
}