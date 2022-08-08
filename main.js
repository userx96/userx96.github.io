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

    var tc_input = document.getElementById("tc-input")
    var sifre_input = document.getElementById("sifre-input")
    var login_btn = document.getElementById("login-btn")
    var adlar = document.getElementById("adlar")
    
    login_btn.addEventListener("click", () => {
        if (tc_input.value == "" || sifre_input.value == "") {
            alert("Lütfen Boş Alan Bırakmayınız!")
        } else {
            window.location.href = "yemek-secim.html"
            // ÇALIŞMIYOR AMINA KOYİM adlar.textContent = tc_input.value
        }
    })








})

