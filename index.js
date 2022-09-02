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
                <h2 class="card-title">${collectnews.title} </h2>
                <p>category_id: ${collectnews.category_id} </p>
                <p>published_date: ${collectnews.author.published_date} </p>
                <p> name:${collectnews.author.name}<i class="fa-solid fa-eye ml-4"></i>  ${collectnews.total_view ? collectnews.total_view :"no one see"} </p>
                <div class="card-actions justify-end">
                <label for="my-modal-3" class="btn modal-button" onclick="showAllModal(description)" >Details</label>
                </div>
              </div>
            </div>
            `;
            newsContainer.appendChild(div)

        })
        }

    
        newsdeltails()

     
        

    }

    const showAllModal = ( description)=>{
        console.log(description)
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = 
        `
        
            <p class="py-4"> ${description} </p>
        `;
        }
loadPublicPortal()