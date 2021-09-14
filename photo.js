class Photo {
    constructor(width = 8, height = 10) {
        this.width = width;
        this.height = height;

    }
    price() {
        let finalPrice;

        if((this.width === 8) && (this.height === 10)) {
            finalPrice = 4;
        } else if((this.width === 10) && (this.height === 12)) {
            finalPrice = 6;
        } else {
            finalPrice = 10;
        }
        return finalPrice;
    }
    toString() {
        return `This is ${this.width} by ${this.height} photo and it costs ${this.price()}`
    }
}

let photo1 = new Photo(8, 10);
let photo2 = new Photo (10, 12);
console.log(photo1.toString());
console.log(photo2.toString());