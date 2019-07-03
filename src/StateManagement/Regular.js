import React from 'react';
import "../styles.css";

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
        form: {
            avatar: '',
            name: '',
            followers: '',
            following: ''
        },
        count: 0,
        users: [{
            avatar: 'https://arthuranteater.com/static/noshaun.3f286b2e.png',
            name: 'Hunt',
            followers: '1,000,000',
            following: 'g95',
        }]
    }

    handleChange = e => {
        const val = e.target.value
        const name = e.target.name
        this.setState(prevState => ({
            form: {
                ...prevState.form,
                [name]: val
            }
        }
        ))
    }

    handleSubmit = e => {
        e.preventDefault()
        const { avatar, name, followers, following } = this.state.form
        this.setState(prevState => ({
            count: prevState.users.length,
            users: [...prevState.users, { avatar: avatar, name: name, followers: followers, following: following }]
        }))
        console.log(this.state)
    }

    handlePrev = e => {
        e.preventDefault()
        const { count } = this.state
        if (count > 0) {
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
        }
    }

    handleNext = e => {
        e.preventDefault()
        const { count, users } = this.state
        if (count < users.length - 1) {
            this.setState(prevState => ({
                count: prevState.count + 1
            }))
        }
    }

    render() {
        const { avatar, name, followers, following } = this.state.form
        const { users, count } = this.state
        const user = users[count]


        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div onChange={this.handleChange}>
                        <input defaultValue={avatar} name='avatar' placeholder='avatar img address' />
                        <input defaultValue={name} name='name' placeholder='name' />
                        <input defaultValue={followers} name='followers' placeholder='followers'></input>
                        <input defaultValue={following} name='following' placeholder='following'></input>
                    </div>
                    <button type='submit'>Update User</button>
                </form>
                <button onClick={this.handlePrev}>Previous User</button>
                <button onClick={this.handleNext}>Next User</button>
                <Nav>
                    <UserAvatar user={user} size="small" />
                </Nav>
                <Body sidebar={<UserStats user={user} />} content={<Content />} />
            </div>
        );
    }
}

export default Regular