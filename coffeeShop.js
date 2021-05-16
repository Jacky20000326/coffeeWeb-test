// home 圖片輪播
var homePageImg = ["bigAmericano.png","bigCaffe-Latte.png","bigCuppucino.png","homepageImh.png"]
var homeImgNum = homePageImg.length
var i =0
setInterval("imgturnning()",2000)
function imgturnning(){
    if(i>=homeImgNum){
    i=1
}
document.querySelector(".imgcontainer").innerHTML="<img src='"+homePageImg[i]+"' width=893px height=681px>"
i++;

}

// coffeeIngredient

   // var
var latta = document.querySelector(".item1")
var espresso = document.querySelector(".item2")
var cappucino = document.querySelector(".item3")
var americano = document.querySelector(".item4")
var navbar = document.querySelector(".navbar")
var Espresso = document.querySelector(".espresso")
var bobble = document.querySelector(".bobble")
var milk = document.querySelector(".milk")
var water = document.querySelector(".water")
var productCard4 = document.querySelector(".productCard4")
var leftArrow = document.querySelector(".leftArrow")
var productsContainer = document.querySelector(".productsContainer")
var rightArrow = document.querySelector(".rightArrow")
var productCard1 = document.querySelector(".productCard1")
var checktobuy1 = document.getElementById("checktobuy1")
var ischecked = false

var Callus = document.querySelector(".Callus")
var Category = document.querySelector(".Category")
var Products = document.querySelector(".Products")
var mycart = document.querySelector(".mycart")
var scrolls = document.querySelector(".srcoll")
var state = false




    //  addEventListener

latta.addEventListener ("click",showIngredient)
espresso.addEventListener("click",showIngredient2)
cappucino.addEventListener("click",showIngredient3)
americano.addEventListener("click",showIngredient4)
navbar.addEventListener("click",activeNavbar)

    


function showIngredient(){
    milk.style.height = "60%"
    Espresso.style.color  = "white"
    bobble.style.height = "20%"
    Espresso.style.height = "20%"
    ingredientTest()
}

function showIngredient2(){
    Espresso.style.height = "100%"
    Espresso.style.color  = "white"
    ingredientTest()
}

function showIngredient3(){
    milk.style.height = "30%"
    bobble.style.height = "30%"
    Espresso.style.height = "40%"
    ingredientTest()
}

function showIngredient4(){
    Espresso.style.height = "80%"
    water.style.height = "40%"
    ingredientTest()

}

function ingredientTest(){
    bobble.innerHTML="Booble"
    milk.innerHTML="milk"
    Espresso.innerHTML="Espresso"
    water.innerHTML="water"
}

function sliderLeft(){
    productsContainer.style.transform = "translateX(-35%)";
    productCard1.style.opacity = 0
    productsContainer.style.overflow = visible
    productCard4.style.display = block

}
function sliderRight(){
    productsContainer.style.transform = "translateX(0%)";
    productCard4.style.opacity = 0
    productCard1.style.opacity = 1
}
function check(){
    ischeck()
    if(ischecked == true){
        checktobuy1.src = "check.png";
    }else{
        checktobuy1.src = "cart.png";
    }
}
function ischeck(){
    if(ischecked==true){
        ischecked = false
    } else{
        ischecked = true
    }
}

function activeNavbar(){
    
    if(state == false){
        state = true
        if(state = true){
            Callus.style.display = "block"
            Category.style.display = "block"
            Products.style.display = "block"
            mycart.style.display = "block"
            
            
            

            
           
        }
    }else{
        Callus.style.display = "none"
        Category.style.display = "none"
        Products.style.display = "none"
        mycart.style.display = "none"
        navbar.style.display = "block"
        state = false
       
    }
    
    
}
