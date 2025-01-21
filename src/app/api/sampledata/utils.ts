import { createClient } from '@sanity/client';
import axios from 'axios';

export const SanityServerClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2025-01-15',
  useCdn: false,
});

async function uploadImageToSanity(imageUrl:string) {
  try {
    console.log(`Uploading Image : ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await SanityServerClient.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image Uploaded Successfully : ${asset._id}`);
    return asset._id;
  } 
  catch (error) {
    console.error('Failed to Upload Image:', imageUrl, error);
    return null;
  }
}


export async function importSampleData() {
    try {
      console.log('Fetching Product Data From API ...');
  
      const response = await axios.get("https://next-ecommerce-template-4.vercel.app/api/product")
      const products = response.data.products;
  
      for (const item of products) {
        console.log(`Processing Item: ${item.name}`);
  
        let imageRef = null;
        if (item.imagePath) {
          imageRef = await uploadImageToSanity(item.imagePath);
        }
  
        const sanityItem = {
          _type: 'product',
          name: item.name,
          category: item.category || null,
          price: item.price,
          description: item.description || '',
          discountPercentage: item.discountPercentage || 0,
          stockLevel: item.stockLevel || 0,
          isFeaturedProduct: item.isFeaturedProduct,
          image: imageRef
            ? {
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: imageRef,
                },
              }
            : undefined,
        };
  
        console.log(`Uploading ${sanityItem.category} - ${sanityItem.name} to Sanity !`);
        const result = await SanityServerClient.create(sanityItem);
        console.log(`Uploaded Successfully: ${result._id}`);
        console.log("----------------------------------------------------------")
        console.log("\n\n")
      }
  
      console.log('Data Import Completed Successfully !');
    } catch (error) {
      console.error('Error Importing Data : ', error);
    }
  }