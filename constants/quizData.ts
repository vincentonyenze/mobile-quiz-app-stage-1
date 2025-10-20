import { Question } from '@/types';

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language"
    ],
    correctAnswer: 0,
    category: "Web Development"
  },
  {
    id: 2,
    question: "Which programming language is known as the 'language of the web'?",
    options: ["Python", "JavaScript", "Java", "C++"],
    correctAnswer: 1,
    category: "Programming"
  },
  {
    id: 3,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: 1,
    category: "Web Development"
  },
  {
    id: 4,
    question: "Who is the creator of React?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    correctAnswer: 1,
    category: "Frameworks"
  },
  {
    id: 5,
    question: "What year was Python first released?",
    options: ["1989", "1991", "1995", "2000"],
    correctAnswer: 1,
    category: "Tech History"
  },
  {
    id: 6,
    question: "Which of these is NOT a JavaScript framework?",
    options: ["Vue.js", "Angular", "Django", "React"],
    correctAnswer: 2,
    category: "Frameworks"
  },
  {
    id: 7,
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Interface",
      "Application Process Integration",
      "Automated Program Interaction"
    ],
    correctAnswer: 0,
    category: "Programming"
  },
  {
    id: 8,
    question: "Which company developed TypeScript?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    correctAnswer: 2,
    category: "Programming"
  },
  {
    id: 9,
    question: "What is the primary purpose of Git?",
    options: [
      "Database Management",
      "Version Control",
      "Web Hosting",
      "Code Compilation"
    ],
    correctAnswer: 1,
    category: "Tools"
  },
  {
    id: 10,
    question: "Which HTTP status code indicates 'Not Found'?",
    options: ["200", "301", "404", "500"],
    correctAnswer: 2,
    category: "Web Development"
  }
];