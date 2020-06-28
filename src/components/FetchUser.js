import React from "react";
import Card from 'react-bootstrap/Button';
import { render } from "@testing-library/react";
export default class FetchUser extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded: false,
        }
    }
    componentDidMount(){

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items:json,
            })
        });
    }

    render(){

        var { isLoaded, items} = this.state;
        if(!isLoaded){
            return <div>Loading....</div>
        }
        else{
            return(

                <div>

                    <ul style={{ width: '18rem' }}>
                    {items.map(item =>(
                            <Card key={item.id}>
                                <p>Name: {item.name}</p>
                                <p>Email: {item.email}</p>
                                <p>Username: {item.username}</p>
                            </Card>
                           
                        ))};
        
                    </ul>

                  
            
                </div>
            );
        }
       
    }
    
}