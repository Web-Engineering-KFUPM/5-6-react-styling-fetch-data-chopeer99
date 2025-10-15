import React from 'react'
import { Card, Button } from 'react-bootstrap'

function UserCard({ user, onUserClick }) {
  return (
    <Card className="user-card shadow-sm">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <div className="user-avatar me-3">
            {user.name.charAt(0)}
          </div>
          <div>
            <Card.Title className="mb-0">{user.name}</Card.Title>
            <Card.Text className="text-muted">@{user.username}</Card.Text>
          </div>
        </div>

        <Card.Text>
          <small>
            <strong>Email:</strong> {user.email}<br />
            <strong>Phone:</strong> {user.phone}
          </small>
        </Card.Text>
        
        {/* TODO 1.5: Add Button */}
        <Button variant="primary" onClick={() => onUserClick(user)} className="mt-2">
          View Details
        </Button>
      
      </Card.Body>
    </Card>
  )
}

export default UserCard