# QuiSDE - Quiz System for Digital Education

A modern, full-stack web application for interactive learning through quizzes, flashcards, and comprehensive subject management. Built with React, Spring Boot, and H2 database.

## 🚀 Features

### Core Functionality

- **Subject Management**: 24+ computer science subjects across 5 categories
- **Interactive Quizzes**: Multiple difficulty levels with real-time scoring
- **Flashcard System**: Digital flashcards for effective learning
- **Category Filtering**: Filter subjects by Core, Advanced, Machine Learning, Software Engineering, and Misc
- **Responsive Design**: Modern UI that works on all devices

### User Experience

- **Authentication System**: Login/Signup with OTP verification
- **Profile Management**: User profiles with statistics
- **Learning Statistics**: Animated count-up numbers showing progress
- **Modern UI**: Shimmer effects, smooth animations, and ReactBits-style design
- **Real-time Feedback**: Immediate quiz results with detailed explanations

### Technical Features

- **Database-First Approach**: All data managed through proper database operations
- **RESTful API**: Clean, well-structured backend endpoints
- **Type Safety**: Full TypeScript implementation on frontend
- **Performance Optimized**: Efficient database queries and lazy loading

## 🛠️ Tech Stack

### Frontend

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Context** for state management
- **Axios** for API communication

### Backend

- **Spring Boot 3.5** with Java 17
- **Spring Data JPA** for database operations
- **H2 Database** (in-memory for development)
- **Maven** for dependency management
- **Lombok** for reducing boilerplate code

### Database

- **H2 In-Memory Database** for development
- **JPA/Hibernate** for ORM
- **Automatic Schema Generation** with data initialization

## 📁 Project Structure

```
quiSDE/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service layer
│   │   ├── types/          # TypeScript type definitions
│   │   ├── hooks/          # Custom React hooks
│   │   └── context/        # React context providers
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # Spring Boot backend application
│   ├── src/main/java/
│   │   └── com/quisde/
│   │       ├── controller/ # REST controllers
│   │       ├── service/    # Business logic
│   │       ├── entity/     # JPA entities
│   │       ├── repository/ # Data access layer
│   │       └── dto/        # Data transfer objects
│   ├── src/main/resources/
│   │   ├── data.sql        # Database initialization
│   │   └── application.properties
│   └── pom.xml
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **Java 17** or higher
- **Maven** (v3.6 or higher)

### Frontend Setup

1. **Navigate to frontend directory**:

   ```bash
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start development server**:

   ```bash
   npm run dev
   ```

4. **Access the application**:
   Open [http://localhost:5173](http://localhost:5173) in your browser

### Backend Setup

1. **Navigate to backend directory**:

   ```bash
   cd backend
   ```

2. **Start Spring Boot application**:

   ```bash
   ./mvnw spring-boot:run
   ```

3. **Access the API**:
   - API Base URL: [http://localhost:8080/api](http://localhost:8080/api)
   - H2 Console: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)

### Database Access

- **H2 Console URL**: http://localhost:8080/h2-console
- **JDBC URL**: `jdbc:h2:mem:testdb`
- **Username**: `sa`
- **Password**: `password`

## 📚 API Documentation

### Subjects API

#### Get All Subjects

```http
GET /api/subjects
```

**Response**:

```json
[
  {
    "id": 1,
    "name": "Data Structures & Algorithms",
    "slug": "data-structures-algorithms",
    "description": "Master the fundamentals of data organization and algorithm design.",
    "imageUrl": "/subject-placeholder-dark.jpeg",
    "categories": ["core"]
  }
]
```

#### Get Subjects by Category

```http
GET /api/subjects/category/{categorySlug}
```

**Categories**: `core`, `advanced`, `machine-learning`, `software-engineering`, `misc`

### Quizzes API

#### Get All Quizzes

```http
GET /api/quizzes
```

#### Get Quiz by Slug

```http
GET /api/quizzes/{slug}
```

#### Submit Quiz Attempt

```http
POST /api/quizzes/{id}/attempt
```

**Request Body**:

```json
{
  "answers": {
    "1": 3,
    "2": 1
  },
  "timeSpentSeconds": 120
}
```

### Categories API

#### Get All Categories

```http
GET /api/categories
```

## 🎨 UI Components

### Key Components

- **ShinyText**: Animated text with shimmer effects
- **ModernCard**: Responsive card components
- **QuizModal**: Interactive quiz interface
- **ProfileCard**: User profile display
- **SubjectGrid**: Subject display with filtering
- **FloatingActionButton**: Action buttons with animations

### Design System

- **Color Scheme**: Dark theme with purple accents
- **Typography**: Modern, readable fonts
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first design approach

## 📊 Database Schema

### Core Tables

- **subjects**: Subject information and metadata
- **categories**: Subject categories (Core, Advanced, etc.)
- **subject_categories**: Many-to-many relationship table
- **quizzes**: Quiz definitions and metadata
- **questions**: Quiz questions with difficulty levels
- **answers**: Question answers with correctness flags
- **flashcards**: Digital flashcards for subjects

### Data Initialization

The application automatically loads initial data from `backend/src/main/resources/data.sql`:

- 5 categories
- 24 subjects
- Subject-category relationships

## 🔧 Development

### Code Style

- **Frontend**: ESLint + Prettier configuration
- **Backend**: Standard Java conventions with Lombok
- **TypeScript**: Strict type checking enabled

### Testing

- **Frontend**: React Testing Library (to be implemented)
- **Backend**: JUnit 5 with Spring Boot Test

### Environment Variables

Create `.env` files in the frontend directory for environment-specific configurations.

## 🚀 Deployment

### Frontend Deployment

```bash
cd frontend
npm run build
```

### Backend Deployment

```bash
cd backend
./mvnw clean package
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Create an issue in the GitHub repository
- Check the API documentation above
- Review the database schema and data initialization

## 🔮 Roadmap

- [ ] User authentication with JWT
- [ ] Progress tracking and analytics
- [ ] Social features (leaderboards, sharing)
- [ ] Mobile app development
- [ ] Advanced quiz types (matching, fill-in-the-blank)
- [ ] Content management system
- [ ] Multi-language support

---

**Built with ❤️ for modern education**
