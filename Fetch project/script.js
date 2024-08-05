// fetch is a window object
// fetch is used to perform a request
// fetch method returns a promise
// the promise is either fulfilled or rejected

const apiURL = "https://fakestoreapi.com/products";
fetch(apiURL)
    .then((response) => {
        // console.log(response.json());
        return response.json();

    })
    .then((fetchedData) => {
        console.log(fetchedData);
        let shoppingData =""
        fetchedData.map((singleData) => {
            shoppingData += `
             <div class="shopping-info">
                <img src=${singleData.image} alt="" class="card-image">
                <h4>${singleData.title}</h4>
                <p>${singleData.description}</p>
                <p>${singleData.category}</p>
                <div>
                    <p>${singleData.price}</p>
                    <p>${singleData.rating.rate} - ${singleData.rating.count}</p>
                </div>
            </div>
            `
        })
        document.getElementById("shop-container").innerHTML = shoppingData;
    }).catch((error) => {
        console.log(error)
    })