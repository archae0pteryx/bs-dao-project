import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x5e4CdA6ee3141f2a78B8905cce301052bbC13C0d",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Murray drop",
        description: "This NFT will give you access to CodeDAO",
        image: readFileSync("scripts/assets/drop-murray.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
