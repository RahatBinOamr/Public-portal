const loadPublicPortal = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then (res=>res.json())
    .then(data=>displayCategories(data.data.news_category))
    
    }
    
    const displayCategories = (categoryes)=>{
     console.log(categoryes)
        const menuList = document.getElementById('ul-item');
       
         categoryes.forEach(category=>{
                const li = document.createElement('li');
                li.innerHTML = 
                `
                    <li><a onclick="newslist('${category.category_id}')"  > ${category.category_name } </a></li>
                `;
                menuList.appendChild(li)
            


        });
    }
    
        const newslist = ()=>{
            const url = `https://openapi.programming-hero.com/api/news/category/01`
            fetch(url)
            .then(res=>res.json())
            .then(data=>newsContainerfield(data.data))
        }
        loadPublicPortal() 

    
            const newsContainerfield = (collections)=>{
            const newsContainer = document.getElementById('news-container');
            newsContainer.textContent = '';
            console.log(collections) 
    
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
    
        
          
    
         
            
    
        
        
    
    //     const showAllModal=(details)=>{
    //        /*  console.log(details) */
    //         const modalBody = document.getElementById('modal-body');
    //         modalBody.innerHTML = 
    //         `
    //             <p class="py-4"> ${details} </p>
    //         `;
    //         }
    // loadPublicPortal()