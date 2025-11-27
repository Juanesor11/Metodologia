import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function MultipleChoice({ question, onAnswer }) {
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const shuffled = [...question.options].sort(() => Math.random() - 0.5);
        setOptions(shuffled);
        setSelected(null);
    }, [question]);

    const handleSelect = (option) => {
        if (selected) return;
        setSelected(option);
    };

    const handleContinue = () => {
        if (!selected) return;
        const isCorrect = selected === question.correctAnswer;
        onAnswer(isCorrect);
    };

    useEffect(() => {
        if (!selected) return;

        const handleKeyPress = (e) => {
            if (e.code === 'Space' || e.key === ' ') {
                e.preventDefault();
                handleContinue();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selected, question.correctAnswer, onAnswer]);

    return (
        <div className="flex flex-col gap-4">
            {options.map((option, index) => {
                const isSelected = selected === option;
                const isCorrect = option === question.correctAnswer;
                const showResult = !!selected;

                let style = {};
                if (showResult) {
                    if (isCorrect) {
                        style = { borderColor: 'var(--correct)', background: 'rgba(0, 255, 136, 0.2)' };
                    } else if (isSelected) {
                        style = { borderColor: 'var(--wrong)', background: 'rgba(255, 77, 77, 0.2)' };
                    } else {
                        style = { opacity: 0.5 };
                    }
                }

                return (
                    <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="btn w-full text-left justify-start p-3 text-lg"
                        onClick={() => handleSelect(option)}
                        disabled={!!selected}
                        style={style}
                    >
                        {option}
                    </motion.button>
                );
            })}

            {!!selected && question.explanation && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 glass-card border-l-4 border-blue-400 bg-blue-500/10"
                >
                    <p className="text-sm text-blue-300 font-bold mb-1">Explicación:</p>
                    <p className="text-white/90">{question.explanation}</p>
                </motion.div>
            )}

            {!!selected && (
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="btn btn-primary w-full mt-6"
                    onClick={handleContinue}
                >
                    Continuar
                </motion.button>
            )}
        </div>
    );
}
