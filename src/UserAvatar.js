
import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => ({
    user: state.user
});

// could also split this up into 2 variables:
//   const UserAvatarAtom = ({ user, size }) => ( ... )
//   const UserAvatar = connect(mapStateToProps)(UserAvatarAtom);
const UserAvatar = connect(mapStateToProps)(({ user, size }) => {
    return (
        <div>
            <img
                className={`user-avatar ${size || ""}`}
                alt="user avatar"
                src={user ? user.avatar : 'https://forwardsummit.ca/wp-content/uploads/2019/01/avatar-default.png'}
            />
        </div>
    )
}
);

export default connect(mapStateToProps)(UserAvatar)