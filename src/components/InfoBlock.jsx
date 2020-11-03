import React from "react";

const InfoBlock= ({ label, content }) => (
    <div className="info-block">
        <div>{label}</div>
        <div>{content}</div>
    </div>
);

export default InfoBlock;