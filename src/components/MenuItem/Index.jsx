import React from 'react'

function MenuItem({ title }) {
    return (
        <a href="" className="menu-item">
            <div>
                <span className="menu-item-text">{title}</span>
            </div>
        </a>
    )
}

export default MenuItem
