//----------js for toogle menu--------
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";
function menutoogle(){
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight ="200px";
        
    }
    else
    {
        MenuItems.style.maxHeight = "0px";
    }
}


function scrollDown() {
    var point = document.getElementById("product")
    
    point.scrollIntoView({behavior: 'smooth'})
    
}

 function toAbout() {
    var link = document.getElementById("about")
    console.log(link)
    link.scrollIntoView({behavior: 'smooth'})
 }
  
 function toContact() {
    var contact = document.getElementById('contactEl')
    console.log(contact);
    contact.scrollIntoView({behavior: 'smooth'})
 }

 function toFirstPage() {
    var first = document.getElementById('firstpageEl')
    console.log(first);
    first.scrollIntoView({behavior: 'smooth'})
 }

 function toFeatured() {
    var featured = document.getElementById('exploreEl')
    console.log(featured)
    featured.scrollIntoView({behavior: "smooth"})
 }