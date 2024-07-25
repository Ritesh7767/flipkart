import CategoryCard from "./CategoryCard"

const Category = () => {
  return (
    <div className="flex justify-around mt-2 gap-2 p-3">
        <CategoryCard urlImage="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/698ba0cebe456aaf.jpg?q=100" title="Top Offer"   />
        <CategoryCard urlImage="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/44e10b16e649b691.jpg?q=100" title="Mobiles & Tablets" />
        <CategoryCard urlImage="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/717b5077a5e25324.jpg?q=100" title="TVs & Appliances" />
        <CategoryCard urlImage="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/4da1d0d19350cc84.jpg?q=100" title="Electronics" />
        <CategoryCard urlImage="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/9d4e9c605fc1d2d3.jpg?q=100" title="Fashion" />
        <CategoryCard urlImage="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/a5e656672d0548dd.jpg?q=100" title="Beauty" />
        <CategoryCard urlImage="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/5b813b64a3179898.jpg?q=100" title="Home & Kitchen" />
        <CategoryCard urlImage="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/7a5e96c10ada8a56.jpg?q=100" title="Furniture" />
        <CategoryCard urlImage="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/57fe1ffe54569c41.jpg?q=100" title="Travel" />
        <CategoryCard urlImage="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/25f400c36bc3487d.jpg?q=100" title="Grocery" />
    </div>
  )
}

export default Category