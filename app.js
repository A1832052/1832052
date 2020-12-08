/*メニューバー*/
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("sticky",window.scrollY > 0);
});
/*アコーディオン*/
$(function() {
    $( "#accordion" ).accordion({
      heightStyle: "content"//高さ調節
    });
    $( "#accordion" ).accordion({
        collapsible: true//折り畳み可能
      });
});
/*タブ*/
$(function(){
    $("#tabs").tabs();
});