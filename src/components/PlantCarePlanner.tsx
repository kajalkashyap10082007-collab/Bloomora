import { useState } from 'react';
import { Calendar, Bell, Plus, Trash2 } from 'lucide-react';
import { Button } from './ui/Base';
import { plants } from '../data/plants';

export const PlantCarePlanner = () => {
  const [myPlants, setMyPlants] = useState<{ id: string; name: string; lastWatered: string }[]>([]);
  const [selectedPlant, setSelectedPlant] = useState('');

  const addPlant = () => {
    if (!selectedPlant) return;
    const plant = plants.find(p => p.id === selectedPlant);
    if (!plant) return;

    setMyPlants([...myPlants, { 
      id: Math.random().toString(36).substr(2, 9), 
      name: plant.commonName,
      lastWatered: new Date().toISOString().split('T')[0]
    }]);
    setSelectedPlant('');
  };

  const removePlant = (id: string) => {
    setMyPlants(myPlants.filter(p => p.id !== id));
  };

  const waterPlant = (id: string) => {
    setMyPlants(myPlants.map(p => p.id === id ? { ...p, lastWatered: new Date().toISOString().split('T')[0] } : p));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white border border-stone-100 shadow-sm p-8 rounded-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h3 className="text-2xl font-serif font-bold text-forest">Plant Care Planner</h3>
          <p className="text-stone-500 text-sm">Keep track of your watering schedule and never forget your green friends.</p>
        </div>
        <div className="flex gap-2">
          <select 
            value={selectedPlant} 
            onChange={(e) => setSelectedPlant(e.target.value)}
            className="flex-grow bg-stone-50 border border-stone-200 rounded-sm px-4 py-2 text-sm focus:outline-none focus:border-forest"
          >
            <option value="">Select a plant to add...</option>
            {plants.map(p => <option key={p.id} value={p.id}>{p.commonName}</option>)}
          </select>
          <Button onClick={addPlant} size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>

      {myPlants.length > 0 ? (
        <div className="space-y-4">
          {myPlants.map((plant) => (
            <div key={plant.id} className="flex items-center justify-between p-6 bg-stone-50 border border-stone-100 rounded-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full text-sage border border-stone-100">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-forest">{plant.name}</h4>
                  <p className="text-stone-500 text-xs">Last watered: {plant.lastWatered}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" onClick={() => waterPlant(plant.id)} className="gap-2">
                  <Bell className="h-4 w-4" />
                  Watered Today
                </Button>
                <button 
                  onClick={() => removePlant(plant.id)}
                  className="p-2 text-stone-300 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed border-stone-100 rounded-sm">
          <Calendar className="h-12 w-12 text-stone-200 mx-auto mb-4" />
          <p className="text-stone-400 italic">Your care list is empty. Add a plant to get started.</p>
        </div>
      )}
      
      <p className="mt-8 text-[10px] text-stone-400 text-center uppercase tracking-widest font-medium">
        Note: This is a browser-only demo. Data is stored in your current session.
      </p>
    </div>
  );
};
