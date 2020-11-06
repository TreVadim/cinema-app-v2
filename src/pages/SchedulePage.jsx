import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getSessionData } from "../actions/schedule";

const SchedulePage = ({ getSessionData }) => {
    useEffect(() => {
        getSessionData();
    }, []);

    return (
        <h1>Schedule</h1>
    );
};

const mapDispatchToProps = {
    getSessionData
};

export default connect(() => {}, mapDispatchToProps)(SchedulePage);