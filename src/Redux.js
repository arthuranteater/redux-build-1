import React from "react";
import { connect } from "react-redux";
import UserAvatar from './UserAvatar'
import UserStats from './UserStats'


// Create a reducer with an empty initial state
const initialState = {};
export function reducer(state = initialState, action) {
    switch (action.type) {
        // Respond to the SET_USER action and update
        // the state accordingly
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        case "SET_MGMT":
            return {
                ...state,
                mgmt: action.mgmt
            }
        default:
            return state;
    }
}


const mapStateToProps = state => ({
    user: state.user,
    mgmt: state.mgmt
});


class Redux extends React.Component {
    constructor(props) {
        super(props)
        this.state = { avatar: '', name: '', followers: '', following: '' }
    }


    dave = () => {
        console.log('sending dave')
        this.props.dispatch({
            type: "SET_USER",
            user: {
                avatar: "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
                name: "Dave",
                followers: 1234,
                following: 123
            }
        });
    }


    handleChange = e => {
        const val = e.target.value
        const name = e.target.name
        this.setState(prevState => ({
            ...prevState,
            [name]: val
        }))
    }

    handleSubmit = e => {
        e.preventDefault()
        const { avatar, name, followers, following } = this.state
        this.props.dispatch({
            type: "SET_USER",
            user: {
                avatar: avatar,
                name: name,
                followers: followers,
                following: following
            }
        })
    }

    render() {
        const { avatar, name, followers, following } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div onChange={this.handleChange}>
                        <input value={avatar} name='avatar' placeholder='avatar' />
                        <input value={name} name='name' placeholder='name' />
                        <input value={followers} name='followers' placeholder='followers'></input>
                        <input value={following} name='following' placeholder='following'></input>
                    </div>
                    <button type='submit'>Dispatch</button>
                </form>

                <div className="nav">
                    <UserAvatar size="small" />
                </div>
                <div className="body">
                    <div className="sidebar">
                        <UserStats />
                    </div>
                    <div className="content">main content here</div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Redux)