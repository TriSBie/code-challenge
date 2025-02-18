This implementation provides a complete CRUD API with:

- TypeScript support
- SQLite database persistence
- Basic filtering on list endpoint
- Error handling
- Proper HTTP status codes
- Clear project structure

## Setup

1. Install dependencies:
npm install

2. Run in development mode:
npm run dev

# API Endpoints
POST /resources - Create resource
GET /resources - List all resources (filter by name using ?name=)
GET /resources/:id - Get single resource
PUT /resources/:id - Update resource
DELETE /resources/:id - Delete resource

Example Request:
curl -X POST -H "Content-Type: application/json" -d '{"name":"Test","description":"Test resource"}' http://localhost:3000/resources