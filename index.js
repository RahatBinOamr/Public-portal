const loadPublicPortal = async() =>{
const url = (`https://openapi.programming-hero.com/api/news/categories`)
fetch(url)
.then (res=>res.json())
.then(data=>setAllMenu(data))

}

const setAllMenu = (product)=>{
  /*   console.log(product.data.news_category); */
    const menuList = document.getElementById('meau-list');
    const uniqueArray = [];
    for(const data in product){
        /* console.log(product.data.news_category) */
        if(uniqueArray.indexOf(product.data.news_category)=== -1){
            uniqueArray.push(product.data.news_category);
            const div = document.createElement('div');
            div.innerHTML = 
            `
            <ul class="menu menu-horizontal p-0">
                <li><a> ${product.data.news_category[0].category_name } </a></li>
                
              </ul>
            `;
            menuList.appendChild(div)
        }
    }

}
loadPublicPortal()