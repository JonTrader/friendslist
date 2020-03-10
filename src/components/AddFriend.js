import React from 'react'

class AddFriend extends React.Component{
    

    constructor(props)
    {
        super(props);
        this.state = {newFriend: ''}

        // our event listener functions need to be bound to this instance of the class
        // so they can use functions like: this.props or this.setState
        this.updateNewFriend = this.updateNewFriend.bind(this);
        this.handleAddNew = this.handleAddNew.bind(this);
    }

    // function that runs whenever the text input changes
    // the input's onChange event triggers this function
    // and passes in the event so we can run code on it to
    // update the state with the value inside of the text input

    updateNewFriend(event)
    {
        this.setState({newFriend: event.target.value});
    }


    handleAddNew(event)
    {
        //some function
        this.props.addNew(this.state.newFriend);
        



        this.setState({newFriend: ''});
    }



    render()
    {

        // Here we're rendering a container for our text input
        // and the button that triggers the FriendsContainer component to update
        return(
        <div>
            <input
            type="text"
            value={this.state.newFriend}
            onChange={this.updateNewFriend}
            />

            <button onClick={this.handleAddNew}> Add Friend</button>
        </div>
        )
    }





}

export default AddFriend