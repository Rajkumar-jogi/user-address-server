## Project Objective
- Create a backend where users can register and store their addresses.

## Tech Stack
- Backend: Node.js, Express.js
- Database: SQLite
- Other-Tools: Body-parser


## Setup Instructions

1. Clone the repository
- git clone <repository-link>
- cd <project-directory>

2. Install dependencies
- npm install

3. Start the server
- node app.js

## Development Guidelines
- Ensure Node.js is installed.
- Use POST requests to interact with the API via Postman or any other tool.
- Create new users or add new addresses to existing users through the /register endpoint.

## API Documentation

1. Register User and Address

- Method: POST
- Endpoint: /api/register
- Body:
    {
        "name": "John Doe",
        "address": "123 Main St"
    }