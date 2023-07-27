import './DetailPanel.scss';
import React, {useContext} from "react";
import {AppContext} from "../../AppContext";

const DetailPanel = (props) => {
    const {detail} = useContext(AppContext);
    return (
        <div className="detail-panel">
            <span>{`Title: ${detail?.title}`}</span>
        </div>
    );
};

export default DetailPanel;
