import React from 'react';

import userHoc from '../hoc/userHoc';

const User = () => {
    return (
        <div> 
            User 1
        </div>
    )
}

const User2 = () => {
    return (
        <div> 
            User 2
        </div>
    )
}

export default userHoc(User,User2, 'Hello');