import axios from "axios";
import fs from "fs";

let urls = [
  {
    url: "https://salamlang.github.io/Salam/config/json/layout/type.json",
    fileName: "tags.json",
  },
  {
    url: "https://salamlang.github.io/Salam/config/json/layout/attribute/type.json",
    fileName: "attr.json",
  },
  {
    url: "https://salamlang.github.io/Salam/config/json/layout/attribute/style/type.json",
    fileName: "style.json",
  },
];

urls.forEach((item) => {
  axios.get(item.url).then((d) => {
    fs.writeFile(
      "src/data/" + item.fileName,
      JSON.stringify(d.data, null, 2),
      (error) => {
        if (error) {
          console.error("Error : ", err);
        } else {
          console.log("Data Saved and File Saved");
        }
      },
    );
  });
});
