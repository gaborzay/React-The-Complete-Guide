import { Component, Fragment, useState, useEffect, useContext } from 'react'

import Users from './Users'
import classes from './UserFinder.module.css'
import UsersContext from '../store/users-context'
import ErrorBoundary from './ErrorBoundary'

class UserFinder extends Component {
  static contextType = UsersContext

  constructor (props) {
    super(props)

    this.state = {
      filteredUsers: [],
      searchTerm: '',
    }
  }

  componentDidMount () {
    // Send Http Request...
    this.setState({
      filteredUsers: this.context.users,
    })
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter(
          (user) => user.name.includes(this.state.searchTerm),
        ),
      })
    }
  }

  searchChangeHandler (event) {
    this.setState({ searchTerm: event.target.value })
  };

  render () {
    return (
      <Fragment>
        <input type="search" onChange={this.searchChangeHandler.bind(this)}/>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers}/>
        </ErrorBoundary>
      </Fragment>
    )
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');
//
//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);
//
//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };
//
//   return (
//     <Fragment>
//       <input type='search' onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder