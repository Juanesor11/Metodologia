import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function TrueFalse({ question, onAnswer }) {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setSelected(null);
    }, [question]);

    const handleSelect = (value) => {
        if (selected !== null) return;
        setSelected(value);
    };

    const handleContinue = () => {
        if (selected === null) return;
        const isCorrect = selected === question.correctAnswer;
        onAnswer(isCorrect);
    };

    useEffect(() => {
        if (selected === null) return;

        const handleKeyPress = (e) => {
            if (e.code === 'Space' || e.key === ' ') {
                e.preventDefault();
                handleContinue();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selected, question.correctAnswer, onAnswer]);

    const getButtonStyle = (value) => {
        const isCorrectAnswer = value === question.correctAnswer;

        if (selected === null) {
            return "bg-white/5 hover:bg-white/10 border-white/10";
        }

        // If this specific button was selected
        if (selected === value) {
            return isCorrectAnswer
                ? "bg-green-500/50 border-green-500 text-white"
                : "bg-red-500/50 border-red-500 text-white";
        }

        // If this button was NOT selected but IS the correct answer (show correction)
        if (isCorrectAnswer) {
            return "bg-green-500/50 border-green-500 text-white opacity-50";
        }

        return "opacity-20 border-transparent";
    };

    return (
        <div>
            <div className="flex gap-6 justify-center mt-8">
                {[true, false].map((value) => (
                    <motion.button
                        key={value.toString()}
                        className={`
            glass-card w-40 h-32 flex flex-col items-center justify-center gap-2
            text-2xl font-bold border-2 transition-all duration-300
            ${getButtonStyle(value)}
          `}
                        onClick={() => handleSelect(value)}
                        whileTap={selected === null ? { scale: 0.95 } : {}}
                        disabled={selected !== null}
                    >
                        {value ? "Verdadero" : "Falso"}
                    </motion.button>
                ))}
            </div>

            {selected !== null && question.explanation && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-4 glass-card border-l-4 border-blue-400 bg-blue-500/10 max-w-2xl mx-auto"
                >
                    <p className="text-sm text-blue-300 font-bold mb-1">Explicación:</p>
                    <p className="text-white/90">{question.explanation}</p>
                </motion.div>
            )}

            {selected !== null && (
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="btn btn-primary w-full mt-6 max-w-2xl mx-auto"
                    onClick={handleContinue}
                >
                    Continuar
                </motion.button>
            )}
        </div>
    );
}
