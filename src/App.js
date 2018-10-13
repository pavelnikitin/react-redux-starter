import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateUser, apiRequest} from './actions/user-actions';
import {createSelector} from 'reselect';



class App extends Component {

  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);    
  }

  componentDidMount() {
    setTimeout(() => {
        this.props.onApiRequest();
    }, 2000)
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }


  render() {
    return (
      
          <div>
              <input onChange={this.onUpdateUser}/>
              <div>{this.props.user}</div>
          </div>
      
    );
  }
}

const mapStateToProps = (state, props) => {
   console.log(props);
   return { 
      products: state.products,
      user: state.user 
   }     
};

const mapActionsToProps =(dispatch, props) =>  {

  console.log(props)
    return bindActionCreators(
      {
        onUpdateUser: updateUser,
        onApiRequest: apiRequest   
    }, dispatch
    )
}



export default connect(mapStateToProps,mapActionsToProps)(App);

