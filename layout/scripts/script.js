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
  "...",
  "Redovan Servis",
  "Programiranje Biosa",
  "Servis Matičnih Ploča",
  "Spašavanje Podataka",
  "Instalacija OS",
  "Popravka uređaja",
];
var vrednosti = [
  "0",
  "servis",
  "bios",
  "maticna",
  "podaci",
  "instalacija",
  "popravka",
];

let lista = document.createElement("select");
lista.setAttribute("name", "problem");
lista.setAttribute("id", "problem");
lista.setAttribute("required", "required");

for (let i = 0; i < opcije.length; i++) {
  var novaOpcija = document.createElement("option");
  novaOpcija.setAttribute("value", vrednosti[i]);
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
  usluga = document.getElementsByName("opcija"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");
greska = classes("greska");
var brojGresaka;
const regIme = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,15}$/,
  regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
form.addEventListener("submit", (e) => {
  brojGresaka = 0;
  e.preventDefault();
  engine(ime, 0, "Ime i Prezime ne mogu biti prazni!");
  engine(email, 1, "Email ne može biti prazan!");
  engine(telefon, 2, "Telefon ne može biti prazan!");
  engine(termin, 3, "Termin ne može biti prazan!");
  if (brojGresaka == 0) {
    alert("Forma uspešno odrađena");
  }
});
form.addEventListener("reset", (e) => {
  e.preventDefault();

  for (let i = 0; i < 4; i++) {
    reset(i);
  }
});
let reset = (serial) => {
  failureIcon[serial].classList.add("prazno");
  successIcon[serial].classList.add("prazno");
  greska[serial].innerHTML = "";
};
let engine = (id, serial, poruka) => {
  if (id.value.trim() == "") {
    greska[serial].innerHTML = poruka;
    failureIcon[serial].classList.remove("prazno");
    successIcon[serial].classList.add("prazno");
    brojGresaka++;
  } else {
    greska[serial].innerHTML = "";
    failureIcon[serial].classList.add("prazno");
    successIcon[serial].classList.remove("prazno");
  }
};

//menjanje texta
var recenica = id("recenica");
var text = [
  "&ldquo;Pouzdani&bdquo;",
  "&ldquo;Pristupačni&bdquo;",
  "&ldquo;Uvek spremni za sradanju&bdquo;",
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
var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

//usluge generation

let iNiz = [
  "fas fa-balance-scale",
  "fas fa-microchip",
  "fas fa-hdd",
  "fas fa-code",
  "fas fa-laptop",
  "fas fa-keyboard",
];
let h6Niz = [
  "Programiranje biosa",
  "Servis matičnih ploča",
  "Spašavanje podataka",
  "Instalacija OS",
  "Redovan servis",
  "Kompjuterska opreme",
];
let pNiz = [
  "Usluga podrazumeva programiranje BIOS čipa i kao ioptimizaciju BIOS opcija.",
  "Zamena Čipseta, Severnog i Južnog mosta, Grafičkog čipa, kao i svih ostalih vrsta BGA kola.",
  "Odmah saznajte vrstu kvara. Besplatna dijagnoza i procena uspešnosti spašavanja podataka.",
  "Instalacija sistema po izboru na laptopu ili desktop računaru.e",
  "Servis, održavanje i čiščenje sistema, računara i mreža.",
  "Oprema za održavanje i delovi za sve deskop, apple i ostalebrend računare.",
];

let sectionAppend = document.getElementById("introblocks");

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

  aFooter.setAttribute("href", "#cenovnik");

  aFooter.appendChild(iFooter);

  newFooter.appendChild(aFooter);
  newArticle.appendChild(newFooter);
  newArticle.appendChild(articleHeader);
  newArticle.appendChild(articleP);

  newLi.appendChild(newArticle);

  newUl.appendChild(newLi);
}

sectionAppend.appendChild(newUl);
