import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ArtworkItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artworkItemClass: ""
    };
  }

  handleMouseEnter() {
    this.setState({ artworkItemClass: "image-blur" });
  }

  handleMouseLeave() {
    this.setState({ artworkItemClass: "" });
  }

  render() {
    const { id, description, thumb_image_url, logo_url } = this.props.item;
    return (
      <div
        className="artwork-item-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <div
          className={
            "portfolio-img-background " + this.state.artworkItemClass
          }
          style={{
            backgroundImage: "url(" + thumb_image_url + ")"
          }}
        />

        <div className="img-text-wrapper">
          <div className="logo-wrapper">
            <img src={logo_url} />
          </div>

          <div className="subtitle">{description}</div>
        </div>
      </div>
    );
  }
}