// Menu controll
let menu2=document.getElementById("menu2");
document.getElementById("dropdownicon").addEventListener("click",()=>{ 
    menu2.style.left="0px";
})
document.getElementById("Exit").addEventListener("click",()=>{
    menu2.style.left="100%";
})



//Pages controll
let Home=document.getElementById("homebox");
let About=document.getElementById("aboutbox");
let Project=document.getElementById("projectbox");
let Contact=document.getElementById("contactbox");
document.getElementById("logo").addEventListener("click",()=>{
    Home.style.display="inline-block";
    About.style.display="none";
    Project.style.display="none";
    Contact.style.display="none";
});
document.getElementById("home1").addEventListener("click",()=>{
    Home.style.display="inline-block";
    About.style.display="none";
    Project.style.display="none";
    Contact.style.display="none";
});
document.getElementById("home2").addEventListener("click",()=>{
    Home.style.display="inline-block";
    About.style.display="none";
    Project.style.display="none";
    Contact.style.display="none";
});
document.getElementById("about1").addEventListener("click",()=>{
    Home.style.display="none";
    About.style.display="inline-block";
    Project.style.display="none";
    Contact.style.display="none";
});
document.getElementById("about2").addEventListener("click",()=>{
    Home.style.display="none";
    About.style.display="inline-block";
    Project.style.display="none";
    Contact.style.display="none";
});
document.getElementById("projects1").addEventListener("click",()=>{
    Home.style.display="none";
    About.style.display="none";
    Project.style.display="inline-block";
    Contact.style.display="none";
});
document.getElementById("projects2").addEventListener("click",()=>{
    Home.style.display="none";
    About.style.display="none";
    Project.style.display="inline-block";
    Contact.style.display="none";
});
document.getElementById("contact1").addEventListener("click",()=>{
    Home.style.display="none";
    About.style.display="none";
    Project.style.display="none";
    Contact.style.display="inline-block";
});
document.getElementById("contact2").addEventListener("click",()=>{
    Home.style.display="none";
    About.style.display="none";
    Project.style.display="none";
    Contact.style.display="inline-block";
});
document.getElementById("start").addEventListener("click",()=>{
    Home.style.display="none";
    About.style.display="none";
    Project.style.display="none";
    Contact.style.display="inline-block";
});



//Admission start soon alert
document.getElementById("phone").addEventListener("click",()=>{
    alert("Admission Open Soon 🎉🎉")
});
document.getElementById("gmail").addEventListener("click",()=>{
    alert("Admission Open Soon 🎉🎉")
});