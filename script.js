let buttons = document.querySelectorAll(".filter-buttons");
let images = document.querySelectorAll(".gallery .galleryitem");

let filterCards = (e) => {
    let activeButton = document.querySelector(".active");
    if (activeButton) {
        activeButton.classList.remove("active");
    }
    e.target.classList.add("active");

    let catagory = e.target.getAttribute("data-category");
    //show images of cards
    images.forEach((galleryitem)=>{
        if(catagory==="all" || galleryitem.getAttribute("data-category")=== catagory){
            galleryitem.classList.remove("hide");
        }else{
           galleryitem.classList.add("hide");  
        }
       
    });
};

buttons.forEach((button) => {
    button.addEventListener("click", filterCards);
});

