import React from 'react'

class ShowList extends React.Component{

    functionName(friend)
    {
        return(<li> {friend} </li>)
    }

    render()
    {
        return(
            <div>
                <h3>Friends</h3>
                <ul>
                    {this.props.names.map((friend) => <li>{friend}</li> )}
                </ul>
            </div>
        );
    }





}

export default ShowList;