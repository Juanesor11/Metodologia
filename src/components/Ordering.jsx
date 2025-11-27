import React, { useState, useEffect } from 'react';
import { Reorder, motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';

export function Ordering({ question, onAnswer }) {
    const [items, setItems] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        const shuffled = [...question.items].sort(() => Math.random() - 0.5);
        setItems(shuffled);
        setSubmitted(false);
        setIsCorrect(false);
    }, [question]);

    const handleSubmit = () => {
        setSubmitted(true);
        const correct = JSON.stringify(items) === JSON.stringify(question.correctOrder);
        setIsCorrect(correct);
    };

    const handleContinue = () => {
        onAnswer(isCorrect);
    };

    return (
        <div className="flex flex-col gap-6">
            <p className="text-center text-sm text-gray-400">
                {!submitted ? "Arrastra para ordenar" : "Revisa tus respuestas"}
            </p>

            <Reorder.Group axis="y" values={items} onReorder={!submitted ? setItems : () => { }} className="flex flex-col gap-3">
                {items.map((item, index) => {
                    // Check if this specific item is in the correct absolute position
                    const isItemCorrect = item === question.correctOrder[index];

                    return (
                        <Reorder.Item key={item} value={item} dragListener={!submitted}>
                            <div
                                className={`
                  glass-card p-4 flex items-center gap-4 transition-all duration-300
                  ${submitted
                                        ? (isItemCorrect
                                            ? 'border-green-500/50 bg-green-500/10'
                                            : 'border-red-500/50 bg-red-500/10')
                                        : 'hover:bg-white/5 cursor-grab active:cursor-grabbing'}
                `}
                            >
                                <span className="text-2xl opacity-50">
                                    {submitted ? (
                                        isItemCorrect ? <Check size={20} className="text-green-400" /> : <X size={20} className="text-red-400" />
                                    ) : (
                                        "☰"
                                    )}
                                </span>
                                <span className="flex-grow font-medium">{item}</span>
                                {submitted && !isItemCorrect && (
                                    <span className="text-xs text-red-300 opacity-70">
                                        (Debería ser: {question.correctOrder[index]})
                                    </span>
                                )}
                            </div>
                        </Reorder.Item>
                    );
                })}
            </Reorder.Group>

            {!submitted ? (
                <button
                    className="btn btn-primary w-full mt-4"
                    onClick={handleSubmit}
                >
                    Confirmar Orden
                </button>
            ) : (
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="btn btn-primary w-full mt-4"
                    onClick={handleContinue}
                >
                    Continuar <ArrowRight size={20} />
                </motion.button>
            )}
        </div>
    );
}
