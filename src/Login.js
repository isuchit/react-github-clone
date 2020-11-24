import React, {useState} from 'react'
import './Login.css'
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom'
import { Link } from '@material-ui/core'

function Login() {

    const [{ }, dispatch] = useStateValue();
    const [userName, setUserName] = useState('')
    const history = useHistory()

    const register = e => {
        e.preventDefault();
        dispatch({
            type: 'SET_USER',
            user: userName
          })
          history.push('/')
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="/GitHub-Mark-120px-plus.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Get GitHub Info</h1>

                <form action="">
                <h5>Username</h5>
            <input type="text" value={userName} onChange={e => setUserName(e.target.value)}/>
            <button className="login__signInButton" onClick={register}>Submit</button>
            </form>
            </div>


        </div>
    )
}

export default Login