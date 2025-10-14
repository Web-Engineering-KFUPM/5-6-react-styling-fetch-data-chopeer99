import React from 'react'
import { Row, Col, Alert } from 'react-bootstrap'
import UserCard from './UserCard'

function UserList({ users, onUserClick }) {
  if (users.length === 0) {
    return (
      <Alert variant="info">
        No users found matching your search criteria.
      </Alert>
      <raw>
          {users.map(user => (
            <Col ClassName= md={6} lg={4} mb-4>
              <UserCard user={user} onUserClick={onUserClick} />
            </Col> 
          ))}
      </raw>
     

    )
  }

}

export default UserList
