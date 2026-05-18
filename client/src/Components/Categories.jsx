import React, { useMemo } from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../Context/AppContext'

const Categories = () => {

    const { navigate, products, currency } = useAppContext()

    // Process and sort categories
    const processedCategories = useMemo(() => {
        const categoriesWithPrices = categories.map(category => {
            // Find all products that belong to this category
            const categoryProducts = products.filter(p => p.category === category.path);
            
            // Calculate minimum price
            let minPrice = null;
            if (categoryProducts.length > 0) {
                minPrice = Math.min(...categoryProducts.map(p => p.offerPrice));
            }

            return {
                ...category,
                minPrice
            };
        });

        // Sort categories: ones with prices first (sorted low to high), then ones without prices
        categoriesWithPrices.sort((a, b) => {
            if (a.minPrice !== null && b.minPrice !== null) {
                return a.minPrice - b.minPrice;
            }
            if (a.minPrice !== null) return -1;
            if (b.minPrice !== null) return 1;
            return 0;
        });

        return categoriesWithPrices;
    }, [products]);

    return (
        <div className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>Categories</p>
            <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 mt-6 gap-6'>

                {processedCategories.map((category, index) => (
                    <div key={index} className='flex flex-col cursor-pointer items-center'
                        onClick={() => {
                            navigate(`/products/${category.path.toLowerCase()}`);
                            window.scrollTo(0, 0)
                        }}>
                        <div className='group rounded-2xl flex justify-center items-center w-full bg-[#EFFFE8] h-24'>
                            <img loading="lazy" className='group-hover:scale-110 transition max-w-28 max-h-20 object-contain'
                                src={category.image} alt={category.text} />
                        </div>

                        <p className='text-sm font-medium text-center mt-3'>{category.text}</p>
                        {category.minPrice !== null && (
                            <p className='text-xs text-green-700 font-bold mt-1'>Starting from {currency}{category.minPrice.toFixed(2)}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories