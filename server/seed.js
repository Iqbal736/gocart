import mongoose from 'mongoose';
import 'dotenv/config';
import Product from './models/product.model.js';

const products = [
  // Vegetables (10 items)
  { n: 'Farm Fresh Tomato 1kg', c: 'vegetables', s: 'fresh-vegetables', img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500' },
  { n: 'Fresh Potato 1kg', c: 'vegetables', s: 'fresh-vegetables', img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500' },
  { n: 'Red Onion 1kg', c: 'vegetables', s: 'fresh-vegetables', img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500' },
  { n: 'Fresh Spinach', c: 'vegetables', s: 'leafy-vegetables', img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500' },
  { n: 'Mint Leaves', c: 'vegetables', s: 'leafy-vegetables', img: 'https://images.unsplash.com/photo-1628556882751-246ebec58c0f?w=500' },
  { n: 'Crunchy Carrot 500g', c: 'vegetables', s: 'salads', img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500' },
  { n: 'Fresh Cucumber', c: 'vegetables', s: 'salads', img: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500' },
  { n: 'Fresh Broccoli', c: 'vegetables', s: 'exotic-vegetables', img: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500' },
  { n: 'Red Bell Pepper', c: 'vegetables', s: 'exotic-vegetables', img: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa8a?w=500' },
  { n: 'Green Zucchini', c: 'vegetables', s: 'exotic-vegetables', img: 'https://images.unsplash.com/photo-1582281295982-f67d4fc24a73?w=500' },

  // Fruits (10 items)
  { n: 'Kashmir Apple 1kg', c: 'fruits', s: 'fresh-fruits', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cb6c?w=500' },
  { n: 'Robusta Banana 1 Dozen', c: 'fruits', s: 'fresh-fruits', img: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500' },
  { n: 'Green Grapes 500g', c: 'fruits', s: 'fresh-fruits', img: 'https://images.unsplash.com/photo-1596363505729-4190a9506133?w=500' },
  { n: 'Striped Watermelon', c: 'fruits', s: 'melons', img: 'https://images.unsplash.com/photo-1587049352847-81a56d773c1c?w=500' },
  { n: 'Sweet Muskmelon', c: 'fruits', s: 'melons', img: 'https://images.unsplash.com/photo-1591857947171-8bc6f424fc90?w=500' },
  { n: 'Nagpur Orange 1kg', c: 'fruits', s: 'citrus-fruits', img: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=500' },
  { n: 'Fresh Lemon 500g', c: 'fruits', s: 'citrus-fruits', img: 'https://images.unsplash.com/photo-1590502593747-42a996111492?w=500' },
  { n: 'Dragon Fruit 1pc', c: 'fruits', s: 'exotic-fruits', img: 'https://images.unsplash.com/photo-1527325678964-54921661f888?w=500' },
  { n: 'Kiwi Pack (3 Pcs)', c: 'fruits', s: 'exotic-fruits', img: 'https://images.unsplash.com/photo-1585059895524-72359aa06102?w=500' },
  { n: 'Blueberries Box', c: 'fruits', s: 'exotic-fruits', img: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500' },

  // Drinks (8 items)
  { n: 'Classic Cola 2L', c: 'drinks', s: 'soft_drinks', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500' },
  { n: 'Lemon Soda 1L', c: 'drinks', s: 'soft_drinks', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500' },
  { n: 'Mixed Fruit Juice 1L', c: 'drinks', s: 'fruit_juices', img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500' },
  { n: 'Pure Orange Juice 1L', c: 'drinks', s: 'fruit_juices', img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500' },
  { n: 'Energy Drink Can', c: 'drinks', s: 'energy_drinks', img: 'https://images.unsplash.com/photo-1559839913-114cb90cc52b?w=500' },
  { n: 'Iced Lemon Tea', c: 'drinks', s: 'iced_tea', img: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=500' },
  { n: 'Cold Coffee Can', c: 'drinks', s: 'iced_tea', img: 'https://images.unsplash.com/photo-1461023058943-0708e52235eb?w=500' },
  { n: 'Club Soda 750ml', c: 'drinks', s: 'soda', img: 'https://images.unsplash.com/photo-1560506840-0ca0bcaf5df4?w=500' },

  // Dairy (10 items)
  { n: 'Whole Cow Milk 1L', c: 'dairy', s: 'milk', img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500' },
  { n: 'Toned Milk 1L', c: 'dairy', s: 'milk', img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500' },
  { n: 'Soft White Bread', c: 'dairy', s: 'bread_paav', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500' },
  { n: 'Whole Wheat Brown Bread', c: 'dairy', s: 'bread_paav', img: 'https://images.unsplash.com/photo-1554316976-59cbb6f18dd1?w=500' },
  { n: 'Farm White Eggs (6 Pcs)', c: 'dairy', s: 'eggs', img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500' },
  { n: 'Organic Brown Eggs (6 Pcs)', c: 'dairy', s: 'eggs', img: 'https://images.unsplash.com/photo-1506976773559-0731f24d9c7f?w=500' },
  { n: 'Fresh Malai Paneer 200g', c: 'dairy', s: 'paneer_tofu', img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?w=500' },
  { n: 'Thick Plain Curd 400g', c: 'dairy', s: 'curd_yogurt', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500' },
  { n: 'Salted Butter 100g', c: 'dairy', s: 'butter', img: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=500' },
  { n: 'Cheese Slices', c: 'dairy', s: 'cheese', img: 'https://images.unsplash.com/photo-1615486171447-49f3fa042578?w=500' },

  // Snacks (8 items)
  { n: 'Classic Salted Potato Chips', c: 'snacks', s: 'chips', img: 'https://images.unsplash.com/photo-1566478989037-e12483eb1222?w=500' },
  { n: 'Spicy Banana Chips', c: 'snacks', s: 'chips', img: 'https://images.unsplash.com/photo-1621936359516-77884ff20b33?w=500' },
  { n: 'Cheese Nachos 150g', c: 'snacks', s: 'nachos', img: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500' },
  { n: 'Jalapeno Nachos', c: 'snacks', s: 'nachos', img: 'https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?w=500' },
  { n: 'Protein Energy Bar', c: 'snacks', s: 'energy-bars', img: 'https://images.unsplash.com/photo-1622484211148-52261a868f70?w=500' },
  { n: 'Movie Theatre Popcorn', c: 'snacks', s: 'popcorn', img: 'https://images.unsplash.com/photo-1578849278619-e7340f1a9657?w=500' },
  { n: 'Roasted Makhana', c: 'snacks', s: 'makhana', img: 'https://images.unsplash.com/photo-1605335133649-1be812d45c55?w=500' },
  { n: 'Spicy Namkeen Mixture', c: 'snacks', s: 'namkeen', img: 'https://images.unsplash.com/photo-1604085449551-78c66e2c3475?w=500' },

  // Grains (10 items)
  { n: 'Whole Wheat Atta 5kg', c: 'grains', s: 'Aata', img: 'https://images.unsplash.com/photo-1508398711543-ed1b58ce334e?w=500' },
  { n: 'Multigrain Atta 5kg', c: 'grains', s: 'Aata', img: 'https://images.unsplash.com/photo-1596647271926-83679c298ec4?w=500' },
  { n: 'Premium Basmati Rice 5kg', c: 'grains', s: 'Rice', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500' },
  { n: 'Brown Rice 1kg', c: 'grains', s: 'Rice', img: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500' },
  { n: 'Unpolished Toor Dal 1kg', c: 'grains', s: 'Daal', img: 'https://images.unsplash.com/photo-1585994407001-c81b9472e3a1?w=500' },
  { n: 'Moong Dal 1kg', c: 'grains', s: 'Daal', img: 'https://images.unsplash.com/photo-1626200257577-bb89bc44d186?w=500' },
  { n: 'Chana Dal 1kg', c: 'grains', s: 'Daal', img: 'https://images.unsplash.com/photo-1603514457788-297eb0be5693?w=500' },
  { n: 'Besan 500g', c: 'grains', s: 'Besan, Sooji & Maida', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500' },
  { n: 'Thick Poha 500g', c: 'grains', s: 'Poha, Daliya & Others', img: 'https://images.unsplash.com/photo-1634591522030-cf284bf1ebac?w=500' },
  { n: 'Rajma 1kg', c: 'grains', s: 'Rajma, Chole & Others', img: 'https://images.unsplash.com/photo-1551024506-0cb989b6a674?w=500' },

  // Meat (10 items)
  { n: 'Fresh Chicken Breast 500g', c: 'chicken', s: 'chicken', img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500' },
  { n: 'Chicken Curry Cut 1kg', c: 'chicken', s: 'chicken', img: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=500' },
  { n: 'Chicken Wings 500g', c: 'chicken', s: 'chicken', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500' },
  { n: 'Fresh Mutton Curry Cut 500g', c: 'chicken', s: 'meat', img: 'https://images.unsplash.com/photo-1608877907149-a206d75ba011?w=500' },
  { n: 'Minced Mutton 500g', c: 'chicken', s: 'meat', img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=500' },
  { n: 'Fresh Rohu Fish Cut 500g', c: 'chicken', s: 'fish', img: 'https://images.unsplash.com/photo-1534948216015-843149f72be3?w=500' },
  { n: 'Tiger Prawns 250g', c: 'chicken', s: 'fish', img: 'https://images.unsplash.com/photo-1559742811-822873691df8?w=500' },
  { n: 'Salmon Fillet 200g', c: 'chicken', s: 'fish', img: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=500' },
  { n: 'Chicken Sausages', c: 'chicken', s: 'sausage', img: 'https://images.unsplash.com/photo-1527477313837-dddb0c83a8b4?w=500' },
  { n: 'Frozen Chicken Nuggets', c: 'chicken', s: 'frozen-non-veg-snacks', img: 'https://images.unsplash.com/photo-1562967914-01efa7e87832?w=500' },
  
  // Masala (8 items)
  { n: 'Sunflower Oil 1L', c: 'masala', s: 'Oil', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500' },
  { n: 'Pure Desi Ghee 500ml', c: 'masala', s: 'Ghee & Vanaspati', img: 'https://images.unsplash.com/photo-1599814429944-ffebbbbfcf2e?w=500' },
  { n: 'Turmeric Powder 200g', c: 'masala', s: 'Powdered Spices', img: 'https://images.unsplash.com/photo-1613945413158-b80c3e1ce4d2?w=500' },
  { n: 'Red Chilli Powder 200g', c: 'masala', s: 'Powdered Spices', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500' },
  { n: 'Iodized Salt 1kg', c: 'masala', s: 'Salt, Sugar & Jaggery', img: 'https://images.unsplash.com/photo-1627464009385-d85834f3747f?w=500' },
  { n: 'Refined Sugar 1kg', c: 'masala', s: 'Salt, Sugar & Jaggery', img: 'https://images.unsplash.com/photo-1581452601716-430c455c1b69?w=500' },
  { n: 'Premium Almonds 250g', c: 'masala', s: 'Dry Fruits', img: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500' },
  { n: 'Whole Cashews 250g', c: 'masala', s: 'Dry Fruits', img: 'https://images.unsplash.com/photo-1599026365313-97992925b42d?w=500' }
];

const seedProducts = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/greenCart`);
        console.log("Connected to MongoDB for precise seeding...");

        await Product.deleteMany({});
        console.log("Cleared old products...");

        let dummyProducts = [];

        for (const item of products) {
            const basePrice = Math.floor(Math.random() * 750) + 50; 
            const offerPrice = Math.floor(basePrice * (0.8 + (Math.random() * 0.15))); 
            
            dummyProducts.push({
                name: item.n,
                description: [`Premium quality ${item.n} delivered fresh to your door.`],
                price: basePrice,
                offerPrice: offerPrice,
                image: [item.img],
                category: item.c,
                subCategory: item.s,
                inStock: true,
                bestSeller: Math.random() > 0.8
            });
        }

        await Product.insertMany(dummyProducts);
        console.log(`Success! Added ${dummyProducts.length} curated items with exact Unsplash images.`);
        process.exit();
    } catch (error) {
        console.log("Error:", error);
        process.exit(1);
    }
}

seedProducts();
