$(window).load(function(){
  $("#loader-wrapper").fadeOut(1000);
});

$(document).ready(function(){
    $(".gucTusu").click( 
      function(){$(".telefonEkran").css({"background-image": "none", "background-color": "black", "transition": "background-color 0.2s ease" });
        $(".kilitAc").hide() ,
        $(this).hide(),
        $(".gucTusuAcma").show(),
        $(".demoPopup").hide(),
        $(".userx-phone").hide(),
        $(".instaContainer").hide(),
        $(".anaMenuContainer").hide(),
        $(".digital-clock").hide(),
        $(".digital-clock2").hide(),
        $(".lockImage").hide(),
        $(".toplamKodSatiri").hide(),
        $(".ayarlarContainer").fadeOut(400),
        $(".tarih").hide(),
        $(".messageContainer").hide(),
        $(".takvimContainer").hide(),
        $(".calendar").hide(),
        $(".bildirimPanelKapat").hide(),
        $(".hesapMakinesi").hide(),
        $(".notApp").hide(),
        $(".sarj").hide(),
        $(".saatContainer").hide();
        $(".whatsappContainer").hide();
        $(".bildirimCubugu").hide(),
        $(".sinyal").hide(),
        $(".rehber").hide(),
        $(".digital-clock").css({"color": "white"})
        $(".notContainer").hide(),
        $(".message").hide(),
        $(".spotify").hide(),
        $(".notlar").hide(),
        $(".parlaklik").hide(),
        $(".volume").hide(),
        $(".con1").hide(),
        $(".con2").hide(),
        $(".bildirimPaneli").hide(),
        $(".camera").hide(),
        $(".anaMenuItems").hide(),
        $(".music").hide(),
        $(".cal-container").hide(),
        $(".appstore").hide(),
        $(".havaDurumu").hide(),
        $(".harita").hide(),
        $(".whatsappIcon").hide(),
        $(".clockIcon").hide(),
        $(".safari").hide(),
        $(".ayarlarIcon").hide(),
        $(".galeri").hide(),
        $(".takvimIcon").hide(),
        $(".facetime").hide(),
        $(".altMenu").hide(),
        $(".geriTusu").hide() });
     
  });
 
  $(".gucTusuAcma").click(function(){
    $(this).hide();
    $(".gucTusu").show();
    $(".telefonEkran").css({"background-image": "url(https://i.pinimg.com/originals/5e/d8/e6/5ed8e640498008dd2c7cd7bc81e49d05.gif)", 
    "background-size":"cover", "transition": "background-image 0.9s ease"});
        $(".kilitAc").show();
        $(".geriTusu").hide();
        $(".sinyal").show();
        $(".tarih").show();
        $(".userx-phone").show();
        $(".toplamKodSatiri").show();
        $(".sarj").show();
        $(".bildirimCubugu").hide();
        $(".altMenu").hide();
        $(".digital-clock2").show();
        $(".digital-clock").show();
        $(".lockImage").show();
  });

  $(document).ready(function(){
    $(".kilitAc").click(function(){
       $(".telefonEkran").css({});
      $(this).hide();
      $(".anaMenuContainer").fadeIn(400);
      $(".geriTusu").css({"background-color": "rgba(255, 255, 255, 0.686)"});
      $(".geriTusu").show();
      $(".lockImage").hide();
     $(".rehber").show(),
     $(".message").show(),
     $(".spotify").show(),
     $(".toplamKodSatiri").hide()
     $(".music").show(),
     $(".anaMenuItems").show()
     $(".hesapMakinesi").show(),
     $(".havaDurumu").show()
     $(".clockIcon").show(),
     $(".notlar").show(),
     $(".harita").show(),
     $(".appstore").show(),
     $(".whatsappIcon").show()
     $(".camera").show()
     $(".galeri").show(),
      $(".facetime").show(),
      $(".bildirimCubugu").show(),
    $(".safari").show(),
     $(".ayarlarIcon").show(),
      $(".takvimIcon").show(),
      $(".digital-clock2").hide();
      $(".altMenu").show();
      $(".tarih").hide();
    });
  });
  
   $(document).ready(function(){
     $(".bildirimCubugu").toggle(
       function(){$(".bildirimPaneli").slideDown();
       $(".parlaklik").fadeIn()
       $(".con1").fadeIn(),
        $(".con2").fadeIn(),
       $(".volume").fadeIn()
       $(".digital-clock").css({"color": "white"})
       $(".digital-clock2").hide() 
      $(".tarih").hide()
      $(".geriTusu").hide()
      $(".bildirimPanelKapat").show();
     
     },
       function(){$(".bildirimPaneli").slideUp();
       $(".bildirimPaneli").css({"filter": "blur(0px)"})
        $(".parlaklik").fadeOut();
        $(".con1").fadeOut(),
        $(".con2").fadeOut(),
        $(".volume").fadeOut();
        $(".geriTusu").show();
      $(".bildirimPanelKapat").hide();
  
     })
   }); 
   $(document).ready(function(){
    $(".message").click(function(){
      $(".messageContainer").fadeIn(400);
      $(".digital-clock").css({"color": "black"})
    });
  });
  
  $(".ayarlarIcon").click(function(){
     $(".ayarlarContainer").fadeIn(400);
     $(".digital-clock").css({"color": "black"})
     $(".geriTusu").css({"background-color": "rgba(56, 56, 56, 0.686)"})
  });

  $(".ayarlarGenelContainer").click(function(){
    $(".ayarlarGenelContent").fadeIn(400);
    $(".backButtonBlue2").fadeIn(400);
  });

$(".kilitEkraniContainer").click(function(){
  $(".kilitEkraniContent").fadeIn(400);
});

  $(document).ready(function(){
    $(".wpUcNokta").click(function(){
      $(".wpPopup").show(250);
    });
  });
  
  $(".instagram").click(function(){
     $(".instaLoading").fadeIn(400).delay(800).fadeOut(400);
    $(".instaContainer").fadeIn(800);
  });

  $(".wpPopupExit").click(function(){
    $(".wpPopup").hide(250);
  });
  
  $(".backButtonWhite").click(function(){
      $(".wpAyarlarContainer").fadeOut(400);
    $(".geriTusu").fadeIn(400);
  });
  
  $(".wpAyarlar").click(function(){
    $(".wpAyarlarContainer").show();
    $(".geriTusu").hide();
    $(".wpPopup").hide();
  });
  
  $(document).ready(function(){
    $(".o2").click(function(){
      $("#watch").fadeIn(300);
      $(this).css({"background-color": "rgb(191, 132, 43)" });
      $(".o1").css({"background-color": "rgb(17, 16, 16)"});
      $(".saatBaslik").fadeOut(300);
      $(".kronometre").fadeIn(300);
    });
  });
  
  $(document).ready(function(){
    $(".o1").click(function(){
      $("#watch").fadeOut(300);
      $(this).css({"background-color": "rgb(191, 132, 43)" });
      $(".o2").css({"background-color": "rgb(17, 16, 16)"});
      $(".saatBaslik").fadeIn(300);
      $(".kronometre").fadeOut(300);
    });
  });
  
  $(document).ready(function(){
    $(".whatsappIcon").click(function(){
      $(".wpLoading").fadeIn(400).delay(800).fadeOut(400);
      $(".whatsappContainer").fadeIn(800);
    });
  });
  
  $(document).ready(function(){
    $(".sohbetler").click(function(){
      $(".durum").css({"color": "rgb(213, 208, 208)","border-bottom": "none" });
      $(".aramalar").css({"color": "rgb(213, 208, 208)","border-bottom": "none" });
      $(this).css({"color": "#21d898", "border-bottom": "4px solid #21d898"});
      $(".sohbetAlt").fadeIn(400);
      $(".durumAlt").hide();
      $(".aramalarAlt").hide();
    });
   });
  
  $(document).ready(function(){
    $(".durum").click(function(){
      $(".sohbetler").css({"color": "rgb(213, 208, 208)","border-bottom": "none" });
      $(".aramalar").css({"color": "rgb(213, 208, 208)","border-bottom": "none" });
      $(this).css({"color": "#21d898", "border-bottom": "4px solid #21d898"});
      $(".durumAlt").fadeIn(400);
      $(".sohbetAlt").hide();
      $(".aramalarAlt").hide();
    });
   });
  
   $(document).ready(function(){
    $(".aramalar").click(function(){
      $(".sohbetler").css({"color": "rgb(213, 208, 208)","border-bottom": "none" });
      $(".durum").css({"color": "rgb(213, 208, 208)","border-bottom": "none" });
      $(this).css({"color": "#21d898", "border-bottom": "4px solid #21d898"});
      $(".aramalarAlt").fadeIn(400);
      $(".durumAlt").hide();
      $(".sohbetAlt").hide();
    });
   });
  
  $(document).ready(function(){
    $(".backButtonBlue").click(function(){
      $(".messageContainer").fadeOut(400);
      $(".digital-clock").css({"color": "white"})
      $(".geriTusu").css({"background-color": "rgba(255, 255, 255, 0.686)"})
    });
  });
  
  $(".backButtonBlue2").click(function(){
    $(".ayarlarGenelContent").fadeOut(400);
  });
  
  $(".backButtonBlue3").click(function(){
    $(".duvarKagidiContent").fadeOut(400);
    $(".kilitEkraniContent").fadeOut(400);
  });

$(".duvarKagidiContainer").click(function(){
  $(".duvarKagidiContent").fadeIn(400);
  $(".backButtonBlue3").fadeIn(400);
});

  $(document).ready(function(){
    $(".clockIcon").click(function(){
      $(".saatContainer").fadeIn(400);
      $(".digital-clock").css({"color": "white"})
    });
  });
  
   $(document).ready(function(){
    $(".backButton").click(function(){
    $(".notContainer").fadeOut(400);
    $(".digital-clock").css({"color": "white"})
    $(".notApp").fadeOut(400);
    $(".takvimContainer").fadeOut(400);
    $(".calendar").fadeOut(400);
    $(".saatContainer").fadeOut(400);
    $(".geriTusu").css({"background-color": "rgba(255, 255, 255, 0.686)"})
    });
  });
  
  $(document).ready(function(){
    $(".bildirimPanelKapat").click(function(){
      $(".bildirimPaneli").slideUp();
      $(".parlaklik").fadeOut();
      $(".con1").fadeOut(),
      $(".con2").fadeOut(),
      $(".volume").fadeOut();
      $(".geriTusu").show();
      $(this).hide();
    });
  });
  
  $(document).ready(function(){
     $(".hesapMakinesi").click(function(){
     $(".cal-container").fadeIn(400);
     });
  });
  
   $(document).ready(function(){
    $(".takvimIcon").click(function(){
      $(".takvimContainer").fadeIn(400);
      $(".digital-clock").css({"color": "black"});
      $(".calendar").fadeIn(400);
      $(".geriTusu").css({"background-color": "rgba(56, 56, 56, 0.686)"})
    });
   });
  
  $(document).ready(function(){
    $(".notlar").click(function(){
    $(".notContainer").fadeIn(400);
    $(".digital-clock").css({"color": "black"}) 
    $(".notApp").fadeIn(400);
    $(".geriTusu").css({"background-color": "rgba(56, 56, 56, 0.686)"})
    });
  });
  
  $(document).ready(function(){
    $(".geriTusu").click(function(){
      $(this).css({"background-color": "rgba(255, 255, 255, 0.686)"});
    $(".cal-container").fadeOut(400);
    $(".notContainer").fadeOut(400);
    $(".digital-clock").css({"color": "white"})
    $(".notApp").fadeOut(400);
    $(".saatContainer").fadeOut(400);
    $(".takvimContainer").fadeOut(400);
    $(".calendar").fadeOut(400);
    $(".messageContainer").fadeOut(400);
    $(".whatsappContainer").fadeOut(400);
    $(".ayarlarContainer").fadeOut(400);
    $(".instaContainer").fadeOut(400);
    });
  });
  
  $(".wallpaperSelect1").click(function(){
    $(".anaMenuContainer").css({"background-image": "url(https://i.pinimg.com/originals/81/fa/5f/81fa5f0a26473de8ae1e905057409920.gif)", 
    "background-size":"cover", "transition": "background-image 0.9s ease"});
    $(this).css({"border": "4px solid #4873b3"});
    $(".wallpaperSelect2").css({"border": "1px solid #4873b3"});
    $(".wallpaperSelect3").css({"border": "1px solid #4873b3"});
    $(".wallpaperSelect4").css({"border": "1px solid #4873b3"});
    $(".wallpaperSelect5").css({"border": "1px solid #4873b3"});
  });

$(".wallpaperSelect2").click(function(){
    $(".anaMenuContainer").css({"background-image": "url(https://i.pinimg.com/originals/d4/7f/d0/d47fd0584ec599836733cab403f89ba1.jpg)", 
    "background-size":"cover", "transition": "background-image 0.9s ease"});
    $(this).css({"border": "4px solid #4873b3"});
    $(".wallpaperSelect1").css({"border": "1px solid #4873b3"});
    $(".wallpaperSelect3").css({"border": "1px solid #4873b3"});
    $(".wallpaperSelect4").css({"border": "1px solid #4873b3"});
    $(".wallpaperSelect5").css({"border": "1px solid #4873b3"});
});

$(".wallpaperSelect3").click(function(){
  $(".anaMenuContainer").css({"background-image": "url(https://i.pinimg.com/originals/5b/af/ec/5bafec65a23571be0554473e6596a78d.jpg)", 
  "background-size":"cover", "transition": "background-image 0.9s ease"});
  $(this).css({"border": "4px solid #4873b3"});
    $(".wallpaperSelect1").css({"border": "1px solid #4873b3"});
    $(".wallpaperSelect2").css({"border": "1px solid #4873b3"});
    $(".wallpaperSelect4").css({"border": "1px solid #4873b3"});
    $(".wallpaperSelect5").css({"border": "1px solid #4873b3"});
});

$(".wallpaperSelect4").click(function(){
  $(".anaMenuContainer").css({"background-image": "url(https://cdn.wallpapersafari.com/80/20/zRXlY5.jpg)", 
  "background-size":"cover", "transition": "background-image 0.9s ease"});
  $(this).css({"border": "4px solid #4873b3"});
    $(".wallpaperSelect1").css({"border": "1px solid #4873b3"});
    $(".wallpaperSelect2").css({"border": "1px solid #4873b3"});
    $(".wallpaperSelect3").css({"border": "1px solid #4873b3"});
    $(".wallpaperSelect5").css({"border": "1px solid #4873b3"});
});

$(".wallpaperSelect5").click(function(){
  $(".anaMenuContainer").css({"background-image": "url(https://www.wallpapertip.com/wmimgs/14-147223_gilgit-baltistan-at-night.jpg )", 
  "background-size":"cover", "transition": "background-image 0.9s ease"});
  $(this).css({"border": "4px solid #4873b3"});
    $(".wallpaperSelect1").css({"border": "1px solid #4873b3"});
    $(".wallpaperSelect2").css({"border": "1px solid #4873b3"});
    $(".wallpaperSelect4").css({"border": "1px solid #4873b3"});
    $(".wallpaperSelect3").css({"border": "1px solid #4873b3"});
});

$(".facetime").click(function(){
  $(".demoPopup").fadeIn(400);
  $(".anaMenuContainer").css({"filter":"brightness(40%)"});
});

$(".galeri").click(function(){
  $(".demoPopup").fadeIn(400);
  $(".anaMenuContainer").css({"filter":"brightness(40%)"});
});

$(".harita").click(function(){
  $(".demoPopup").fadeIn(400);
  $(".anaMenuContainer").css({"filter":"brightness(40%)"});
});

$(".havaDurumu").click(function(){
  $(".demoPopup").fadeIn(400);
  $(".anaMenuContainer").css({"filter":"brightness(40%)"});
});

$(".music").click(function(){
  $(".demoPopup").fadeIn(400);
  $(".anaMenuContainer").css({"filter":"brightness(40%)"});
});

$(".appstore").click(function(){
  $(".demoPopup").fadeIn(400);
  $(".anaMenuContainer").css({"filter":"brightness(40%)"});
});

$(".spotify").click(function(){
  $(".demoPopup").fadeIn(400);
  $(".anaMenuContainer").css({"filter":"brightness(40%)"});
});

$(".youtube").click(function(){
  $(".demoPopup").fadeIn(400);
  $(".anaMenuContainer").css({"filter":"brightness(40%)"});
});

$(".camera").click(function(){
  $(".demoPopup").fadeIn(400);
  $(".anaMenuContainer").css({"filter":"brightness(40%)"});
});

$(".demoBtn").click(function(){
  $(".demoPopup").fadeOut(400);
  $(".anaMenuContainer").css({"filter":"brightness(90%)"});
});

$("#wifiIcon").click(function(){
  $(this).css({"color":"rgb(109, 214, 109)"});
});

$("#wifiIcon").toggle(function(){
   $(this).css({"color":"rgb(109, 214, 109)", "transition":"color 0.5s"});

},
  function(){
    $(this).css({"color":"white"});
  
});

$("#planeIcon").toggle(function(){
  $(this).css({"color":"rgb(109, 214, 109)", "transition":"color 0.5s"});

},
 function(){
   $(this).css({"color":"white"});
 
});

$(".sohbet1").click(function(){
  $(".sohbet1message").fadeIn(250);

});

$(".message-left-arrow").click(function(){
  $(".sohbet1message").fadeOut(250);

});

$(".custom-wallpaper-button").click(function(){
    $(".wallpaper-custom-url-container").fadeIn(400);
});

$("#wallpaper-decline").click(function(){
  $(".wallpaper-custom-url-container").fadeOut(400);
});

$("#edit").click(function(){
    $("#notHeader").fadeOut(100);
    $(".backButton").fadeOut(100);
    $(" #not-icerik-container").fadeIn(100);
});

$(".backButton-not").click(function(){
    $("#not-icerik-container").fadeOut(100);
    $(".backButton").fadeIn(100);
    $("#not-goster-container").fadeOut(100);
});

function notEkle() {
  var not = $("#not-textarea").val();
  var not_baslik = $("#not-baslik-input").val();
    var tarih=new Date();
    var gun=tarih.getDay();
    var gunler= ['Pazar', 'Pazartesi', 'Salı','Çarşamba','Perşembe','Cuma','Cumartesi']; 
    var today = new Date();
    var hours = today.getHours();
    var mins = today.getMinutes();
    const addZero = num => {
      if(num < 10) { return '0' + num };
      return num;
    }  

  if (not == "" || not_baslik == ""){
} 
  else {
    $("#not-app-notes").prepend("<li id='not-1'><span id='not-title'>" + not_baslik + "</span><span id='not-desc'>"+ "<span id='not-saat'>"+ addZero(hours)+ ":"+ addZero(mins) +"</span>" +"<span id='not-day'>"+gunler[gun]+"</span>" + " " + not + "</span></li>");
    $(" #not-icerik-container").fadeOut(100);
    $(".backButton").fadeIn(100);

  }
}
$("#not-kaydet").on("click", notEkle)
$("#not-kaydet").click(function(){
  $("textarea").val("");
  $("#not-textarea-container input").val("");
});

function notGoster(){
 // global değişken olayını yapamadık. Notlar ekleniyor çalışıyor fakat editlemeye girilmiyo. 
$("#not-goster-container").fadeIn(100);
$(".backButton").fadeOut(100);
$(".backButton-not").fadeIn(100);



}
$("#not-1").on("click", notGoster)

function msgGonder() {
  var mesaj = $(".sohbet1-input").val();

  if (mesaj == ""){
  } 
  else if (mesaj == "/k") {
    $("#msg").append("<li class='gelen-mesaj'> <span id='gelen-msg-text'>"+ "Taramala beyni beyni" +"</span> <span id='gelen-msg-saat'>15:09</span> </li>");
  }  

  else if (mesaj == "/clear") {
    $("#msg").empty();
  }

  else {

  $("#msg").append("<li class='giden-mesaj'> <span id='giden-msg-text'>"+ mesaj +"</span> <span id='giden-msg-saat'>15:09</span>   </li>");

  if ($(".sonMesajSohbet1").html(mesaj.length > 13)) {
    $(".sonMesajSohbet1").html(mesaj + "...");
    
  } else {
    $(".sonMesajSohbet1").html(mesaj);
  }

  }
}
$(".message-gonder").on("click", msgGonder)
$(".message-gonder").click(function(){
  $(".sohbet1-message-input input").val("");
});

function customWallpaper() {
   var url = $("#custom-url").val();

if (url == "") {

}else {
   $(".anaMenuContainer").css({
     'background-image': "url("+ url +")",
     'background-size':"cover", 
     'background-position': "center",
     'transition': "background-image 0.9s ease"
    })
    $("#wallpaper-ok").click(function(){

    });
  }
}
$("#wallpaper-ok").on("click", customWallpaper)

  $(document).ready(function(){
    var tarih=new Date();
    var gun=tarih.getDay();
    var ay=tarih.getMonth();
    var yil=tarih.getFullYear();
    var gunler= ['Pazar', 'Pazartesi', 'Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    var aylar= ['Ocak', 'Şubat', 'Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
    $('.tarih').html(tarih.getDate()+' '+aylar[ay]+' '+gunler[gun]);            
  })
  
  function showclock() {
    let today = new Date();
    let hours = today.getHours();
    let mins = today.getMinutes();
    let seconds = today.getSeconds();
    const addZero = num => {
      if(num < 10) { return '0' + num };
      return num;
    }
    $('.hour').text(addZero(hours));
    $('.min').text(addZero(mins));
    $('.second').text(addZero(seconds));
  }
  setInterval(showclock, 1000);
  
  function showclock2() {
    let today = new Date();
    let hours = today.getHours();
    let mins = today.getMinutes();
    let seconds = today.getSeconds();
    const addZero = num => {
      if(num < 10) { return '0' + num };
      return num;
    }
    $('.hour2').text(addZero(hours));
    $('.min2').text(addZero(mins));
    $('.second2').text(addZero(seconds));
  }
  setInterval(showclock2, 1000);
  
  function showclock3() {
    let today = new Date();
    let hours = today.getHours();
    let mins = today.getMinutes();
    let seconds = today.getSeconds();
    const addZero = num => {
      if(num < 10) { return '0' + num };
      return num;
    }
    $('.hour3').text(addZero(hours));
    $('.min3').text(addZero(mins));
    $('.second3').text(addZero(seconds));
  }
  setInterval(showclock3, 1000);
  
  var resultIpt=$("#resultIpt");
  var result="";
  var num1="";
  var num2="";
  var operator_id=0;
  var point_count=0;
  var equ_num=0;
  var zero_count=0;
   //Get the object assigned to the variable
   var num=$(".num"); //Pseudo array
  var operator=$(".operator");
  var equal=$(".btn-equal");
  var btn_clear=$("#btn-clear");
  var negate=$("#btn-negate"),negate_num=1;
  var percent=$("#btn-percent");
   
   //+/- key
  negate.on("click",function () {
      result=resultIpt.val();
      if (result=="0"){
          result="-0";
      }else if(result=="-0"){
          result="0";
           }else{ //When the absolute value is not 0
          result=-result;
      }
      resultIpt.val(result);
  });
   
   //number key 
  num.on("click",function () {
      var num_val = $(this).val();
      result = resultIpt.val();
           if (equ_num==0){ //There is no equal sign calculation
          result = resultIpt.val();
           } else if (equ_num>0&&zero_count==0){ //The following code is executed once every equal sign calculation
          resultIpt.val("0");
          point_count=0;
          result=resultIpt.val();
      }
   
   
      if (result.length==1 ) {
                   if (num_val != ".") {//If it is a number other than the decimal point
                           if (result == "0") {//when it is 0, overwrite
                  result = "";
                  result = num_val;
                                   zero_count=1; //Avoid repeated execution of the code under equ_num>0
   
                  // console.log(result);
                           } else {//When not 0, append
                  result += num_val;
                  // console.log(result);
   
              }
          } else if (num_val == "." && point_count == 0) {
              result += num_val;
              // console.log(result);
              point_count = 1;
          }
      }else if(result.length>1){
   
          if (num_val=="."){
              if (point_count==0){
                  result += num_val;
                  point_count=1;
              }else if(point_count>0){
                  result=result;
              }
          } else{
              if (result=="-0"){
                  result="-"+num_val;
              }else{
                  result +=num_val;
              }
          }
      }
      resultIpt.val(result);
           //Control input digits, up to 6 digits
      var result_cur=resultIpt.val();
      if (result_cur.length>=6) {
          // console.log(result_cur);
          // console.log(typeof (result_cur));
                   result_cur=result_cur.substring(0, 6); //The new string is returned, the original string has not changed, so it must be reordered
          resultIpt.val(result_cur);
      }
   
  });
   
   //Operator
  operator.on("click",function () {
      var operator_val=$(this).val();
      // console.log(operator_val);
      if(operator_val=="+"){
          operator_id=1;
      }
      if(operator_val=="-"){
          operator_id=2;
      }
      if(operator_val=="×"){
          operator_id=3;
      }
      if(operator_val=="÷"){
          operator_id=4;
      }
      // console.log(operator_id);
      if(num1==""){
                   num1 = eval(resultIpt.val());//js eval() method, calculate the string, and execute the js code
      }
      resultIpt.val("0");
           point_count=0; //You can re-enter the decimal point
  });
   
   //Equals
  equal.on("click",function () {
      result=resultIpt.val();
      if (result=="0"){
                   if (num1=="") {//If you don’t enter the first number, just click =
              result=0;
                   }else{ //Enter the first number, and reset to 0 after pressing the operator
              result=num1;
          }
           } else {//When only the first number is entered, the operator is not pressed or the second number is entered
          num2=eval(result);
                   // console.log(num1); //""--The first number is entered, but there is no operator, at this time num1 is an empty string
          console.log(num2);       //99
          switch (operator_id) {
                           case 0: //When not pressing +—*/
                  result=eval(result);
                  console.log(result);
                  break;
              case 1:
                  result=num1+num2;
                  break;
              case 2:
                  result=num1-num2;
                  break;
              case 3:
                  result=num1*num2;
                  break;
              case 4:
                  result=num1/num2;
                  break;
          }
      }
      result=eval(result);
      num1=result;
      console.log(result);
      resultIpt.val(result);
      equ_num++;
      zero_count=0;
      // operator_id=0;
           point_count=0;//You can re-enter the decimal point
  });
   
   //Clear 0--Return to the initial state
  btn_clear.on("click",function () {
      result="";
      num1="";
      num2="";
      operator_id=0;
      point_count=0;
      equ_num=0;
      resultIpt.val("0");
  });
   
   //Percent
  percent.on("click",function () {
      result=resultIpt.val();
      result=eval(result)/100;
      resultIpt.val(result);
  });
  
  const rangeInput = document.getElementById("range");
  const center = document.getElementsByClassName("telefonEkran")[0];
  brightnessChanger = () => {
    center.style.filter = "brightness(" + rangeInput.value + "%)";
  };
  rangeInput.addEventListener("change", brightnessChanger);
  
  $(document).ready(function(){
    $("body").css("-webkit-user-select","none");
    $("body").css("-moz-user-select","none");
    $("body").css("-ms-user-select","none");
    $("body").css("-o-user-select","none");
    $("body").css("user-select","none");
  });
  
  function CalendarApp(date) {
    
    if (!(date instanceof Date)) {
      date = new Date();
    }
    
    this.days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    this.months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
    this.quotes = ['Etkinlik Yok.'];
    this.apts = [
      {
        name: 'Finish this web app',
        endTime: new Date(2016, 4, 30, 23),
        startTime: new Date(2016, 4, 30, 21),
        day: new Date(2016, 4, 30).toString()
      },
       {
        name: 'My Birthday!',
        endTime: new Date(2016, 4, 1, 23, 59),
        startTime: new Date(2016, 4, 1, 0),
        day: new Date(2016, 4, 1).toString()
      },
      
    ];
    
    this.aptDates = [new Date(2016, 4, 30).toString(),new Date(2016, 4, 1).toString()];
    this.eles = {
    };
    this.calDaySelected = null;
    
    this.calendar = document.getElementById("calendar-app");
    
    this.calendarView = document.getElementById("dates");
    
    this.calendarMonthDiv = document.getElementById("calendar-month");
    this.calendarMonthLastDiv = document.getElementById("calendar-month-last");
    this.calendarMonthNextDiv = document.getElementById("calendar-month-next");
    
    this.dayInspirationalQuote = document.getElementById("inspirational-quote");
     
    this.todayIsSpan = document.getElementById("footer-date");
    // this.eventsCountSpan = document.getElementById("footer-events");
    this.dayViewEle = document.getElementById("day-view");
    this.dayViewExitEle = document.getElementById("day-view-exit");
    this.dayViewDateEle = document.getElementById("day-view-date");
    this.addDayEventEle = document.getElementById("add-event");
    this.dayEventsEle = document.getElementById("day-events");
    
    this.dayEventAddForm = {
      cancelBtn: document.getElementById("add-event-cancel"),
      addBtn: document.getElementById("add-event-save"),
      nameEvent:  document.getElementById("input-add-event-name"),
      startTime:  document.getElementById("input-add-event-start-time"),
      endTime:  document.getElementById("input-add-event-end-time"),
      startAMPM:  document.getElementById("input-add-event-start-ampm"),
      endAMPM:  document.getElementById("input-add-event-end-ampm")
    };
    this.dayEventsList = document.getElementById("day-events-list");
    this.dayEventBoxEle = document.getElementById("add-day-event-box");
    
    /* Start the app */
    this.showView(date);
    this.addEventListeners();
    this.todayIsSpan.textContent = "Bugün " + this.months[date.getMonth()] + " " + date.getDate();  
  }
  
  CalendarApp.prototype.addEventListeners = function(){
    
    this.calendar.addEventListener("click", this.mainCalendarClickClose.bind(this));
    this.todayIsSpan.addEventListener("click", this.showView.bind(this));
    this.calendarMonthLastDiv.addEventListener("click", this.showNewMonth.bind(this));
    this.calendarMonthNextDiv.addEventListener("click", this.showNewMonth.bind(this));
    this.dayViewExitEle.addEventListener("click", this.closeDayWindow.bind(this));
    this.dayViewDateEle.addEventListener("click", this.showNewMonth.bind(this));
    this.addDayEventEle.addEventListener("click", this.addNewEventBox.bind(this));
    this.dayEventAddForm.cancelBtn.addEventListener("click", this.closeNewEventBox.bind(this));
    this.dayEventAddForm.cancelBtn.addEventListener("keyup", this.closeNewEventBox.bind(this));
    
    this.dayEventAddForm.startTime.addEventListener("keyup",this.inputChangeLimiter.bind(this));
    this.dayEventAddForm.startAMPM.addEventListener("keyup",this.inputChangeLimiter.bind(this));
    this.dayEventAddForm.endTime.addEventListener("keyup",this.inputChangeLimiter.bind(this));
    this.dayEventAddForm.endAMPM.addEventListener("keyup",this.inputChangeLimiter.bind(this));
    this.dayEventAddForm.addBtn.addEventListener("click",this.saveAddNewEvent.bind(this));
  
  };
  CalendarApp.prototype.showView = function(date){
    if ( !date || (!(date instanceof Date)) ) date = new Date();
    var now = new Date(date),
        y = now.getFullYear(),
        m = now.getMonth();
    var today = new Date();
    
    var lastDayOfM = new Date(y, m + 1, 0).getDate();
    var startingD = new Date(y, m, 1).getDay();
    var lastM = new Date(y, now.getMonth()-1, 1);
    var nextM = new Date(y, now.getMonth()+1, 1);
   
    this.calendarMonthDiv.classList.remove("cview__month-activate");
    this.calendarMonthDiv.classList.add("cview__month-reset");
    
    while(this.calendarView.firstChild) {
      this.calendarView.removeChild(this.calendarView.firstChild);
    }
    
    
    for ( var x = 0; x < startingD; x++ ) {
      var spacer = document.createElement("div");
      spacer.className = "cview--spacer";
      this.calendarView.appendChild(spacer);
    }
    
    for ( var z = 1; z <= lastDayOfM; z++ ) {
     
      var _date = new Date(y, m ,z);
      var day = document.createElement("div");
      day.className = "cview--date";
      day.textContent = z;
      day.setAttribute("data-date", _date);
      day.onclick = this.showDay.bind(this);
      
      // check if todays date
      if ( z == today.getDate() && y == today.getFullYear() && m == today.getMonth() ) {
        day.classList.add("today");
      }
      
       // check if has events to show
      if ( this.aptDates.indexOf(_date.toString()) !== -1 ) {
        day.classList.add("has-events");
      }
      
      this.calendarView.appendChild(day);
    }
    
    var _that = this;
    setTimeout(function(){
      _that.calendarMonthDiv.classList.add("cview__month-activate");
    }, 50);
    
    this.calendarMonthDiv.textContent = this.months[now.getMonth()] + " " + now.getFullYear();
    this.calendarMonthDiv.setAttribute("data-date", now);
  
    
    this.calendarMonthLastDiv.textContent = "← " + this.months[lastM.getMonth()];
    this.calendarMonthLastDiv.setAttribute("data-date", lastM);
    
    this.calendarMonthNextDiv.textContent = this.months[nextM.getMonth()] + " →";
    this.calendarMonthNextDiv.setAttribute("data-date", nextM);
    
  }
  CalendarApp.prototype.showDay = function(e, dayEle) {
    e.stopPropagation();
    if ( !dayEle ) {
      dayEle = e.currentTarget;
    }
    var dayDate = new Date(dayEle.getAttribute('data-date'));
    
    this.calDaySelected = dayEle;
    
    this.openDayWindow(dayDate);
    
  
    
  };
  CalendarApp.prototype.openDayWindow = function(date){
    
    var now = new Date();
    var day = new Date(date);
    this.dayViewDateEle.textContent = this.days[day.getDay()] + ", " + this.months[day.getMonth()] + " " + day.getDate() + ", " + day.getFullYear();
    this.dayViewDateEle.setAttribute('data-date', day);
    this.dayViewEle.classList.add("calendar--day-view-active");
    
    /* Contextual lang changes based on tense. Also show btn for scheduling future events */
    var _dayTopbarText = '';
    if ( day < new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
      _dayTopbarText = "Bu tarihte ";
      this.addDayEventEle.style.display = "none";
    } else {
       _dayTopbarText = "Bu tarihte ";
       this.addDayEventEle.style.display = "inline";
    }
    this.addDayEventEle.setAttribute("data-date", day);
    
    var eventsToday = this.showEventsByDay(day);
    if ( !eventsToday ) {
      _dayTopbarText += "etkinlik ";
      var _rand = Math.round(Math.random() * ((this.quotes.length - 1 ) - 0) + 0);
      this.dayInspirationalQuote.textContent = this.quotes[_rand];
    } else {
      _dayTopbarText += eventsToday.length + " ";
      this.dayInspirationalQuote.textContent = null;
    }
    //this.dayEventsList.innerHTML = this.showEventsCreateHTMLView(eventsToday);
    while(this.dayEventsList.firstChild) {
      this.dayEventsList.removeChild(this.dayEventsList.firstChild);
    }
    
    this.dayEventsList.appendChild(this.showEventsCreateElesView(eventsToday));
    
    
    this.dayEventsEle.textContent = _dayTopbarText + "yok " + this.months[day.getMonth()] + " " + day.getDate() + ", " + day.getFullYear();
    
    
  };
  
  CalendarApp.prototype.showEventsCreateElesView = function(events) {
    var ul = document.createElement("ul");
    ul.className = 'day-event-list-ul';
    events = this.sortEventsByTime(events);
    var _this = this;
    events.forEach(function(event){
      var _start = new Date(event.startTime);
      var _end = new Date(event.endTime);
      var idx = event.index;
      var li = document.createElement("li");
      li.className = "event-dates";
      var html = "<span class='start-time'>" + _start.toLocaleTimeString(navigator.language,{hour: '2-digit', minute:'2-digit'}) + "</span> <small>arasında</small> ";
      html += "<span class='end-time'>" + _end.toLocaleTimeString(navigator.language,{hour: '2-digit', minute:'2-digit'}) + ( (_end.getDate() != _start.getDate()) ? ' <small>on ' + _end.toLocaleDateString() + "</small>" : '') +"</span>";
      
  
      html += "<span class='event-name'>" + event.name + "</span>";
      
      var div = document.createElement("div");
      div.className = "event-dates";
      div.innerHTML = html;
      
      var deleteBtn = document.createElement("span");
      var deleteText = document.createTextNode("delete");
      deleteBtn.className = "event-delete";
      deleteBtn.setAttribute("data-idx", idx);
      deleteBtn.appendChild(deleteText);
      deleteBtn.onclick = _this.deleteEvent.bind(_this);
      
      div.appendChild(deleteBtn);
      
      li.appendChild(div);
      ul.appendChild(li);
    });
    return ul;
  };
  CalendarApp.prototype.deleteEvent = function(e) {
    var deleted = this.apts.splice(e.currentTarget.getAttribute("data-idx"),1);
    var deletedDate = new Date(deleted[0].day);
    var anyDatesLeft = this.showEventsByDay(deletedDate);
    if ( anyDatesLeft === false ) {
      // safe to remove from array
      var idx = this.aptDates.indexOf(deletedDate.toString());
      if (idx >= 0) {
         this.aptDates.splice(idx,1);
        // remove dot from calendar view
        var ele = document.querySelector('.cview--date[data-date="'+ deletedDate.toString() +'"]');
        if ( ele ) {
          ele.classList.remove("has-events");
        }
      }
    }
    this.openDayWindow(deletedDate);;
  };
  CalendarApp.prototype.sortEventsByTime = function(events) {
    if (!events) return [];
    return events.sort(function compare(a, b) {
      if (new Date(a.startTime) < new Date(b.startTime)) {
        return -1;
      }
      if (new Date(a.startTime) > new Date(b.startTime)) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
  };
  CalendarApp.prototype.showEventsByDay = function(day) {
    var _events = [];
    this.apts.forEach(function(apt, idx){
      if ( day.toString() == apt.day.toString() ) {
        apt.index = idx;
        _events.push(apt);
      }
    });
    return (_events.length) ? _events : false;
  };
  CalendarApp.prototype.closeDayWindow = function(){
    this.dayViewEle.classList.remove("calendar--day-view-active");
    this.closeNewEventBox();
  };
  CalendarApp.prototype.mainCalendarClickClose = function(e){
    if ( e.currentTarget != e.target ) {
      return;
    }
    
    this.dayViewEle.classList.remove("calendar--day-view-active");
    this.closeNewEventBox();
  };
  CalendarApp.prototype.addNewEventBox = function(e){
    var target = e.currentTarget;
    this.dayEventBoxEle.setAttribute("data-active", "true"); 
    this.dayEventBoxEle.setAttribute("data-date", target.getAttribute("data-date"));
    
  };
  CalendarApp.prototype.closeNewEventBox = function(e){
    
    if (e && e.keyCode && e.keyCode != 13) return false;
    
    this.dayEventBoxEle.setAttribute("data-active", "false");
    // reset values
    this.resetAddEventBox();
    
  };
  CalendarApp.prototype.saveAddNewEvent = function() {
    var saveErrors = this.validateAddEventInput();
    if ( !saveErrors ) {
      this.addEvent();
    }
  };
  
  CalendarApp.prototype.addEvent = function() {
    
    var name = this.dayEventAddForm.nameEvent.value.trim();
    var dayOfDate = this.dayEventBoxEle.getAttribute("data-date");
    var dateObjectDay =  new Date(dayOfDate);
    var cleanDates = this.cleanEventTimeStampDates();
    
    this.apts.push({
      name: name,
      day: dateObjectDay,
      startTime: cleanDates[0],
      endTime: cleanDates[1]
    });
    this.closeNewEventBox();
    this.openDayWindow(dayOfDate);
    this.calDaySelected.classList.add("has-events");
    // add to dates
    if ( this.aptDates.indexOf(dateObjectDay.toString()) === -1 ) {
      this.aptDates.push(dateObjectDay.toString());
    }
    
  };
  CalendarApp.prototype.convertTo23HourTime = function(stringOfTime, AMPM) {
    // convert to 0 - 23 hour time
    var mins = stringOfTime.split(":");
    var hours = stringOfTime.trim();
    if ( mins[1] && mins[1].trim() ) {
      hours = parseInt(mins[0].trim());
      mins = parseInt(mins[1].trim());
    } else {
      hours = parseInt(hours);
      mins = 0;
    }
    hours = ( AMPM == 'am' ) ? ( (hours == 12) ? 0 : hours ) : (hours <= 11) ? parseInt(hours) + 12 : hours;
    return [hours, mins];
  };
  CalendarApp.prototype.cleanEventTimeStampDates = function() {
    
    var startTime = this.dayEventAddForm.startTime.value.trim() || this.dayEventAddForm.startTime.getAttribute("placeholder") || '8';
    var startAMPM = this.dayEventAddForm.startAMPM.value.trim() || this.dayEventAddForm.startAMPM.getAttribute("placeholder") || 'am';
    startAMPM = (startAMPM == 'a') ? startAMPM + 'm' : startAMPM;
    var endTime = this.dayEventAddForm.endTime.value.trim() || this.dayEventAddForm.endTime.getAttribute("placeholder") || '9';
    var endAMPM = this.dayEventAddForm.endAMPM.value.trim() || this.dayEventAddForm.endAMPM.getAttribute("placeholder") || 'pm';
    endAMPM = (endAMPM == 'p') ? endAMPM + 'm' : endAMPM;
    var date = this.dayEventBoxEle.getAttribute("data-date");
    
    var startingTimeStamps = this.convertTo23HourTime(startTime, startAMPM);
    var endingTimeStamps = this.convertTo23HourTime(endTime, endAMPM);
    
    var dateOfEvent = new Date(date);
    var startDate = new Date(dateOfEvent.getFullYear(), dateOfEvent.getMonth(), dateOfEvent.getDate(), startingTimeStamps[0], startingTimeStamps[1]);
    var endDate = new Date(dateOfEvent.getFullYear(), dateOfEvent.getMonth(), dateOfEvent.getDate(), endingTimeStamps[0], endingTimeStamps[1]);
    
    // if end date is less than start date - set end date back another day
    if ( startDate > endDate ) endDate.setDate(endDate.getDate() + 1);
    
    return [startDate, endDate];
    
  };
  CalendarApp.prototype.validateAddEventInput = function() {
  
    var _errors = false;
    var name = this.dayEventAddForm.nameEvent.value.trim();
    var startTime = this.dayEventAddForm.startTime.value.trim();
    var startAMPM = this.dayEventAddForm.startAMPM.value.trim();
    var endTime = this.dayEventAddForm.endTime.value.trim();
    var endAMPM = this.dayEventAddForm.endAMPM.value.trim();
    
    if (!name || name == null) {
      _errors = true;
      this.dayEventAddForm.nameEvent.classList.add("add-event-edit--error");
      this.dayEventAddForm.nameEvent.focus();
    } else {
       this.dayEventAddForm.nameEvent.classList.remove("add-event-edit--error");
    }
    
  //   if (!startTime || startTime == null) {
  //     _errors = true;
  //     this.dayEventAddForm.startTime.classList.add("add-event-edit--error");
  //   } else {
  //      this.dayEventAddForm.startTime.classList.remove("add-event-edit--error");
  //   }
    
    return _errors;
    
    
  };
  var timeOut = null;
  var activeEle = null;
  CalendarApp.prototype.inputChangeLimiter = function(ele) {
    
    if ( ele.currentTarget ) {
      ele = ele.currentTarget;
    }
    if (timeOut && ele == activeEle){
      clearTimeout(timeOut);
    }
    
    var limiter = CalendarApp.prototype.textOptionLimiter;
  
    var _options = ele.getAttribute("data-options").split(",");
    var _format = ele.getAttribute("data-format") || 'text';
    timeOut = setTimeout(function(){
      ele.value = limiter(_options, ele.value, _format);
    }, 600);
    activeEle = ele;
    
  };
  CalendarApp.prototype.textOptionLimiter = function(options, input, format){
    if ( !input ) return '';
    
    if ( input.indexOf(":") !== -1 && format == 'datetime' ) {
   
      var _splitTime = input.split(':', 2);
      if (_splitTime.length == 2 && !_splitTime[1].trim()) return input;
      var _trailingTime = parseInt(_splitTime[1]);
      
      if (options.indexOf(_splitTime[0]) === -1) {
        return options[0];
      }
      else if (_splitTime[1] == "0" ) {
        return input;
      }
      else if (_splitTime[1] == "00" ) {
        return _splitTime[0] +  ":00";
      }
      else if (_trailingTime < 10 ) {
        return _splitTime[0] + ":" + "0" + _trailingTime;
      }
      else if ( !Number.isInteger(_trailingTime) || _trailingTime < 0 || _trailingTime > 59 )  {
        return _splitTime[0];
      } 
      return _splitTime[0] + ":" + _trailingTime;
    }
    if ((input.toString().length >= 3) ) {
      var pad = (input.toString().length - 4) * -1;
      var _hour, _min;
      if (pad == 1) {
        _hour = input[0];
        _min = input[1] + input[2];
      } else {
        _hour = input[0] + input[1];
        _min = input[2] + input[3];
      }
      
      _hour = Math.max(1,Math.min(12,(_hour)));
      _min = Math.min(59,(_min));
      if ( _min < 10 ) { 
        _min = "0" + _min;
      }
      _min = (isNaN(_min)) ? '00' : _min;
      _hour = (isNaN(_hour)) ? '9' : _hour ;
  
      return _hour + ":" + _min;
      
    }
  
    if (options.indexOf(input) === -1) {
      return options[0];
    }
    
    return input;
  };
  CalendarApp.prototype.resetAddEventBox = function(){
    this.dayEventAddForm.nameEvent.value = '';
    this.dayEventAddForm.nameEvent.classList.remove("add-event-edit--error");
    this.dayEventAddForm.endTime.value = '';
    this.dayEventAddForm.startTime.value = '';
    this.dayEventAddForm.endAMPM.value = '';
    this.dayEventAddForm.startAMPM.value = '';
  };
  CalendarApp.prototype.showNewMonth = function(e){
    var date = e.currentTarget.dataset.date;
    var newMonthDate = new Date(date);
    this.showView(newMonthDate);
    this.closeDayWindow();
    return true;
  };
  
  var calendar = new CalendarApp();
  console.log(calendar);
  
  window.requestAnimFrame = (function (callback) {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
  
  var graph = {
    state: {
      pause: false,
      inUse: false,
      lapNum: 1
    },
    markerStyle: {
      green: "#67d276",
      red: "#f73748"
    },
    coords: {
      x: 5,
      y: 50,
      prev: {
        x: 0,
        y: 60
      }
    },
    msc: {
      fastestLap: 0,
      slowestLap: 99999999,
      startTime: 0
    }
  };
  
  //Global Watch Elements
  var lap_mil = document.getElementById("lap_mil"),
    lap_sec = document.getElementById("lap_sec"),
    lap_min = document.getElementById("lap_min"),
    timer_mil = document.getElementById("timer_mil"),
    timer_sec = document.getElementById("timer_sec"),
    timer_min = document.getElementById("timer_min"),
    watch = document.getElementById("watch"),
    avg_time = document.getElementById("avg_time");
  
  //Canvas Elements
  var canvas = document.getElementById("graph"),
    ctx = canvas.getContext("2d"),
    lap = document.getElementById("lap"),
    lap_numbers = document.getElementById("lap_numbers");
  
  //Other required Elements
  var clock,
    lapClock,
    interval,
    lapOffset,
    lapTotal,
    laps = [],
    breakLoop = 0;
  
  var reset = 0;
  
  var iWatch = function () {
    var startButton = addAction("start", start),
      stopButton = addAction("stop", stop),
      resetButton = addAction("reset", reset),
      lapButton = addAction("lap", lap);
  
    reset();
  
    function addAction(action, handler) {
      var a = document.getElementById(action);
      a.addEventListener("click", function (event) {
        handler();
        event.preventDefault();
      });
      return a;
    }
  
    function start() {
      if (!interval) {
        offset = Date.now();
        watch.classList.add("go");
        watch.classList.remove("pause");
        startButton.classList.add("hide");
        stopButton.classList.remove("hide");
        resetButton.classList.add("hide");
        lapButton.classList.remove("hide");
        interval = setInterval(update, 1);
        graph.state.pause = false;
        if (!graph.state.inUse) {
          breakLoop = 0;
          graph.animate(canvas, ctx, graph.msc.startTime);
          graph.state.inUse = true;
        }
      }
    }
  
    function stop() {
      if (interval) {
        watch.classList.add("pause");
        startButton.classList.remove("hide");
        stopButton.classList.add("hide");
        resetButton.classList.remove("hide");
        lapButton.classList.add("hide");
        clearInterval(interval);
        interval = null;
        graph.state.pause = true;
      }
    }
  
    function reset() {
      clock = 0;
      lapClock = 0;
      lapOffset = 0;
      lapTotal = 0;
      watch.classList.remove("go");
      watch.classList.remove("pause");
      render();
      graph.resetGraph(ctx, canvas);
    }
  
    function lap() {
      //record lap time
      var temp = clock - lapTotal;
  
      lapTotal += temp;
      lapOffset = clock;
      var val = graph.recordLap(graph.coords);
  
      var current = {
        time_ms: temp,
        lap_number: val.lap_number,
        x: graph.coords.prev.x,
        y: graph.coords.prev.y
      };
      laps.push(current);
    }
  
    function update() {
      clock += delta();
      lapClock = clock - lapOffset;
      render();
    }
  
    function render() {
      var t_ms = (clock / 1000).toFixed(2),
        t_sec = parseInt(clock / 1000),
        t_min = parseInt(clock / 1000 / 60);
  
      if (t_sec > 59) {
        t_sec = t_sec - 60 * t_min;
      }
  
      timer_mil.innerHTML = (t_ms ? (t_ms > 9 ? t_ms : "0" + t_ms) : "00").slice(
        -2
      ); // ms
      timer_sec.innerHTML = t_sec ? (t_sec > 9 ? t_sec : "0" + t_sec) : "00"; // sec
      timer_min.innerHTML = t_min ? (t_min > 9 ? t_min : "0" + t_min) : "00"; // min
  
      var l_ms = (lapClock / 1000).toFixed(2),
        l_sec = parseInt(lapClock / 1000),
        l_min = parseInt(lapClock / 1000 / 60);
  
      if (l_sec > 59) {
        l_sec = l_sec - 60 * l_min;
      }
  
      lap_mil.innerHTML = (l_ms ? (l_ms > 9 ? l_ms : "0" + l_ms) : "00").slice(
        -2
      ); // ms
      lap_sec.innerHTML = l_sec ? (l_sec > 9 ? l_sec : "0" + l_sec) : "00"; // sec
      lap_min.innerHTML = l_min ? (l_min > 9 ? l_min : "0" + l_min) : "00"; // min
    }
  
    function delta() {
      var now = Date.now(),
        t = now - offset;
      offset = now;
      return t;
    }
  
    // public API
    this.start = start;
    this.stop = stop;
    this.reset = reset;
    this.lap = lap;
  };
  
  var clock = function () {
    var d = new Date(),
      time_hours = document.getElementById("time_hours"),
      time_mins = document.getElementById("time_mins");
  
    setInterval(function () {
      setTime();
    }, 1000);
  
    function setTime() {
      var hrs = d.getHours();
      var mins = d.getMinutes();
      time_hours.innerHTML = hrs > 9 ? hrs : "0" + hrs;
      time_mins.innerHTML = mins > 9 ? mins : "0" + mins;
    }
    setTime();
  };
  
  graph.animate = function (canvas, c, startTime) {
    if (breakLoop == 1) {
      breakLoop = 0;
      return;
    }
  
    if (!graph.state.pause) {
      var linearSpeed = 20;
      var newY = (linearSpeed * (startTime += 10)) / 1000;
  
      var offset = 0;
      if (laps.length > 5) {
        offset = (laps.length - 5) * 35;
      }
  
      if (newY < 50) {
        graph.coords.y = 50 - newY;
      }
  
      if (reset == 1) {
        //startTime = (new Date()).getTime();
        startTime = 0;
        reset = 0;
      }
  
      // Clear Canvas
      c.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw average
      if (graph.state.lapNum > 2) {
        var totalY = 0,
          totalTime = 0;
  
        for (var key in laps) {
          if (laps.hasOwnProperty(key)) {
            var lap = laps[key];
            totalY += lap.y;
            totalTime += lap.time_ms;
          }
        }
  
        var meanY = totalY / laps.length;
        var avgTime = totalTime / laps.length;
  
        // Write average time
        avgTime = Math.round(parseFloat(avgTime / 1000));
        avg_time.innerHTML = Math.round(parseFloat(avgTime)) + "s";
  
        // Draw mean line
        c.beginPath();
        c.setLineDash([2]);
        c.strokeStyle = "#ffac39";
        c.moveTo(0, meanY - 0.5);
        c.lineTo(canvas.width, meanY - 0.5);
        c.stroke();
        c.closePath();
      }
  
      // Draw Connect Line
      c.beginPath();
      c.strokeStyle = "#fff";
      c.setLineDash([0]);
  
      if (graph.state.lapNum !== 1) {
        c.moveTo(graph.coords.prev.x - offset, graph.coords.prev.y);
        c.lineTo(graph.coords.x - offset, graph.coords.y);
      }
      c.stroke();
      c.closePath();
  
      //Draw Previous Markers
      for (var key in laps) {
        if (laps.hasOwnProperty(key)) {
          var lap = laps[key];
          c.beginPath();
          c.strokeStyle = "#fff";
          c.fillStyle = "#fff";
          c.arc(lap.x - offset, lap.y, 2.5, 0, 2 * Math.PI, false);
          c.fill();
          c.closePath();
  
          //Draw lap lap number
          c.beginPath();
          ctx.font = "14px helvetica";
          ctx.fillText(lap.lap_number, lap.x - offset - 5, canvas.height - 10);
          c.closePath();
  
          //Draw Previous Line
          if (lap.lap_number > 1) {
            c.beginPath();
            c.strokeStyle = "#fff";
            c.moveTo(laps[key - 1].x - offset, laps[key - 1].y);
            c.lineTo(lap.x - offset, lap.y);
            c.stroke();
            c.closePath();
          }
        }
      }
  
      //Draw Marker
      c.beginPath();
      if (graph.state.lapNum == 1) {
        c.fillStyle = "#fff";
        c.strokeStyle = "#fff";
      } else {
        if (graph.coords.y > graph.msc.fastestLap) {
          c.fillStyle = graph.markerStyle.green;
          c.strokeStyle = graph.markerStyle.green;
        } else if (graph.coords.y < graph.msc.slowestLap) {
          c.fillStyle = graph.markerStyle.red;
          c.strokeStyle = graph.markerStyle.red;
        } else {
          c.fillStyle = "#fff";
          c.strokeStyle = "#fff";
        }
      }
      c.arc(graph.coords.x - offset, graph.coords.y, 2.5, 0, 2 * Math.PI, false);
      c.fill();
      c.closePath();
    }
  
    requestAnimFrame(function () {
      graph.animate(canvas, c, startTime);
    });
  };
  
  graph.recordLap = function (c) {
    graph.coords.prev.x = c.x;
    graph.coords.prev.y = c.y;
    reset = 1;
    graph.coords.x += 35;
  
    if (graph.state.lapNum == 1) {
      graph.msc.fastestLap = c.y;
    } else {
      if (c.y > graph.msc.fastestLap) {
        graph.msc.fastestLap = c.y;
      } else if (c.y < graph.msc.slowestLap) {
        graph.msc.slowestLap = c.y;
      }
    }
  
    graph.state.lapNum++;
  
    return {
      x: c.x,
      y: c.y,
      lap_number: graph.state.lapNum - 1
    };
  };
  
  graph.resetGraph = function (ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lap_numbers.innerHTML = "";
    avg_time.innerHTML = "";
    graph.state.inUse = false;
    //graph.state.pause = false;
    graph.state.lapNum = 1;
    graph.coords.x = 5;
    graph.coords.y = 50;
    graph.coords.prev.x = 0;
    graph.coords.prev.y = 50;
    graph.msc.fastestLap = 0;
    graph.msc.slowestLap = 99999999;
    graph.msc.startTime = 0;
    graph.state.lapNum = 1;
    reset = 1;
    laps = [];
    breakLoop = 1;
  };
  
  // Initiate
  clock();
  var iWatch = new iWatch();

  //Launcher Javascript

  
