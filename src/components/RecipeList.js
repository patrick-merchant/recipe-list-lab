
const RecipeList = () => {

    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ];

    

    const recipesList = cakes.map(({cakeName, ingredients, rating}, index) => (
        
        <li key={index}>
            Name: {cakeName} <br></br> 
            Ingredients: {ingredients.map((ingredient, index) => (<p key={index}>{ingredient}</p>))} <br></br> 
            rating: {rating} <br></br>
        </li>
    ));


    return (
        <>
            <h1>List of Cakes</h1>
            <ul>{recipesList}</ul>
        </>
    )
}

export default RecipeList;