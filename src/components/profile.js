import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Profile = (props) => {

   const redir = () => {
       return (
        // <Redirect to="/"/>
        props.history.push('/')
       )
     
   }
    return (
        <div>
            <Link to={{
                pathname: `${props.match.url}/post`
            }}>take me to /profile/posts</Link>

           {redir()}
        </div>
    )
}

export default Profile;