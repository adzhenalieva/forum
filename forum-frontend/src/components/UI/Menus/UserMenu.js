import React, {Fragment} from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";

const UserMenu = ({user, logout}) => (
    <Fragment>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Hello, {user.username}
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    Show profile
                </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem onClick={logout}>
                    Log out
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    </Fragment>
);

export default UserMenu;