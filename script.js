document.querySelectorAll("a").forEach(link=>{
link.onclick=e=>{
e.preventDefault();
document.querySelector(link.getAttribute("href")).scrollIntoView({behavior:"smooth"});
}
});