import { showGraph } from "./graph";

export const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // months
export const y = [9, 15, 23, 26, 30, 34, 40, 47, 48, 57, 62]; // Zombie population thousands

showGraph(x, y, "Zombie Population");