export const harvestPlants = (seedsArray) => {
    const plantArray = []
    seedsArray.forEach(plant => {
        if(plant.type === "Corn"){
            const cornOutput = plant.output/2
            for(let i=0; i<cornOutput; i++){
                plantArray.push(plant)
            }
        } else {
            for(let i=0; i<plant.output; i++){
                plantArray.push(plant)
            }
        }
    })
    return plantArray
}