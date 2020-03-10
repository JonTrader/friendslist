import React from 'react'

class AddFriend extends React.Component{
    

    constructor(props)
    {
        super(props);
        this.state = {newFriend: ''}

        this.updateNewFriend = this.updateNewFriend.bind(this);
        this.handleAddNew = this.habldeAddNew.bind(this);
    }


    updateNewFriend(event)
    {
        this.setState({newFriend: event.target.value});
    }


    handleAddNew(event)
    {
        //some function
        



        this.setState({newFriend: ''});
    }



    render()
    {
        <div>
            <input
            type="text"
            value={}
            onChange={}
            />

            <button onClick={}> Add Friend</button>
        </div>
    }





}

export default AddFriend