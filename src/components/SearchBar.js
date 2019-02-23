import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {             //we take the event and prevent it's default operation that would cause the page to refresh itself
        event.preventDefault();
                                        //Arrow function makes sure that our 'this' value is bound in this function only
        this.props.onSubmit(this.state.term);           //reference to a function passed on APP component       //After 6, we call our props object and we call the function that was passed onto this thing as the onSubmit prop
    }   //prop name = onSubmit which was used in App.js                                   //And we invoke that function(in App.js) by this.state.term

    render() {
        return ( 
            <div className="ui segment">
                <form onSubmit={ this.onFormSubmit } className="ui form">       {/*whenever user submits the form we are going to run onFormSubmit*/}
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={ this.state.term }               //overwrites whatever text is involved in the input
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>    
                </form>
            </div>
        );  
    }
}

export default SearchBar;