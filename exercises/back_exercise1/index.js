import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "C:\\Users\\Itachi\\Documents\\Visual Studio Code\\web_dev\\backend\\exercise1";

let files = await fs.readdir(basepath);

for (const item of files) {
    console.log("running for ", item);
    let ext = item.split(".")[item.split(".").length - 1];
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        const targetDir = path.join(basepath, ext);

        if (fsn.existsSync(targetDir)) {
            // Move the file to this directory if it already exists and it's not a js or json file
            await fs.rename(path.join(basepath, item), path.join(targetDir, item));
        } else {
            // Create the directory and then move the file
            await fs.mkdir(targetDir);
            await fs.rename(path.join(basepath, item), path.join(targetDir, item));
        }
    }
}
