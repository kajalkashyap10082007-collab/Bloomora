
import { useState } from 'react';
import { motion } from 'motion/react';
import { Move, Grid3X3, Trash2 } from 'lucide-react';
import { Button } from './ui/Base';
import { cn } from '../utils/cn';

interface GardenElement {
  id: string;
  x: number;
  y: number;
  type: string;
}

export const GardenPlanner = () => {
  const [pots, setPots] = useState<GardenElement[]>([]);

  const addPot = (type: string) => {
    setPots((current) => {
      const offset = (current.length % 6) * 55;

      return [
        ...current,
        {
          id: `${Date.now()}-${current.length}`,
          x: 30 + offset,
          y: 45 + offset,
          type,
        },
      ];
    });
  };

  const removePot = (id: string) => {
    setPots((current) => current.filter((pot) => pot.id !== id));
  };

  const moveWithKeyboard = (
    event: React.KeyboardEvent<HTMLDivElement>,
    pot: GardenElement
  ) => {
    const step = 10;
    let x = pot.x;
    let y = pot.y;

    switch (event.key) {
      case 'ArrowLeft':
        x = Math.max(0, x - step);
        break;
      case 'ArrowRight':
        x = Math.min(75, x + step);
        break;
      case 'ArrowUp':
        y = Math.max(0, y - step);
        break;
      case 'ArrowDown':
        y = Math.min(75, y + step);
        break;
      default:
        return;
    }

    event.preventDefault();

    setPots((current) =>
      current.map((item) =>
        item.id === pot.id ? { ...item, x, y } : item
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto bg-white border border-stone-100 shadow-sm overflow-hidden rounded-sm">
      <div className="flex flex-col lg:flex-row min-h-[600px]">

        {/* Sidebar Controls */}
        <aside className="w-full lg:w-72 shrink-0 bg-stone-50 border-r border-stone-100 p-6 lg:p-8 flex flex-col gap-8">
          <div>
            <h2 className="text-xl font-serif font-bold text-forest mb-2">
              Garden Planner
            </h2>
            <p className="text-stone-500 text-xs leading-relaxed">
              Create a simple layout for your balcony or terrace garden.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
              Add Elements
            </h3>

            <button
              type="button"
              onClick={() => addPot('Large Pot')}
              className="flex items-center gap-3 p-3 bg-white border border-stone-200 rounded-sm text-sm hover:border-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest transition-all"
            >
              <span aria-hidden="true" className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center text-forest font-bold">
                L
              </span>
              Large Pot
            </button>

            <button
              type="button"
              onClick={() => addPot('Small Pot')}
              className="flex items-center gap-3 p-3 bg-white border border-stone-200 rounded-sm text-sm hover:border-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest transition-all"
            >
              <span aria-hidden="true" className="w-8 h-8 bg-sage/20 rounded-full flex items-center justify-center text-forest font-bold">
                S
              </span>
              Small Pot
            </button>

            <button
              type="button"
              onClick={() => addPot('Bench')}
              className="flex items-center gap-3 p-3 bg-white border border-stone-200 rounded-sm text-sm hover:border-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest transition-all"
            >
              <span aria-hidden="true" className="w-12 h-6 bg-sand/40 rounded-sm flex items-center justify-center text-forest font-bold text-[10px]">
                BENCH
              </span>
              Seating
            </button>
          </div>

          <div className="mt-auto pt-6 border-t border-stone-200">
            <Button
              type="button"
              onClick={() => setPots([])}
              variant="outline"
              size="sm"
              className="w-full gap-2"
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              Clear Layout
            </Button>
          </div>
        </aside>

        {/* Drawing Area */}
        <section
          className="flex-1 min-h-[420px] lg:min-h-[600px] relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] overflow-hidden"
          aria-label="Interactive garden layout planner"
        >
          <div
            className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-white/90 px-3 py-2 rounded-full border border-stone-200 text-[10px] font-bold text-stone-500 uppercase tracking-widest"
            aria-hidden="true"
          >
            <Grid3X3 className="h-3 w-3" />
            Grid View
          </div>

          {pots.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-stone-500">
              <p className="italic text-sm">
                Add pots or seating from the sidebar to start planning.
              </p>
            </div>
          )}

          <p className="sr-only" aria-live="polite">
            {pots.length} garden elements added.
          </p>

          {pots.map((pot) => (
            <motion.div
              key={pot.id}
              drag
              dragMomentum={false}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 450 }}
              dragElastic={0}
              role="group"
              aria-label={`${pot.type}. Use arrow keys to move this element.`}
              tabIndex={0}
              onKeyDown={(event) => moveWithKeyboard(event, pot)}
              className="absolute cursor-move group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm"
              style={{ top: pot.y, left: pot.x, touchAction: 'none' }}
            >
              <div
                className={cn(
                  'relative flex items-center justify-center shadow-md',
                  pot.type === 'Large Pot'
                    ? 'w-24 h-24 bg-forest text-white rounded-full'
                    : pot.type === 'Small Pot'
                    ? 'w-16 h-16 bg-sage text-white rounded-full'
                    : 'w-32 h-16 bg-sand text-dark rounded-sm'
                )}
              >
                <span className="text-[10px] font-bold text-center px-2">
                  {pot.type}
                </span>

                <button
                  type="button"
                  onClick={() => removePot(pot.id)}
                  aria-label={`Remove ${pot.type}`}
                  className="absolute -top-2 -right-2 bg-white text-red-600 p-2 rounded-full shadow-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 transition-opacity"
                >
                  <Trash2 className="h-3 w-3" aria-hidden="true" />
                </button>

                <Move
                  className="absolute -bottom-1 -left-1 h-4 w-4 text-white/70 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};
