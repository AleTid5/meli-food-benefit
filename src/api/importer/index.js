const excelToJson = require("convert-excel-to-json");
const fs = require("fs");

const SPREADSHEET_FILENAME = "Alimentación.xlsx";
const SPREADSHEET_NAME = "Listado completo";

const { [SPREADSHEET_NAME]: shops } = excelToJson({
  sourceFile: `${__dirname}/${SPREADSHEET_FILENAME}`,
  columnToKey: {
    A: "commerce",
    B: "location",
    C: "address",
    D: "province",
  },
});

// Remove the first element because is the column header
shops.splice(0, 1);

const provinces = [];
const dataToSave = {};

shops.forEach((shop, id) => {
  const province =
    (shop.province && shop.province.toUpperCase()) || "TIENDA ONLINE";

  if (!provinces.includes(province)) {
    dataToSave[province] = [];
    provinces.push(province);
  }

  dataToSave[province].push({ ...shop, id });
});

provinces.forEach((province) => {
  fs.writeFile(
    `${__dirname}/../provinces/${province}.json`,
    JSON.stringify(dataToSave[province]),
    () => console.log(`${province} saved OK :)`)
  );
});
