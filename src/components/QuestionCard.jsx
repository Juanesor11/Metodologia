import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function QuestionCard({ children, title, isFavorite, onToggleFavorite }) {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-center flex-1">{title}</h2>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onToggleFavorite}
                    className="favorite-btn"
                    aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                >
                    <Star
                        size={24}
                        fill={isFavorite ? "var(--accent-primary)" : "none"}
                        stroke={isFavorite ? "var(--accent-primary)" : "currentColor"}
                    />
                </motion.button>
            </div>
            <div className="glass-card">
                {children}
            </div>
        </div>
    );
}
