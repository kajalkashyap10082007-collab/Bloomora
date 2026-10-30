import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ExplorePlants } from './pages/ExplorePlants';
import { PlantDetails } from './pages/PlantDetails';
import { Blog } from './pages/Blog';
import { Article } from './pages/Article';
import { About, Contact, StaticPage, NotFound } from './pages/StaticPages';
import { SearchPage } from './pages/Search';

// Category Pages
import { IndoorPlants } from './pages/categories/IndoorPlants';
import { OutdoorPlants } from './pages/categories/OutdoorPlants';
import { BalconyGarden } from './pages/categories/BalconyGarden';
import { TerraceGarden } from './pages/categories/TerraceGarden';
import { VegetableGardening } from './pages/categories/VegetableGardening';
import { FlowerGardening } from './pages/categories/FlowerGardening';
import { SeasonalGardening } from './pages/categories/SeasonalGardening';
import { DIYGardenIdeas } from './pages/categories/DIYGardenIdeas';

import { PlantCarePlanner } from './components/PlantCarePlanner';
import { Container } from './components/ui/Base';

function ToolWrapper({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="py-32 bg-cream min-h-screen">
      <Container>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest mb-20 text-center">{title}</h1>
        {children}
      </Container>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<ExplorePlants />} />
          <Route path="/plants/:slug" element={<PlantDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<StaticPage type="privacy" />} />
          <Route path="/disclaimer" element={<StaticPage type="disclaimer" />} />
          <Route path="/search" element={<SearchPage />} />
          
          {/* Specific Category Pages */}
          <Route path="/indoor-plants" element={<IndoorPlants />} />
          <Route path="/outdoor-plants" element={<OutdoorPlants />} />
          <Route path="/balcony-garden" element={<BalconyGarden />} />
          <Route path="/terrace-garden" element={<TerraceGarden />} />
          <Route path="/vegetable-gardening" element={<VegetableGardening />} />
          <Route path="/flower-gardening" element={<FlowerGardening />} />
          <Route path="/seasonal-gardening" element={<SeasonalGardening />} />
          <Route path="/diy-garden-ideas" element={<DIYGardenIdeas />} />
          
          {/* Specific Tool Pages */}
          <Route path="/plant-care" element={<ToolWrapper title="Care Planner"><PlantCarePlanner /></ToolWrapper>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
