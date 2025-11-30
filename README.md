# Fundlance Backend

Fundlance is a startup–investor matching platform. This backend provides authentication, profile management, and matching logic for founders and investors.

## Features
- User authentication with JWT
- Password hashing with bcrypt
- Founder profile creation and management
- Investor profile creation and management
- Protected routes with middleware
- MongoDB integration using Mongoose

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt.js

## Project Structure
- `models/` → User, FounderProfile, InvestorProfile
- `routes/` → Authentication, Profiles, Matching
- `middleware/` → JWT authentication middleware
- `server.js` → Entry point

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/deepthikolipaka/fundlance.git
   cd fundlance/backend
