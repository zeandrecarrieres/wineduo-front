import React from 'react'
import './winelistitem.css'

function WineListItem({item}) {
    return (
        <div className="wine-list-item" >
            <p className="item-type">{item.type}</p>
            <p className="item-region">{item.region})X</p>
            <p className="item-name">{item.name}</p>
            <p className="item-harvest">{item.harvest}</p>
            <button className="item-edit-btn">edit</button>
            <button className="item-delete-btn">delete</button>
        </div>
    )
}

export default WineListItem
