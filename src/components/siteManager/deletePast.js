import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DeletePast(props) {

    function postDelete(){
        fetch (`https://joanneapi.herokuapp.com/delete_past/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
            })
            .then(response => {return response.json()})
            .catch(err => {
                console.log("Fetch error on delete past" + err)
            })
        };

        return (
            <div>
            <a 
              className="action-icon" 
              onClick={postDelete}
            >
              <FontAwesomeIcon icon="trash" />
            </a>
            </div>
        )
    }