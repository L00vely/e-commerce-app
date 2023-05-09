import { useFetchPlants } from "../../hooks/useFetchPlants";
import { PlantCard } from "../PlantCard/PlantCard";

export const PlantsPage = () => {
    const { plants, loadingPlants } = useFetchPlants();
    
    return(
        <main className="plants-page">
           
          
                {plants.map((plant, index) => {
                    return(
                        <PlantCard 
                            {...plant}
                            key = {index}
                        />
                    )
                })}
        

         
        </main>
        
    )
} 
