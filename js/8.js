class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}

const arr = ["apple", "banana", "mango"];

const storage = new Storage(arr);

storage.addItem("orange");
storage.removeItem("banana");

const finalItems = storage.getItems();

console.log(finalItems);

document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById('8');
    outputDiv.innerHTML = `<p>Final items in storage: ${finalItems.join(', ')}</p>`;
});
