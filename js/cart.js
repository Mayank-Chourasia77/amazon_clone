
const products= [{
    img:'/amazon_clone_img/assets/acer_laptop.jpg',
    name:'Acer Nitro V Gaming Laptop 13th Gen Intel Core i5-13420H with RTX 4050 Graphics 6GB VRAM, 144Hz Display (16GB DDR5/512GB SSD)',
    rating:{
       stars:4.5,
       count:87
    },
    priceCents:32900
},
 {
  img:'/amazon_clone_img/assets/laptop-02.jpg',
  name:'Acer Aspire 3 Laptop Intel Core Celeron N4500 Processor Laptop (8 GB LPDDR4X SDRAM/512 GB SSD/Win11 Home/38 WHR/HD Webcam)',
  rating:{
     stars:4,
     count:77
  },
  priceCents:26900
},
{  
  img:'/amazon_clone_img/assets/laptop-03.jpg',
    name:'ASUS TUF Gaming A15, Ryzen 7 7435HS, 15.6-inch (39.62 cm) FHD 144Hz, Gaming Laptop (16GB RAM/512GB SSD/NVIDIA GeForce RTX 3050/Windows 11)',
    rating:{
       stars:4.5,
       count:117
    },
    priceCents:59900
},
{
  img:'/amazon_clone_img/assets/laptop-04.jpg',
  name:'Lenovo IdeaPad 1 AMD Ryzen 5 5500U 15.6" (39.62cm) FHD Thin & Light Laptop (8GB/512GB SSD/Integrated AMD Graphics/Windows 11)',
  rating:{
     stars:4,
     count:60
  },
  priceCents:39900
},
{  
   img:'/amazon_clone_img/assets/laptop-03.jpg',
     name:'ASUS TUF Gaming A15, Ryzen 7 7435HS, 15.6-inch (39.62 cm) FHD 144Hz, Gaming Laptop (16GB RAM/512GB SSD/NVIDIA GeForce RTX 3050/Windows 11)',
     rating:{
        stars:4.5,
        count:117
     },
     priceCents:59900
 },
 {
   img:'/amazon_clone_img/assets/laptop-04.jpg',
   name:'Lenovo IdeaPad 1 AMD Ryzen 5 5500U 15.6" (39.62cm) FHD Thin & Light Laptop (8GB/512GB SSD/Integrated AMD Graphics/Windows 11)',
   rating:{
      stars:4,
      count:60
   },
   priceCents:39900
 },
 {
    img:'/amazon_clone_img/assets/acer_laptop.jpg',
    name:'Acer Nitro V Gaming Laptop 13th Gen Intel Core i5-13420H with RTX 4050 Graphics 6GB VRAM, 144Hz Display (16GB DDR5/512GB SSD)',
    rating:{
       stars:4.5,
       count:87
    },
    priceCents:32900
},
 {
  img:'/amazon_clone_img/assets/laptop-02.jpg',
  name:'Acer Aspire 3 Laptop Intel Core Celeron N4500 Processor Laptop (8 GB LPDDR4X SDRAM/512 GB SSD/Win11 Home/38 WHR/HD Webcam)',
  rating:{
     stars:4,
     count:77
  },
  priceCents:26900
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
            <button class="add-to-cart-button js-add-to-cart"
            data-product-name ="${product.name}"> Add to cart</button>
      </div>`;
      
 })
 document.querySelector('.js-product-grid').innerHTML = Product_html;
 
 document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
         const productname=button.dataset.productName;
         let matchingItem;
          productCart.forEach((item)=>{
               if(item.productName == productname){
                      matchingItem = item;
               }
          });
          if(matchingItem){
             matchingItem.quantity++;
          }else{
            productCart.push({
               productName:productname,
               quantity : 1
            })
          }
          let cartqunatity = productCart.length;
          document.querySelector('.cart-item-no').innerHTML=cartqunatity;

    });
 });
