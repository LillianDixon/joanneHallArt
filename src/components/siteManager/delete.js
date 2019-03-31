import React from 'react';

export default function Delete(props){
    function postDelete(){
        fetch(`http://127.0.0.1:5000/delete_current/${props.id}`, {
            method: 'DELETE',
            headers: {
                "Content=type": "application/json"
            }
        })
        .then(response => {return response.json()})
        .catch(err => {
            console.log("Fetch error" + err)
        })
    }

    return(
        <div>
            <a onClick={postDelete}>Delete</a>
        </div>
    )
}