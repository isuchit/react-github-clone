import React from 'react'
import './Repository.css'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import Button from '@material-ui/core/Button';
import moment from 'moment'

function Repository({name, html_url, description, updated_at}) {

    let _date = new Date();
    
    return (
        <div className="repository">
            <div className="repository">
                <div className="repository__Header">
                    <a href={html_url}>{name}</a>
                    <Button className="repository__HeaderButton"><StarBorderOutlinedIcon className="icons" />Star</Button>
                </div>
                <p className="repository__Des">{description}</p>
                <div className="repository__Stat">
                    <span>Updated on {moment(updated_at).format("MMM Do YYYY")}</span>
                </div>
                <hr class="light"></hr>
            </div>
        </div>
    )
}

export default Repository
