//skracivanje koda
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

//saznaj vise
let dugme = id("more_dugme");
let dodatniText = id("text_vise");
dodatniText.style.display = "none";
dugme.addEventListener("click", function () {
  if (dodatniText.style.display === "none") {
    dodatniText.style.display = "block";
    dugme.innerHTML = " [Smanji]";
  } else {
    dodatniText.style.display = "none";
    dugme.innerHTML = " [Saznaj vise]";
  }
});

//forma
let padajuci = id("padajuca_lista");

var opcije = [
  "Izaberite",
  "Redovan Servis",
  "Programiranje Biosa",
  "Servis Matičnih Ploča",
  "Spašavanje Podataka",
  "Instalacija OS",
  "Popravka uređaja",
];

let lista = document.createElement("select");
lista.setAttribute("name", "problem");
lista.setAttribute("id", "problem");

for (let i = 0; i < opcije.length; i++) {
  var novaOpcija = document.createElement("option");
  novaOpcija.setAttribute("value", `${i}`);
  novaOpcija.setAttribute("name", "opcija");
  novaOpcija.innerHTML = opcije[i];
  lista.appendChild(novaOpcija);
}
let padajucaLista = id("padajuca_lista");
padajucaLista.appendChild(lista);

//provera forme
let form = id("form"),
  ime = id("name"),
  email = id("email"),
  telefon = id("tel"),
  termin = id("termin"),
  vreme = id("time"),
  opcija = id("problem"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon"),
  greska = classes("greska");
var brojGresaka;

const regIme = /^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/,
  regEmail = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
  regTermin =
    /^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$/,
  regTel = /^06[0-689]\s[\d]{2}\s[\d]{2}\s[\d]{2,3}$/;

form.addEventListener("submit", (e) => {
  brojGresaka = 0;
  e.preventDefault();
  if (regIme.test(ime.value)) {
    greska[0].innerHTML = "";
    failureIcon[0].classList.add("prazno");
    successIcon[0].classList.remove("prazno");
  } else {
    greska[0].innerHTML = "Ime i Prezime pogrešno uneti";
    failureIcon[0].classList.remove("prazno");
    successIcon[0].classList.add("prazno");
    brojGresaka++;
  }
  if (regEmail.test(email.value)) {
    greska[1].innerHTML = "";
    failureIcon[1].classList.add("prazno");
    successIcon[1].classList.remove("prazno");
  } else {
    greska[1].innerHTML = "Email pogresno unet";
    failureIcon[1].classList.remove("prazno");
    successIcon[1].classList.add("prazno");
    brojGresaka++;
  }
  if (regTel.test(telefon.value)) {
    greska[2].innerHTML = "";
    failureIcon[2].classList.add("prazno");
    successIcon[2].classList.remove("prazno");
  } else {
    greska[2].innerHTML = "Broj telefona pogrešno unet";
    failureIcon[2].classList.remove("prazno");
    successIcon[2].classList.add("prazno");
    brojGresaka++;
  }
  if (parseInt(opcija.value) == 0) {
    greska[5].innerHTML = "Niste izabrali uslugu";
    failureIcon[5].classList.remove("prazno");
    successIcon[5].classList.add("prazno");
    brojGresaka++;
  } else {
    greska[5].innerHTML = "";
    failureIcon[5].classList.add("prazno");
    successIcon[5].classList.remove("prazno");
  }

  if (brojGresaka == 0) {
    alert("Forma uspešno odrađena");
  }
});
form.addEventListener("reset", (e) => {
  e.preventDefault();
  for (let i = 0; i < 6; i++) {
    reset(i);
  }
});
let reset = (serial) => {
  failureIcon[serial].classList.add("prazno");
  successIcon[serial].classList.add("prazno");
  greska[serial].innerHTML = "";

};

//menjanje texta
var recenica = id("recenica");
var text = [
  "&ldquo;Pouzdani&bdquo;",
  "&ldquo;Pristupačni&bdquo;",
  "&ldquo;Uvek spremni za saradnju&bdquo;",
  "&ldquo;Iskusni&bdquo;",
  "&ldquo;Profesionalni&bdquo;",
];
var brojac = 0;
function Smenjivanje() {
  recenica.innerHTML = text[brojac];
  brojac++;
  if (brojac > 4) brojac = 0;
}
setInterval(Smenjivanje, 2000);

//jqveri modal
$(function () {
  var appendthis = "<div class='modal-overlay js-modal-close'></div>";

  $("a[data-modal-id]").click(function (e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr("data-modal-id");
    $("#" + modalBox).fadeIn($(this).data());
  });

  $(".js-modal-close, .modal-overlay").click(function () {
    $(".modal-box, .modal-overlay").fadeOut(500, function () {
      $(".modal-overlay").remove();
    });
  });

  $(window).resize(function () {
    $(".modal-box").css({
      top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
      left: ($(window).width() - $(".modal-box").outerWidth()) / 2,
    });
  });

  $(window).resize();
});

//jqvery back to top
$(document).ready(function () {
  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
      jQuery("#backtotop").addClass("visible");
    } else {
      jQuery("#backtotop").removeClass("visible");
    }
  });
});

// burger menu
var burgerMenu = id("burger-menu");
var overlay = id("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
var nav = classes("nav_item");

for (let i = 0; i < 3; i++) {
  nav[i].addEventListener("click", () => {
    overlay.classList.toggle("overlay");
    burgerMenu.classList.toggle("close");
  });
}

//usluge generation
let iNiz = [
  "fas fa-clock",
  "fas fa-hand-holding-usd",
  "fas fa-edit",
  "fas fa-file-alt",
  "fas fa-tachometer-alt",
  "fas fa-shipping-fast",
];
let h6Niz = [
  "Radno vreme",
  "Odkup i Prodaja",
  "Dijagnostika",
  "Garancija",
  "Brzina",
  "Popravka na terenu",
];
let pNiz = [
  "Ponedeljak - petak 9h-18h \nSubota i Nedelja neradni dani",
  "Odkup i prodaja novih i polovnihi delova za laptop i desktop računare",
  "Besplatna dijagnostika kvarova za računare koje servisiramo.",
  "Garancija: 1-6 meseci na ugrađene komponente.",
  "Zadržavanje računara u servisu zavisi od težine problema. Manji problemi rešavaju se obično istog ili sledećeg dana, a razne popravke za 1-3 dana. ",
  "Ukoliko ste na teritoriji Beograda, dovoljno je da nas pozovete i mi dolazimo kod vas kako bi servisirali računare.",
];

let sectionAppend = id("introblocks");

let newUl = document.createElement("ul");

newUl.setAttribute("class", "nonspace");
newUl.classList.add("group");
newUl.classList.add("elements");
newUl.classList.add("elements-three");

for (var i = 0; i < 6; i++) {
  let newLi = document.createElement("li");
  newLi.setAttribute("class", "one_third");

  let newArticle = document.createElement("article");
  let newFooter = document.createElement("footer");
  let aFooter = document.createElement("a");
  let iFooter = document.createElement("i");

  iFooter.setAttribute("class", `${iNiz[i]}`);

  let articleHeader = document.createElement("h6");
  articleHeader.setAttribute("class", "heading");
  articleHeader.innerHTML = h6Niz[i];

  let articleP = document.createElement("p");
  articleP.innerHTML = pNiz[i];

  aFooter.setAttribute("href", "#usluge");

  aFooter.appendChild(iFooter);

  newFooter.appendChild(aFooter);
  newArticle.appendChild(newFooter);
  newArticle.appendChild(articleHeader);
  newArticle.appendChild(articleP);

  newLi.appendChild(newArticle);

  newUl.appendChild(newLi);
}

sectionAppend.appendChild(newUl);

//progres bar
$(window).scroll(function () {
  var scroll = $(window).scrollTop(),
    dh = $(document).height(),
    wh = $(window).height(),
    scrollPercent = (scroll / (dh - wh)) * 100;
  $(progressbar).css("height", scrollPercent + "%");
});
