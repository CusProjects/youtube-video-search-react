import React, { Component } from "react";

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.state = {
            term : ""
        }
    }

    onInputChange = (event) => {
        const term = event.target.value;
        this.setState({ term  });
    }

    search(event){
        event.preventDefault();
        let {term} = this.state;
        this.props.onSearchTermChange(term);
    }


    render() {
        return (
            <form onSubmit={this.search}  className="input-group">
                <input className="form-control" onChange={this.onInputChange} value={this.state.term}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Search Videos</button>
                </span>
            </form>
        );
    }
}
