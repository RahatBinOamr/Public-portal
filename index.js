const loadPublicPortal = async() =>{
    const url = (`https://openapi.programming-hero.com/api/news/categories`)
    fetch(url)
    .then (res=>res.json())
    .then(data=>setAllMenu(data.data.news_category))
    
    }
    
    const setAllMenu = (allNews)=>{
     console.log(allNews)
        const menuList = document.getElementById('meau-list');
        const uniqueArray = [];
        allNews.forEach(news=>{
            
            if(uniqueArray.indexOf(news)=== -1){
                uniqueArray.push(news);
                const div = document.createElement('div');
                div.innerHTML = 
                `
                <ul class="menu menu-horizontal p-0">
                    <li><a onclick= "newsdeltails('${news.category_id}')" > ${news.category_name } </a></li>
                    
                  </ul>
                `;
                menuList.appendChild(div)
            }
            const inputField = document.getElementById('inputField');


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
                const {image_url,title,category_id,author,total_view,details} = collectnews;
                const div = document.createElement('div');
                div.innerHTML =
                `
                <div  class="card  card-compact w-full bg-base-100 shadow-xl grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mx-auto mb-5">
                 <div>
                  <figure><img src="${image_url} " alt="Shoes" /></figure>
                 </div>
                  <div class="card-body">
                    <h2 class="card-title">${title} </h2>
                    <p>category_id: ${category_id} </p>
                    <p>published_date: ${author.published_date} </p>
                    <div class = "p p-horizontal"> 
                    <p><img src="${author.img}  " alt="Shoes" class="w-24 rounded-full ring ring-primary" /> name:${author.name} </p>
                    <p><i class="fa-solid fa-eye mr-4"></i>${total_view ? total_view :"no one see"} </p>
                    </div>
                    <div class="card-actions justify-end">
                    <label for="my-modal-3" class="btn modal-button" onclick="showAllModal('${details}')">Details</label>
                    </div>
                  </div>
                </div>
                `;
                newsContainer.appendChild(div)
    
            })
            }
    
        
            newsdeltails()
    
         
            
    
        }
        
    
        const showAllModal=(details)=>{
           /*  console.log(details) */
            const modalBody = document.getElementById('modal-body');
            modalBody.innerHTML = 
            `
                <p class="py-4"> ${details} </p>
            `;
            }
    loadPublicPortal()