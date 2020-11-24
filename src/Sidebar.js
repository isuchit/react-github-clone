import React from 'react'
import './Sidebar.css';
import Button from '@material-ui/core/Button';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { useStateValue } from './StateProvider';

function Sidebar() {

    const [{ user, userDetails }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <img alt="" width="180" height="180" class="avatar avatar-user width-full border bg-white" src={userDetails.avatar_url} />
            <h1 className="sidebar__name">
                <span className="name_fullname">{userDetails.name}</span>
                <span className="name_username">{user}</span>
            </h1>
            <span >
                {userDetails.bio}</span>
            <Button className="sidebar__editButton">Edit profile</Button>

            <div className="sidebar_follow">
                <PeopleOutlinedIcon className="sidebar_iconColor" />
                <span><strong>{userDetails.followers}</strong> follower </span>
                <span><strong>&nbsp; · &nbsp;</strong></span>
                <span> <strong> {userDetails.following} </strong> following </span>
            </div>
            <br />
            {userDetails.company != null ? (
                <div className="sidebar__otherDetails">
                    <span>
                        <BusinessOutlinedIcon className="sidebar_iconColor" />
                        <strong>{userDetails.company}</strong>
                    </span>
                </div>) : (
                    <div></div>
                )}
            {userDetails.location != null ? (
                <div className="sidebar__otherDetails"><span>
                    <LocationOnOutlinedIcon className="sidebar_iconColor" />
                    {userDetails.location}
                </span>
                </div>) : (
                    <div></div>
                )}


        </div>
    )
}

export default Sidebar
