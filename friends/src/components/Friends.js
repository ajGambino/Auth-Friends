import React from 'react';
import axiosWithAuth  from '../utils/axiosWithAuth';
import NewFriend from './NewFriend'


class Friends extends React.Component {
    state = {
        friends: []
    };

    getFriends = () => {
        axiosWithAuth()
        .get('api/friends')
        .then(res => {
            this.setState({ friends: res.data })
        })
        .catch(err => console.log(err));
    };
    
    render() {
        const myFriends = this.getFriends();
        console.log('this is .getFriends ', myFriends);
        return (
            <div>
                <h1>My Friends</h1>

                <NewFriend />
                <div className='friendsClass'>
                    {this.state.friends.map(friend => (
                        <>
                            <div className='friends' key={friend.id}>
                                <h4>{friend.name}</h4>
                                <h4>{friend.age}</h4>
                                <p>{friend.email}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        )
    }

}

export default Friends;