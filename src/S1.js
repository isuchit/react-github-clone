  
import React from 'react'
import './S1.css'
import Button from '@material-ui/core/Button';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';


function S1() {
    return (
        <div className="sidebar">
         <img alt="" width="180" height="180" class="avatar avatar-user width-full border bg-white" src="https://avatars3.githubusercontent.com/u/26110025?s=460&amp;u=4003ef1272faa04b985f4a4890e4f1b3bfb325aa&amp;v=4" />
            <h1 className="sidebar__name">
                <span className="name_fullname">Suchit Rotti</span>
                <span className="name_username">isuchit</span>
            </h1>
            <span >
                DevOps | AWS ☁ | React | Full Stack Developer</span>
            <Button className="sidebar__editButton">Edit profile</Button>

            <div className="sidebar_follow">
                <PeopleOutlinedIcon className="sidebar_iconColor" /><span>1 follower </span> · <span> 5 following </span> ·
        <StarOutlineOutlinedIcon className="sidebar_iconColor"/><span>2</span>
            </div>
            <br />
            <div className="sidebar__otherDetails">
            <span>
                <BusinessOutlinedIcon className="sidebar_iconColor"/>
                @dxc-technology @dxc-labs
            </span>
            <span>
                <LocationOnOutlinedIcon className="sidebar_iconColor"/>
                Bengaluru, India
            </span>
            <span>
                <MailOutlineOutlinedIcon className="sidebar_iconColor"/>
                suchitrotti@gmail.com
            </span>
            </div>
    </div>
    )
}

export default S1
