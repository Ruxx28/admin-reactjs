import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';

/* import ChatList from './ChatList'; */
import DEMO from "../../../../../store/constant";

import Avatar1 from '../../../../../assets/images/user/avatar-1.jpg';
import Avatar2 from '../../../../../assets/images/user/avatar-2.jpg';
import Avatar3 from '../../../../../assets/images/user/avatar-3.jpg';

class NavRight extends Component {
    state = {
        listOpen: false
    };

    render() {

        return (
            <>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <Dropdown  align={!this.props.rtlLayout ?? 'end'}>
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                <i className="icon feather icon-bell"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" className="notification">
                                <div className="noti-head">
                                    <h6 className="d-inline-block m-b-0">Notifications</h6>
                                    <div className="float-right">
                                        <a href={DEMO.BLANK_LINK} className="m-r-10">mark as read</a>
                                        <a href={DEMO.BLANK_LINK}>clear all</a>
                                    </div>
                                </div>
                                <ul className="noti-body">
                                    <li className="notification">
                                        <div className="media">

                                            <img className="img-radius" src={Avatar1} alt="Generic placeholder"/>
                                            <div className="media-body">
                                                <p><strong>John Doe</strong><span className="n-time text-muted"><i
                                                    className="icon feather icon-clock m-r-10"/>30 min</span></p>
                                                <p>New ticket Added</p>
                                            </div>

                                        </div>
                                    </li>
                                </ul>
                                <div className="noti-footer">
                                    <a href={DEMO.BLANK_LINK}>show all</a>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                   {/*  <li className={this.props.rtlLayout ? 'm-r-15' : 'm-l-15'}>
                        <a href={DEMO.BLANK_LINK} className="displayChatbox" onClick={() => {this.setState({listOpen: true});}}><i className="icon feather icon-mail"/></a>
                    </li> */}
                    <li>
                        <Dropdown align={!this.props.rtlLayout ?? 'end'} className="drp-user">
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                <i className="icon feather icon-settings"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align='end' className="profile-notification">
                                <div className="pro-head">
                                    <img src={Avatar1} className="img-radius" alt="User Profile"/>
                                    <span>John Doe</span>
                                    <a href={DEMO.BLANK_LINK} className="dud-logout" title="Logout">
                                        <i className="feather icon-log-out"/>
                                    </a>
                                </div>
                                <ul className="pro-body">
                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-settings"/> Settings</a></li>
                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-user"/> Profile</a></li>
                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-mail"/> My Messages</a></li>
                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-lock"/> Lock Screen</a></li>
                                </ul>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
                {/* <ChatList listOpen={this.state.listOpen} closed={() => {this.setState({listOpen: false});}} /> */}
            </>
        );
    }
}

export default NavRight;
