import React, { Component } from 'react'

export class SelectedCategory extends Component {
    render() {
        return (
            <div>
                <div className="category-selected">Selected Category : <span>{this.props.jokeCategory}</span></div>
            </div>
        )
    }
}

export default SelectedCategory
