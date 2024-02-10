function myRecipesComponents({label, image, cuisineType, dishType, ingredients }) {
    return(<div>
        <div className="container">
            <h2>{label}</h2>
        </div>

        <div className="container">
        <img src={image} alt="dish" />
        </div>

        <div className="container">
            <h3>Cuisine Type: {cuisineType}</h3>
        </div>

        <div className="container">
            <h3>Dish Type: {dishType}</h3>
        </div>

        <ul className="container list">
            {ingredients.map((ingredient, index) =>(
                <li key={index}>
                    {ingredient}
                </li>
            ))}
        </ul>

    </div>

    )
}
export default myRecipesComponents;