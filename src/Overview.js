import React, { useEffect, useState } from 'react'
import './Overview.css'
import ReactMarkdown from 'react-markdown'
import axios from 'axios';
import { useStateValue } from './StateProvider';

function Overview() {

    const [userIntro, setUserIntro] = useState([ ])
    const [{ user }, dispatch] = useStateValue();
    const [statusCode, setstatusCode] = useState(null);

    useEffect(() => {
        const getUserIntro = async () => {
            try{
                let baseURL = `https://raw.githubusercontent.com/${user}/${user}/main/README.md`
                let response = await axios.get(`${baseURL}`)
                setstatusCode(response.status)
                setUserIntro(response.data)
            } catch (error) {
            }
            
        }
        getUserIntro()
    }, [user])

    return (

        <div className="overview">
            {statusCode === 200 ? (
                <div className="overview__intro">
                    <ReactMarkdown source={userIntro} />
                </div>
            ) : (
                    <div className="overview__empty"></div>
                )}
            <span className="overview__p">
                Seeing something unexpected? Take a look at the
                <a href="https://docs.github.com/categories/setting-up-and-managing-your-github-profile"> GitHub profile guide</a>.
            </span>
        </div>
    )
}

export default Overview
