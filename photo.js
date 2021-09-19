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

class MattedPhoto extends Photo {
    constructor(width, height, color) {
        super(width, height);
        this.color =  color;
    }
    price() {
        const addedPrice = 10;
        let finalPriceMatted = super.price() + addedPrice;
        return finalPriceMatted;
    }
    toString() {
       return `This is a ${this.width} by ${this.height} Matted ${this.color} photo and it costs ${this.price()}`; 
    }
}

class FramedPhoto extends Photo {
    constructor(width, height, material, style) {
        super(width, height);
        this.material = material;
        this.style = style;
    }
    price() {
        const addedPrice = 25;
        let finalPriceFramed = super.price() + addedPrice;
        return finalPriceFramed;
    }
    toString() {
        return `This is a ${this.width} by ${this.height} ${this.material} framed photo. The style is ${this.style} and it costs ${this.price()}`;
    }
}

let mattedPhoto1 = new MattedPhoto(8, 10, "Brown");
console.log(mattedPhoto1.toString());

let mattedPhoto2 = new MattedPhoto(10, 12, "Red");
console.log(mattedPhoto2.toString());

let framedPhoto1 = new FramedPhoto(10, 12, "Silver", "Wood");
console.log(framedPhoto1.toString());

let framedPhoto2 = new FramedPhoto(8, 10, "Aluminum");
console.log(framedPhoto2.toString());