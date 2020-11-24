import React from 'react'
import Button from '@material-ui/core/Button';
import './Header.css'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ userDetails }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
            <img className="header__logo" src="/GitHub-Mark-Light-32px.png" alt="" />
     
            <div className="header__search">
                <input type="text" placeholder="Search or jump to..." className="header__searchInput" />             
            </div>
            <Button>Pull requests</Button>
            <Button>Issues</Button>
            <Button>Marketplace</Button>
            <Button>Explore</Button>
            </div>
            <div className="header__right">
                <NotificationsNoneIcon className="header__icon"/>
                <AddSharpIcon className="header__icon" />
                <ArrowDropDownSharpIcon className="header__icon"/>
                <img alt="@isuchit" width="20" height="20" src={userDetails.avatar_url} class="avatar"></img>
                <ArrowDropDownSharpIcon className="header__icon"/>
            </div>
        </div>
    )
}

export default Header
