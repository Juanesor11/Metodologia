import React from 'react';
import confetti from 'canvas-confetti';

export function Results({ score, total, onRetry, onReview, incorrectCount, isReviewMode }) {
    React.useEffect(() => {
        if (score / total > 0.5) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#00d2ff', '#3a7bd5', '#ff0099']
            });
        }
    }, [score, total]);

    return (
        <div className="text-center">
            <h2 className="text-3xl mb-4">¡Quiz Completado!</h2>
            <div className="text-6xl font-bold mb-8 gradient-text">
                {score} / {total}
            </div>
            <p className="text-xl mb-8 text-gray-300">
                {isReviewMode
                    ? `Repaso completado: ${score} de ${total} correctas esta vez`
                    : score === total
                        ? "¡Perfecto! 🌟"
                        : score > total / 2
                            ? "¡Bien hecho! 👍"
                            : "Sigue practicando 💪"
                }
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
                <button className="btn btn-primary" onClick={onRetry}>
                    {isReviewMode ? "Volver al Inicio" : "Intentar de nuevo"}
                </button>

                {!isReviewMode && incorrectCount > 0 && (
                    <button className="btn btn-secondary" onClick={onReview}>
                        Repasar Incorrectas ({incorrectCount})
                    </button>
                )}
            </div>
        </div>
    );
}
