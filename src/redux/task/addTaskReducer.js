import { ADD_TASK_ACTION_TYPES } from "./addTaskAction";

const initialState = {
  tasks: [{
    id: 1,
    taskName: "Complete React Native UI design",
    shortDescription: "Design the UI for the new mobile app.",
    longDescription: "Design the UI for the new mobile app using React Native components. This involves creating screens, designing layouts, selecting appropriate styles, and ensuring responsiveness across devices.",
    estimatedHours: 20,
    actualHours: 15,
    budget: 5000, // in dollars
    linesOfCode: 800,
    numberOfScreens: 12
  },
  {
    id: 2,
    taskName: "Implement Redux state management",
    shortDescription: "Integrate Redux for state management.",
    longDescription: "Integrate Redux for state management in the React Native app. This involves setting up Redux store, defining actions, connecting components, and handling asynchronous operations.",
    estimatedHours: 15,
    actualHours: null,
    budget: 3000, // in dollars
    linesOfCode: 500,
    numberOfScreens: 8
  },
  {
    id: 3,
    taskName: "Backend API integration",
    shortDescription: "Connect to backend API.",
    longDescription: "Connect the mobile app to the backend API to fetch and update data. This involves setting up API endpoints, handling authentication, managing data flow, and optimizing network requests.",
    estimatedHours: 30,
    actualHours: null,
    budget: 7000, // in dollars
    linesOfCode: 1200,
    numberOfScreens: 20
  },
  {
    id: 4,
    taskName: "Database design",
    shortDescription: "Design database schema.",
    longDescription: "Design the database schema for the mobile app backend. This involves defining tables, relationships, constraints, and indexing strategies to optimize performance and ensure data integrity.",
    estimatedHours: 25,
    actualHours: 10,
    budget: 6000, // in dollars
    linesOfCode: 1000,
    numberOfScreens: 5
  },
  {
    id: 5,
    taskName: "User authentication",
    shortDescription: "Implement user authentication.",
    longDescription: "Implement user authentication functionality in the mobile app. This involves user registration, login, password reset, and session management using secure authentication mechanisms.",
    estimatedHours: 18,
    actualHours: null,
    budget: 4000, // in dollars
    linesOfCode: 700,
    numberOfScreens: 10
  },
  {
    id: 6,
    taskName: "Payment gateway integration",
    shortDescription: "Integrate payment gateway.",
    longDescription: "Integrate a payment gateway into the mobile app for processing transactions. This involves selecting a payment provider, setting up merchant accounts, implementing payment APIs, and ensuring security compliance.",
    estimatedHours: 20,
    actualHours: null,
    budget: 5500, // in dollars
    linesOfCode: 900,
    numberOfScreens: 15
  },
  {
    id: 7,
    taskName: "UI/UX refinement",
    shortDescription: "Refine UI/UX design.",
    longDescription: "Refine the UI/UX design of the mobile app based on user feedback and usability testing. This involves iterating on existing designs, implementing new features, and improving overall user experience.",
    estimatedHours: 15,
    actualHours: null,
    budget: 3500, // in dollars
    linesOfCode: 600,
    numberOfScreens: 10
  },
  {
    id: 8,
    taskName: "Performance optimization",
    shortDescription: "Optimize app performance.",
    longDescription: "Optimize the performance of the mobile app to ensure smooth operation and responsiveness. This involves profiling the app, identifying bottlenecks, optimizing code, and implementing caching strategies.",
    estimatedHours: 30,
    actualHours: null,
    budget: 8000, // in dollars
    linesOfCode: 1500,
    numberOfScreens: 25
  },
  {
    id: 9,
    taskName: "Deployment setup",
    shortDescription: "Set up deployment pipeline.",
    longDescription: "Set up a deployment pipeline for the mobile app to automate build, test, and deployment processes. This involves configuring CI/CD tools, defining deployment environments, and ensuring continuous integration.",
    estimatedHours: 12,
    actualHours: null,
    budget: 2000, // in dollars
    linesOfCode: 300,
    numberOfScreens: 5
  },
  {
    id: 10,
    taskName: "Documentation",
    shortDescription: "Create project documentation.",
    longDescription: "Create comprehensive documentation for the mobile app project. This includes user manuals, API documentation, code documentation, and architectural diagrams to aid in understanding, maintenance, and future development.",
    estimatedHours: 20,
    actualHours: null,
    budget: 4500, // in dollars
    linesOfCode: 800,
    numberOfScreens: 10
  }],
};

const addTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK_ACTION_TYPES.ADD_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default addTaskReducer;
