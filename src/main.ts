import { readFileSync } from "fs";
import { firstSkinFilePath, secondSkinFilePath } from "./constants";

let firstSkin: Buffer;
let secondSkin: Buffer;

try {
    firstSkin = readFileSync(firstSkinFilePath);
    secondSkin = readFileSync(secondSkinFilePath);
} catch (error) {
    console.error(error);

    if (!firstSkin) {
        console.error("Could not find first skin. Expected file path: " + firstSkinFilePath);
        process.exit(1)
    }

    if (!secondSkin) {
        console.error("Could not find first skin. Expected file path: " + secondSkinFilePath);
        process.exit(1);
    }
}

