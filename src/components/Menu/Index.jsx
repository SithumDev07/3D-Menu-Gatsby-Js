import React from 'react'
import MenuItem from '../MenuItem';

const DATA = [
    {
        id: 1,
        title: "Work"
    },
    {
        id: 2,
        title: "Services"
    },
    {
        id: 3,
        title: "Insights"
    },
    {
        id: 4,
        title: "About"
    },
    {
        id: 5,
        title: "Contact"
    },
]

function Menu() {
    return (
        <nav className="menu">
            {
                DATA.map((item, _) => (
                    <MenuItem key={item.id} title={item.title} />
                ))
            }
        </nav>
    )
}

export default Menu
