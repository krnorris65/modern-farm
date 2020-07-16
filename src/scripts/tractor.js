import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

export const plantSeeds = (planArray) => {

    planArray.forEach(row => {
        row.forEach(plant => {
            switch(plant){
                case "Wheat":
                    addPlant(createWheat())
                    break
                case "Sunflower":
                    addPlant(createSunflower())
                    break
                case "Soybean":
                    addPlant(createSoybean())
                    break
                case "Potato":
                    addPlant(createPotato())
                    break
                case "Corn":
                    addPlant(createCorn())
                    break
                case "Asparagus":
                    addPlant(createAsparagus())
                    break
                    
            }
        })
    })

}