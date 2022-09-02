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
    const newsdeltails = ()=>{
        const url = `https://openapi.programming-hero.com/api/news/category/01`
        fetch(url)
        .then(res=>res.json())
        .then(data=>newsContainerfield(data.data))
    }

    const newsContainerfield = (collections)=>{
        const newsContainer = document.getElementById('news-container');
        /* console.log(collections) */

        collections.forEach(collectnews =>{
            console.log(collectnews)
            const div = document.createElement('div');
            div.innerHTML =
            `
            <div  class="card  card-compact w-full bg-base-100 shadow-xl grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mx-auto mb-5">
             <div>
              <figure><img src="${collectnews.image_url} " alt="Shoes" /></figure>
             </div>
              <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            `;
            newsContainer.appendChild(div)

        })
        }

    
        newsdeltails()

     
        

    }

loadPublicPortal()