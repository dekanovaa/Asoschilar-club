const bar = document.getElementById("navbar_bar");
const modal = document.getElementById("modal");
const close_btn = document.getElementById("close_btn");
const modal_link = document.getElementById("modal_link");
bar.addEventListener("click", function() {
    modal.style.display = "block";
});
close_btn.addEventListener("click", function(){
    modal.style.display = "none";
});
modal_link.addEventListener("click", function() {
    modal.style.display = "none"
})