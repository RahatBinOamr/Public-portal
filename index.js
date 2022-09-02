const loadPublicPortal = async() =>{
const res = await fetch (`https://openapi.programming-hero.com/api/news/category/01`);
const result = await res.json()
return result ;

}

const setAllMenu = async()=>{
    const result = await loadPublicPortal();
   /*  console.log(result); */
    const menu = document.getElementById('meau-list');
    const uniqueArray = [];
    for(const data in result){
    console.log(data[0].category_id)

    }
}
setAllMenu();