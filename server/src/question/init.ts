import { getAllTopics } from "../topic/topic.service";
import { MCQQuestion } from "./question.model";
import { insertQuestion } from "./question.service";

import { init as initTopic } from "../topic/init";
import { init as initUser } from "../user/init";

export async function init() {
  const [result] = await getAllTopics();
  const topic = result.id;

  const questions: MCQQuestion[] = [
    {
      topic,
      question: "What is the capital of Japan?",
      options: ["Tokyo", "Beijing", "Seoul"],
      correctOptionIndex: 0,
    },
  ];

  for (let index = 0; index < questions.length; index++) {
    const question = questions[index];
    await insertQuestion(question);
  }
}

export async function initAll() {
  await initUser();
  await initTopic();

  const result = await getAllTopics();
  const science = result[0].id; // science
  const math = result[1].id; // math
  const language = result[2].id; // language
  const programming = result[3].id; // programming

  await createSciQuestions(science);
  await createMathQuestions(math);
  await createLanguageQuestions(language);
  await createProgrammingQuestions(programming);
}

async function createSciQuestions(topic: any) {
  const questions: MCQQuestion[] = [
    {
      topic,
      question: "What is the capital of Japan?",
      options: ["Tokyo", "Beijing", "Seoul"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the largest mammal in the world?",
      options: ["Blue Whale", "African Elephant", "Giraffe"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question:
        "In which year did Christopher Columbus first reach the Americas?",
      options: ["1492", "1776", "1812"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question:
        "Which gas do plants absorb from the atmosphere during photosynthesis?",
      options: ["Carbon Dioxide", "Oxygen", "Nitrogen"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question:
        "Who was the first woman to fly solo across the Atlantic Ocean?",
      options: ["Amelia Earhart", "Bessie Coleman", "Mae Jemison"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "Which country is famous for its tulip fields and windmills?",
      options: ["Netherlands", "Belgium", "Denmark"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the main gas that makes up the Earth's atmosphere?",
      options: ["Nitrogen", "Oxygen", "Carbon Dioxide"],
      correctOptionIndex: 0,
    },
  ];

  // console.log("questions.length==>", questions.length);
  for (let index = 0; index < questions.length; index++) {
    const question = questions[index];
    await insertQuestion(question);
  }
}

async function createMathQuestions(topic: any) {
  const questions: MCQQuestion[] = [
    {
      topic,
      question: "2 + 2 = ?",
      options: ["4", "2", "1"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "1 + 9 = ?",
      options: ["10", "2", "1"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the square root of 9?",
      options: ["3", "2", "1"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the perimeter of a square with side length 5?",
      options: ["20", "10", "5"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the area of a triangle with base 6 and height 4?",
      options: ["12", "8", "4"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the volume of a cube with side length 2?",
      options: ["8", "4", "2"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the slope of the line y = 2x + 3?",
      options: ["2", "1", "0"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the x-intercept of the line y = 3x + 2?",
      options: ["-2/3", "0", "2/3"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the y-intercept of the line y = -2x + 4?",
      options: ["0", "4", "-2"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the derivative of the function f(x) = x^2?",
      options: ["2x", "1", "0"],
      correctOptionIndex: 0,
    },
  ];

  // console.log("questions.length==>", questions.length);
  for (let index = 0; index < questions.length; index++) {
    const question = questions[index];
    await insertQuestion(question);
  }
}

async function createLanguageQuestions(topic: any) {
  const questions = [
    {
      topic,
      question: "What is the meaning of 'book' in Bahasa Indonesia?",
      options: ["Buku", "Makanan", "Minuman"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the meaning of 'pen' in Bahasa Indonesia?",
      options: ["Pena", "Pensil", "Pulpen"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the meaning of 'apple' in Bahasa Indonesia?",
      options: ["Apel", "Jeruk", "Anggur"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the meaning of 'house' in Bahasa Indonesia?",
      options: ["Rumah", "Gedung", "Apartemen"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the meaning of 'school' in Bahasa Indonesia?",
      options: ["Sekolah", "Universitas", "Perpustakaan"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the meaning of 'friend' in Bahasa Indonesia?",
      options: ["Teman", "Sahabat", "Kenalan"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the meaning of 'love' in Bahasa Indonesia?",
      options: ["Cinta", "Kasih Sayang", "Rasanya"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the meaning of 'beautiful' in Bahasa Indonesia?",
      options: ["Cantik", "Tampan", "Indah"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the meaning of 'happy' in Bahasa Indonesia?",
      options: ["Senang", "Gembira", "Riang"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the meaning of 'sad' in Bahasa Indonesia?",
      options: ["Sedih", "Murung", "Pilu"],
      correctOptionIndex: 0,
    },
  ];

  // console.log("questions.length==>", questions.length);
  for (let index = 0; index < questions.length; index++) {
    const question = questions[index];
    await insertQuestion(question);
  }
}

async function createProgrammingQuestions(topic: any) {
  const questions = [
    {
      topic,
      question: 'let x = "0"; console.log(x); what is the value of x',
      options: ["0", "1", "2"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the data type of 'hello' in JavaScript?",
      options: ["String", "Number", "Boolean"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the output of console.log(10 + 5)?",
      options: ["15", "5", "10"],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the purpose of the if statement in programming?",
      options: [
        "To execute a block of code if a condition is true",
        "To repeat a block of code until a condition is false",
        "To stop the execution of a program",
      ],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is a loop in programming?",
      options: [
        "A block of code that is executed repeatedly until a condition is met",
        "A variable that can store multiple values",
        "A function that returns a value",
      ],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the difference between a variable and a function?",
      options: [
        "A variable stores a value, while a function is a block of code that can be executed",
        "A variable is a type of data, while a function is a way of organizing code",
        "A variable is a global variable, while a function is a local variable",
      ],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the purpose of an array in programming?",
      options: [
        "To store a collection of values",
        "To perform calculations",
        "To control the flow of a program",
      ],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the purpose of an object in programming?",
      options: [
        "To group together related data and functions",
        "To store a single value",
        "To perform calculations",
      ],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the difference between a class and an object?",
      options: [
        "A class is a blueprint for creating objects",
        "A class is a type of data, while an object is a variable",
        "A class is a global variable, while an object is a local variable",
      ],
      correctOptionIndex: 0,
    },
    {
      topic,
      question: "What is the purpose of debugging in programming?",
      options: [
        "To find and fix errors in code",
        "To make code more efficient",
        "To make code easier to read",
      ],
      correctOptionIndex: 0,
    },
  ];

  // console.log("questions.length==>", questions.length);
  for (let index = 0; index < questions.length; index++) {
    const question = questions[index];
    await insertQuestion(question);
  }
}
