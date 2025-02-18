**Live Scoreboard Module**
## Overview
This module handles real-time updates and secure management of a scoreboard displaying the top 10 user scores. It ensures authorized score updates and broadcasts changes to all clients instantly.

# PART 1: Specialization Documents (readme.md) 
# PART 2: Flow diagram pictures (flow-diagram.png) 

=========================================================
# System Components
- Score Update API Endpoint
- WebSocket Server for Live Updates
- Score Validation Service
- Redis Cache for Leaderboard
- Authentication Middleware

# API Endpoints
Method: POST */api/v1/scores/update*
**Description**: Updates a user's score and broadcasts the changes to connected clients.

> Request Headers:
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
> Request Body:
> json {
    "actionId": "string",  // Unique identifier for the action
    "timestamp": "ISO8601" // When the action was performed
}

> Response: 
> {
    "success": true,
    "newScore": number,
    "rank": number
}

# Error Responses:
+ 401 Unauthorized: Invalid or missing token
+ 409 Conflict: Duplicate action submission
+ 400 Bad Request: Invalid action ID or timestamp

# WebSocket: /ws/scoreboard
**Description**: Endpoint for real-time scoreboard updates.
Endpoint for real-time scoreboard updates.

Subscribe Message:
json {
    "type": "subscribe",
    "channel": "scoreboard"
}

# Security Measures
Score Validation

+ Each action must have a unique actionId
+ Timestamp must be within acceptable range (±30 seconds from server time)
+ Rate limiting: Maximum 10 actions per minute per user 
+ Action signatures are verified against predefined rules

# Authentication

- JWT-based authentication required for score submissions
- Tokens must include user scope: score:submit
- WebSocket connections require initial authentication

# Data Storage
- Using Redis ensures performance for score updates.
- Scoreboard updates are batched and broadcast every 2 seconds
- WebSocket connections are pooled and load balanced
- Cache invalidation occurs only on score changes

## Monitoring**
Key metrics to track:

Score update latency
WebSocket connection count
Invalid action attempts
Broadcasting latency
Cache hit/miss ratio

## Error Handling

Failed updates are logged with user ID and action ID
Duplicate submissions are tracked for abuse detection
System automatically recovers from Redis connection issues
WebSocket reconnection strategy implemented on client side

