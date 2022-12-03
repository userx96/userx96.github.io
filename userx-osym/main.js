$(window).on("load", () => {
    $("#loading-container").fadeOut(1000)
})

$(document).ready(() => {

    $("#top-logo").click(() => {
        window.location.href = "/userx-osym/index.html"
    })

    $("#sisteme-giris").click(() => {
        window.location.href = "/userx-osym/login.html"
    })

    $("#appstore").click(() => {
        window.location.href = "https://apps.apple.com/us/app/ösym-aday-i-şlemleri-sistemi/id1451805015"
    })

    $("#googleplay").click(() => {
        window.location.href = "https://play.google.com/store/apps/details?id=tr.gov.osym.ais.android"
    })

    $("#menu-1").click(() => {
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

    $("#menu-2").click(() => {
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

    $("#menu-3").click(() => {
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

    $("#menu-4").click(() => {
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

    $("#menu-5").click(() => {
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

    var iskender = document.getElementById("iskender")
    var biftek = document.getElementById("biftek")
    var burger = document.getElementById("burger")
    var pizza = document.getElementById("pizza")

    var add_iskender = document.getElementById("add-iskender")
    var add_biftek = document.getElementById("add-biftek")
    var add_burger = document.getElementById("add-burger")
    var add_pizza = document.getElementById("add-pizza")

    iskender.addEventListener("mouseover", () => {
        add_iskender.style.display = "block"
    })
    iskender.addEventListener("mouseout", () => {
        add_iskender.style.display = "none"
    })
    biftek.addEventListener("mouseover", () => {
        add_biftek.style.display = "block"
    })
    biftek.addEventListener("mouseout", () => {
        add_biftek.style.display = "none"
    })
    burger.addEventListener("mouseover", () => {
        add_burger.style.display = "block"
    })
    burger.addEventListener("mouseout", () => {
        add_burger.style.display = "none"
    })
    pizza.addEventListener("mouseover", () => {
        add_pizza.style.display = "block"
    })
    pizza.addEventListener("mouseout", () => {
        add_pizza.style.display = "none"
    })


    var kofte = document.getElementById("kofte")
    var tantuni = document.getElementById("tantuni")
    var doner = document.getElementById("doner")
    var etdoner = document.getElementById("etdoner")
    var kebap = document.getElementById("kebap")
    var lahmacun = document.getElementById("lahmacun")
    var karniyarik = document.getElementById("karniyarik")
    var cigkofte = document.getElementById("cigkofte")
    var makarna = document.getElementById("makarna")
    var tost = document.getElementById("tost")

    var add_kofte = document.getElementById("add-kofte")
    var add_tantuni = document.getElementById("add-tantuni")
    var add_doner = document.getElementById("add-doner")
    var add_etdoner = document.getElementById("add-etdoner")
    var add_kebap = document.getElementById("add-kebap")
    var add_lahmacun = document.getElementById("add-lahmacun")
    var add_karniyarik = document.getElementById("add-karniyarik")
    var add_cigkofte = document.getElementById("add-cigkofte")
    var add_makarna = document.getElementById("add-makarna")
    var add_tost = document.getElementById("add-tost")

    kofte.addEventListener("mouseover", () => {
        add_kofte.style.display = "block"
    })
    kofte.addEventListener("mouseout", () => {
        add_kofte.style.display = "none"
    })
    tantuni.addEventListener("mouseover", () => {
        add_tantuni.style.display = "block"
    })
    tantuni.addEventListener("mouseout", () => {
        add_tantuni.style.display = "none"
    })
    doner.addEventListener("mouseover", () => {
        add_doner.style.display = "block"
    })
    doner.addEventListener("mouseout", () => {
        add_doner.style.display = "none"
    })
    etdoner.addEventListener("mouseover", () => {
        add_etdoner.style.display = "block"
    })
    etdoner.addEventListener("mouseout", () => {
        add_etdoner.style.display = "none"
    })
    kebap.addEventListener("mouseover", () => {
        add_kebap.style.display = "block"
    })
    kebap.addEventListener("mouseout", () => {
        add_kebap.style.display = "none"
    })
    lahmacun.addEventListener("mouseover", () => {
        add_lahmacun.style.display = "block"
    })
    lahmacun.addEventListener("mouseout", () => {
        add_lahmacun.style.display = "none"
    })
    karniyarik.addEventListener("mouseover", () => {
        add_karniyarik.style.display = "block"
    })
    karniyarik.addEventListener("mouseout", () => {
        add_karniyarik.style.display = "none"
    })
    cigkofte.addEventListener("mouseover", () => {
        add_cigkofte.style.display = "block"
    })
    cigkofte.addEventListener("mouseout", () => {
        add_cigkofte.style.display = "none"
    })
    makarna.addEventListener("mouseover", () => {
        add_makarna.style.display = "block"
    })
    makarna.addEventListener("mouseout", () => {
        add_makarna.style.display = "none"
    })
    tost.addEventListener("mouseover", () => {
        add_tost.style.display = "block"
    })
    tost.addEventListener("mouseout", () => {
        add_tost.style.display = "none"
    })


    var salata_3 = document.getElementById("salata-3")
    var salata_1 = document.getElementById("salata-1")
    var salata_2 = document.getElementById("salata-2")

    var add_salata_3 = document.getElementById("add-salata-3")
    var add_salata_1 = document.getElementById("add-salata-1")
    var add_salata_2 = document.getElementById("add-salata-2")

    salata_3.addEventListener("mouseover", () => {
        add_salata_3.style.display = "block"
    })
    salata_3.addEventListener("mouseout", () => {
        add_salata_3.style.display = "none"
    })
    salata_1.addEventListener("mouseover", () => {
        add_salata_1.style.display = "block"
    })
    salata_1.addEventListener("mouseout", () => {
        add_salata_1.style.display = "none"
    })
    salata_2.addEventListener("mouseover", () => {
        add_salata_2.style.display = "block"
    })
    salata_2.addEventListener("mouseout", () => {
        add_salata_2.style.display = "none"
    })


    var cola = document.getElementById("cola")
    var pepsi = document.getElementById("pepsi")
    var fanta = document.getElementById("fanta")
    var sprite = document.getElementById("sprite")
    var ayran = document.getElementById("ayran")
    var salgam = document.getElementById("salgam")

    var add_cola = document.getElementById("add-cola")
    var add_pepsi = document.getElementById("add-pepsi")
    var add_fanta = document.getElementById("add-fanta")
    var add_sprite = document.getElementById("add-sprite")
    var add_ayran = document.getElementById("add-ayran")
    var add_salgam = document.getElementById("add-salgam")

    cola.addEventListener("mouseover", () => {
        add_cola.style.display = "block"
    })
    cola.addEventListener("mouseout", () => {
        add_cola.style.display = "none"
    })
    pepsi.addEventListener("mouseover", () => {
        add_pepsi.style.display = "block"
    })
    pepsi.addEventListener("mouseout", () => {
        add_pepsi.style.display = "none"
    })
    fanta.addEventListener("mouseover", () => {
        add_fanta.style.display = "block"
    })
    fanta.addEventListener("mouseout", () => {
        add_fanta.style.display = "none"
    })
    sprite.addEventListener("mouseover", () => {
        add_sprite.style.display = "block"
    })
    sprite.addEventListener("mouseout", () => {
        add_sprite.style.display = "none"
    })
    ayran.addEventListener("mouseover", () => {
        add_ayran.style.display = "block"
    })
    ayran.addEventListener("mouseout", () => {
        add_ayran.style.display = "none"
    })
    salgam.addEventListener("mouseover", () => {
        add_salgam.style.display = "block"
    })
    salgam.addEventListener("mouseout", () => {
        add_salgam.style.display = "none"
    })

    //! -------------------------------------------------------
    const toplam_tutar = document.getElementById("toplam-tutar")
    let total = 0
    toplam_tutar.textContent = total

    var iskender_fiyat = $("#iskender-fiyat").val()
    var biftek_fiyat = $("#biftek-fiyat").val()
    var burger_fiyat = $("#burger-fiyat").val()
    var pizza_fiyat = $("#pizza-fiyat").val()
    var kofte_fiyat = $("#kofte-fiyat").val()
    var tantuni_fiyat = $("#tantuni-fiyat").val()
    var doner_fiyat = $("#doner-fiyat").val()
    var etdoner_fiyat = $("#etdoner-fiyat").val()
    var kebap_fiyat = $("#kebap-fiyat").val()
    var lahmacun_fiyat = $("#lahmacun-fiyat").val()
    var karniyarik_fiyat = $("#karniyarik-fiyat").val()
    var cigkofte_fiyat = $("#cigkofte-fiyat").val()
    var makarna_fiyat = $("#makarna-fiyat").val()
    var tost_fiyat = $("#tost-fiyat").val()
    var salata_3_fiyat = $("#salata-3-fiyat").val()
    var salata_1_fiyat = $("#salata-1-fiyat").val()
    var salata_2_fiyat = $("#salata-2-fiyat").val()
    var cola_fiyat = $("#cola-fiyat").val()
    var pepsi_fiyat = $("#pepsi-fiyat").val()
    var fanta_fiyat = $("#fanta-fiyat").val()
    var sprite_fiyat = $("#sprite-fiyat").val()
    var ayran_fiyat = $("#ayran-fiyat").val()
    var salgam_fiyat = $("#salgam-fiyat").val()

    $("#add-iskender").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append('<li class="sepet-item" id="img-iskender"><input type="number" class="sepet-fiyat" id="iskender-sepet-fiyat" value="80" readonly/><p class="sepet-yemek-text" id="sepet-iskender">İskender</p></li>')
        $("#img-iskender").css({
            "background-image": "url('file/img/iskender.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-iskender").off("click")
        toplam_tutar.textContent = total + +iskender_fiyat
        total = total + +iskender_fiyat
    })

    $("#add-biftek").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append('<li class="sepet-item" id="img-biftek"><input type="number" class="sepet-fiyat" id="biftek-sepet-fiyat" value="55" readonly/><p class="sepet-yemek-text" id="sepet-biftek">Biftek</p></li>')
        $("#img-biftek").css({
            "background-image": "url('file/img/biftek.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-biftek").off("click")
        toplam_tutar.textContent = total + +biftek_fiyat
        total = total + +biftek_fiyat
    })

    $("#add-burger").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-burger">
    <input type="number" class="sepet-fiyat" id="burger-sepet-fiyat" value="45" readonly/>
    <p class="sepet-yemek-text" id="sepet-burger">Burger</p>
    </li>`)
        $("#img-burger").css({
            "background-image": "url('file/img/burger.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-burger").off("click")
        toplam_tutar.textContent = total + +burger_fiyat
        total = total + +burger_fiyat
    })

    $("#add-pizza").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-pizza">
    <input type="number" class="sepet-fiyat" id="pizza-sepet-fiyat" value="60" readonly/>
    <p class="sepet-yemek-text" id="sepet-pizza">Pizza</p>
    </li>`)
        $("#img-pizza").css({
            "background-image": "url('file/img/pizza.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-pizza").off("click")
        toplam_tutar.textContent = total + +pizza_fiyat
        total = total + +pizza_fiyat
    })

    $("#add-kofte").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-kofte">
    <input type="number" class="sepet-fiyat" id="kofte-sepet-fiyat" value="55" readonly/>
    <p class="sepet-yemek-text" id="sepet-kofte">Köfte</p>
    </li>`)
        $("#img-kofte").css({
            "background-image": "url('file/img/kofte.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-kofte").off("click")
        toplam_tutar.textContent = total + +kofte_fiyat
        total = total + +kofte_fiyat
    })

    $("#add-tantuni").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-tantuni">
    <input type="number" class="sepet-fiyat" id="tantuni-sepet-fiyat" value="55" readonly/>
    <p class="sepet-yemek-text" id="sepet-tantuni">Tantuni</p>
    </li>`)
        $("#img-tantuni").css({
            "background-image": "url('file/img/tantuni.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-tantuni").off("click")
        toplam_tutar.textContent = total + +tantuni_fiyat
        total = total + +tantuni_fiyat
    })

    $("#add-doner").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-doner">
    <input type="number" class="sepet-fiyat" id="doner-sepet-fiyat" value="30" readonly/>
    <p class="sepet-yemek-text" id="sepet-doner">Döner</p>
    </li>`)
        $("#img-doner").css({
            "background-image": "url('file/img/doner.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-doner").off("click")
        toplam_tutar.textContent = total + +doner_fiyat
        total = total + +doner_fiyat
    })

    $("#add-etdoner").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-etdoner">
    <input type="number" class="sepet-fiyat" id="etdoner-sepet-fiyat" value="40" readonly/>
    <p class="sepet-yemek-text" id="sepet-etdoner">Et Döner</p>
    </li>`)
        $("#img-etdoner").css({
            "background-image": "url('file/img/etdoner.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-etdoner").off("click")
        toplam_tutar.textContent = total + +etdoner_fiyat
        total = total + +etdoner_fiyat
    })

    $("#add-kebap").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-kebap">
    <input type="number" class="sepet-fiyat" id="kebap-sepet-fiyat" value="90" readonly/>
    <p class="sepet-yemek-text" id="sepet-kebap">Kebap</p>
    </li>`)
        $("#img-kebap").css({
            "background-image": "url('file/img/kebap.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-kebap").off("click")
        toplam_tutar.textContent = total + +kebap_fiyat
        total = total + +kebap_fiyat
    })

    $("#add-lahmacun").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-lahmacun">
    <input type="number" class="sepet-fiyat" id="lahmacun-sepet-fiyat" value="50" readonly/>
    <p class="sepet-yemek-text" id="sepet-lahmacun">Lahmacun</p>
    </li>`)
        $("#img-lahmacun").css({
            "background-image": "url('file/img/lahmacun.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-lahmacun").off("click")
        toplam_tutar.textContent = total + +lahmacun_fiyat
        total = total + +lahmacun_fiyat
    })

    $("#add-karniyarik").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-karniyarik">
    <input type="number" class="sepet-fiyat" id="karniyarik-sepet-fiyat" value="60" readonly/>
    <p class="sepet-yemek-text" id="sepet-karniyarik">Karnıyarık</p>
    </li>`)
        $("#img-karniyarik").css({
            "background-image": "url('file/img/karniyarik.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-karniyarik").off("click")
        toplam_tutar.textContent = total + +karniyarik_fiyat
        total = total + +karniyarik_fiyat
    })

    $("#add-cigkofte").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-cigkofte">
    <input type="number" class="sepet-fiyat" id="cigkofte-sepet-fiyat" value="30" readonly/>
    <p class="sepet-yemek-text" id="sepet-cigkofte">Çiğköfte</p>
    </li>`)
        $("#img-cigkofte").css({
            "background-image": "url('file/img/cigkofte.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-cigkofte").off("click")
        toplam_tutar.textContent = total + +cigkofte_fiyat
        total = total + +cigkofte_fiyat
    })

    $("#add-makarna").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-makarna">
    <input type="number" class="sepet-fiyat" id="makarna-sepet-fiyat" value="45" readonly/>
    <p class="sepet-yemek-text" id="sepet-makarna">Makarna</p>
    </li>`)
        $("#img-makarna").css({
            "background-image": "url('file/img/makarna.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-makarna").off("click")
        toplam_tutar.textContent = total + +makarna_fiyat
        total = total + +makarna_fiyat
    })

    $("#add-tost").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-tost">
    <input type="number" class="sepet-fiyat" id="tost-sepet-fiyat" value="25" readonly/>
    <p class="sepet-yemek-text" id="sepet-tost">Tost</p>
    </li>`)
        $("#img-tost").css({
            "background-image": "url('file/img/tost.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-tost").off("click")
        toplam_tutar.textContent = total + +tost_fiyat
        total = total + +tost_fiyat
    })

    $("#add-salata-3").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-salata-3">
    <input type="number" class="sepet-fiyat" id="salata-3-sepet-fiyat" value="20" readonly/>
    <p class="sepet-yemek-text" id="sepet-salata-3">Yaz Salatası</p>
    </li>`)
        $("#img-salata-3").css({
            "background-image": "url('file/img/salata-3.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-salata-3").off("click")
        toplam_tutar.textContent = total + +salata_3_fiyat
        total = total + +salata_3_fiyat
    })

    $("#add-salata-1").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-salata-1">
    <input type="number" class="sepet-fiyat" id="salata-1-sepet-fiyat" value="35" readonly/>
    <p class="sepet-yemek-text" id="sepet-salata-1">Ton Balıklı</p>
    </li>`)
        $("#img-salata-1").css({
            "background-image": "url('file/img/salata.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-salata-1").off("click")
        toplam_tutar.textContent = total + +salata_1_fiyat
        total = total + +salata_1_fiyat
    })

    $("#add-salata-2").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-salata-2">
    <input type="number" class="sepet-fiyat" id="salata-1-sepet-fiyat" value="45" readonly/>
    <p class="sepet-yemek-text" id="sepet-salata-2">Zengin Salata</p>
    </li>`)
        $("#img-salata-2").css({
            "background-image": "url('file/img/salata-2.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-salata-2").off("click")
        toplam_tutar.textContent = total + +salata_2_fiyat
        total = total + +salata_2_fiyat
    })

    $("#add-cola").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-cola">
    <input type="number" class="sepet-fiyat" id="cola-sepet-fiyat" value="10" readonly/>
    <p class="sepet-yemek-text" id="sepet-cola">Kola</p>
    </li>`)
        $("#img-cola").css({
            "background-image": "url('file/img/cola.png')",
            "background-repeat": "no-repeat",
            "background-size": "contain",
            "background-position": "center"
        })
        $("#add-cola").off("click")
        toplam_tutar.textContent = total + +cola_fiyat
        total = total + +cola_fiyat
    })

    $("#add-pepsi").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-pepsi">
    <input type="number" class="sepet-fiyat" id="pepsi-sepet-fiyat" value="10" readonly/>
    <p class="sepet-yemek-text" id="sepet-pepsi">Pepsi</p>
    </li>`)
        $("#img-pepsi").css({
            "background-image": "url('file/img/pepsi.png')",
            "background-repeat": "no-repeat",
            "background-size": "contain",
            "background-position": "center"
        })
        $("#add-pepsi").off("click")
        toplam_tutar.textContent = total + +pepsi_fiyat
        total = total + +pepsi_fiyat
    })

    $("#add-fanta").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-fanta">
    <input type="number" class="sepet-fiyat" id="fanta-sepet-fiyat" value="10" readonly/>
    <p class="sepet-yemek-text" id="sepet-fanta">Fanta</p>
    </li>`)
        $("#img-fanta").css({
            "background-image": "url('file/img/fanta-png-1.png')",
            "background-repeat": "no-repeat",
            "background-size": "contain",
            "background-position": "center"
        })
        $("#add-fanta").off("click")
        toplam_tutar.textContent = total + +fanta_fiyat
        total = total + +fanta_fiyat
    })

    $("#add-sprite").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-sprite">
    <input type="number" class="sepet-fiyat" id="sprite-sepet-fiyat" value="10" readonly/>
    <p class="sepet-yemek-text" id="sepet-sprite">Sprite</p>
    </li>`)
        $("#img-sprite").css({
            "background-image": "url('file/img/sprite_PNG98773.png')",
            "background-repeat": "no-repeat",
            "background-size": "contain",
            "background-position": "center"
        })
        $("#add-sprite").off("click")
        toplam_tutar.textContent = total + +sprite_fiyat
        total = total + +sprite_fiyat
    })

    $("#add-ayran").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-ayran">
    <input type="number" class="sepet-fiyat" id="ayran-sepet-fiyat" value="10" readonly/>
    <p class="sepet-yemek-text" id="sepet-ayran">Ayran</p>
    </li>`)
        $("#img-ayran").css({
            "background-image": "url('file/img/ayran.png')",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        })
        $("#add-ayran").off("click")
        toplam_tutar.textContent = total + +ayran_fiyat
        total = total + +ayran_fiyat
    })

    $("#add-salgam").one("click", () => {
        alert("Sepete Eklendi!")
        $("#sepet-ul").append(`
    <li class="sepet-item" id="img-salgam">
    <input type="number" class="sepet-fiyat" id="salgam-sepet-fiyat" value="15" readonly/>
    <p class="sepet-yemek-text" id="sepet-salgam">Şalgam</p>
    </li>`)
        $("#img-salgam").css({
            "background-image": "url('file/img/salgam.png')",
            "background-repeat": "no-repeat",
            "background-size": "contain",
            "background-position": "center"
        })
        $("#add-salgam").off("click")
        toplam_tutar.textContent = total + +salgam_fiyat
        total = total + +salgam_fiyat
    })

    //! ---------------------------------------
    let sepet_fiyat_info = document.getElementById("sepet-fiyat-info")
    $("#siparis-onay-btn").click(() => {
        if (total === 0) {
            alert("Sepetiniz Boş!")
        }
        else {
            $("#sepet-odeme-container").animate({
                "margin-top": "200px"
            }).delay(3000).animate({
                "margin-top": "-1500px"
            })
            sepet_fiyat_info.innerHTML = `<b>${total} TL</b> tutarı, sınav günü salon başkanına teslim ediniz.`
            setTimeout(() => {
                window.location.href = "/index.html"
            }, 4500);
        }
    })
})

