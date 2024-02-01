// ProductInterface.ts
interface Product {
    id: number;
    name: string;
    image: string;
    shortDescription: string;
    details: {
      screenSize: string;
      processor: string;
      weight: string;
      ports: string;
      batteryLife: string;
    };
  }
  
  export default Product;
  