export const fetchPlants = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/plants');
        const data = await res.json();
        return data;
  } catch(error){
        return {error}
    }
    
}
