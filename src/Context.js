import React from "react"
import "./styles.css"
import UserAvatar from './Context/UserAvatar'
import UserStats from './Context/UserStats'

export const UserContext = React.createContext()

const Nav = () => (
    <div className="nav">
        <UserAvatar size="small" />
    </div>
);

const Content = () => <div className="content">main content here</div>;

const Sidebar = () => (
    <div className="sidebar">
        <UserStats />
    </div>
);

const Body = () => (
    <div className="body">
        <Sidebar />
        <Content />
    </div>
);

export class Context extends React.Component {
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
            this.setState({
                count: count - 1
            })
        }
    }

    render() {

        const { avatar, name, followers, following } = this.state.form
        const { users, count } = this.state
        const user = users[count]

        return (
            <div className="app">
                <form onSubmit={this.handleSubmit}>
                    <div onChange={this.handleChange}>
                        <input defaultValue={avatar} name='avatar' placeholder='avatar' />
                        <input defaultValue={name} name='name' placeholder='name' />
                        <input defaultValue={followers} name='followers' placeholder='followers'></input>
                        <input defaultValue={following} name='following' placeholder='following'></input>
                    </div>
                    <button type='submit'>Update User</button>
                </form>
                <button onClick={this.handlePrev}>Previous User</button>
                <button onClick={this.handleNext}>Next User</button>
                <UserContext.Provider value={user}>
                    <Nav />
                    <Body />
                </UserContext.Provider>
            </div>
        );
    }
}
