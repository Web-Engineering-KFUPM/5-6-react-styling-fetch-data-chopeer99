import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

function SearchBar({ searchTerm, onSearchChange }) {
  // TODO 1.3: Add bootstrap in Search Bar Component (div tag)
  return (
    <div className="mb-4"> 
      <InputGroup>
        <InputGroup.Text>
            <i className="bi bi-search"></i> {/* Optional: Add a search icon if you have bootstrap icons */}
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search users by name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </InputGroup>
    </div>
  )
}

export default SearchBar