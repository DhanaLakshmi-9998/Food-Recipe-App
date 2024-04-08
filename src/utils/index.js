

export async function fetchRecipes (filter){
    const {query, limit} = filter;
    const APP_ID="b5cb45ab"
    const APP_KEY="4fba1ad9d6576db02192421282ad0c47"

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=${limit}&`;


    const response = await fetch(url)

    const data = await response.json();
    // console.log(data)
    // To get their recipes object
    return data?.hits;
}

export async function fetchRecipe(id){
    const APP_ID="b5cb45ab"
    const APP_KEY="4fba1ad9d6576db02192421282ad0c47"
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${APP_ID}&app_key=${APP_KEY}`
    
    const response = await fetch(url)
    
    const data = await response.json();
    
    return data[0];
    }
