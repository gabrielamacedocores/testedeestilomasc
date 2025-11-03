
import React, { useState, useCallback, useEffect } from 'react';
import { QUESTIONS, TIE_BREAKER_QUESTIONS, STYLES } from './constants';
import type { UserAnswers, TieBreakerInfo } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Quiz from './components/Quiz';
import LoadingScreen from './components/LoadingScreen';
import Results from './components/Results';

type GameState = 'quiz' | 'loading' | 'results';

const App: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>('quiz');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<UserAnswers>({ A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 });
    const [isTieBreaker, setIsTieBreaker] = useState(false);
    const [tieBreakerInfo, setTieBreakerInfo] = useState<TieBreakerInfo | null>(null);

    useEffect(() => {
        // Use a timeout to ensure the DOM is fully updated and layout is calculated
        // before attempting to scroll. This makes the scroll behavior more reliable.
        const timer = setTimeout(() => {
            if (gameState === 'loading' || gameState === 'results') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [gameState]);

    const resetQuiz = useCallback(() => {
        setGameState('quiz');
        setCurrentQuestionIndex(0);
        setUserAnswers({ A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 });
        setIsTieBreaker(false);
        setTieBreakerInfo(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleAnswer = useCallback((style: keyof UserAnswers) => {
        setUserAnswers(prev => ({ ...prev, [style]: prev[style] + 1 }));

        if (isTieBreaker) {
            setGameState('loading');
            return;
        }

        if (currentQuestionIndex < QUESTIONS.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            const sortedStyles = Object.entries({ ...userAnswers, [style]: userAnswers[style] + 1 })
                // FIX: Cast values to number to allow subtraction in sort.
                .sort((a, b) => (b[1] as number) - (a[1] as number));

            const topScore = sortedStyles[0][1];
            const tiedPrimary = sortedStyles.filter(s => s[1] === topScore);

            if (tiedPrimary.length > 1) {
                setIsTieBreaker(true);
                setTieBreakerInfo({
                    type: 'primary',
                    tiedStyles: tiedPrimary.map(s => s[0] as keyof UserAnswers)
                });
                return;
            }

            if (sortedStyles.length > 1) {
                const secondScore = sortedStyles[1][1];
                const tiedSecondary = sortedStyles.filter((s, i) => i > 0 && s[1] === secondScore);
                if (tiedSecondary.length > 1) {
                    setIsTieBreaker(true);
                    setTieBreakerInfo({
                        type: 'secondary',
                        tiedStyles: tiedSecondary.map(s => s[0] as keyof UserAnswers)
                    });
                    return;
                }
            }

            setGameState('loading');
        }
    }, [currentQuestionIndex, isTieBreaker, userAnswers]);

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const onLoadingComplete = () => {
        setGameState('results');
    };

    const renderContent = () => {
        switch (gameState) {
            case 'quiz':
                const questionData = isTieBreaker && tieBreakerInfo
                    ? { ...TIE_BREAKER_QUESTIONS[tieBreakerInfo.type], options: TIE_BREAKER_QUESTIONS[tieBreakerInfo.type].options.filter(opt => tieBreakerInfo.tiedStyles.includes(opt.style)) }
                    : QUESTIONS[currentQuestionIndex];

                return (
                    <Quiz
                        questionData={questionData}
                        onAnswer={handleAnswer}
                        onBack={handleBack}
                        currentQuestionIndex={currentQuestionIndex}
                        totalQuestions={QUESTIONS.length}
                        isTieBreaker={isTieBreaker}
                    />
                );
            case 'loading':
                return <LoadingScreen onComplete={onLoadingComplete} />;
            case 'results':
                return <Results userAnswers={userAnswers} onRestart={resetQuiz} />;
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto max-w-3xl p-4 sm:p-6">
            <div className="quiz-card bg-white rounded-lg overflow-hidden">
                <Header />
                <main className="p-6 md:p-8">
                    {renderContent()}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;