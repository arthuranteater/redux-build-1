import React from 'react';
import { UserContext } from '../Context'

const UserAvatar = ({ size }) => (
    <UserContext.Consumer>
        {user => (
            <img
                className={`user-avatar ${size || ""}`}
                alt="user avatar"
                src={user.avatar}
            />
        )}
    </UserContext.Consumer>
);

export default UserAvatar