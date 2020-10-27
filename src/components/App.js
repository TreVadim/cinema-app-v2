import React, { useState, useEffect } from "react";
import { Layout, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { SideBar } from "./SideBar";
import { HeaderComponent } from "./HeaderComponent";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import { getMovies } from "../actions/movies";

const { Content } = Layout;
const spinner = <LoadingOutlined spin style={{ fontSize: '92px' }} />;

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
                <BrowserRouter>
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
                            { isLoading
                                ? (
                                    <div className="spinner-wrapper">
                                        <Spin indicator={spinner} />
                                    </div>
                                ) : (
                                    <Switch>
                                        <Route path="/" exact component={HomePage} />
                                        <Route path="/movie/:id" component={MoviePage} />
                                    </Switch>
                                )
                            }
                        </Content>
                    </Layout>
                </BrowserRouter>
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
