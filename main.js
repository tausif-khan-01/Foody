import mobileNav from './src/Menu.js';
import search_food from './src/search.js'
mobileNav();



let searchInput = document.querySelector('#searchedText')

searchInput.addEventListener('keyup',()=>{
    
    
    search_food()

    let clearSearch = document.querySelector('#clearSearch')
    let searchIcon = document.querySelector('#searchIcon')
    if ( searchInput.value.length > 0 ) {
        
        clearSearch.style.display = "inline-block";
        searchIcon.style.display = "none"

        clearSearch.addEventListener('click',()=>{

            searchInput.value = ""
            clearSearch.style.display = "none";
            searchIcon.style.display = "inline-block"


            

        })

    }
    else{
        clearSearch.style.display = "none";
        searchIcon.style.display = "inline-block"
    }


   
});




