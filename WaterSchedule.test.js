const {createSchedule, findPlantOccurance}= require('./WaterSchedule.js');

test("findPlantOccurance with Incorrect Name", () => {
  expect(findPlantOccurance("Wav Fern")).toBe(null);
});

test("findPlantOccurance with Fiddle Leaf Fig", () => {
  expect(findPlantOccurance("Fiddle Leaf Fig")).toBe(7);
});

test("findPlantOccurance with Snake Plant", () => {
  expect(findPlantOccurance("Snake Plant")).toBe(14);
});

test("findPlantOccurance with Money Tree", () => {
  expect(findPlantOccurance("Money Tree")).toBe(14);
});

test("findPlantOccurance with Bird's Nest Fern", () => {
  expect(findPlantOccurance("Bird's Nest Fern")).toBe(3);
});

test("findPlantOccurance with Croton", () => {
  expect(findPlantOccurance("Croton")).toBe(7);
});

test("findPlantOccurance with Bell Pepper Plant", () => {
  expect(findPlantOccurance("Bell Pepper Plant")).toBe(3);
});

test("findPlantOccurance with Strawberry Plant", () => {
  expect(findPlantOccurance("Strawberry Plant")).toBe(3);
});

test("findPlantOccurance with Dracaena", () => {
  expect(findPlantOccurance("Dracaena")).toBe(14);
});

test("findPlantOccurance with Spider Plant", () => {
  expect(findPlantOccurance("Spider Plant")).toBe(7);
});

test("findPlantOccurance with Jade", () => {
  expect(findPlantOccurance("Jade")).toBe(14);
});

test("findPlantOccurance with Wavy Fern", () => {
  expect(findPlantOccurance("Wavy Fern")).toBe(2);
});
