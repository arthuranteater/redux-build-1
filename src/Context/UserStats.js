import React from 'react'
import UserAvatar from './UserAvatar'
import { UserContext } from '../Context'

const UserStats = () => (
    <UserContext.Consumer>
        {user => (
            <div className="user-stats">
                <div>
                    <UserAvatar user={user} />
                    {user.name}
                </div>
                <div className="stats">
                    <div>{user.followers} Followers</div>
                    <div>Following {user.following}</div>
                </div>
            </div>
        )}
    </UserContext.Consumer>
);

export default UserStats
