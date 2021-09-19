export class Photo {
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

export class MattedPhoto extends Photo {
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

export class FramedPhoto extends Photo {
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