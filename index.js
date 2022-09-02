const loadPublicPortal = async() =>{
const url = (`https://openapi.programming-hero.com/api/news/categories`)
fetch(url)
.then (res=>res.json())
.then(data=>setAllMenu(data.data.news_category))

}

const setAllMenu = (allNews)=>{
 
    const menuList = document.getElementById('meau-list');
    const uniqueArray = [];
    allNews.forEach(news=>{
        
        if(uniqueArray.indexOf(news)=== -1){
            uniqueArray.push(news);
            const div = document.createElement('div');
            div.innerHTML = 
            `
            <ul class="menu menu-horizontal p-0">
                <li><a> ${news.category_name } </a></li>
                
              </ul>
            `;
            menuList.appendChild(div)
        }
    })

}
loadPublicPortal()