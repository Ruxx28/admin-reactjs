import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import windowSize from 'react-window-size';

import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import Loader from "../Loader";
import routes from "../../../routes";
import * as actionTypes from "../../../store/actions";

import './app.scss';
import { ToastContainer } from 'react-toastify';

class AdminLayout extends Component {

    UNSAFE_componentWillMount() {
        if (this.props.windowWidth > 992 && this.props.windowWidth <= 1024 && this.props.layout !== 'horizontal') {
            this.props.onComponentWillMount();
        }
    }

    mobileOutClickHandler() {
        if (this.props.windowWidth < 992 && this.props.collapseMenu) {
            this.props.onComponentWillMount();
        }
    }

    render() {

        const menu = routes.map((route, index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <route.component {...props} />
                    )} />
            ) : (null);
        });

        return (
            <>
                <Navigation />
                <NavBar />
                <div className="pcoded-main-container" onClick={() => this.mobileOutClickHandler}>
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                {/* <Breadcrumb /> */}
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <Suspense fallback={<Loader />}>
                                            <Switch>
                                                {menu}
                                                <Redirect from="/" to={this.props.defaultPath} />
                                            </Switch>
                                        </Suspense>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        defaultPath: state.defaultPath,
        collapseMenu: state.collapseMenu,
        configBlock: state.configBlock,
        layout: state.layout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onComponentWillMount: () => dispatch({ type: actionTypes.COLLAPSE_MENU })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(AdminLayout));