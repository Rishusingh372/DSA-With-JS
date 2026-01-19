const sampleData = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Mango" },
  { id: 4, name: "Orange" },
  { id: 5, name: "Grapes" }
];

localStorage.setItem("items", JSON.stringify(sampleData));