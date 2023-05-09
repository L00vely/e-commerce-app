import { useState, useEffect } from "react";
import { fetchPlants} from '../util/fetchPlants';

export const useFetchPlants = () => {
    const [ plants, setPlants ] = useState([]);
    const [ loadingPlants, setLoadingPlants ] = useState( true );

    useEffect( () => {
        setLoadingPlants(true);
        const getPlantsInfo = async() => {
            const res = await fetchPlants();
           
            setPlants(res.data);
            setLoadingPlants(false);  
        }
        getPlantsInfo();
    }, []);


    return {
        plants: plants,
        loadingPlants: loadingPlants,
      
    }
}