import React from "react";
import { Layout } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

export const SideBar = ({ collapsed }) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <nav>
                <NavLink to="/" exact activeClassName="active-link">
                    <span>
                        <UserOutlined />
                    </span>
                    <span>Home</span>
                </NavLink>
                <NavLink to="/movie" activeClassName="active-link">
                    <span>
                        <VideoCameraOutlined />
                    </span>
                    <span>Movie Page</span>
                </NavLink>
                <NavLink to="/schedule" activeClassName="active-link">
                    <span>
                        <UploadOutlined />
                    </span>
                    <span>Schedule</span>
                </NavLink>
            </nav>
        </Sider>
    )
}
