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


    hunt = () => {
        console.log('sending Hunt')
        this.props.dispatch({
            type: "SET_USER",
            user: {
                avatar: "https://arthuranteater.com/static/noshaun.3f286b2e.png",
                name: "Hunt",
                followers: 1000000,
                following: 95
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
                        <input defaultValue={avatar} name='avatar' placeholder='avatar' />
                        <input defaultValue={name} name='name' placeholder='name' />
                        <input defaultValue={followers} name='followers' placeholder='followers'></input>
                        <input defaultValue={following} name='following' placeholder='following'></input>
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