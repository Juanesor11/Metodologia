import React from 'react';
import { motion } from 'framer-motion';

export function QuestionCard({ children, title }) {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <h2 className="text-2xl mb-6 text-center">{title}</h2>
            <div className="glass-card">
                {children}
            </div>
        </div>
    );
}
