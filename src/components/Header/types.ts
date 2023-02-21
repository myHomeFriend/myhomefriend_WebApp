export interface IMenuBar {
  categories: ICategory[];
}

export interface ICategory {
  categoryID: string | number;
  categoryCode: string;
  categoryName: string;
  subCategories?: ISubCategory[];
}

export interface ISubCategory {
  subCategoryID: string | number;
  subCategoryCode: string;
  subCategoryName: string;
  productsType?: IProductType[];
}

export interface IProductType {
  productTypeID: string | number;
  productTypeCode: string;
  productTypeName: string;
}

// export const object: IMenuBar = {
//   categories: [
//     {
//       categoryID: 1,
//       categoryCode: "hardware",
//       categoryName: "Hardware",
//       subCategories: [
//         {
//           subCategoryID: 2,
//           subCategoryCode: "mobiles",
//           subCategoryName: "Mobiles",
//           productsType: [
//             {
//               productTypeID: 1,
//               productTypeCode: "android",
//               productTypeName: "Android",
//             },
//             {
//               productTypeID: 2,
//               productTypeCode: "ios",
//               productTypeName: "IOS",
//             },
//           ],
//         },
//         {
//           subCategoryID: 3,
//           subCategoryCode: "tablets",
//           subCategoryName: "Tablets",
//           productsType: [
//             {
//               productTypeID: 3,
//               productTypeCode: "android",
//               productTypeName: "Android",
//             },
//             {
//               productTypeID: 4,
//               productTypeCode: "ios",
//               productTypeName: "IOS",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       categoryID: 2,
//       categoryCode: "sanitary",
//       categoryName: "Sanitary",
//       subCategories: [
//         {
//           subCategoryID: 4,
//           subCategoryCode: "notebooks",
//           subCategoryName: "Notebooks",
//           productsType: [{}],
//         },
//       ],
//     },
//     {
//       categoryID: 3,
//       categoryCode: "appliances",
//       categoryName: "Appliances",
//       subCategories: [
//         {
//           productsType: [{}],
//         },
//       ],
//     },
//     {
//       categoryID: 4,
//       categoryCode: "electricals",
//       categoryName: "Electricals",
//       subCategories: [
//         {
//           productsType: [{}],
//         },
//       ],
//     },
//     {
//       categoryID: 5,
//       categoryCode: "adhesives",
//       categoryName: "Adhesives",
//       subCategories: [
//         {
//           productsType: [{}],
//         },
//       ],
//     },
//   ],
// };
