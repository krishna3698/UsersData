import React from 'react'
import './user.css'

    const user =(props)=>{
        return(
            <div className="user col-6">
                <h3>Name : {props.fname} {props.lname}</h3>
                <p>email:{props.email}</p>
                <p>Avatar: {props.avatar}</p>
                
            </div>
        )
    }

export default user