import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";

const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const plantsArray = usePlants()
const harvestedPlants = harvestPlants(plantsArray)