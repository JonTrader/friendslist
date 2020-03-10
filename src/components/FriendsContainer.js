import React from 'react'
import ShowList from './ShowList'
import AddFriend from '/AddFriend'

class FriendsContainer extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = 
        {
        name: 'Jon Montoya',
        friends: ['Boubacar', 'Naomi', 'Kheperah', 'Fransisco']
        };
        
    }

    addFriend(friend)
    {
        this.setState((state) =>({
            friends: this.state.friends.concat([friend]
                )}));
    }

    render()
    {
        return(
            <div>
                <h3>Name: {this.state.name}</h3>
                <AddFriend addNew={this.addFriend} />
                <ShowList names={this.state.friends} />
            </div>
        )
    }





}

export default FriendsContainer;