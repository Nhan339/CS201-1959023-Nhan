document.addEventListener("DOMContendLoaded",  function(){
    getProducts();
    function getProducts(){
        let url = "https://fakestoreapi.com/products?limit=8";
        let xhr = new XMLHttpRequest();
        xhr.open(
            "GET", url, true
        );
        xhr.onload = function(){
            if (this.status == 200 ){
                let result = JSON.parse(this.responeText);
                outputProducts(result);
            }            
        }
        xhr.send();
    }

    function outputProducts(products){
        let productsdiv = document.querySelector(".products");
        console.log(products);
        let output = "";
        products.forEach((item)=>{
            output += `<div class="col-md-3 products text-center">
            <img src="${item.images}" alt="">
            <h5>${item.title}</h5>
            <h5>${item.price}</h5>
          </div>`
        });
        productsdiv.innerHTML = output;
    }
})

