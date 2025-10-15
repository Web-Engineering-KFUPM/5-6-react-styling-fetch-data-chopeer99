import React from 'react'
import { Row, Col, Alert } from 'react-bootstrap'
import UserCard from './UserCard'

function UserList({ users, onUserClick }) {
  // TODO 1.4: Use <Alert variant="info"> when no users are found.
  if (users.length === 0) {
    return (
      <Alert variant="info" className="mt-3">
        No users found matching your search criteria.
      </Alert>
    );
  }

  // TODO 1.4: Display User Cards in Grid
  return (
    <Row>
      {users.map(user => (
        // TODO 1.4: Add properties to Col tag: md={6} lg={4} mb-4
        <Col key={user.id} md={6} lg={4} className="mb-4">
          <UserCard user={user} onUserClick={onUserClick} />
        </Col>
      ))}
    </Row>
  );
}

export default UserList