

const top= document.getElementById("jumbo");
const photo= document.getElementById("signinForm")
const image= document.getElementById("photo1")
const title= document.getElementById("title")
// if (document.width()<900) {
// t
// }
if ($(window).width() < 900) {
  top.style.background="black"
  top.style.paddingTop="40%"
  title.style.marginBottom="40%"
  
  image.src="none"
}