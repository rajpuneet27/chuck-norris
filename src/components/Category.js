import React, { Component } from 'react'

export class Category extends Component {

    constructor(props){
        super(props);
        this.state = {
            types : [],
            isLoaded : false,
        }     
    }

    async componentDidMount(){
        const url = "https://api.chucknorris.io/jokes/categories";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            types : data,
            isLoaded : true,
        })
        console.log(data)
    }

    clickHandler(event){
        console.log("Button is clicked")
        this.props.handleJokeCategoryChange(event.target.innerHTML);
    }

    render() {

        var {isLoaded, types} = this.state;
        if(!isLoaded){
            return <div className="category-title">Is Loading...</div>
        }
        else{
            return (
                <div>
                    <div className="category-title">Chuck Norris</div>
                    <div className="category">
                       {
                           types.map((type, index) =>(
                            <button onClick={(event=>{this.clickHandler(event)})} key={index}>{type}</button>  
                           ))
                       }
                        {/* <button></button> */}
                        {/* <button>Career</button>
                        <button>Celebrity</button>
                        <button>Dev</button>
                        <button>Explicit</button>
                        <button>Fashion</button>
                        <button>Food</button>
                        <button>History</button>
                        <button>Money</button>
                        <button>Movie</button>
                        <button>Music</button>
                        <button>Political</button>
                        <button>Religion</button>
                        <button>Science</button>
                        <button>Sports</button>
                        <button>Travel</button> */}
                    </div> 
                </div>
            )
        }
    }
}

export default Category

