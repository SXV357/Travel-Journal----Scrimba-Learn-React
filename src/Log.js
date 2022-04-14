import React from "react"

export default function Log(props){
    return(
        <div className = "travel-card">
            <figure className = "travel-card-image">
                <img src = {props.item.imageUrl} className = "travel-card-main-img"/>
            </figure>
            <div className = "main-content">
            <div className = "part-1">
                <p className = "part-1-para">📍{props.item.location}</p>
                <a target = "_blank" className = "part-1-link" href = {props.item.googleMapsUrl}><u>View on Google Maps</u></a>
            </div>
            <div className = "part-2">
                <h1 className = "travel-card-header">{props.item.title}</h1>
            </div>
            <div className = "part-3">
                <span className = "bold">{props.item.startDate} - {props.item.endDate}</span>
                </div>
            <div className = "part-4">
                <p className = "part-4-para">{props.item.description}</p>
            </div>
            </div>
        </div>
    )
}