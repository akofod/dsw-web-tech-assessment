export class Product {
    id: number;
    brand: string;
    name: string;
    price: number;
    compValue?: number;
    rating?: number;
    activeColor?: number;
    colors?: Color[];
}

export class Color {
    id: number;
    displayName: string;
}
