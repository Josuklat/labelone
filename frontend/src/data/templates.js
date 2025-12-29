const templates = [
  {
    id: "pallet",
    name: "Pallet label",
    description: "Standard logistics pallet label.",
    fields: [
      { id: "lot", label: "Lot number", type: "text" },
      { id: "origin", label: "Origin", type: "text" },
      { id: "destination", label: "Destination", type: "text" },
      { id: "weight", label: "Weight (kg)", type: "number" },
      { id: "barcode", label: "Pallet barcode", type: "barcode" }
    ]
  },
  {
    id: "box",
    name: "Box label",
    description: "Simple box identification label.",
    fields: [
      { id: "code", label: "Box code", type: "text" },
      { id: "content", label: "Content", type: "text" }
    ]
  }
];

export default templates;