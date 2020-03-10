import React from 'react'

class HelloUser extends React.Component {



    
    constructor(props)
    {
        super(props);

        // we can define state in our constructor
        this.state = {userName: 'JonTrader'};
        this.handleChange = this.handleChange.bind(this);
    }
// you can pass an event parameter to your function
    handleChange(event)
    {
        console.log(event.target.value);
        this.setState({ userName: event.target.value});
    }


    // describes what the UI will look like for the component
	render()
	{	
        return(
        <div>
            Hello {this.state.userName} <br />
            Change Username: 
            <input type="text" value={this.state.userName} onChange={this.handleChange}/>
        </div>
        );
        
    
    }



}

export default HelloUser;