import React from 'react';
import { connect } from "react-redux";
import UserAvatar from './UserAvatar'

const mapStateToProps = state => ({
    user: state.present.user
});

// connect() UserStats so it receives the `user` directly,
// without having to receive it from a component above
// (both use the same mapStateToProps function)
const UserStats = connect(mapStateToProps)(({ user }) => (
    <div className="user-stats">
        <div>
            <UserAvatar />
            {user ? user.name : 'add a name'}
        </div>
        <div className="stats">
            <div>{user ? user.followers : 'add followers'} Followers</div>
            <div>Following {user ? user.following : 'add following'}</div>
        </div>
    </div>
));

export default connect(mapStateToProps)(UserStats)