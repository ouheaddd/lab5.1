const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

const applyDiscountAndAddId = (medicines) => {
    return medicines.map((medicine, index) => {
        const id = index + 1;

        const discountedPrice = medicine.price > 300 ? medicine.price * 0.7 : medicine.price;

        return { id, name: medicine.name, price: discountedPrice.toFixed(2) };
    });
};

const discountedMedicines = applyDiscountAndAddId(medicines);

console.log(discountedMedicines);

document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById('6');
    discountedMedicines.forEach(medicine => {
        outputDiv.innerHTML += `<p>ID: ${medicine.id}, Name: ${medicine.name}, Price: ${medicine.price} грн</p>`;
    });
});
