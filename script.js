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
    var point = document.getElementById('product')
    console.log(point)
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

 function toLatest() {
    var latest = document.getElementById('latestEl')
    console.log(latest)
    latest.scrollIntoView({behavior: 'smooth'})
 }

 function redirect() {
   var val = document.getElementById("demo")
   val.innerHTML = "Redirecting to Whatsapp..."
   setTimeout(WhatsappLink, 2000)
   console.log(val);
 }

 function WhatsappLink() {
    location.href = "https://wa.me/+2348122364063"
 }

 /*-------time greeeting----------*/
 var myDate = new Date()
 var hrs = myDate.getHours()

 var greet

 if (hrs < 12)
     greet = 'Good Morning ☀'
 else if (hrs >= 12 && hrs <= 17)
     greet = 'Good Afternoon'
 else if (hrs >= 17 && hrs <= 24)
     greet = 'Good Evening'
     document.getElementById('greetings').innerHTML =  '<i>' + greet + ', what are you buying from us today </i>';
     