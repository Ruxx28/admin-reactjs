import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dropdown} from 'react-bootstrap';
import windowSize from 'react-window-size';

/* import NavSearch from './NavSearch'; */
import DEMO from "../../../../../store/constant";
import * as actionTypes from "../../../../../store/actions";

class NavLeft extends Component {

    render() {

        let navItemClass = ['nav-item'];
        if (this.props.windowWidth <= 575) {
            navItemClass = [...navItemClass, 'd-none'];
        }
        let dropdownRightAlign = false;
        if (this.props.rtlLayout) {
            dropdownRightAlign = true;
        }


        return (
            <>
                <ul className="navbar-nav me-auto">
                    <li className={navItemClass.join(' ')}>
                        <Dropdown align={dropdownRightAlign ?? "end"}>
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                Dropdown
                            </Dropdown.Toggle>
                            <ul>
                                <Dropdown.Menu>
                                    <li><a className="dropdown-item" href={DEMO.BLANK_LINK}>Action</a></li>
                                    <li><a className="dropdown-item" href={DEMO.BLANK_LINK}>Another action</a></li>
                                    <li><a className="dropdown-item" href={DEMO.BLANK_LINK}>Something else here</a></li>
                                </Dropdown.Menu>
                            </ul>
                        </Dropdown>
                    </li>
                    {/* <li className="nav-item"><NavSearch/></li> */}
                </ul>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        rtlLayout: state.rtlLayout
    }
};

export default connect(mapStateToProps)(windowSize(NavLeft));
