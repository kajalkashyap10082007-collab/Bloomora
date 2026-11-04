
import { useEffect, useState } from 'react';
import { Calendar, Bell, Plus, Trash2, Leaf } from 'lucide-react';
import { Button } from './ui/Base';
import { plants } from '../data/plants';

type CarePlant = {
  id: string;
  plantId: string;
  name: string;
  lastWatered: string;
};

const STORAGE_KEY = 'bloomora_plant_care_list';

export const PlantCarePlanner = () => {
  const [myPlants, setMyPlants] = useState<CarePlant[]>([]);
  const [selectedPlant, setSelectedPlant] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedPlants = localStorage.getItem(STORAGE_KEY);
      if (savedPlants) {
        const parsedPlants = JSON.parse(savedPlants);
        if (Array.isArray(parsedPlants)) {
          setMyPlants(parsedPlants);
        }
      }
    } catch {
      setMyPlants([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(myPlants));
    } catch {
      // The planner remains usable if browser storage is unavailable.
    }
  }, [myPlants, isLoaded]);

  const today = () => new Date().toISOString().split('T')[0];

  const addPlant = () => {
    if (!selectedPlant) return;

    const plant = plants.find((p) => p.id === selectedPlant);
    if (!plant) return;

    if (myPlants.some((p) => p.plantId === selectedPlant)) {
      return;
    }

    const newPlant: CarePlant = {
      id: crypto.randomUUID(),
      plantId: plant.id,
      name: plant.commonName,
      lastWatered: today(),
    };

    setMyPlants((current) => [...current, newPlant]);
    setSelectedPlant('');
  };

  const removePlant = (id: string) => {
    setMyPlants((current) => current.filter((plant) => plant.id !== id));
  };

  const waterPlant = (id: string) => {
    setMyPlants((current) =>
      current.map((plant) =>
        plant.id === id
          ? { ...plant, lastWatered: today() }
          : plant
      )
    );
  };

  const formatDate = (date: string) => {
    return new Date(`${date}T00:00:00`).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const availablePlants = plants.filter(
    (plant) => !myPlants.some((item) => item.plantId === plant.id)
  );

  return (
    <section
      className="max-w-4xl mx-auto bg-white border border-stone-100 shadow-sm p-5 sm:p-8 rounded-sm"
      aria-labelledby="plant-care-planner-title"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h2
            id="plant-care-planner-title"
            className="text-2xl font-serif font-bold text-forest"
          >
            Plant Care Planner
          </h2>
          <p className="text-stone-500 text-sm mt-2">
            Keep track of your watering schedule and never forget your green friends.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <label htmlFor="care-plant-select" className="sr-only">
            Select a plant to add
          </label>

          <select
            id="care-plant-select"
            value={selectedPlant}
            onChange={(e) => setSelectedPlant(e.target.value)}
            className="min-w-0 flex-grow bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest"
          >
            <option value="">Select a plant to add...</option>
            {availablePlants.map((plant) => (
              <option key={plant.id} value={plant.id}>
                {plant.commonName}
              </option>
            ))}
          </select>

          <Button
            onClick={addPlant}
            size="sm"
            disabled={!selectedPlant}
            className="gap-2 justify-center"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            Add Plant
          </Button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {myPlants.length} plants in your care list.
      </p>

      {myPlants.length > 0 ? (
        <div className="space-y-4">
          {myPlants.map((plant) => (
            <article
              key={plant.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-stone-50 border border-stone-100 rounded-sm"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-3 bg-white rounded-full text-sage border border-stone-100 shrink-0">
                  <Calendar className="h-6 w-6" aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-forest break-words">
                    {plant.name}
                  </h3>
                  <p className="text-stone-500 text-xs mt-1">
                    Last watered: {formatDate(plant.lastWatered)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => waterPlant(plant.id)}
                  className="gap-2"
                >
                  <Bell className="h-4 w-4" aria-hidden="true" />
                  Watered Today
                </Button>

                <button
                  type="button"
                  onClick={() => removePlant(plant.id)}
                  aria-label={`Remove ${plant.name} from care list`}
                  title={`Remove ${plant.name}`}
                  className="p-2 text-stone-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-sm transition-colors"
                >
                  <Trash2 className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed border-stone-100 rounded-sm">
          <Leaf
            className="h-12 w-12 text-stone-200 mx-auto mb-4"
            aria-hidden="true"
          />
          <p className="text-stone-500">
            Your care list is empty. Add a plant to get started.
          </p>
        </div>
      )}

      <p className="mt-8 text-[10px] text-stone-400 text-center uppercase tracking-widest font-medium">
        Your plant care list is saved locally in this browser.
      </p>
    </section>
  );
};
