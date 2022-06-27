interface InventoryItem {
    product: string;
    price: number;
    quantity: number;
}

const inventory: InventoryItem[] = [
    { product: "motor", price: 10.0, quantity: 10 },
    { product: "sensor", price: 12.5, quantity: 4 },
    { product: "LED", price: 1.0, quantity: 20 },
];

function calcInventoryValue(array: InventoryItem[]) {}
