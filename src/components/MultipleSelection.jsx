import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export function MultipleSelection({ question, onAnswer }) {
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const shuffled = [...question.options].sort(() => Math.random() - 0.5);
        setOptions(shuffled);
        setSelected([]);
        setSubmitted(false);
    }, [question]);

    const toggleOption = (option) => {
        if (submitted) return;
        if (selected.includes(option)) {
            setSelected(selected.filter(s => s !== option));
        } else {
            setSelected([...selected, option]);
        }
    };

    const handleSubmit = () => {
        setSubmitted(true);

        const isCorrect =
            selected.length === question.correctAnswers.length &&
            selected.every(s => question.correctAnswers.includes(s));

        setTimeout(() => {
            onAnswer(isCorrect);
        }, 2000);
    };

    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-400 text-center mb-2">Selecciona todas las correctas</p>
            {options.map((option, index) => {
                const isSelected = selected.includes(option);
                const isCorrect = question.correctAnswers.includes(option);

                let styleClass = "border-white/10 hover:bg-white/5";
                let icon = null;

                if (submitted) {
                    if (isCorrect) {
                        styleClass = "border-green-500/50 bg-green-500/10";
                        icon = <Check size={20} className="text-green-400" />;
                    } else if (isSelected && !isCorrect) {
                        styleClass = "border-red-500/50 bg-red-500/10";
                        icon = <X size={20} className="text-red-400" />;
                    } else {
                        styleClass = "opacity-50 border-white/10";
                    }
                } else if (isSelected) {
                    styleClass = "border-primary bg-primary/10";
                }

                return (
                    <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`
              glass-card p-3 text-left flex items-center gap-4 transition-all duration-300
              ${styleClass}
            `}
                        onClick={() => toggleOption(option)}
                        disabled={submitted}
                    >
                        <div className={`
              w-6 h-6 rounded border flex items-center justify-center transition-colors
              ${isSelected ? 'bg-primary border-primary' : 'border-gray-500'}
              ${submitted && isCorrect ? '!bg-green-500 !border-green-500' : ''}
              ${submitted && isSelected && !isCorrect ? '!bg-red-500 !border-red-500' : ''}
            `}>
                            {isSelected && <Check size={14} className="text-black" />}
                        </div>
                        <span className="flex-grow">{option}</span>
                        {icon}
                    </motion.button>
                );
            })}

            {!submitted && (
                <button
                    className="btn btn-primary w-full mt-4"
                    onClick={handleSubmit}
                    disabled={selected.length === 0}
                >
                    Confirmar
                </button>
            )}
        </div>
    );
}
