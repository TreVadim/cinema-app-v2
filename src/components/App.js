import React, { useState, useEffect } from "react";
import { Layout } from 'antd';
import { connect } from "react-redux";

import { SideBar } from "./SideBar";
import { HeaderComponent } from "./HeaderComponent";
import { getMovies } from "../actions/movies";

const { Content } = Layout;

const App = ({ getMovies, isLoading, movies }) => {
    const [collapsed, toggleCollapse] = useState(false);

    useEffect(() => {
        getMovies();
    }, []);

    const toggle = () => {
        toggleCollapse(!collapsed);
    };

    console.log(isLoading, movies);

    return (
        <>
            <Layout>
                <SideBar collapsed={collapsed}/>
                <Layout className="site-layout">
                    <HeaderComponent collapsed={collapsed} toggle={toggle}/>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
            <div className="footer">Cinema App</div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        movies: state.movies
    }
}

const mapDispatchToProps = {
    getMovies: getMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
