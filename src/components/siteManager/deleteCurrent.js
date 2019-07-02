import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function DeleteCurrent(props) {

    function postDelete(){
        fetch (`https://joanneapi.herokuapp.com/delete_current/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
            })
            .then(response => {return response.json()})
            .catch(err => {
                console.log("Fetch error on delete current" + err)
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