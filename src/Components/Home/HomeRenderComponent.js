import React from 'react';
import { useParams } from "react-router-dom";
import CarbohydrateHome from '../Carbohydrate/CarbohydrateHome';
import FatHome from '../Fat/FatHome';
import VitaminHome from '../Vitamin/VitaminHome';
import MineralsHome from '../Minerals/MineralsHome';
import ProteinHome from '../Protein/ProteinHome';
import FoodHealthHome from '../FoodHealthNutriton/FoodNutritionHome';

function HomeRenderComponent() {
  const { id } = useParams();
  let renderComponent;
  renderComponent = () => {
    switch (id) {
      case "1":
        return <FoodHealthHome />
      case "2":
        return <CarbohydrateHome />
      case "3":
        return <FatHome />
      case "4":
        return <ProteinHome />
      case "5":
        return <VitaminHome />
      case "6":
        return <MineralsHome />

      default:
        return <h1>Not found</h1>
    }
  }

  return (
    renderComponent()
  );
}
export default HomeRenderComponent;