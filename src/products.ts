interface Panels {
    name: string;
    price: number;
}

const solarPanels: Panels[] = [
    { name: "silfab", price: 245 },
    { name: "axitech", price: 225 },
    { name: "mission", price: 270 },
];

function calcAverageProductPrice(array: Panels[]) {
    let sumOfPrices: number = 0;
    for (let panels of array) {
        sumOfPrices += panels.price;
    }
    return sumOfPrices / array.length;
}
const averagePrice = calcAverageProductPrice(solarPanels);
console.log(averagePrice);
