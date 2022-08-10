$(window).on("load", () => {
    $("#loading-container").fadeOut(1000)
})

$(document).ready( () => {

    $("#top-logo").click(()=> {
        window.location.href = "index.html"
    })
    
    $("#sisteme-giris").click(()=> {
        window.location.href = "/login.html"
    })
    
    $("#appstore").click(()=>{
        window.location.href = "https://apps.apple.com/us/app/ösym-aday-i-şlemleri-sistemi/id1451805015"
    })
    
    $("#googleplay").click(()=>{
        window.location.href = "https://play.google.com/store/apps/details?id=tr.gov.osym.ais.android"
    })

$("#menu-1").click(()=> {
    $("#menu-1").css({
        "background-color": "rgb(255, 184, 20)"
    })
    
    $("#menu-1-t").css({
        "display": "block",
        "border-top": "1vw solid rgb(255, 184, 20)"
    })
    $("#yemek-home-container").css({
        "visibility": "visible"
    })

    $("#menu-2, #menu-3, #menu-4, #menu-5").css({
        "background-color": "rgb(145, 165, 176)"
    })
    $("#menu-2-t, #menu-3-t, #menu-4-t, #menu-5-t").css({
        "display": "none"
    })
    $("#yemek-anayemek-container, #yemek-salata-container, #yemek-icecek-container, #yemek-ozel-container").css({
        "visibility": "hidden"
    })
})
    
$("#menu-2").click(()=> {
    $("#menu-2").css({
        "background-color": "rgb(255, 184, 20)"
    })
    $("#menu-2-t").css({
        "display": "block",
        "border-top": "1vw solid rgb(255, 184, 20)"
    })
    $("#yemek-anayemek-container").css({
        "visibility": "visible"
    })

    $("#menu-1, #menu-3, #menu-4, #menu-5").css({
        "background-color": "rgb(145, 165, 176)"
    })
    $("#menu-1-t, #menu-3-t, #menu-4-t, #menu-5-t").css({
        "display": "none"
    })
    $("#yemek-home-container, #yemek-salata-container, #yemek-icecek-container, #yemek-ozel-container").css({
        "visibility": "hidden"
    })
})

$("#menu-3").click(()=> {
    $("#menu-3").css({
        "background-color": "rgb(255, 184, 20)"
    })
    $("#menu-3-t").css({
        "display": "block",
        "border-top": "1vw solid rgb(255, 184, 20)"
    })
    $("#yemek-salata-container").css({
        "visibility": "visible"
    })

    $("#menu-1, #menu-2, #menu-4, #menu-5").css({
        "background-color": "rgb(145, 165, 176)"
    })
    $("#menu-1-t, #menu-2-t, #menu-4-t, #menu-5-t").css({
        "display": "none"
    })
    $("#yemek-home-container, #yemek-anayemek-container, #yemek-icecek-container, #yemek-ozel-container").css({
        "visibility": "hidden"
    })
})

$("#menu-4").click(()=> {
    $("#menu-4").css({
        "background-color": "rgb(255, 184, 20)"
    })
    $("#menu-4-t").css({
        "display": "block",
        "border-top": "1vw solid rgb(255, 184, 20)"
    })
    $("#yemek-icecek-container").css({
        "visibility": "visible"
    })

    $("#menu-1, #menu-2, #menu-3, #menu-5").css({
        "background-color": "rgb(145, 165, 176)"
    })
    $("#menu-1-t, #menu-2-t, #menu-3-t, #menu-5-t").css({
        "display": "none"
    })
    $("#yemek-home-container, #yemek-anayemek-container, #yemek-salata-container, #yemek-ozel-container").css({
        "visibility": "hidden"
    })
})

$("#menu-5").click(()=> {
    $("#menu-5").css({
        "background-color": "rgb(255, 184, 20)"
    })
    $("#menu-5-t").css({
        "display": "block",
        "border-top": "1vw solid rgb(255, 184, 20)"
    })
    $("#yemek-ozel-container").css({
        "visibility": "visible"
    })

    $("#menu-1, #menu-2, #menu-3, #menu-4").css({
        "background-color": "rgb(145, 165, 176)"
    })
    $("#menu-1-t, #menu-2-t, #menu-3-t, #menu-4-t").css({
        "display": "none"
    })
    $("#yemek-home-container, #yemek-anayemek-container, #yemek-salata-container, #yemek-icecek-container").css({
        "visibility": "hidden"
    })
})
 







})

