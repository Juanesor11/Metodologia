import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { QuestionCard } from './components/QuestionCard';
import { MultipleChoice } from './components/MultipleChoice';
import { Ordering } from './components/Ordering';
import { MultipleSelection } from './components/MultipleSelection';
import { TrueFalse } from './components/TrueFalse';
import { Results } from './components/Results';
import { questions as initialQuestions } from './data/questions';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const startQuiz = () => {
    // Randomize questions

    // Debug mode
    // const debugId = 60;
    // const debugQuestion = initialQuestions.find(q => q.id === debugId);

    // const shuffled = debugQuestion
    //   ? [debugQuestion]                     // solo esa pregunta
    //   : [...initialQuestions].sort(() => Math.random() - 0.5); // flujo normal


    const shuffled = [...initialQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setQuizStarted(true);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setShowResults(true);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!quizStarted ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-card text-center"
          >
            <h1 className="text-4xl mb-4">
              Study <span className="gradient-text">Quiz</span>
            </h1>
            <p className="text-xl mb-8" style={{ color: 'var(--text-muted)' }}>
              Preparate para tu final con estilo.
            </p>
            <button
              className="btn btn-primary"
              onClick={startQuiz}
            >
              <Play size={20} />
              Comenzar
            </button>
          </motion.div>
        ) : showResults ? (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card"
          >
            <Results score={score} total={questions.length} onRetry={startQuiz} />
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <QuestionCard title={`Pregunta ${currentQuestionIndex + 1} de ${questions.length}`}>
              <h3 className="text-2xl mb-6 font-medium">{currentQuestion.question}</h3>

              {currentQuestion.type === 'multiple-choice' && (
                <MultipleChoice question={currentQuestion} onAnswer={handleAnswer} />
              )}

              {currentQuestion.type === 'ordering' && (
                <Ordering question={currentQuestion} onAnswer={handleAnswer} />
              )}

              {currentQuestion.type === 'multiple-selection' && (
                <MultipleSelection question={currentQuestion} onAnswer={handleAnswer} />
              )}

              {currentQuestion.type === 'true-false' && (
                <TrueFalse question={currentQuestion} onAnswer={handleAnswer} />
              )}
            </QuestionCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
