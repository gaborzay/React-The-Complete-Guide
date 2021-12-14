import Card from '../UI/Card'
import classes from './Users.module.css'

const UsersList = props => {
  const { users = [] } = props

  return <Card className={classes.users}>
    <ul>
      {users.map(user => <li key={user.id}>{user.name} ({user.age} years old)</li>)}
    </ul>
  </Card>
}

export default UsersList