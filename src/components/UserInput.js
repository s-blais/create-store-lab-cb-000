import React, { Component } from 'react';

class UserInput extends Component {

  state = { username: '', hometown: '' }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.store.dispatch({ type: 'ADD_USER', user: this.state })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            name="username" 
            onChange={this.handleChange} 
            value={this.state.username} />
          <input type="text" 
            name="hometown" 
            onChange={this.handleChange} 
            value={this.state.hometown} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};


// const mapDispatchToProps = dispatch => ({
//   addUser: formData => dispatch ({ type: 'ADD_USER', user: formData })
// })

// export default connect(null, mapDispatchToProps)(UserInput);
export default UserInput;