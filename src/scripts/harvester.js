export const harvestPlants = (seedsArray) => {
    const plantArray = []
    seedsArray.forEach(plant => {
        // if the plant type is corn then then output is half
        if (plant.type === "Corn") {
            plant.output /= 2

        }
        for (let i = 0; i < plant.output; i++) {
            plantArray.push(plant)
        }
    })
    return plantArray
}
