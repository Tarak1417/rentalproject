import React, { useContext, useState } from "react";
import "./Css/ShopCategory.css";
import { Shopcontext } from "../Context/Shopcontext";

import Items from "../components/Items/Items";

const ShopCategory = (props) => {
    const { all_product } = useContext(Shopcontext);
    const [sortOption, setSortOption] = useState("default");

    // Sorting function
    const sortProducts = (products, option) => {
        switch (option) {
            case "price-asc":
                return products.slice().sort((a, b) => a.new_price - b.new_price);
            case "price-desc":
                return products.slice().sort((a, b) => b.new_price - a.new_price);
            case "title-asc":
                return products.slice().sort((a, b) => a.name.localeCompare(b.name));
            case "title-desc":
                return products.slice().sort((a, b) => b.name.localeCompare(a.name));
            default:
                return products;
        }
    };

    // Filter and sort products
    const filteredProducts = all_product.filter(item => props.category === item.category);
    const sortedProducts = sortProducts(filteredProducts, sortOption);

    return (
        <div className="shop-category">
            <img className="ShopCategory-banner" src={props.banner} alt="" />
            <div className="shop-catagory-index">
                <p>
                    <span>Showing 1-{sortedProducts.length}</span> out of {filteredProducts.length} products
                </p>
                
                    <div className="dropdown">
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="default">Default</option>
                        <option value="price-asc">Price (Low to High)</option>
                        <option value="price-desc">Price (High to Low)</option>
                        <option value="title-asc">Title (A to Z)</option>
                        <option value="title-desc">Title (Z to A)</option>
                    </select>

                    </div>
            </div>
            <div className="shopcategory-products">
                {sortedProducts.map((item, i) => (
                    <Items
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
            <div className="loadmore">EXPLORE MORE</div>
        </div>
    );
};

export default ShopCategory;
