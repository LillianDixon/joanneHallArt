import React, { Component } from "react";
import axios from "axios";

import ArtworkItem from "./artwork-items";

export default class ArtworkContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Here is my Artwork",
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  getArtworkItems() {
    axios
      .get("https://lilliandixon.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  artworkItems() {
    return this.state.data.map(item => {
      return <ArtworkItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getArtworkItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="artwork-items-wrapper">
        {/* {this.artworkItems()} */}      
        <div key={portfolioItem.id} className="portfolio-item-thumb">
        <div className="portfolio-thumb-img">
          <img src={artworkItem.thumb_image_url} />
        </div>
        {portfolio_item.name}
        </div>
      </div>
    );
  }
}