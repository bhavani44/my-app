import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Home/Header';
import Footer from './Components/Home/Footer';
import Home from './Components/Home/Home';
import HomeRenderComponent from './Components/Home/HomeRenderComponent';
import SubpageRenderComponent from './Components/SubpageRenderComponent';
import FoodHealthHome from './Components/FoodHealthNutriton/FoodNutritionHome';
import CarbohydrateHome from './Components/Carbohydrate/CarbohydrateHome';
import FatHome from './Components/Fat/FatHome';
import ProteinHome from './Components/Protein/ProteinHome';
import VitaminHome from './Components/Vitamin/VitaminHome';
import MineralsHome from './Components/Minerals/MineralsHome';
import {FoodHealthCrossWordComponent, CarbohydrateCrossWordComponent,FatCrossWordComponent, ProteinCrossWordComponent, VitaminCrossWordComponent, MineralsCrossWordComponent} from './Components/CrosswordGame/CrossWord';
import FoodHealthWordSearch from './Components/FoodHealthNutriton/WordSearch/WordSearch';
import FoodHealthScramble from './Components/FoodHealthNutriton/FoodHealthScramble/FoodHealthScramble';
import FatScramble from './Components/Fat/FatScramble/FatScramble';
// import FoodHealthScramble from './Components/FoodHealthNutriton/FoodHealthScramble/FoodHealthScramble';



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/FoodHealthHome' element={<FoodHealthHome />} />
      <Route path='/Carbohydrate' element={<CarbohydrateHome />} />
      <Route path='/Fat' element={<FatHome />} />
      <Route path='/Protein' element={<ProteinHome />} />
      <Route path='/Vitamin' element={<VitaminHome />} />
      <Route path='/Minerals' element={<MineralsHome />} />
      <Route path="/:id" element={<HomeRenderComponent />} />
      <Route path="/:name" element={<SubpageRenderComponent />} /> 
      <Route path="/foodhealthcrossword" element={<FoodHealthCrossWordComponent />} />
      <Route path="/carbohydratecrossword" element={<CarbohydrateCrossWordComponent />} />
      <Route path="/fatcrossword" element={<FatCrossWordComponent />} />
      <Route path="/proteincrossword" element={<ProteinCrossWordComponent />} />
      <Route path="/vitamincrossword" element={<VitaminCrossWordComponent />} />
      <Route path="/mineralscrossword" element={<MineralsCrossWordComponent />} />
      <Route path="/foodhealthwordsearch" element={<FoodHealthWordSearch />} />
      <Route path="/foodhealthscramble" element={<FoodHealthScramble />} />
      <Route path="/fatscramble" element={<FatScramble />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
