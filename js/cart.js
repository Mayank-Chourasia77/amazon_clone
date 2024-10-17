const products= [{
    img:'/amazon_clone_img/assets/acer_laptop.jpg',
    name:'Acer Nitro V Gaming Laptop 13th Gen Intel Core i5-13420H with RTX 4050 Graphics 6GB VRAM, 144Hz Display (16GB DDR5/512GB SSD)',
    rating:{
       stars:4.5,
       count:87
    },
    priceCents:3200
},
 {
  img:'/amazon_clone_img/assets/acer_laptop.jpg',
  name:'Acer Nitro V Gaming Laptop 13th Gen Intel Core i5-13420H with RTX 4050 Graphics 6GB VRAM, 144Hz Display (16GB DDR5/512GB SSD)',
  rating:{
     stars:4.5,
     count:87
  },
  priceCents:3200
},
{  
  img:'/amazon_clone_img/assets/acer_laptop.jpg',
    name:'Acer Nitro V Gaming Laptop 13th Gen Intel Core i5-13420H with RTX 4050 Graphics 6GB VRAM, 144Hz Display (16GB DDR5/512GB SSD)',
    rating:{
       stars:4.5,
       count:87
    },
    priceCents:3200
},
{
  img:'/amazon_clone_img/assets/acer_laptop.jpg',
  name:'Acer Nitro V Gaming Laptop 13th Gen Intel Core i5-13420H with RTX 4050 Graphics 6GB VRAM, 144Hz Display (16GB DDR5/512GB SSD)',
  rating:{
     stars:4.5,
     count:87
  },
  priceCents:320000
}
];

let Product_html = '';
 products.forEach((product)=>{
   Product_html +=  `
    <div class="product-card">
            <div class="product-img">
               <img src="${product.img}">
            </div>
            <div class="product-description">
               <p>${product.name}</p>
            </div>
            <div class="product-review">
               <div class="product-rating-stars">
                  <img src="/amazon_clone_img/ratings/rating-${(product.rating.stars)*10}.png">
                     <div class="product-rating-count">
                      ${product.rating.count}
                     </div>
               </div>
            <div class="product-price"><p>$ ${((product.priceCents)/100).toFixed(2)}</p> 
                  <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                  </select>
               </div>
            </div>
            <div class="added-to-cart">
            <img src="/amazon_clone_img/icons/checkmark.png"> "Added"
            </div>
            <button class="add-to-cart-button"> Add to cart</button>
      </div>`;
      
 })
 document.querySelector('.js-product-grid').innerHTML = Product_html;