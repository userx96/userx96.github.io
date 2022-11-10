$(document).ready(() => {
  window.onload = function () {
    var setting_pp = localStorage.getItem("setting_pp");
    var setting_name = localStorage.getItem("setting_name");
    var wallpaper = localStorage.getItem("wallpaper");

    if (setting_name == undefined) {
      $("#settings-profile-edit-name").text("Belirlenmedi");
      $("#settings-profile-name").text("Belirlenmedi");
    } else {
      $("#settings-profile-edit-name").text(setting_name);
      $("#settings-profile-name").text(setting_name);
    }
    if (setting_pp == undefined) {
      $("#settings-profile-edit-pp").css({
        "background-image": "url('assets/img/defaultpp.png')",
      });
      $("#settings-profile-pp").css({
        "background-image": "url('assets/img/defaultpp.png')",
      });
    } else {
      $("#settings-profile-edit-pp").css({
        "background-image": "url(" + setting_pp + ")",
      });
      $("#settings-profile-pp").css({
        "background-image": "url(" + setting_pp + ")",
      });
    }
    if (wallpaper == undefined) {
      $("#menu-screen").css({
        "background-image":
          "url('assets/img/iPhone-X-Wallpaper-01-1242-x-2208-768x1365-4105387446.png')",
      });
    } else {
      $("#menu-screen").css({
        "background-image": "url(" + wallpaper + ")",
      });
    }
  };
  $("#off-btn").click(() => {
    $("#off-screen").fadeIn(200);
    $("#on-screens").fadeOut(200);
    $("#off-btn").hide();
    $("#on-btn").show();
    $(".ekran").fadeOut(200);
  });
  $("#on-btn").click(() => {
    $("#on-btn").hide();
    $("#off-btn").show();
    $("#off-screen").fadeOut(200);
    $("#on-screens").fadeIn(200);
    $("#unlock-btn").show();
    $("#navbar-clock").css({ color: "white" });
    $("#right-navbar").css({ filter: "invert(0)" });
  });
  $("#unlock-btn").click(() => {
    $("#blur-effect").fadeIn(200).delay(100).fadeOut(200);
    $("#unlock-btn").hide();
    $("#navbar-clock").show(200);
    $("#menu-screen").css({ display: "flex" });
  });
  $("#left-navbar, #right-navbar").click(() => {
    $("#notification-container").slideToggle().css({ display: "flex" });
  });
  $("#calculator-icon").click(() => {
    $("#calculator-container").fadeIn(200).css({ display: "flex" });
  });
  $("#calculator-exit-btn").click(() => {
    $("#calculator-container").fadeOut(200);
  });
  $("#settings-icon").click(() => {
    $("#settings-container").fadeIn(200).css({ display: "flex" });
    $("#navbar-clock").css({ color: "black" });
    $("#right-navbar").css({ filter: "invert(1)" });
  });
  $("#settings-exit-btn").click(() => {
    $("#settings-container").fadeOut(200);
    $("#navbar-clock").css({ color: "white" });
    $("#right-navbar").css({ filter: "invert(0)" });
  });
  $("#settings-profile-go").click(() => {
    $("#settings-profile-edit-container").animate({
      right: "0px",
    });
  });
  $("#settings-profile-edit-exit").click(() => {
    $("#settings-profile-edit-container").animate({
      right: "-245px",
    });
  });
  $("#settings-wallpaper-go").click(() => {
    $("#settings-wallpaper-edit-container").animate({
      right: "0px",
    });
  });
  $("#settings-wallpaper-edit-exit").click(() => {
    $("#settings-wallpaper-edit-container").animate({
      right: "-245px",
    });
  });
  $("#wallpaper-1").click(() => {
    $("#menu-screen").css({
      "background-image": 'url("assets/img/wallpaper-1.jpg")',
    });
    $("#settings-container").fadeOut(200);
    $("#navbar-clock").css({ color: "white" });
    $("#right-navbar").css({ filter: "invert(0)" });
    localStorage.setItem(
      "wallpaper",
      "https://wallpapercave.com/wp/wp5104017.jpg"
    );
  });
  $("#wallpaper-2").click(() => {
    $("#menu-screen").css({
      "background-image": 'url("assets/img/wallpaper-2.jpg")',
    });
    $("#settings-container").fadeOut(200);
    $("#navbar-clock").css({ color: "white" });
    $("#right-navbar").css({ filter: "invert(0)" });
    localStorage.setItem(
      "wallpaper",
      "https://wallpapercave.com/wp/wp5072397.jpg"
    );
  });
  $("#wallpaper-3").click(() => {
    $("#menu-screen").css({
      "background-image": 'url("assets/img/wallpaper-3.jpg")',
    });
    $("#settings-container").fadeOut(200);
    $("#navbar-clock").css({ color: "white" });
    $("#right-navbar").css({ filter: "invert(0)" });
    localStorage.setItem(
      "wallpaper",
      "https://www.designbolts.com/wp-content/uploads/2018/05/Vector-Apple-iPhone-X-Wallpaper-1.jpg"
    );
  });
  $("#wallpaper-4").click(() => {
    $("#menu-screen").css({
      "background-image": 'url("assets/img/wallpaper-4.jpg")',
    });
    $("#settings-container").fadeOut(200);
    $("#navbar-clock").css({ color: "white" });
    $("#right-navbar").css({ filter: "invert(0)" });
    localStorage.setItem(
      "wallpaper",
      "https://www.droidviews.com/wp-content/uploads/2017/09/iphone_x_wall_droidviews_18.jpg"
    );
  });
  $("#wallpaper-5").click(() => {
    $("#menu-screen").css({
      "background-image": 'url("assets/img/wallpaper-5.jpg")',
    });
    $("#settings-container").fadeOut(200);
    $("#navbar-clock").css({ color: "white" });
    $("#right-navbar").css({ filter: "invert(0)" });
    localStorage.setItem(
      "wallpaper",
      "https://www.designbolts.com/wp-content/uploads/2018/05/Bridge-Apple-iPhone-X-Wallpaper-1.jpg"
    );
  });
  $("#wallpaper-6").click(() => {
    $("#menu-screen").css({
      "background-image": 'url("assets/img/wallpaper-6.jpg")',
    });
    $("#settings-container").fadeOut(200);
    $("#navbar-clock").css({ color: "white" });
    $("#right-navbar").css({ filter: "invert(0)" });
    localStorage.setItem(
      "wallpaper",
      "https://wallpaper.dog/large/11780505.jpg"
    );
  });
  $("#notes-icon").click(() => {
    $("#notes-container").fadeIn(200).css({ display: "flex" });
    $("#navbar-clock").css({ color: "black" });
    $("#right-navbar").css({ filter: "invert(1)" });
  });
  $("#notes-exit-btn").click(() => {
    $("#notes-container").fadeOut(200);
    $("#navbar-clock").css({ color: "white" });
    $("#right-navbar").css({ filter: "invert(0)" });
  });
  $("#notes-add-btn").click(() => {
    $("#notes-edit-container")
      .animate({
        right: "0px",
      })
      .removeClass("right");
  });
  $("#notes-edit-back-btn").click(() => {
    $("#notes-edit-container").animate({
      right: "-245px",
    });
  });
  $("#note-element-back-btn").click(() => {
    $("#note-element-container").removeClass("right-fix").addClass("right");
  });
  $("#weather-app-icon").click(() => {
    $("#weather-container").fadeIn(200).css({ display: "flex" });
    $("#navbar-clock").css({ color: "black" });
    $("#right-navbar").css({ filter: "invert(1)" });
    $("#weather-exit-btn").show();
  });
  $("#weather-exit-btn").click(() => {
    $("#weather-container").fadeOut(200);
    $("#navbar-clock").css({ color: "white" });
    $("#right-navbar").css({ filter: "invert(0)" });
    $("#weather-exit-btn").hide();
  });
  $("#insta-icon").click(() => {
    $("#instagram-container").fadeIn(200).css({ display: "flex" });
    $("#instagram-exit-btn").show();
  });
  $("#instagram-exit-btn").click(() => {
    $("#instagram-container").fadeOut(200);
    $("#instagram-exit-btn").hide();
  });
  $("#wp-icon").click(() => {
    $("#whatsapp-container").fadeIn(200).css({ display: "flex" });
    $("#whatsapp-exit-btn").show();
  });
  $("#whatsapp-exit-btn").click(() => {
    $("#whatsapp-container").fadeOut(200);
    $("#whatsapp-exit-btn").hide();
  });
  $("#music-icon").click(() => {
    beklebeni.play();
  });
  $("#settings-password-go").click(() => {
    $("#settings-password-edit-container").animate({
      right: "0px",
    });
  });
  $("#settings-password-edit-exit").click(() => {
    $("#settings-password-edit-container").animate({
      right: "-245px",
    });
  });
  $("#password-create-go").click(() => {
    $("#settings-password-create-container").animate({
      right: "0px",
    });
    $("#password-container").css({
      "z-index": "0",
    });
  });
  $("#settings-password-create-exit").click(() => {
    $("#settings-password-create-container").animate({
      right: "-245px",
    });
    $("#password-container").css({
      "z-index": "1",
    });
  });

  // NOT EKLEME FONKSİYONU
  const note_baslik = document.getElementById("notes-title-edit-input");
  const note_content = document.getElementById("notes-content-edit-input");
  const note_add = document.getElementById("notes-edit-add-btn");
  const note_ul = document.getElementById("notes-content-ul");
  const note_container = document.getElementById("notes-edit-container");

  const noteStart = () => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes == undefined) {
      localStorage.setItem("notes", JSON.stringify([]));
    } else {
      notes.forEach((note) => {
        addHTML(note);
      });
    }
  };

  const goNote = (e) => {
    const note = e.target.parentElement;
    const not_title = note.firstChild.textContent;
    const not_content = note.children[4].textContent;

    const note_element_container = document.getElementById(
      "note-element-container"
    );
    note_element_container.classList.add("right-fix");
    const note_element_title = document.getElementById("note-element-title");
    const note_element_content = document.getElementById(
      "note-element-content"
    );

    note_element_content.innerText = not_content;
    note_element_title.innerText = not_title;
  };

  const noteDelete = (e) => {
    const note = e.target.parentElement;
    const text = note.children[0].textContent;
    console.log(text);

    let notes = JSON.parse(localStorage.getItem("notes"));
    notes = notes.filter((td) => td.title != text);
    localStorage.setItem("notes", JSON.stringify(notes));

    note.remove();
  };

  const addHTML = (note) => {
    const note_class = document.createElement("li");
    note_class.classList.add("note-class");

    const note_title = document.createElement("div");
    note_title.classList.add("note-title");
    note_title.textContent = note.title;

    const note_date = document.createElement("div");
    note_date.classList.add("note-date");
    note_date.textContent = note.date;

    const note_contents = document.createElement("div");
    note_contents.classList.add("note-content");
    note_contents.textContent = note.content;
    note_contents.style.display = "none";

    const note_deleter = document.createElement("span");
    note_deleter.classList.add("note-element-delete-btn");
    note_deleter.innerText = "Sil";
    note_deleter.addEventListener("click", noteDelete);

    const note_go = document.createElement("div");
    note_go.classList.add("note-go");
    note_go.addEventListener("click", goNote);

    note_class.appendChild(note_title);
    note_class.appendChild(note_date);
    note_class.appendChild(note_deleter);
    note_class.appendChild(note_go);
    note_class.appendChild(note_contents);

    note_ul.appendChild(note_class);
  };

  noteStart();
  note_add.addEventListener("click", () => {
    if (note_baslik.value == "" || note_content.value == "") {
      alert("boş bırakma");
      return false;
    }

    const noteDate = new Date();
    const noteDay = noteDate.getDate();
    const noteMonth = noteDate.getMonth();
    const noteYear = noteDate.getFullYear();

    const note = {
      title: note_baslik.value,
      content: note_content.value,
      date: noteDay + "." + noteMonth + "." + noteYear,
    };

    const notes = JSON.parse(localStorage.getItem("notes"));
    notes.push(note);
    note_container.classList.add("right");
    localStorage.setItem("notes", JSON.stringify(notes));
    note_baslik.value = "";
    note_content.value = "";
    addHTML(note);
  });

  // AYARLAR PROFİL FONKSİYONU
  $("#settings-profile-edit-pp-change-done").click(() => {
    var pp_input = $("#settings-profile-edit-pp-change-input").val();
    if (pp_input == "") {
      $("#settings-profile-edit-pp-change").css({ border: "1px solid red" });
    } else {
      localStorage.setItem("setting_pp", pp_input);
      var setting_pp = localStorage.getItem("setting_pp");
      $("#settings-profile-edit-pp-change").css({ border: "none" });
      $("#settings-profile-edit-pp").css({
        "background-image": "url(" + setting_pp + ")",
      });
      $("#settings-profile-pp").css({
        "background-image": "url(" + setting_pp + ")",
      });
    }
  });
  $("#settings-profile-edit-name-change-done").click(() => {
    var name_input = $("#settings-profile-edit-name-change-input").val();
    if (name_input == "") {
      $("#settings-profile-edit-name-change").css({ border: "1px solid red" });
    } else {
      localStorage.setItem("setting_name", name_input);
      var setting_name = localStorage.getItem("setting_name");
      $("#settings-profile-edit-name-change").css({ border: "none" });
      $("#settings-profile-edit-name").text(setting_name);
      $("#settings-profile-name").text(setting_name);
    }
  });
}); // Jquery

let pass_check = document.getElementById("password-checkbox");
pass_check.onchange = () => {
  if (pass_check.checked) {
    $("#password-container").css({
      "z-index": "1",
    });
    $("#password-create-container")
      .css({ display: "flex" })
      .animate({ top: "155px" });
  } else {
    $("#password-create-container").animate({ top: "100px" }).css({
      "z-index": "0",
    });
  }
};

// SAAT FONK
function lock_clock() {
  const tarih = new Date();
  const saat = tarih.getHours();
  const dakika = tarih.getMinutes();
  const addZero = (num) => {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  };
  const gun = tarih.getDate();
  const ay = tarih.getMonth();
  const yil = tarih.getFullYear();
  const day = tarih.getDay();
  const aylar = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const gunler = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  $("#lock-date").html(gun + " " + aylar[ay] + " " + yil);
  $("#lock-day").html(gunler[day]);
  $("#lock-clock").html(addZero(saat) + ":" + addZero(dakika));
  $("#navbar-clock").html(addZero(saat) + ":" + addZero(dakika));
}
setInterval(lock_clock, 1000);

// HESAP MAKİNESİ FONKSİYONU
const valueEl = document.querySelector(".value");
const acEl = document.querySelector(".ac");
const pmEl = document.querySelector(".pm");
const percentEl = document.querySelector(".percent");

const additionEl = document.querySelector(".addition");
const subtractionEl = document.querySelector(".substraction");
const multiplicationEl = document.querySelector(".multiplication");
const divisionEl = document.querySelector(".division");
const equalEl = document.querySelector(".equal");

const decimalEl = document.querySelector(".decimal");
const number0El = document.querySelector(".number-0");
const number1El = document.querySelector(".number-1");
const number2El = document.querySelector(".number-2");
const number3El = document.querySelector(".number-3");
const number4El = document.querySelector(".number-4");
const number5El = document.querySelector(".number-5");
const number6El = document.querySelector(".number-6");
const number7El = document.querySelector(".number-7");
const number8El = document.querySelector(".number-8");
const number9El = document.querySelector(".number-9");
const numberElArray = [
  number0El,
  number1El,
  number2El,
  number3El,
  number4El,
  number5El,
  number6El,
  number7El,
  number8El,
  number9El,
];

let valueStrInMemory = null;
let operatorInMemory = null;

const getValueAsStr = () => valueEl.textContent.split(",").join("");
const getValueAsNum = () => {
  return parseFloat(getValueAsStr());
};
const setStrAsValue = (valueStr) => {
  if (valueStr[valueStr.length - 1] === ".") {
    valueEl.textContent += ".";
    return;
  }
  const [wholeNumStr, decimalStr] = valueStr.split(".");
  if (decimalStr) {
    valueEl.textContent =
      parseFloat(wholeNumStr).toLocaleString() + "." + decimalStr;
  } else {
    valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
  }
};
const handleNumberClick = (numStr) => {
  const currentValueStr = getValueAsStr();
  if (currentValueStr === "0") {
    setStrAsValue(numStr);
  } else {
    setStrAsValue(currentValueStr + numStr);
  }
};
const getResultOfOperationAsStr = () => {
  const currentValueNum = getValueAsNum();
  const valueNumInMemory = parseFloat(valueStrInMemory);
  let newValueNum;
  if (operatorInMemory === "addition") {
    newValueNum = valueNumInMemory + currentValueNum;
  } else if (operatorInMemory === "subtraction") {
    newValueNum = valueNumInMemory - currentValueNum;
  } else if (operatorInMemory === "multiplication") {
    newValueNum = valueNumInMemory * currentValueNum;
  } else if (operatorInMemory === "division") {
    newValueNum = valueNumInMemory / currentValueNum;
  }
  return newValueNum.toString();
};
const handleOperatorClick = (operation) => {
  const currentValueStr = getValueAsStr();

  if (!valueStrInMemory) {
    valueStrInMemory = currentValueStr;
    operatorInMemory = operation;
    setStrAsValue("0");
    return;
  }
  valueStrInMemory = getResultOfOperationAsStr();
  operatorInMemory = operation;
  setStrAsValue("0");
};
acEl.addEventListener("click", () => {
  setStrAsValue("0");
  valueStrInMemory = null;
  operatorInMemory = null;
});
pmEl.addEventListener("click", () => {
  const currentValueNum = getValueAsNum();
  const currentValueStr = getValueAsStr();

  if (currentValueStr === "-0") {
    setStrAsValue("0");
    return;
  }
  if (currentValueNum >= 0) {
    setStrAsValue("-" + currentValueStr);
  } else {
    setStrAsValue(currentValueStr.substring(1));
  }
});
percentEl.addEventListener("click", () => {
  const currentValueNum = getValueAsNum();
  const newValueNum = currentValueNum / 100;
  setStrAsValue(newValueNum.toString());
  valueStrInMemory = null;
  operatorInMemory = null;
});
additionEl.addEventListener("click", () => {
  handleOperatorClick("addition");
});
subtractionEl.addEventListener("click", () => {
  handleOperatorClick("subtraction");
});
multiplicationEl.addEventListener("click", () => {
  handleOperatorClick("multiplication");
});
divisionEl.addEventListener("click", () => {
  handleOperatorClick("division");
});
equalEl.addEventListener("click", () => {
  if (valueStrInMemory) {
    setStrAsValue(getResultOfOperationAsStr());
    valueStrInMemory = null;
    operatorInMemory = null;
  }
});
for (let i = 0; i < numberElArray.length; i++) {
  const numberEl = numberElArray[i];
  numberEl.addEventListener("click", () => {
    handleNumberClick(i.toString());
  });
}
decimalEl.addEventListener("click", () => {
  const currentValueStr = getValueAsStr();
  if (!currentValueStr.includes(".")) {
    setStrAsValue(currentValueStr + ".");
  }
});

// HAVA DURUMU FONKSİYONU

const weather_url = "https://api.openweathermap.org/data/2.5/";
const weather_key = "3bee6d255302f5e7686fd0229333e471";

const CityQuery = (e) => {
  if (e.keyCode == "13") {
    CityResult(weather_input.value);
  }
};

const CityResult = (cityName) => {
  let query = `${weather_url}weather?q=${cityName}&appid=${weather_key}&units=metric&lang=tr`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  let city = document.getElementById("weather-city");
  city.innerText = `${result.name}, ${result.sys.country}`;

  let icon = document.getElementById("weather-icon");

  let temp = document.getElementById("weather-celcius");
  temp.innerText = `${Math.round(result.main.temp)}°C`;

  let info = document.getElementById("weather-info");
  info.innerText = result.weather[0].description;

  if (result.weather[0].description === "parçalı bulutlu") {
    $("#weather-icon").css({
      "background-image": "url(http://openweathermap.org/img/wn/02d@2x.png)",
    });
  } else if (result.weather[0].description === "az bulutlu") {
    $("#weather-icon").css({
      "background-image": "url(http://openweathermap.org/img/wn/02d@2x.png)",
    });
  } else if (result.weather[0].description === "hafif yağmur") {
    $("#weather-icon").css({
      "background-image": "url(http://openweathermap.org/img/wn/10d@2x.png)",
    });
  } else if (result.weather[0].description === "orta şiddetli yağmur") {
    $("#weather-icon").css({
      "background-image": "url(http://openweathermap.org/img/wn/09d@2x.png)",
    });
  } else if (result.weather[0].description === "parçalı az bulutlu") {
    $("#weather-icon").css({
      "background-image": "url(http://openweathermap.org/img/wn/02d@2x.png)",
    });
  } else if (result.weather[0].description === "kar yağışlı") {
    $("#weather-icon").css({
      "background-image": "url(http://openweathermap.org/img/wn/13d@2x.png)",
    });
  } else if (result.weather[0].description === "açık") {
    $("#weather-icon").css({
      "background-image": "url(http://openweathermap.org/img/wn/01d@2x.png)",
    });
  } else if (result.weather[0].description === "kapalı") {
    $("#weather-icon").css({
      "background-image": "url(http://openweathermap.org/img/wn/04n@2x.png)",
    });
  }
};

const weather_input = document.getElementById("weather-input");
weather_input.addEventListener("keypress", CityQuery);

// PARLAKLIK FONKSİYONU
const rangeInput = document.getElementById("brightness-range");
const center = document.getElementById("on-screens");
const brightness_icon = document.getElementById("brightness-icon");
brightnessChanger = () => {
  center.style.filter = "brightness(" + rangeInput.value + "%)";
  if (rangeInput.value <= 26) {
    brightness_icon.style.filter = "invert(0)";
  } else {
    brightness_icon.style.filter = "invert(1)";
  }
};
rangeInput.addEventListener("mousedown", () => {
  const brightness_interval = setInterval(brightnessChanger, 100);
  rangeInput.addEventListener("mouseup", () => {
    clearInterval(brightness_interval);
  });
});
rangeInput.addEventListener("click", brightnessChanger)

// SES FONKSİYONU
let volume_range = document.getElementById("volume-range");
let volume_icon = document.getElementById("volume-icon");
let beklebeni = document.getElementById("beklebeni");

const volumeChanger = () => {
  beklebeni.volume = volume_range.value / 100;
  if (volume_range.value <= 14) {
    volume_icon.style.filter = "invert(1)";
  } else {
    volume_icon.style.filter = "invert(0)";
  }
};
volume_range.addEventListener("mousedown", () => {
  const volume_interval = setInterval(volumeChanger, 100);
  volume_range.addEventListener("mouseup", () => {
    clearInterval(volume_interval);
  });
});

volume_range.addEventListener("click", volumeChanger)
