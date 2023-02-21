import { ICategory } from "../components/CategoryWiseProducts/types";
import { IProduct } from "../components/Product/types";

export const hardwareProductData: IProduct[] = [
  {
    productId: 1,
    productCode: "stainless-steel-smooth-hettic-channel-18-inch",
    productImage:
      "https://5.imimg.com/data5/IOS/Default/2022/8/JV/HH/ZQ/18923010/product-jpeg-1000x1000.png",
    productMarketPrice: "655",
    productDiscountedPrice: "400",
    productRatingValue: 4,
    productTitle: "Stainless Steel Smooth Hettich Channels 18 Inch",
    productCategory: "hardware",
    productSubCategory: "door",
  },
  {
    productId: 2,
    productCode: "motise-door-handle-set-aluminium-8m",
    productImage:
      "https://mccoymart.com/_next/image/?url=https%3A%2F%2Fmm.media-mccoymart.com%2Fbuy%2Fimage%2Fcatalog%2Fproducts%2F2019%2F07%2Fdhm.webp&w=1920&q=75",
    productMarketPrice: "789",
    productDiscountedPrice: "576",
    productRatingValue: 4.2,
    productTitle:
      "Mortise Door Handle Set For Aluminium Casement Door - Series - McCoy DHM - White - McCoy 8M",
    productCategory: "hardware",
    productSubCategory: "door",
  },
];

export const appliancesProductData: IProduct[] = [
  {
    productId: 1,
    productCode: "AmazonBasics-Inverter-Frost-Free-Refrigerator-Silver",
    productImage:
      "https://m.media-amazon.com/images/I/41rQ96NJTlL._SX679_.jpg",
    productMarketPrice: "88,999",
    productDiscountedPrice: "51,990",
    productRatingValue: 4,
    productTitle: "AmazonBasics 564 L Inverter Frost-Free Side-by-Side Refrigerator with Water Dispenser (2022, Auto Defrost, Multi Airflow, Silver Steel)",
    productCategory: "appliances",
    productSubCategory: "fridge",
  },
  {
    productId: 2,
    productCode: "motise-door-handle-set-aluminium-8m",
    productImage:
      "https://mccoymart.com/_next/image/?url=https%3A%2F%2Fmm.media-mccoymart.com%2Fbuy%2Fimage%2Fcatalog%2Fproducts%2F2019%2F07%2Fdhm.webp&w=1920&q=75",
    productMarketPrice: "789",
    productDiscountedPrice: "576",
    productRatingValue: 4.2,
    productTitle:
      "Mortise Door Handle Set For Aluminium Casement Door - Series - McCoy DHM - White - McCoy 8M",
    productCategory: "hardware",
    productSubCategory: "door",
  },
];


export const categoryData: ICategory[] = [
  {
    categoryId: 1,
    categoryCode: "hardware",
    categoryType: "Hardware",
    categoryLink: "/hardware",
    categoryImage:
      "https://mccoymart.com/_next/image/?url=https%3A%2F%2Fmm.media-mccoymart.com%2Fbuy%2Fimage%2Fcatalog%2Fcategory_images%2FHardware-Image.webp&w=1920&q=75",
    categoryProducts: hardwareProductData,
  },
  {
    categoryId: 2,
    categoryCode: "appliances",
    categoryType: "Appliances",
    categoryLink: "/appliances",
    categoryImage:
      "https://business.amazon.in/assets/in/24th-jan/705_Website_Blog_Appliances_2880x960.jpg.transform/2048x682/image.jpg",
    categoryProducts: appliancesProductData
    ,
  },
  {
    categoryId: 3,
    categoryCode: "sanitary",
    categoryType: "Sanitary",
    categoryLink: "/sanitary",
    categoryImage:
      "https://i0.wp.com/engineersblog.net/wp-content/uploads/2021/02/sanitary-ware.jpg?w=500&ssl=1",
    categoryProducts: hardwareProductData,
  },
  {
    categoryId: 4,
    categoryCode: "electricals",
    categoryType: "Electricals",
    categoryLink: "/electricals",
    categoryImage:
      "https://entergyelectricals.com/wp-content/uploads/2020/02/entergy.jpg",
    categoryProducts: hardwareProductData,
  },
  {
    categoryId: 5,
    categoryCode: "adhesives",
    categoryType: "Adhesives",
    categoryLink: "/adhesives",
    categoryImage:
      "https://img.freepik.com/premium-vector/different-types-adhesives-glue-art-craft-vector-illustration_609998-391.jpg?w=2000",
    categoryProducts: hardwareProductData,
  },
];
