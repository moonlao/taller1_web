const user = { 
    username: "willyrex",
    email: "ostiawilly@wismichu.com",
    gender: "male",
    hair: "green"
    
};


console.log("User Data: " + user.username + "," + user.email + "," + user.gender + "," + user.hair);


const products = [
    {
        name: "las yeezys piscopata",
        price: 1200,
        description: "best walking yeezys in da world",
        stock: 5,
        image: '../img/rev1.png',
    },

    {
        name: "championship tee",
        price: 800,
        description: "shirts for champions!",
        stock: 4,
        image: '../img/rev3.png',
    },

    {
        name: "pix hoodie",
        price: 650,
        description: "for cold days",
        stock: 0,
        image: '../img/rev2.png',
    },

    {
        name: "polka dot jean",
        price: 2400,
        description: "collect the shirt",
        stock: 0,
        image: '../img/arr3.png',
    },

    {
        name: "polka dot shirt",
        price: 1800,
        description: "collect the jean",
        stock: 2,
        image: '../img/arr2.png',
    },

    {
        name: "red shoes",
        price: 700,
        description: "dem pretty fits",
        stock: 8,
        image: '../img/arr1.png',
    }
];

console.log("products below 1500: "); 
  for (let index = 0; index < products.length; index++) {
      if (products[index].price >= 1500) {
          console.log(products[index].name);
      }
  }


  console.log("stock: "); 
  for (let index = 0; index < products.length; index++) {
      if (products[index].stock <= 0) {
          console.log(products[index].name);
      }
  }




const makeShop = document.getElementById("shop");


function chopShop() {
    makeShop.innerHTML = "";

    for (let index = 0; index < products.length; index++){
        makeShop.appendChild(render(products[index]));
    }
}



function render(products){

    let item = document.createElement("div");
    item.className = "bestsellers";

    let image = document.createElement("img");
    image.className = "bestseller__img";
    image.src = products.image;

    let name = document.createElement("h3");
    name.className = "review__title";
    name.innerHTML = products.name;

    let description = document.createElement("p");
    description.className = "product__description";
    description.innerHTML = products.description;

    let price = document.createElement("h4");
    price.className = "top__price";
    price.innerHTML = products.price;

    item.appendChild(image);
    item.appendChild(name);
    item.appendChild(description);
    item.appendChild(price);

    return item;
}


chopShop();