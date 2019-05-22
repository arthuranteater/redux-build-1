import React from 'react';
import "./styles.css";

const UserAvatar = ({ user, size }) => (
    <img
        className={`user-avatar ${size || ""}`}
        alt="user avatar"
        src={user.avatar}
    />
);

const UserStats = ({ user }) => (
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
);

// Accept children and render it/them
const Nav = ({ children }) => <div className="nav">{children}</div>;

const Content = () => <div className="content">main content here</div>;

const Sidebar = ({ children }) => <div className="sidebar">{children}</div>;

// Body needs a sidebar and content, but written this way,
// they can be ANYTHING
const Body = ({ sidebar, content }) => (
    <div className="body">
        <Sidebar>{sidebar}</Sidebar>
        {content}
    </div>
);

class Regular extends React.Component {
    state = {
        avatar:
            "https://arthuranteater.com/static/noshaun.3f286b2e.png",
        name: "Hunt",
        followers: '1,000,000',
        following: 'g95'
    }

    handleChange = e => {
        const val = e.target.value
        const name = e.target.name
        this.setState(prevState => ({
            ...prevState,
            [name]: val
        }))
    }

    render() {
        const user = { ...this.state }
        const { avatar, name, followers, following } = this.state


        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div onChange={this.handleChange}>
                        <input defaultValue={avatar} name='avatar' placeholder='avatar' />
                        <input defaultValue={name} name='name' placeholder='name' />
                        <input defaultValue={followers} name='followers' placeholder='followers'></input>
                        <input defaultValue={following} name='following' placeholder='following'></input>
                    </div>
                    <button type='submit'>Update User</button>
                </form>
                <Nav>
                    <UserAvatar user={user} size="small" />
                </Nav>
                <Body sidebar={<UserStats user={user} />} content={<Content />} />
            </div>
        );
    }
}

export default Regular