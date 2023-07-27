import './Sidebar.scss';
import React from "react";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <label>
                <input type="checkbox"
                       defaultChecked={false}
                       onChange={() => {

                       }}
                />
                Points
            </label>
            <label>
                <input type="checkbox"
                       defaultChecked={false}
                       onChange={() => {

                       }}
                />
                Polygons
            </label>
        </div>
    );
}

export default Sidebar;
