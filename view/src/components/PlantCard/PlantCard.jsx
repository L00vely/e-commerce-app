

export const PlantCard = props => {
    const { plant_id, name, family, gender, specie, stock } = props;

    return(
        <div className="plant-card">
            <h2>{name}</h2>
            <h3>{family}</h3>
            <h3>{gender}</h3>
            <h3>{specie}</h3>
            <h3>{stock}</h3>
        </div>
    )
} 
