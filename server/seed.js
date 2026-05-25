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

  // Breakfast & Instant Food — Noodles
  { n: 'Maggi Masala Noodles 4-Pack', c: 'instants', s: 'noodles', price: 72, offerPrice: 60, img: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500', desc: 'Iconic 2-minute Maggi masala noodles — the ultimate quick-fix meal loved by all ages.' },
  { n: 'Hakka Noodles 400g', c: 'instants', s: 'noodles', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=500', desc: 'Thin and springy hakka noodles for restaurant-style Indo-Chinese stir-fries at home.' },
  { n: 'Cup Noodles Chicken Flavour', c: 'instants', s: 'noodles', price: 30, offerPrice: 25, img: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500', desc: 'Ready-in-minutes cup noodles with bold chicken broth flavour — perfect on the go.' },
  { n: 'Yippee! Mood Masala Noodles', c: 'instants', s: 'noodles', price: 60, offerPrice: 50, img: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=500', desc: 'Long straight noodles in a tangy mood masala sauce — a Sunfeast favourite.' },

  // Breakfast & Instant Food — Frozen Veg Snacks
  { n: 'Crispy Veg Nuggets 300g', c: 'instants', s: 'frozen-snacks', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1562967914-01efa7e87832?w=500', desc: 'Golden-crusted vegetable nuggets — oven or air-fry in minutes for a perfect snack.' },
  { n: 'Frozen Aloo Tikki 6 Pcs', c: 'instants', s: 'frozen-snacks', price: 120, offerPrice: 99, img: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500', desc: 'Spiced potato patties ready to shallow-fry — serve with chutney for an authentic chaat.' },
  { n: 'Corn & Cheese Frozen Rolls 300g', c: 'instants', s: 'frozen-snacks', price: 195, offerPrice: 160, img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500', desc: 'Crunchy golden rolls filled with creamy sweet corn and cheese — party crowd favourite.' },
  { n: 'Frozen Veg Momos 12 Pcs', c: 'instants', s: 'frozen-snacks', price: 150, offerPrice: 125, img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500', desc: 'Soft steamed or pan-fried vegetable momos with spicy red dipping sauce.' },

  // Breakfast & Instant Food — Pasta
  { n: 'Penne Pasta 500g', c: 'instants', s: 'pasta', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1551462147-37885acc36f1?w=500', desc: 'Classic Italian penne pasta — pairs perfectly with arrabiata, pesto or white sauce.' },
  { n: 'Fusilli Pasta 500g', c: 'instants', s: 'pasta', price: 95, offerPrice: 78, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500', desc: 'Spiral fusilli pasta that grips sauces beautifully — great for bakes and cold pasta salads.' },
  { n: 'Whole Wheat Spaghetti 400g', c: 'instants', s: 'pasta', price: 120, offerPrice: 99, img: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=500', desc: 'Nutritious whole wheat spaghetti — a healthier base for your favourite pasta dishes.' },
  { n: 'Mac & Cheese Instant Pasta Box', c: 'instants', s: 'pasta', price: 140, offerPrice: 115, img: 'https://images.unsplash.com/photo-1612182417516-c2e9fe39b2b1?w=500', desc: 'Creamy ready-in-5-minutes macaroni and cheese — the ultimate comfort meal in a box.' },

  // Breakfast & Instant Food — Instant Mixes
  { n: 'Instant Idli Mix 500g', c: 'instants', s: 'instant-mixes', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1630409351241-e90e7c3b45f3?w=500', desc: 'Just add water and steam — fluffy soft idlis ready without any soaking or grinding.' },
  { n: 'Instant Dosa Mix 500g', c: 'instants', s: 'instant-mixes', price: 85, offerPrice: 70, img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500', desc: 'Crispy golden dosas in minutes — no overnight fermentation needed.' },
  { n: 'Instant Dhokla Mix 200g', c: 'instants', s: 'instant-mixes', price: 65, offerPrice: 55, img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500', desc: 'Fluffy Gujarati dhokla ready in under 15 minutes — light, spongy and tangy.' },
  { n: 'Instant Upma Mix 200g', c: 'instants', s: 'instant-mixes', price: 55, offerPrice: 45, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500', desc: 'South Indian-style upma with pre-seasoned rava — a wholesome breakfast in minutes.' },

  // Breakfast & Instant Food — Flakes & Kids Cereals
  { n: 'Cornflakes Original 500g', c: 'instants', s: 'flakes', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1521483451569-e33803c0330c?w=500', desc: 'Light and crispy golden corn flakes — the classic breakfast cereal with milk.' },
  { n: 'Honey & Nut Cornflakes 350g', c: 'instants', s: 'flakes', price: 200, offerPrice: 165, img: 'https://images.unsplash.com/photo-1517093728432-a0440f8d45af?w=500', desc: 'Sweet honey-glazed cornflakes with almonds and raisins — a delicious morning treat.' },
  { n: 'Chocos Chocolate Cereal 375g', c: 'instants', s: 'flakes', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=500', desc: 'Crunchy chocolate-coated wheat scoops — kids go crazy for this cereal with cold milk.' },
  { n: 'Rice Puffs Cereal 300g', c: 'instants', s: 'flakes', price: 130, offerPrice: 109, img: 'https://images.unsplash.com/photo-1593538312308-d4c29d8dc7f1?w=500', desc: 'Light, crispy puffed rice cereal — low calorie and perfect for a guilt-free breakfast.' },

  // Breakfast & Instant Food — Museli & Granola
  { n: 'Classic Fruit & Nut Muesli 400g', c: 'instants', s: 'museli', price: 250, offerPrice: 210, img: 'https://images.unsplash.com/photo-1517093728432-a0440f8d45af?w=500', desc: 'A hearty Swiss-style muesli blend of oats, dried fruits, seeds and crunchy nuts.' },
  { n: 'Honey Granola with Almonds 400g', c: 'instants', s: 'museli', price: 280, offerPrice: 235, img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=500', desc: 'Toasted golden oat clusters with honey, almond slivers and pumpkin seeds.' },
  { n: 'Dark Chocolate Granola 300g', c: 'instants', s: 'museli', price: 310, offerPrice: 260, img: 'https://images.unsplash.com/photo-1505394033641-40908e90b825?w=500', desc: 'Decadent baked oat granola with dark chocolate chips and toasted coconut flakes.' },
  { n: 'Berry Crunch Muesli 400g', c: 'instants', s: 'museli', price: 270, offerPrice: 225, img: 'https://images.unsplash.com/photo-1521483451569-e33803c0330c?w=500', desc: 'Rolled oats with freeze-dried strawberries, blueberries and sunflower seeds.' },

  // Breakfast & Instant Food — Oats
  { n: 'Rolled Oats 1kg', c: 'instants', s: 'oats', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500', desc: 'Classic old-fashioned rolled oats — heart-healthy, fibre-rich and endlessly versatile.' },
  { n: 'Instant Oatmeal Variety Pack', c: 'instants', s: 'oats', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1517093728432-a0440f8d45af?w=500', desc: 'Quick-cook individual sachets in apple-cinnamon, honey and original flavours.' },
  { n: 'Masala Oats 39g (Pack of 6)', c: 'instants', s: 'oats', price: 130, offerPrice: 110, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500', desc: 'Savoury spiced oats with vegetables — a wholesome Indian-style breakfast in 3 minutes.' },
  { n: 'Steel Cut Oats 500g', c: 'instants', s: 'oats', price: 200, offerPrice: 169, img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=500', desc: 'Minimally processed whole grain oats with a chewy nutty texture — perfect as porridge.' },

  // Breakfast & Instant Food — Soup
  { n: 'Tomato Cream Soup Mix 4 Serves', c: 'instants', s: 'soup', price: 110, offerPrice: 90, img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500', desc: 'Velvety smooth tomato cream soup — just add hot water for a comforting bowl in minutes.' },
  { n: 'Sweet Corn Veg Soup Mix', c: 'instants', s: 'soup', price: 95, offerPrice: 78, img: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=500', desc: 'Restaurant-style sweet corn vegetable soup with no added MSG — ready in 5 minutes.' },
  { n: 'Hot & Sour Soup Mix 2 Serves', c: 'instants', s: 'soup', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500', desc: 'Tangy and spicy Indo-Chinese hot & sour soup — a perfect winter warmer.' },
  { n: 'Mushroom & Herb Soup Mix', c: 'instants', s: 'soup', price: 120, offerPrice: 99, img: 'https://images.unsplash.com/photo-1559181567-c3190ca9d5db?w=500', desc: 'Earthy wild mushroom soup with herbs and cream — rich, satisfying and comforting.' },

  // Breakfast & Instant Food — Ready to Cook & Eat
  { n: 'Ready to Eat Dal Makhani 300g', c: 'instants', s: 'ready-to-eat', price: 150, offerPrice: 125, img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500', desc: 'Slow-cooked creamy dal makhani — heat and eat in 3 minutes for a restaurant-quality meal.' },
  { n: 'Ready to Eat Pav Bhaji 300g', c: 'instants', s: 'ready-to-eat', price: 130, offerPrice: 109, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500', desc: 'Mumbai-style spiced vegetable bhaji — heat and serve with buttery pav in minutes.' },
  { n: 'Poha Ready to Cook Kit', c: 'instants', s: 'ready-to-eat', price: 75, offerPrice: 62, img: 'https://images.unsplash.com/photo-1634591522030-cf284bf1ebac?w=500', desc: 'All-in-one poha kit with pre-measured rava, spice mix and peanuts — ready in 8 minutes.' },
  { n: 'Chole Masala Ready to Eat 300g', c: 'instants', s: 'ready-to-eat', price: 145, offerPrice: 120, img: 'https://images.unsplash.com/photo-1607301406259-dfb186e15de8?w=500', desc: 'Punjabi-style spiced chickpea curry — heat and enjoy with bhatura or rice.' },

  // Breakfast & Instant Food — Desert & Cake Mixes
  { n: 'Chocolate Brownie Mix 200g', c: 'instants', s: 'desert-mixes', price: 175, offerPrice: 145, img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500', desc: 'Rich fudgy brownie mix — just add egg and butter for bakery-style brownies at home.' },
  { n: 'Vanilla Sponge Cake Mix 250g', c: 'instants', s: 'desert-mixes', price: 150, offerPrice: 125, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500', desc: 'Fluffy vanilla sponge cake mix — bake a perfect celebration cake in under 40 minutes.' },
  { n: 'Gulab Jamun Mix 175g', c: 'instants', s: 'desert-mixes', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500', desc: 'Soft melt-in-mouth gulab jamuns from scratch — just knead, fry and soak in sugar syrup.' },
  { n: 'Kheer Rice Pudding Mix 100g', c: 'instants', s: 'desert-mixes', price: 65, offerPrice: 55, img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500', desc: 'Creamy traditional rice kheer mix with saffron and cardamom — ready in under 10 minutes.' },

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

  // Snacks & Munchies — Chips & Crisps
  { n: 'Classic Salted Potato Chips 100g', c: 'snacks', s: 'chips', price: 30, offerPrice: 25, img: 'https://images.unsplash.com/photo-1566478989037-e12483eb1222?w=500', desc: 'Crispy and perfectly salted classic potato chips, great for snacking any time.' },
  { n: 'Spicy Masala Banana Chips 150g', c: 'snacks', s: 'chips', price: 50, offerPrice: 42, img: 'https://images.unsplash.com/photo-1621936359516-77884ff20b33?w=500', desc: 'Crunchy banana chips tossed in bold Indian masala spices.' },
  { n: 'Cream & Onion Potato Chips 90g', c: 'snacks', s: 'chips', price: 30, offerPrice: 26, img: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500', desc: 'Irresistibly flavoured cream & onion wavy chips for snack lovers.' },
  { n: 'Baked Multigrain Chips 80g', c: 'snacks', s: 'chips', price: 55, offerPrice: 45, img: 'https://images.unsplash.com/photo-1612278675615-7b093b07772d?w=500', desc: 'Light and crunchy baked multigrain chips — a healthier snack choice.' },

  // Snacks & Munchies — Nachos
  { n: 'Cheese Nachos 150g', c: 'snacks', s: 'nachos', price: 80, offerPrice: 68, img: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500', desc: 'Thick & crunchy corn tortilla chips smothered in real cheese flavour.' },
  { n: 'Jalapeno & Cheese Nachos 100g', c: 'snacks', s: 'nachos', price: 75, offerPrice: 60, img: 'https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?w=500', desc: 'Fiery jalapeño nachos paired with a rich cheesy coating — perfect for heat lovers.' },
  { n: 'Salsa Nachos Combo Pack', c: 'snacks', s: 'nachos', price: 130, offerPrice: 110, img: 'https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=500', desc: 'Classic corn tortilla chips served with a zesty tomato salsa dip.' },
  { n: 'Lime & Chilli Tortilla Chips 120g', c: 'snacks', s: 'nachos', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1601956823517-9a5dc0f4f4e7?w=500', desc: 'Tangy lime and chilli dusted crunchy tortilla chips — snack bar essential.' },

  // Snacks & Munchies — Energy Bars
  { n: 'Dark Chocolate Protein Bar 60g', c: 'snacks', s: 'energy-bars', price: 120, offerPrice: 99, img: 'https://images.unsplash.com/photo-1622484211148-52261a868f70?w=500', desc: 'High-protein dark chocolate bar packed with nuts and wholesome oats.' },
  { n: 'Peanut Butter Energy Bar 50g', c: 'snacks', s: 'energy-bars', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=500', desc: 'Rich peanut butter blended with oats and honey for sustained energy.' },
  { n: 'Cranberry & Oats Granola Bar 40g', c: 'snacks', s: 'energy-bars', price: 65, offerPrice: 55, img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500', desc: 'Wholesome granola bar loaded with dried cranberries and rolled oats.' },
  { n: 'Mixed Nuts & Seed Bar 45g', c: 'snacks', s: 'energy-bars', price: 110, offerPrice: 90, img: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=500', desc: 'Nutrient-dense bar with almonds, cashews, sunflower seeds and honey.' },

  // Snacks & Munchies — Bhujiya & Mixtures
  { n: 'Aloo Bhujiya 400g', c: 'snacks', s: 'bhujiya', price: 120, offerPrice: 99, img: 'https://images.unsplash.com/photo-1604085449551-78c66e2c3475?w=500', desc: 'Crispy spiced potato sev — the all-time classic Indian snack.' },
  { n: 'Moong Dal Namkeen 250g', c: 'snacks', s: 'bhujiya', price: 85, offerPrice: 70, img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500', desc: 'Crunchy roasted moong lentil snack lightly seasoned with spices.' },
  { n: 'Spicy Chivda Mixture 200g', c: 'snacks', s: 'bhujiya', price: 70, offerPrice: 58, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500', desc: 'Traditional Maharashtrian poha chivda mixture with peanuts and curry leaves.' },
  { n: 'Haldiram Khatta Meetha 350g', c: 'snacks', s: 'bhujiya', price: 95, offerPrice: 80, img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500', desc: 'Tangy-sweet mix of sev, puffed rice, and fried lentils — a beloved teatime snack.' },

  // Snacks & Munchies — Popcorn
  { n: 'Movie Style Butter Popcorn 90g', c: 'snacks', s: 'popcorn', price: 60, offerPrice: 50, img: 'https://images.unsplash.com/photo-1578849278619-e7340f1a9657?w=500', desc: 'Light and fluffy butter popcorn — just like at the movies.' },
  { n: 'Caramel Popcorn 75g', c: 'snacks', s: 'popcorn', price: 70, offerPrice: 58, img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500', desc: 'Irresistibly sweet and crunchy caramel-coated popcorn.' },
  { n: 'Cheddar Cheese Popcorn 80g', c: 'snacks', s: 'popcorn', price: 75, offerPrice: 63, img: 'https://images.unsplash.com/photo-1616472684608-4786bdd31e21?w=500', desc: 'Fluffy popped kernels coated in bold real cheddar cheese seasoning.' },
  { n: 'Spicy Sriracha Popcorn 70g', c: 'snacks', s: 'popcorn', price: 65, offerPrice: 52, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=500', desc: 'Hot and tangy sriracha-flavoured popcorn for the spice lovers.' },

  // Snacks & Munchies — Namkeen Snacks
  { n: 'Spicy Namkeen Mixture 300g', c: 'snacks', s: 'namkeen', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1604085449551-78c66e2c3475?w=500', desc: 'A classic Indian namkeen blend with sev, peanuts and fried dals.' },
  { n: 'Peanut Masala Crunch 200g', c: 'snacks', s: 'namkeen', price: 55, offerPrice: 45, img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500', desc: 'Crispy masala-coated peanuts — a crunchy addictive everyday snack.' },
  { n: 'Roasted Chana Dal 250g', c: 'snacks', s: 'namkeen', price: 60, offerPrice: 50, img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500', desc: 'High-protein roasted chana dal, lightly salted and perfectly crispy.' },
  { n: 'Bhakarwadi 200g', c: 'snacks', s: 'namkeen', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500', desc: 'Crispy spirals of fried dough with sweet-spicy coconut-sesame filling.' },

  // Snacks & Munchies — Makhana & More
  { n: 'Classic Roasted Makhana 100g', c: 'snacks', s: 'makhana', price: 150, offerPrice: 125, img: 'https://images.unsplash.com/photo-1605335133649-1be812d45c55?w=500', desc: 'Light and airy fox nuts dry-roasted to crispy perfection — a superfood snack.' },
  { n: 'Peri Peri Makhana 80g', c: 'snacks', s: 'makhana', price: 160, offerPrice: 130, img: 'https://images.unsplash.com/photo-1631408975598-f36e91c0dc6b?w=500', desc: 'Fox nuts tossed in fiery peri-peri seasoning — healthy and delicious.' },
  { n: 'Cheese & Herbs Makhana 80g', c: 'snacks', s: 'makhana', price: 165, offerPrice: 135, img: 'https://images.unsplash.com/photo-1612278675615-7b093b07772d?w=500', desc: 'Makhana coated in rich cheesy herb seasoning — a gourmet guilt-free snack.' },
  { n: 'Tangy Tomato Makhana 90g', c: 'snacks', s: 'makhana', price: 155, offerPrice: 128, img: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500', desc: 'Tangy tomato-flavoured makhana — light, crunchy and full of flavour.' },

  // Snacks & Munchies — Papad & Fryums
  { n: 'Urad Dal Papad (Pack of 20)', c: 'snacks', s: 'papad', price: 60, offerPrice: 50, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500', desc: 'Thin, crispy urad dal papads — perfect for roasting or frying with meals.' },
  { n: 'Masala Fryums 150g', c: 'snacks', s: 'papad', price: 45, offerPrice: 38, img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500', desc: 'Colourful spiced fryums — a fun, crunchy snack loved by all ages.' },
  { n: 'Rice Papad 200g', c: 'snacks', s: 'papad', price: 55, offerPrice: 45, img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500', desc: 'Light and crispy rice papads perfect as a side with dal-rice or curries.' },
  { n: 'Garlic Jeera Papad (Pack of 15)', c: 'snacks', s: 'papad', price: 65, offerPrice: 55, img: 'https://images.unsplash.com/photo-1604085449551-78c66e2c3475?w=500', desc: 'Aromatic garlic and cumin-flavoured papads for an extra kick.' },

  // Grains — Aata (Wheat Flour)
  { n: 'Whole Wheat Chakki Atta 5kg', c: 'grains', s: 'Aata', price: 260, offerPrice: 220, img: 'https://images.unsplash.com/photo-1508398711543-ed1b58ce334e?w=500', desc: 'Stone-ground 100% whole wheat chakki atta — soft rotis and parathas every time.' },
  { n: 'Multigrain Atta 5kg', c: 'grains', s: 'Aata', price: 320, offerPrice: 275, img: 'https://images.unsplash.com/photo-1559058789-672da06263d8?w=500', desc: 'Nutritious blend of wheat, soy, oats and barley for wholesome everyday cooking.' },
  { n: 'Maida (Refined Flour) 1kg', c: 'grains', s: 'Aata', price: 55, offerPrice: 45, img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500', desc: 'Fine-milled white refined flour — ideal for baking, pooris and pastries.' },
  { n: 'Organic Atta 2kg', c: 'grains', s: 'Aata', price: 190, offerPrice: 160, img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500', desc: 'Certified organic stone-ground wheat flour, free from chemicals and additives.' },

  // Grains — Rice
  { n: 'Premium Basmati Rice 5kg', c: 'grains', s: 'Rice', price: 550, offerPrice: 480, img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500', desc: 'Aged long-grain basmati rice with a rich aroma — perfect for biryani and pulao.' },
  { n: 'Brown Rice 1kg', c: 'grains', s: 'Rice', price: 120, offerPrice: 99, img: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500', desc: 'Unpolished whole-grain brown rice loaded with fibre and essential nutrients.' },
  { n: 'Sona Masoori Rice 5kg', c: 'grains', s: 'Rice', price: 340, offerPrice: 290, img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500', desc: 'Lightweight, low-starch medium-grain rice — a South Indian household staple.' },
  { n: 'Kolam Short Grain Rice 5kg', c: 'grains', s: 'Rice', price: 300, offerPrice: 255, img: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500', desc: 'Soft and fluffy short-grain kolam rice — great for everyday rice dishes and khichdi.' },

  // Grains — Toor, Urad & Chana (Daal)
  { n: 'Unpolished Toor Dal 1kg', c: 'grains', s: 'Daal', price: 155, offerPrice: 130, img: 'https://images.unsplash.com/photo-1585994407001-c81b9472e3a1?w=500', desc: 'Premium unpolished toor dal for thick, protein-rich dal tadka and sambar.' },
  { n: 'Urad Dal (Split Black) 1kg', c: 'grains', s: 'Daal', price: 130, offerPrice: 110, img: 'https://images.unsplash.com/photo-1603514457788-297eb0be5693?w=500', desc: 'Creamy split urad dal — the soul ingredient of dal makhani and idli batter.' },
  { n: 'Chana Dal 1kg', c: 'grains', s: 'Daal', price: 110, offerPrice: 92, img: 'https://images.unsplash.com/photo-1607301406259-dfb186e15de8?w=500', desc: 'Golden split chana dal — nutty-flavoured and perfect for dal, halwa and besan.' },
  { n: 'Yellow Moong Dal 500g', c: 'grains', s: 'Daal', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1626200257577-bb89bc44d186?w=500', desc: 'Light and easy-to-digest split moong dal — ideal for dal, khichdi and soups.' },

  // Grains — Besan, Sooji & Maida
  { n: 'Gram Flour (Besan) 500g', c: 'grains', s: 'Besan, Sooji & Maida', price: 70, offerPrice: 58, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500', desc: 'Fine-ground chickpea flour — the essential ingredient for pakoras, kadhi and laddoos.' },
  { n: 'Coarse Semolina (Sooji) 500g', c: 'grains', s: 'Besan, Sooji & Maida', price: 45, offerPrice: 38, img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500', desc: 'Coarse-ground wheat semolina — perfect for upma, halwa, rava dosa and sheera.' },
  { n: 'Fine Rava (Sooji) 500g', c: 'grains', s: 'Besan, Sooji & Maida', price: 42, offerPrice: 35, img: 'https://images.unsplash.com/photo-1508398711543-ed1b58ce334e?w=500', desc: 'Extra-fine semolina for smooth idli batter and soft rava laddoos.' },
  { n: 'Refined Maida 500g', c: 'grains', s: 'Besan, Sooji & Maida', price: 35, offerPrice: 28, img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500', desc: 'Finely milled all-purpose flour for bread, cakes, biscuits and Indian sweets.' },

  // Grains — Poha, Daliya & Others
  { n: 'Thick Poha 500g', c: 'grains', s: 'Poha, Daliya & Others', price: 55, offerPrice: 45, img: 'https://images.unsplash.com/photo-1634591522030-cf284bf1ebac?w=500', desc: 'Thick flattened rice flakes — quick to cook and perfect for breakfast poha.' },
  { n: 'Thin Poha 500g', c: 'grains', s: 'Poha, Daliya & Others', price: 52, offerPrice: 43, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500', desc: 'Thin crispy poha — great for making chivda and light evening snacks.' },
  { n: 'Broken Wheat Daliya 500g', c: 'grains', s: 'Poha, Daliya & Others', price: 60, offerPrice: 50, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500', desc: 'Coarsely cracked whole wheat daliya — a fibre-rich breakfast porridge.' },
  { n: 'Sabudana (Sago) 500g', c: 'grains', s: 'Poha, Daliya & Others', price: 75, offerPrice: 62, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500', desc: 'Tapioca pearls for vrat-special sabudana khichdi, kheer and vada.' },

  // Grains — Millet & Other Flours
  { n: 'Bajra (Pearl Millet) Flour 1kg', c: 'grains', s: 'Millet & Other Flours', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500', desc: 'Stone-ground pearl millet flour for nutritious bajra rotis and bhakris.' },
  { n: 'Jowar (Sorghum) Flour 1kg', c: 'grains', s: 'Millet & Other Flours', price: 75, offerPrice: 62, img: 'https://images.unsplash.com/photo-1559058789-672da06263d8?w=500', desc: 'Gluten-free jowar flour — high in fibre and protein, great for rotis and dosas.' },
  { n: 'Ragi (Finger Millet) Flour 500g', c: 'grains', s: 'Millet & Other Flours', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1508398711543-ed1b58ce334e?w=500', desc: 'Calcium-rich finger millet flour — a superfood for ragi rotlas and porridge.' },
  { n: 'Foxtail Millet 500g', c: 'grains', s: 'Millet & Other Flours', price: 110, offerPrice: 90, img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500', desc: 'Nutrient-packed foxtail millet — a low GI ancient grain for healthy meals.' },

  // Grains — Rajma, Chole & Others
  { n: 'Red Rajma (Kidney Beans) 1kg', c: 'grains', s: 'Rajma, Chole & Others', price: 130, offerPrice: 110, img: 'https://images.unsplash.com/photo-1551024506-0cb989b6a674?w=500', desc: 'Plump red kidney beans — the star of the iconic Punjabi rajma curry.' },
  { n: 'Kabuli Chana (White Chickpeas) 1kg', c: 'grains', s: 'Rajma, Chole & Others', price: 120, offerPrice: 99, img: 'https://images.unsplash.com/photo-1607301406259-dfb186e15de8?w=500', desc: 'Large white chickpeas for restaurant-style chana masala and hummus.' },
  { n: 'Kala Chana (Black Chickpeas) 500g', c: 'grains', s: 'Rajma, Chole & Others', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1585994407001-c81b9472e3a1?w=500', desc: 'Small dark brown chickpeas packed with protein — perfect for chaat and curries.' },
  { n: 'Lobia (Black-Eyed Peas) 500g', c: 'grains', s: 'Rajma, Chole & Others', price: 70, offerPrice: 58, img: 'https://images.unsplash.com/photo-1603514457788-297eb0be5693?w=500', desc: 'Creamy black-eyed peas — wholesome in lobia curry or mixed bean salads.' },

  // Grains — Moong & Masoor
  { n: 'Sabut Moong (Whole Green Gram) 500g', c: 'grains', s: 'Moong & Masoor', price: 85, offerPrice: 70, img: 'https://images.unsplash.com/photo-1626200257577-bb89bc44d186?w=500', desc: 'Whole green moong dal — nutritious for curries, sprouts and moong dal chilla.' },
  { n: 'Red Masoor Dal 1kg', c: 'grains', s: 'Moong & Masoor', price: 120, offerPrice: 99, img: 'https://images.unsplash.com/photo-1585994407001-c81b9472e3a1?w=500', desc: 'Split red lentils that cook in minutes — earthy, hearty and protein-rich.' },
  { n: 'Sabut Masoor (Whole Lentils) 500g', c: 'grains', s: 'Moong & Masoor', price: 75, offerPrice: 62, img: 'https://images.unsplash.com/photo-1607301406259-dfb186e15de8?w=500', desc: 'Whole brown masoor lentils with a robust flavour — great for soups and dal.' },
  { n: 'Moth Dal (Turkish Gram) 500g', c: 'grains', s: 'Moong & Masoor', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1603514457788-297eb0be5693?w=500', desc: 'Small brown moth beans with a distinctive earthy flavour — essential for misal and matki.' },

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
  { n: 'Whole Cashews 250g', c: 'masala', s: 'Dry Fruits', img: 'https://images.unsplash.com/photo-1599026365313-97992925b42d?w=500' },

  // Tea & Coffee — Tea
  { n: 'Tata Gold Leaf Tea 250g', c: 'tea', s: 'tea', price: 145, offerPrice: 120, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500', desc: 'Rich, full-bodied Assam leaf tea for a strong, aromatic morning cup.' },
  { n: 'Darjeeling First Flush Tea 100g', c: 'tea', s: 'tea', price: 250, offerPrice: 210, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500', desc: 'Premium Darjeeling first flush — delicate floral aroma with a golden liquor.' },
  { n: 'Masala Chai Tea Bags 25 Pcs', c: 'tea', s: 'tea', price: 120, offerPrice: 99, img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500', desc: 'Spiced chai bags with ginger, cardamom and cinnamon — just dip and enjoy.' },

  // Tea & Coffee — Coffee
  { n: 'Nescafe Classic Instant Coffee 100g', c: 'tea', s: 'coffee', price: 280, offerPrice: 235, img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500', desc: 'India\'s favourite instant coffee — rich, smooth and ready in seconds.' },
  { n: 'Bru Filter Coffee Powder 200g', c: 'tea', s: 'coffee', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500', desc: 'South Indian filter coffee powder with a bold roasted aroma — for the perfect decoction.' },
  { n: 'Whole Bean Arabica Coffee 250g', c: 'tea', s: 'coffee', price: 450, offerPrice: 380, img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500', desc: 'Single-origin 100% Arabica whole beans — freshly grind for a barista-quality brew.' },

  // Tea & Coffee — Green & Flavoured Tea
  { n: 'Organic Green Tea 25 Bags', c: 'tea', s: 'green-tea', price: 160, offerPrice: 130, img: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=500', desc: 'Pure organic green tea bags — light, refreshing and packed with antioxidants.' },
  { n: 'Tulsi Ginger Herbal Tea 20 Bags', c: 'tea', s: 'green-tea', price: 130, offerPrice: 108, img: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?w=500', desc: 'Ayurvedic tulsi and ginger blend — immunity-boosting and naturally caffeine-free.' },
  { n: 'Chamomile Lemon Tea 20 Bags', c: 'tea', s: 'green-tea', price: 140, offerPrice: 115, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500', desc: 'Soothing chamomile with a hint of lemon — the perfect bedtime calming tea.' },

  // Tea & Coffee — Milk Drinks
  { n: 'Horlicks Classic Malt 500g', c: 'tea', s: 'milk-drinks', price: 280, offerPrice: 235, img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500', desc: 'Nourishing malt health drink with vitamins and minerals — loved by kids and adults.' },
  { n: 'Bournvita Chocolate Malt 400g', c: 'tea', s: 'milk-drinks', price: 240, offerPrice: 199, img: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=500', desc: 'Delicious cocoa-malt drink mix that makes every glass of milk a treat.' },

  // Tea & Coffee — Hot Chocolate
  { n: 'Cadbury Drinking Chocolate 250g', c: 'tea', s: 'hot-chocolate', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500', desc: 'Rich, creamy hot chocolate powder — indulge in a warm mug on cozy evenings.' },
  { n: 'Dark Hot Cocoa Mix 200g', c: 'tea', s: 'hot-chocolate', price: 260, offerPrice: 215, img: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=500', desc: 'Intense dark cocoa blend — pairs beautifully with warm frothy milk.' },

  // Bakery & Biscuits — Cookies
  { n: 'Butter Cookies Tin 400g', c: 'biscuits', s: 'cookies', price: 200, offerPrice: 165, img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500', desc: 'Melt-in-mouth classic butter cookies in a premium gift tin.' },
  { n: 'Choco Chip Cookies 150g', c: 'biscuits', s: 'cookies', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500', desc: 'Crispy baked cookies loaded with rich dark chocolate chips.' },

  // Bakery & Biscuits — Cream Biscuits
  { n: 'Oreo Chocolate Cream Biscuits', c: 'biscuits', s: 'cream-biscuits', price: 30, offerPrice: 25, img: 'https://images.unsplash.com/photo-1559181567-c3190ca9d5db?w=500', desc: 'The iconic twist-lick-dunk cream biscuit — chocolate wafers with vanilla cream.' },
  { n: 'Bourbon Cream Biscuits 150g', c: 'biscuits', s: 'cream-biscuits', price: 25, offerPrice: 20, img: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500', desc: 'Classic chocolate cream biscuit sandwich — a teatime favourite for all ages.' },

  // Bakery & Biscuits — Glucose & Marie
  { n: 'Parle-G Glucose Biscuits 800g', c: 'biscuits', s: 'glucose-biscuits', price: 50, offerPrice: 42, img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500', desc: 'India\'s most loved glucose biscuit — the perfect quick energy snack.' },
  { n: 'Marie Light Biscuits 150g', c: 'biscuits', s: 'glucose-biscuits', price: 20, offerPrice: 16, img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500', desc: 'Light and crisp Marie biscuits — a classic pairing with your morning tea.' },

  // Bakery & Biscuits — Healthy & Digestive
  { n: 'Digestive Wheat Biscuits 400g', c: 'biscuits', s: 'digestive-biscuits', price: 110, offerPrice: 90, img: 'https://images.unsplash.com/photo-1612278675615-7b093b07772d?w=500', desc: 'High-fibre whole wheat digestive biscuits — the healthy snacking choice.' },
  { n: 'Oats & Raisin Health Cookies 150g', c: 'biscuits', s: 'digestive-biscuits', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=500', desc: 'Wholesome oat cookies with juicy raisins and a hint of cinnamon.' },

  // Bakery & Biscuits — Rusks, Khari & Waffers
  { n: 'Toasted Rusk 300g', c: 'biscuits', s: 'rusks', price: 55, offerPrice: 45, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500', desc: 'Golden double-baked rusk — crisp, light and perfect for dunking in tea.' },
  { n: 'Puff Khari 200g', c: 'biscuits', s: 'rusks', price: 40, offerPrice: 33, img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500', desc: 'Flaky, buttery khari puffs — an irresistible teatime accompaniment.' },

  // Bakery & Biscuits — Cakes & Rolls
  { n: 'Swiss Roll Chocolate 6 Pcs', c: 'biscuits', s: 'cakes-rolls', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500', desc: 'Soft sponge cake rolled with rich chocolate cream — a lunchbox classic.' },
  { n: 'Mango Cup Cake 6 Pcs', c: 'biscuits', s: 'cakes-rolls', price: 70, offerPrice: 58, img: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=500', desc: 'Moist and fluffy mango-flavoured individually wrapped cup cakes.' },

  // Bakery & Biscuits — Sweet & Salty
  { n: 'Salted Crackers 200g', c: 'biscuits', s: 'sweet-salty', price: 50, offerPrice: 42, img: 'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=500', desc: 'Thin and crispy salted crackers — great with cheese, dips or on their own.' },

  // Sauces & Spreads — Tomato & Chilli Ketchup
  { n: 'Heinz Tomato Ketchup 500g', c: 'sauces', s: 'ketchup', price: 140, offerPrice: 115, img: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=500', desc: 'The world\'s favourite tomato ketchup — perfectly balanced sweet and tangy.' },
  { n: 'Maggi Hot & Sweet Chilli Sauce 400g', c: 'sauces', s: 'ketchup', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1614735241165-6756e1df61ab?w=500', desc: 'Spicy-sweet tomato chilli sauce — the go-to dip for snacks and fast food.' },

  // Sauces & Spreads — Asian Sauces
  { n: 'Soy Sauce 200ml', c: 'sauces', s: 'asian_sauces', price: 55, offerPrice: 45, img: 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?w=500', desc: 'Dark umami-rich soy sauce — the backbone of any stir-fry or Asian marinade.' },
  { n: 'Schezwan Sauce 250g', c: 'sauces', s: 'asian_sauces', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1601956823517-9a5dc0f4f4e7?w=500', desc: 'Fiery Sichuan pepper-chilli sauce — essential for Indo-Chinese noodles and fried rice.' },

  // Sauces & Spreads — Mayonnaise
  { n: 'Eggless Mayo Classic 250g', c: 'sauces', s: 'mayonnaise', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=500', desc: 'Thick and creamy eggless mayonnaise — for sandwiches, wraps and coleslaws.' },
  { n: 'Garlic Mayo 200g', c: 'sauces', s: 'mayonnaise', price: 100, offerPrice: 82, img: 'https://images.unsplash.com/photo-1614735241165-6756e1df61ab?w=500', desc: 'Boldly flavoured roasted garlic mayo — an irresistible dip for fries and burgers.' },

  // Sauces & Spreads — Jam & Spreads
  { n: 'Mixed Fruit Jam 500g', c: 'sauces', s: 'jam', price: 110, offerPrice: 90, img: 'https://images.unsplash.com/photo-1559181567-c3190ca9d5db?w=500', desc: 'Sweet and tangy mixed fruit jam — the perfect spread for toast and parathas.' },
  { n: 'Peanut Butter Crunchy 400g', c: 'sauces', s: 'jam', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1587340979077-1ac7e4fdace0?w=500', desc: 'High-protein crunchy peanut butter with no added sugar — ideal for fitness lovers.' },

  // Sauces & Spreads — Honey & Chyawanprash
  { n: 'Pure Tulsi Honey 500g', c: 'sauces', s: 'honey', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500', desc: 'Raw unprocessed tulsi-infused honey — naturally sweet with immunity benefits.' },
  { n: 'Dabur Chyawanprash 500g', c: 'sauces', s: 'honey', price: 240, offerPrice: 199, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500', desc: 'Traditional Ayurvedic chyawanprash with amla and 40+ herbs for immunity.' },

  // Sauces & Spreads — Syrups
  { n: 'Rooh Afza Rose Syrup 750ml', c: 'sauces', s: 'syrups', price: 160, offerPrice: 130, img: 'https://images.unsplash.com/photo-1625938145905-6b6e6d4e3c95?w=500', desc: 'Iconic rose-flavoured syrup — mix with milk or water for a refreshing summer drink.' },
  { n: 'Chocolate Dessert Sauce 200g', c: 'sauces', s: 'syrups', price: 120, offerPrice: 99, img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500', desc: 'Thick dark chocolate drizzle sauce for ice cream, pancakes and waffles.' },

  // Sauces & Spreads — Indian Chutney & Pickle
  { n: 'Mango Pickle 500g', c: 'sauces', s: 'indian_chutney_pickles', price: 130, offerPrice: 108, img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500', desc: 'Spicy Rajasthani-style raw mango pickle in mustard oil — the ultimate achaar.' },
  { n: 'Green Mint Chutney 200g', c: 'sauces', s: 'indian_chutney_pickles', price: 65, offerPrice: 55, img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500', desc: 'Fresh coriander-mint chutney with lemon and green chilli — pairs with every snack.' },

  // Sauces & Spreads — Dips & Salad Dressings
  { n: 'Hummus Classic 200g', c: 'sauces', s: 'dips_salad_dressings', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1540189549336-e6e99eb4b951?w=500', desc: 'Creamy chickpea hummus with olive oil and sesame — a healthy, protein-rich dip.' },
  { n: 'Caesar Salad Dressing 250ml', c: 'sauces', s: 'dips_salad_dressings', price: 150, offerPrice: 125, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500', desc: 'Classic Caesar dressing with parmesan and anchovy — elevate any salad instantly.' },

  // Sauces & Spreads — Table Sauces
  { n: 'Lea & Perrins Worcestershire 290ml', c: 'sauces', s: 'table_sauces', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1614735241165-6756e1df61ab?w=500', desc: 'Tangy fermented Worcestershire sauce — a secret ingredient for steaks and cocktails.' },

  // Sauces & Spreads — Cooking Sauces & Vinegar
  { n: 'White Vinegar 500ml', c: 'sauces', s: 'cooking_sauces_vinegar', price: 50, offerPrice: 42, img: 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?w=500', desc: 'Pure distilled white vinegar — for pickling, cooking and household cleaning.' },
  { n: 'Pasta Arrabiata Sauce 350g', c: 'sauces', s: 'cooking_sauces_vinegar', price: 160, offerPrice: 130, img: 'https://images.unsplash.com/photo-1551462147-37885acc36f1?w=500', desc: 'Spicy Italian tomato and chilli pasta sauce — ready to toss with your favourite pasta.' },

  // ─── Ice-creams & Sweets ────────────────────────────────────────────────────

  // Indian Sweets
  { n: 'Kaju Katli 250g', c: 'ice-creams', s: 'sweets', price: 350, offerPrice: 299, img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500', desc: 'Melt-in-mouth diamond-cut cashew fudge — the quintessential Indian mithai for every occasion.' },
  { n: 'Gulab Jamun 500g (12 Pcs)', c: 'ice-creams', s: 'sweets', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500', desc: 'Soft khoya dumplings soaked in rose-scented sugar syrup — a timeless Indian dessert.' },
  { n: 'Rasgulla Pack 1kg', c: 'ice-creams', s: 'sweets', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500', desc: 'Spongy cottage cheese balls simmered in light sugar syrup — Bengali classic.' },

  // Chocolate Gift Pack
  { n: 'Cadbury Celebrations Gift Box', c: 'ice-creams', s: 'chocolates_gift_pack', price: 450, offerPrice: 380, img: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500', desc: 'Assorted Cadbury chocolates in a premium gift box — perfect for any celebration.' },
  { n: 'Ferrero Rocher 16 Pcs Box', c: 'ice-creams', s: 'chocolates_gift_pack', price: 550, offerPrice: 470, img: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=500', desc: 'Iconic golden hazelnut chocolate truffles in an elegant presentation box.' },

  // Ice-creams & Frozen Deserts
  { n: 'Vanilla Ice Cream Tub 500ml', c: 'ice-creams', s: 'ice-creams_frozen_deserts', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1567206563114-c179706673a8?w=500', desc: 'Classic creamy vanilla ice cream made with real milk — timeless and indulgent.' },
  { n: 'Belgian Chocolate Ice Cream 500ml', c: 'ice-creams', s: 'ice-creams_frozen_deserts', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500', desc: 'Rich Belgian dark chocolate ice cream with a dense velvety texture.' },
  { n: 'Strawberry Frozen Yoghurt 400ml', c: 'ice-creams', s: 'ice-creams_frozen_deserts', price: 160, offerPrice: 130, img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500', desc: 'Tangy strawberry frozen yogurt — refreshingly light and lower in calories.' },

  // Chocolate Packs (Family)
  { n: 'Kit Kat Party Pack 12 Pcs', c: 'ice-creams', s: 'chocolate-family-packs', price: 280, offerPrice: 235, img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500', desc: 'Crispy wafer fingers coated in smooth milk chocolate — share the break!' },
  { n: 'Dairy Milk Silk Share Pack', c: 'ice-creams', s: 'chocolate-family-packs', price: 320, offerPrice: 270, img: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500', desc: 'Silky smooth Cadbury Dairy Milk Silk bars in a shareable multi-pack.' },

  // Chocolate Bars
  { n: 'Snickers Chocolate Bar 50g', c: 'ice-creams', s: 'chocolate-bars', price: 60, offerPrice: 50, img: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=500', desc: 'Nougat, caramel and peanuts drenched in milk chocolate — satisfies every craving.' },
  { n: 'Kitkat Dark Chocolate 45g', c: 'ice-creams', s: 'chocolate-bars', price: 55, offerPrice: 45, img: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=500', desc: 'Crispy wafer fingers in intense dark chocolate — a sophisticated twist on the classic.' },

  // Candies & Gums
  { n: 'Haribo Gummy Bears 200g', c: 'ice-creams', s: 'candies', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1582088770031-e4f6d4fcfdd4?w=500', desc: 'Fruity chewy gummy bears in 5 vibrant flavours — a worldwide candy classic.' },
  { n: 'Mentos Mint Chewing Gum 50 Pcs', c: 'ice-creams', s: 'candies', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500', desc: 'Long-lasting mint-flavoured chewing gum — keeps breath fresh all day.' },

  // Mouth Freshners
  { n: 'Polo Mint Candy Roll', c: 'ice-creams', s: 'mouth-freshners', price: 10, offerPrice: 8, img: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500', desc: 'The iconic peppermint ring candy — cool, crispy and refreshing on the go.' },
  { n: 'Pan Masala-Free Mukhwas 100g', c: 'ice-creams', s: 'mouth-freshners', price: 60, offerPrice: 50, img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500', desc: 'Mixed fennel seeds, sesame and coconut mukhwas — a natural after-meal mouth freshener.' },

  // ─── Personal Care ──────────────────────────────────────────────────────────

  // Face & Body Moisturizers
  { n: 'Nivea Soft Moisturising Cream 300ml', c: 'personal-care', s: 'moisturizers', price: 280, offerPrice: 235, img: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=500', desc: 'Lightweight Nivea cream with Vitamin E and Jojoba oil — non-greasy daily moisturizer.' },
  { n: 'Cetaphil Moisturising Lotion 250ml', c: 'personal-care', s: 'moisturizers', price: 420, offerPrice: 355, img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500', desc: 'Dermatologist-recommended gentle lotion for sensitive and dry skin — fragrance-free.' },

  // Sunscreen
  { n: 'Lakme Sun Expert SPF 50 100ml', c: 'personal-care', s: 'sunscreen', price: 350, offerPrice: 295, img: 'https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?w=500', desc: 'Broad-spectrum SPF 50 PA+++ sunscreen — lightweight, non-sticky formula for daily use.' },
  { n: 'Neutrogena Ultra Sheer SPF 60 88ml', c: 'personal-care', s: 'sunscreen', price: 580, offerPrice: 490, img: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500', desc: 'Ultra-light Helioplex sunscreen with SPF 60 — dries instantly with no white cast.' },

  // Face Cleaning
  { n: 'Himalaya Purifying Neem Face Wash 150ml', c: 'personal-care', s: 'face-cleansing', price: 130, offerPrice: 108, img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500', desc: 'Gentle neem and turmeric face wash that purifies pores and controls oil.' },
  { n: 'Garnier Micellar Cleansing Water 400ml', c: 'personal-care', s: 'face-cleansing', price: 350, offerPrice: 295, img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500', desc: 'Effortlessly removes makeup and impurities with no rinsing — gentle on all skin types.' },

  // Talc & Deodorant
  { n: 'AXE Dark Temptation Deo 150ml', c: 'personal-care', s: 'talc-deodrant', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500', desc: 'Bold dark chocolate-scented deo with 48-hour odour protection — irresistible fragrance.' },
  { n: 'Dove Original Antiperspirant Roll-On 50ml', c: 'personal-care', s: 'talc-deodrant', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500', desc: '1/4 moisturising cream formula with 48h protection — gentle and non-irritating.' },

  // Hair Care
  { n: 'Head & Shoulders Anti-Dandruff Shampoo 340ml', c: 'personal-care', s: 'hair-care', price: 320, offerPrice: 269, img: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=500', desc: 'Clinically proven anti-dandruff shampoo — 100% flake-free hair from the first wash.' },
  { n: 'Pantene Pro-V Conditioner 200ml', c: 'personal-care', s: 'hair-care', price: 280, offerPrice: 235, img: 'https://images.unsplash.com/photo-1559181567-c3190ca9d5db?w=500', desc: 'Pro-vitamin formula that strengthens hair and reduces breakage — silky smooth results.' },
  { n: 'Parachute Coconut Hair Oil 500ml', c: 'personal-care', s: 'hair-care', price: 160, offerPrice: 130, img: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500', desc: '100% pure coconut oil — nourishes scalp, reduces hairfall and promotes healthy growth.' },

  // Women's Grooming
  { n: 'Venus Razor for Women', c: 'personal-care', s: 'women-grooming', price: 350, offerPrice: 295, img: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=500', desc: 'Gillette Venus 3-blade razor with moisture strip — smooth, close shave every time.' },
  { n: 'Veet Hair Removal Cream 100g', c: 'personal-care', s: 'women-grooming', price: 165, offerPrice: 135, img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500', desc: 'Fast-acting hair removal cream — removes hair at the root for silky smooth skin.' },

  // Men's Grooming
  { n: 'Gillette Mach3 Razor', c: 'personal-care', s: 'men-grooming', price: 280, offerPrice: 235, img: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=500', desc: 'Triple-blade Mach3 razor for a precise, close and comfortable shave.' },
  { n: 'Beardo Beard Growth Oil 30ml', c: 'personal-care', s: 'men-grooming', price: 350, offerPrice: 295, img: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500', desc: 'Argan and jojoba oil blend to condition, strengthen and promote beard growth.' },

  // Oral Care
  { n: 'Colgate MaxFresh Toothpaste 150g', c: 'personal-care', s: 'oral-care', price: 110, offerPrice: 90, img: 'https://images.unsplash.com/photo-1559590234-4a7d42f0bf27?w=500', desc: 'Spearmint-flavoured toothpaste with cooling crystals for 12-hour fresh breath.' },
  { n: 'Oral-B Pro Series Electric Toothbrush', c: 'personal-care', s: 'oral-care', price: 999, offerPrice: 849, img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500', desc: 'Removes 100% more plaque than a manual brush — round head reaches every corner.' },

  // Handwashes
  { n: 'Dettol Original Handwash 250ml', c: 'personal-care', s: 'handwashes', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500', desc: 'Kills 99.9% germs with proven antibacterial protection — Pine fresh fragrance.' },
  { n: 'Lifebuoy Total Handwash 250ml', c: 'personal-care', s: 'handwashes', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500', desc: 'Thymol-infused antibacterial handwash — clinically proven germ protection for the family.' },

  // Feminine Care
  { n: 'Whisper Ultra Soft Pads 30 Pcs', c: 'personal-care', s: 'feminine-care', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500', desc: 'Ultra-thin soft cotton pads with wings for all-day leak protection and comfort.' },
  { n: 'Stayfree Secure Dry Cover Pads 10 Pcs', c: 'personal-care', s: 'feminine-care', price: 75, offerPrice: 62, img: 'https://images.unsplash.com/photo-1559590234-4a7d42f0bf27?w=500', desc: 'Dry-cover pads with 3D core for rapid absorption and rash-free comfort.' },

  // Bathing Soaps
  { n: 'Dove Beauty Cream Bar Soap 100g', c: 'personal-care', s: 'bathing-soaps', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=500', desc: 'Soap bar with 1/4 moisturising cream — leaves skin soft, smooth and hydrated.' },
  { n: 'Lux Soft Touch Bar Soap 100g', c: 'personal-care', s: 'bathing-soaps', price: 45, offerPrice: 38, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500', desc: 'Rose-infused luxury bar soap for silky smooth skin — the soap of stars.' },

  // Shower Gels & Body Wash
  { n: 'Fiama Blueberry Shower Gel 250ml', c: 'personal-care', s: 'shower-gels', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500', desc: 'Blueberry and sea minerals shower gel with skin conditioners — refreshing lather.' },
  { n: 'Palmolive Naturals Body Wash 250ml', c: 'personal-care', s: 'shower-gels', price: 160, offerPrice: 130, img: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=500', desc: 'Mild moisturising body wash with almond milk and honey — gentle on sensitive skin.' },

  // ─── Home & Office ──────────────────────────────────────────────────────────

  // Pooja Needs
  { n: 'Cycle Agarbatti (Incense Sticks) 100 Pcs', c: 'home', s: 'pooja-needs', price: 50, offerPrice: 42, img: 'https://images.unsplash.com/photo-1602524816826-e50d2e9cda28?w=500', desc: 'Fragrant sandalwood & rose incense sticks — perfect for puja and meditation.' },
  { n: 'Pure Ghee Diya (Set of 10)', c: 'home', s: 'pooja-needs', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1604782206219-3b9576575203?w=500', desc: 'Traditional clay diyas ready to fill with ghee — illuminate every festival and puja.' },

  // Party Essentials
  { n: 'Party Balloons Pack of 50', c: 'home', s: 'party-essentials', price: 120, offerPrice: 99, img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500', desc: 'Vibrant assorted colour latex balloons — transform any space into a festive party zone.' },
  { n: 'Paper Cups & Plates Combo Set', c: 'home', s: 'party-essentials', price: 150, offerPrice: 125, img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500', desc: '50 disposable cups and 25 plates — eco-friendly sugarcane pulp, ideal for events.' },

  // Tissues & Disposables
  { n: 'Kleenex Facial Tissues 200 Pulls', c: 'home', s: 'tissues-disposables', price: 110, offerPrice: 90, img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500', desc: 'Soft 2-ply facial tissues — gentle on skin, strong enough for everyday use.' },
  { n: 'Kitchen Paper Towel Roll 2-Pack', c: 'home', s: 'tissues-disposables', price: 130, offerPrice: 108, img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500', desc: 'Super-absorbent 2-ply kitchen towels — tackle spills and messes in seconds.' },

  // Repellents
  { n: 'Good Knight Mosquito Coil 10 Pcs', c: 'home', s: 'repellents', price: 40, offerPrice: 33, img: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=500', desc: 'Long-lasting 8-hour mosquito coil with herbal actives — keeps mosquitoes away all night.' },
  { n: 'All Out Electric Mosquito Repellent', c: 'home', s: 'repellents', price: 120, offerPrice: 99, img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500', desc: 'Plug-in liquid vaporizer with refill — 45-night protection against mosquitoes.' },

  // Kitchen & Dining Needs
  { n: 'Aluminium Foil Roll 9m', c: 'home', s: 'kitchen-needs', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1607082349566-187342175046?w=500', desc: 'Heavy-duty aluminium foil for baking, grilling and food storage — food-grade safe.' },
  { n: 'Cling Wrap Food Wrap 30m', c: 'home', s: 'kitchen-needs', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500', desc: 'Crystal-clear food-grade cling wrap — keeps leftovers fresh and airtight in the fridge.' },

  // Stationaries
  { n: 'Reynolds Ball Pen Pack of 10', c: 'home', s: 'stationaries', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500', desc: 'Smooth-writing blue ball pens with comfortable grip — office and school essential.' },
  { n: 'Sticky Notes 5-Colour Pack 400 Sheets', c: 'home', s: 'stationaries', price: 110, offerPrice: 90, img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500', desc: 'Super-sticky repositionable note pads in 5 neon colours — organise your desk and life.' },

  // ─── Cleaning Essentials ────────────────────────────────────────────────────

  // Floor & Surface Cleaners
  { n: 'Lizol Floor Cleaner 975ml', c: 'cleaning', s: 'floor-cleaners', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500', desc: 'Kills 99.9% germs on all floor types — pine fresh scent for a hygienically clean home.' },
  { n: 'Colin Glass & Surface Cleaner 500ml', c: 'cleaning', s: 'floor-cleaners', price: 120, offerPrice: 99, img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500', desc: 'Crystal-clear streak-free shine on glass, mirrors and surfaces in one spray.' },

  // Toilet & Bathroom Cleaners
  { n: 'Harpic Power Plus Toilet Cleaner 750ml', c: 'cleaning', s: 'toilet-cleaners', price: 150, offerPrice: 125, img: 'https://images.unsplash.com/photo-1607082349566-187342175046?w=500', desc: 'Kills 99.9% germs under the rim — powerful formula removes tough stains and limescale.' },
  { n: 'Domex Toilet Cleaning Gel 500ml', c: 'cleaning', s: 'toilet-cleaners', price: 110, offerPrice: 90, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500', desc: 'Thick bleach gel that clings to the bowl — disinfects and deodorises with every flush.' },

  // Fabric Conditioners & Additives
  { n: 'Comfort Fabric Conditioner 860ml', c: 'cleaning', s: 'fabric-conditioners', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500', desc: 'Rose-scented fabric softener that leaves clothes soft, fragrant and static-free.' },
  { n: 'Vanish Oxi Action Fabric Stain Remover 300g', c: 'cleaning', s: 'fabric-conditioners', price: 280, offerPrice: 235, img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500', desc: 'Oxi-power stain remover that lifts tough stains in cold water — safe on colours.' },

  // Fresheners
  { n: 'Odonil Bathroom Air Freshener Blocks 50g', c: 'cleaning', s: 'freshers', price: 60, offerPrice: 50, img: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=500', desc: 'Long-lasting fragrance blocks for bathrooms — rose and jasmine variants available.' },
  { n: 'Febreze Air Freshener 300ml', c: 'cleaning', s: 'freshers', price: 350, offerPrice: 295, img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500', desc: 'Eliminates tough odours instead of masking them — leaves a fresh clean scent.' },

  // Detergent Powder & Bars
  { n: 'Ariel Matic Detergent Powder 2kg', c: 'cleaning', s: 'detergents', price: 380, offerPrice: 320, img: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500', desc: 'Superior stain removal in just 1 wash — specially formulated for front-load machines.' },
  { n: 'Wheel Washing Powder 4kg', c: 'cleaning', s: 'detergents', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500', desc: 'Effective everyday detergent for bright whites and clean colours — great value for money.' },

  // Dishwashing Bars & Liquids
  { n: 'Vim Dishwash Liquid 750ml', c: 'cleaning', s: 'dishwashing-bars-liquid', price: 140, offerPrice: 115, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500', desc: 'Lemon-power formula that cuts through grease instantly — leaves dishes sparkling clean.' },
  { n: 'Exo Dishwash Bar 500g', c: 'cleaning', s: 'dishwashing-bars-liquid', price: 55, offerPrice: 45, img: 'https://images.unsplash.com/photo-1607082349566-187342175046?w=500', desc: 'Tamarind-infused dishwash bar — removes stubborn grease with minimal effort.' },

  // Dishwashing Accessories
  { n: 'Scotch-Brite Scrub Sponge Pack of 3', c: 'cleaning', s: 'dishwashing-accessories', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500', desc: 'Dual-sided scrub sponge — soft side for non-stick, rough side for heavy-duty scrubbing.' },
  { n: 'Steel Wool Scrubber Pack of 6', c: 'cleaning', s: 'dishwashing-accessories', price: 45, offerPrice: 38, img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500', desc: 'Heavy-gauge steel wool pads for tough grease on pots, pans and grills.' },

  // Liquid Detergents
  { n: 'Surf Excel Liquid Detergent 1L', c: 'cleaning', s: 'liquid-detergents', price: 280, offerPrice: 235, img: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500', desc: 'Pre-treat and wash with one liquid — removes stains in a single step for both machines and hand wash.' },
  { n: 'Ezee Gentle Liquid Detergent 500ml', c: 'cleaning', s: 'liquid-detergents', price: 130, offerPrice: 108, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500', desc: 'Mild pH-balanced liquid detergent for delicates and woollens — no colour fading.' },

  // ─── Pharma & Wellness ──────────────────────────────────────────────────────

  // Cough & Cold
  { n: 'Vicks VapoRub Ointment 50g', c: 'pharma', s: 'cough-cold', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500', desc: 'Medicated eucalyptus ointment for instant relief from cold, cough and blocked nose.' },
  { n: 'Strepsils Sore Throat Lozenges 24 Pcs', c: 'pharma', s: 'cough-cold', price: 120, offerPrice: 99, img: 'https://images.unsplash.com/photo-1559590234-4a7d42f0bf27?w=500', desc: 'Antibacterial throat lozenges that soothe soreness and relieve cough irritation.' },

  // Everyday Medicines
  { n: 'Dolo 650mg Paracetamol 15 Tabs', c: 'pharma', s: 'everyday-medicines', price: 30, offerPrice: 25, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500', desc: 'Fast-acting paracetamol tablets for fever and mild to moderate pain relief.' },
  { n: 'Volini Pain Relief Spray 55g', c: 'pharma', s: 'everyday-medicines', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1559590234-4a7d42f0bf27?w=500', desc: 'Targeted spray for joint, muscle and back pain — penetrates fast for quick relief.' },

  // Digestive Care
  { n: 'Eno Fruit Salt Lemon Flavour 100g', c: 'pharma', s: 'digestive-care', price: 55, offerPrice: 45, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500', desc: 'Fizzy antacid granules that relieve acidity, heartburn and bloating in 6 seconds.' },
  { n: 'Pudin Hara Digestive Capsules 60 Pcs', c: 'pharma', s: 'digestive-care', price: 90, offerPrice: 75, img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500', desc: 'Ayurvedic peppermint capsules for instant relief from gas, indigestion and stomach ache.' },

  // Healthcare Devices
  { n: 'Digital Thermometer Fast-Read', c: 'pharma', s: 'healthcare-devices', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500', desc: 'Accurate digital thermometer with beep alert and memory recall — 60-second reading.' },
  { n: 'Fingertip Pulse Oximeter', c: 'pharma', s: 'healthcare-devices', price: 650, offerPrice: 549, img: 'https://images.unsplash.com/photo-1559590234-4a7d42f0bf27?w=500', desc: 'Instantly measures blood oxygen saturation (SpO2) and pulse rate — FDA approved.' },

  // Adult Diapers
  { n: 'Friends Premium Adult Diapers L 10 Pcs', c: 'pharma', s: 'adult-diapers', price: 450, offerPrice: 380, img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500', desc: 'Super-absorbent adult diapers with anti-leak barriers — 8-hour dryness and comfort.' },
  { n: 'Tena Slip Maxi Adult Diaper M 7 Pcs', c: 'pharma', s: 'adult-diapers', price: 520, offerPrice: 440, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500', desc: 'Breathable tape-on adult diaper with odour protection — ideal for bedridden patients.' },

  // Wound Care & Pain Relief
  { n: 'Band-Aid Plastic Strips 40 Pcs', c: 'pharma', s: 'wound-care', price: 80, offerPrice: 65, img: 'https://images.unsplash.com/photo-1559590234-4a7d42f0bf27?w=500', desc: 'Flexible water-resistant adhesive bandages that stay on through washing and activity.' },
  { n: 'Betadine Antiseptic Solution 30ml', c: 'pharma', s: 'wound-care', price: 65, offerPrice: 55, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500', desc: 'Povidone-iodine first-aid solution — kills germs and prevents wound infection.' },

  // Sexual Wellness
  { n: 'Durex Condoms Extra Safe 10 Pcs', c: 'pharma', s: 'sexual-wellness', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500', desc: 'Electronically tested latex condoms with extra lubrication for reliable protection.' },

  // Antiseptic Liquids
  { n: 'Dettol Antiseptic Liquid 250ml', c: 'pharma', s: 'antiseptic-liquids', price: 110, offerPrice: 90, img: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500', desc: 'Household antiseptic that kills bacteria on skin cuts, scrapes and in cleaning water.' },
  { n: 'Savlon Antiseptic Cream 75g', c: 'pharma', s: 'antiseptic-liquids', price: 75, offerPrice: 62, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500', desc: 'Antiseptic cream that protects minor wounds from infection and soothes irritation.' },

  // Oral Health & Eye Care
  { n: 'Optrex Eye Drops 10ml', c: 'pharma', s: 'oral-health-eye-care', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1559590234-4a7d42f0bf27?w=500', desc: 'Saline eye drops to refresh and relieve dry, tired or irritated eyes.' },
  { n: 'Listerine Mouthwash Cool Mint 250ml', c: 'pharma', s: 'oral-health-eye-care', price: 130, offerPrice: 108, img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500', desc: 'ADA-accepted antiseptic mouthwash — kills 99.9% germs and leaves breath fresh for 24h.' },

  // Masks & Sanitizers
  { n: 'Dettol Hand Sanitizer 50ml', c: 'pharma', s: 'masks-sanitizers', price: 55, offerPrice: 45, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500', desc: '70% alcohol-based gel sanitizer — kills 99.9% germs without water.' },
  { n: 'N95 Respirator Mask Pack of 5', c: 'pharma', s: 'masks-sanitizers', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500', desc: 'BIS-certified N95 mask with 5-layer filtration — blocks PM2.5 and airborne particles.' },

  // Smoking Cessations
  { n: 'Nicorette Gum 2mg 30 Pcs', c: 'pharma', s: 'smoking-cessations', price: 320, offerPrice: 270, img: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500', desc: 'Nicotine replacement gum that curbs cravings — mint and fresh fruit flavours.' },

  // Beauty Supplements
  { n: 'Biotin Hair & Nail Tablets 60 Pcs', c: 'pharma', s: 'beauty-supplements', price: 550, offerPrice: 465, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500', desc: 'High-potency Biotin (10,000mcg) for stronger hair, nails and healthier skin.' },
  { n: 'Collagen Skin Gummies 30 Pcs', c: 'pharma', s: 'beauty-supplements', price: 680, offerPrice: 575, img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500', desc: 'Hydrolysed marine collagen gummies for firmer, plumper and more youthful skin.' },

  // ─── Baby Care ───────────────────────────────────────────────────────────────

  // Baby Diapers
  { n: 'Pampers New Born Diapers 32 Pcs', c: 'baby-care', s: 'baby-diapers', price: 480, offerPrice: 405, img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500', desc: '12-hour dryness and wetness indicator — ultra-soft newborn diapers for sensitive skin.' },
  { n: 'Huggies Wonder Pants L 32 Pcs', c: 'baby-care', s: 'baby-diapers', price: 520, offerPrice: 440, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500', desc: 'Bubble bed design pants that lock in wetness and stretch for a snug, leak-free fit.' },
  { n: 'MamyPoko Extra Absorb Diaper M 54 Pcs', c: 'baby-care', s: 'baby-diapers', price: 649, offerPrice: 549, img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500', desc: 'Japanese technology diapers with quick-dry cotton sheet — keeps baby dry overnight.' },

  // Bathing Needs
  { n: 'Johnson\'s Baby Shampoo 200ml', c: 'baby-care', s: 'bathing-needs', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=500', desc: 'Tear-free, no-more-tears formula — as gentle to eyes as pure water on baby\'s scalp.' },
  { n: 'Himalaya Baby Wash 400ml', c: 'baby-care', s: 'bathing-needs', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=500', desc: 'Soap-free baby body wash with chickpea and country mallow — pH-balanced for baby skin.' },

  // Baby Wipes
  { n: 'WaterWipes Pure Baby Wipes 60 Pcs', c: 'baby-care', s: 'baby-wipes', price: 280, offerPrice: 235, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500', desc: '99.9% water wipes — the only ingredient list your newborn\'s skin needs.' },
  { n: 'Pampers Fresh Clean Wipes 72 Pcs', c: 'baby-care', s: 'baby-wipes', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500', desc: 'Thick, soft and fragrance-free baby wipes that gently cleanse every nappy change.' },

  // Baby Food
  { n: 'Cerelac Wheat & Honey Stage 1 300g', c: 'baby-care', s: 'baby-food', price: 280, offerPrice: 235, img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=500', desc: 'Nestle Cerelac fortified infant cereal with 18 key nutrients — from 6 months.' },
  { n: 'Horlicks Growth+ Vanilla 400g', c: 'baby-care', s: 'baby-food', price: 380, offerPrice: 320, img: 'https://images.unsplash.com/photo-1517093728432-a0440f8d45af?w=500', desc: 'Specialised nutrition drink for children 3–9 years — clinically proven for visible growth.' },
  { n: 'Gerber Organic Baby Puree Apple 90g', c: 'baby-care', s: 'baby-food', price: 120, offerPrice: 99, img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cb6c?w=500', desc: 'USDA organic apple purée with no added sugar or salt — stage 1 first food.' },

  // Skin & Hair Care (Baby)
  { n: 'Johnson\'s Baby Lotion 200ml', c: 'baby-care', s: 'skin-hair-care', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=500', desc: 'Clinically proven mild baby lotion with coconut oil — keeps delicate skin soft all day.' },
  { n: 'Mamaearth Nourishing Baby Hair Oil 200ml', c: 'baby-care', s: 'skin-hair-care', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500', desc: 'Toxin-free almond and avocado oil blend for baby hair — promotes healthy growth.' },

  // Baby Oral Care
  { n: 'Pigeon Baby Toothbrush & Toothpaste Set', c: 'baby-care', s: 'baby-oral-care', price: 180, offerPrice: 149, img: 'https://images.unsplash.com/photo-1559590234-4a7d42f0bf27?w=500', desc: 'Extra-soft silicone brush with strawberry-flavoured fluoride-free toothpaste for infants.' },
  { n: 'Chicco Gum Massager & First Toothbrush', c: 'baby-care', s: 'baby-oral-care', price: 220, offerPrice: 185, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500', desc: 'BPA-free silicone gum massager that soothes teething discomfort and cleans gums.' }
];



const seedProducts = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/greenCart`);
        console.log("Connected to MongoDB for precise seeding...");

        await Product.deleteMany({});
        console.log("Cleared old products...");

        let dummyProducts = [];

        for (const item of products) {
            const basePrice = item.price ?? (Math.floor(Math.random() * 750) + 50);
            const offerPrice = item.offerPrice ?? Math.floor(basePrice * (0.8 + (Math.random() * 0.15)));
            const description = item.desc
                ? [item.desc]
                : [`Premium quality ${item.n} delivered fresh to your door.`];

            dummyProducts.push({
                name: item.n,
                description,
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
