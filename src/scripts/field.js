const plantArray = []

export const addPlant = (seedInput) => {
    // for all plants except corn seedInput will be an object, corn will be an array of objects
    if(Array.isArray(seedInput)){
        for(const plant in seedInput){
            plantArray.push(seedInput[plant])
        }
    } else {
        plantArray.push(seedInput)
    }
}

export const usePlants = () => plantArray.slice()