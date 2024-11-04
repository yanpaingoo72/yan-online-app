import React from "react";
import CategoryBtn from "./CategoryBtn";
import Container from "./Container";

const CategorySection = () => {
  const categoryName = "Product Category";
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <section id="productSection" className="p-5">
      <Container>
        <p className="text-sm text-gray-500 mb-2">{categoryName}</p>
        <div className="flex  overflow-scroll category-button-group ">
          <CategoryBtn categoryName="all" current={true} />
          {categories.map((category) => (
            <CategoryBtn
              key={category}
              categoryName={category}
              current={false}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
