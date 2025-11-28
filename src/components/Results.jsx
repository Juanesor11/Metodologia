import React from 'react';
import confetti from 'canvas-confetti';

export function Results({ score, total, onRetry, onReview, onReviewFavorites, incorrectCount, favoritesCount, isReviewMode, reviewType }) {
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

    const getResultMessage = () => {
        if (reviewType === 'incorrect') {
            return `Repaso de incorrectas: ${score} de ${total} correctas esta vez`;
        } else if (reviewType === 'favorites') {
            return `Repaso de favoritas: ${score} de ${total} correctas`;
        } else if (score === total) {
            return "¡Perfecto! 🌟";
        } else if (score > total / 2) {
            return "¡Bien hecho! 👍";
        } else {
            return "Sigue practicando 💪";
        }
    };

    return (
        <div className="text-center">
            <h2 className="text-3xl mb-4">¡Quiz Completado!</h2>
            <div className="text-6xl font-bold mb-8 gradient-text">
                {score} / {total}
            </div>
            <p className="text-xl mb-8 text-gray-300">
                {getResultMessage()}
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

                {!isReviewMode && favoritesCount > 0 && (
                    <button className="btn btn-accent" onClick={onReviewFavorites}>
                        ⭐ Repasar Favoritas ({favoritesCount})
                    </button>
                )}
            </div>
        </div>
    );
}
