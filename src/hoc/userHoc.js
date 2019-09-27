import React from 'react';

const userHoc = (WrapedComponent,WrapedComponent2, arg1) => {
    return (props) => (
        <div>
            {arg1}
            <WrapedComponent {...props}/>
            <WrapedComponent2 {...props}/>
        </div>
    )
}

export default userHoc;