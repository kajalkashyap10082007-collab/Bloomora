import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, RotateCcw, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Base';
import { plants, Plant } from '../data/plants';
import { PlantCard } from './PlantCard';

export const PlantQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Plant[] | null>(null);

  const questions = [
    {
      id: 'location',
      question: 'Where will your plant live?',
      options: [
        { label: 'Indoors (Living room, bedroom)', value: 'indoor' },
        { label: 'Outdoors (Balcony, garden)', value: 'outdoor' },
      ]
    },
    {
      id: 'light',
      question: 'How much sunlight does the space get?',
      options: [
        { label: 'Low (Shady corner, north window)', value: 'low' },
        { label: 'Medium (Bright indirect light)', value: 'medium' },
        { label: 'High (Direct sunlight, south window)', value: 'high' },
      ]
    },
    {
      id: 'difficulty',
      question: 'How much time can you spend on care?',
      options: [
        { label: 'Very little (I often forget to water)', value: 'beginner' },
        { label: 'A fair amount (I enjoy regular care)', value: 'intermediate' },
        { label: 'A lot (I am an experienced gardener)', value: 'expert' },
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    const currentQuestion = questions[step];
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate results
      const filtered = plants.filter(p => 
        p.category === newAnswers.location &&
        (newAnswers.light === 'high' ? true : p.light === newAnswers.light) &&
        (newAnswers.difficulty === 'expert' ? true : p.difficulty === newAnswers.difficulty)
      );
      setResults(filtered.slice(0, 3));
      setStep(step + 1);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResults(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white border border-stone-100 shadow-sm rounded-sm">
      <AnimatePresence mode="wait">
        {step < questions.length ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-[10px] uppercase tracking-widest text-sage mb-2 font-bold">Step {step + 1} of {questions.length}</span>
            <h3 className="text-3xl font-serif font-bold text-forest mb-8">{questions[step].question}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {questions[step].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className="p-6 border border-stone-100 hover:border-forest hover:bg-forest/5 text-left transition-all group flex items-center justify-between"
                >
                  <span className="font-medium text-dark/80 group-hover:text-forest">{opt.label}</span>
                  <ChevronRight className="h-5 w-5 text-stone-300 group-hover:text-forest" />
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <CheckCircle2 className="h-16 w-16 text-sage" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-forest mb-2">Your Perfect Plant Matches</h3>
            <p className="text-stone-500 mb-12">Based on your answers, these plants will thrive in your space.</p>
            
            {results && results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
                {results.map(p => <PlantCard key={p.id} plant={p} />)}
              </div>
            ) : (
              <div className="py-12 bg-stone-50 rounded-sm mb-12">
                <p className="text-stone-500 italic">No exact matches found, but here are some popular choices.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-8 text-left">
                  {plants.slice(0, 3).map(p => <PlantCard key={p.id} plant={p} />)}
                </div>
              </div>
            )}
            
            <Button onClick={reset} variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Retake Quiz
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
