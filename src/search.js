
function search_food() {

    let searchedText = document.querySelector("#searchedText").value.toUpperCase();
    let cardsContainer = document.querySelector("#cards-container");
    let cardArray = cardsContainer.querySelectorAll('#cards');
    let sorry = document.querySelector('#sorry');

    for (let i = 0; i < cardArray.length; i++) {
        let text = cardArray[i].querySelectorAll('.foodName')[0];
        if (text) {
            let textValue = text.textContent || text.innerHTML;

            if (textValue.toUpperCase().indexOf(searchedText) > -1) {
                sorry.style.display = '';
                cardArray[i].style.display = "" ;
            }
            
            else {
                cardArray[i].style.display = "none";

            
            }    
        }


    }
}




export default search_food;
