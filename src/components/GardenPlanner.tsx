import { useState } from 'react';
import { motion } from 'motion/react';
import { Move, Grid3X3, Trash2, Plus } from 'lucide-react';
import { Button } from './ui/Base';
import { cn } from '../utils/cn';

export const GardenPlanner = () => {
  const [pots, setPots] = useState<{ id: string; x: number; y: number; type: string }[]>([]);

  const addPot = (type: string) => {
    setPots([...pots, { 
      id: Math.random().toString(36).substr(2, 9), 
      x: 50, 
      y: 50, 
      type 
    }]);
  };

  const removePot = (id: string) => {
    setPots(pots.filter(p => p.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto bg-white border border-stone-100 shadow-sm overflow-hidden rounded-sm">
      <div className="flex flex-col lg:flex-row h-[600px]">
        {/* Sidebar Controls */}
        <div className="w-full lg:w-72 bg-stone-50 border-r border-stone-100 p-8 flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-forest mb-2">Garden Planner</h3>
            <p className="text-stone-500 text-xs">Visualize your balcony or terrace garden layout.</p>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Add Elements</span>
            <button 
              onClick={() => addPot('Large Pot')}
              className="flex items-center gap-3 p-3 bg-white border border-stone-200 rounded-sm text-sm hover:border-forest transition-all"
            >
              <div className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center text-forest font-bold">L</div>
              Large Pot
            </button>
            <button 
              onClick={() => addPot('Small Pot')}
              className="flex items-center gap-3 p-3 bg-white border border-stone-200 rounded-sm text-sm hover:border-forest transition-all"
            >
              <div className="w-8 h-8 bg-sage/20 rounded-full flex items-center justify-center text-forest font-bold">S</div>
              Small Pot
            </button>
            <button 
              onClick={() => addPot('Bench')}
              className="flex items-center gap-3 p-3 bg-white border border-stone-200 rounded-sm text-sm hover:border-forest transition-all"
            >
              <div className="w-12 h-6 bg-sand/40 rounded-sm flex items-center justify-center text-forest font-bold text-[10px]">BENCH</div>
              Seating
            </button>
          </div>

          <div className="mt-auto pt-8 border-t border-stone-200">
            <Button onClick={() => setPots([])} variant="outline" size="sm" className="w-full gap-2">
              <Trash2 className="h-4 w-4" />
              Clear Layout
            </Button>
          </div>
        </div>

        {/* Drawing Area */}
        <div className="flex-grow relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] overflow-hidden">
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-stone-200 text-[10px] font-bold text-stone-400 uppercase tracking-widest">
            <Grid3X3 className="h-3 w-3" />
            Grid View
          </div>
          
          {pots.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-stone-300">
              <p className="italic">Drag elements from the sidebar to start planning</p>
            </div>
          )}

          {pots.map((pot) => (
            <motion.div
              key={pot.id}
              drag
              dragMomentum={false}
              className="absolute cursor-move group"
              style={{ top: pot.y, left: pot.x }}
            >
              <div className={cn(
                "relative flex items-center justify-center shadow-md transition-transform group-active:scale-110",
                pot.type === 'Large Pot' ? "w-24 h-24 bg-forest text-white rounded-full" : 
                pot.type === 'Small Pot' ? "w-16 h-16 bg-sage text-white rounded-full" : 
                "w-32 h-16 bg-sand text-dark rounded-sm"
              )}>
                <span className="text-[10px] font-bold text-center px-2">{pot.type}</span>
                <button 
                  onClick={() => removePot(pot.id)}
                  className="absolute -top-2 -right-2 bg-white text-red-500 p-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
                <div className="absolute -bottom-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Move className="h-4 w-4 text-white/50" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
