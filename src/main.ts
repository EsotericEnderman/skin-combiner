import { firstSkinFilePath, secondSkinFilePath } from "./constants.js";
import { Image } from "image-js";

let firstSkin: Image;
let secondSkin: Image;

try {
    firstSkin = await Image.load(firstSkinFilePath);
    secondSkin = await Image.load(secondSkinFilePath);
} catch (error) {
    console.error(error);
} finally {
    if (!firstSkin) {
        console.error("Could not find first skin. Expected file path: " + firstSkinFilePath);
    }

    if (!secondSkin) {
        console.error("Could not find first skin. Expected file path: " + secondSkinFilePath);
    }

    if (!firstSkin || !secondSkin) {
        process.exit(1);
    }
}

const topOfLowerLayerHead: number[] = [];