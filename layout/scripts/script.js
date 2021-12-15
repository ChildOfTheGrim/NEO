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
  regTel = /^06[0-689][\d]{2}[\d]{2}[\d]{2,3}$/;

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

//jqveri modal plugin
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

//jqvery back to top plugin
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

for (let i = 0; i < 4; i++) {
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

//generisanje cena

let ikonice = [
  "fas fa-bug",
  "fas fa-microchip",
  "fas fa-hdd",
  "fas fa-code",
  "fas fa-laptop",
  "fas fa-keyboard",
];
let naslovi = [
  "Programiranje biosa",
  "Servis matičnih ploča",
  "Spašavanje podataka",
  "Instalacija OS",
  "Redovan servis",
  "Kompjuterska oprema",
];
let opis = [
  "Usluga podrazumeva programiranje BIOS čipa i kao i optimizaciju BIOS opcija.",
  "Zamena Čipseta, Severnog i Južnog mosta, Grafičkog čipa, kao i svih ostalih vrsta BGA kola.",
  "Odmah saznajte vrstu kvara. Besplatna dijagnoza i procena uspešnosti spašavanja podataka.",
  "Instalacija sistema po izboru na laptopu ili desktop računaru.",
  "Servis, održavanje i čišćenje sistema, računara i mreža.",
  "UOprema za održavanje i delovi za sve deskop, apple i ostale brend računare.",
];

let cene = [
  "800 rsd",
  "od 1.900 rsd",
  "od 1.900 rsd",
  "1.600 rsd",
  "1.300 rsd",
  "Cena može varirati",
];

let ulListaCene = document.getElementById("listaCene");

for (let i = 0; i < ikonice.length; i++) {
  let newLi = document.createElement("li");
  newLi.setAttribute("class", "one_third");

  let articleLi = document.createElement("article");
  let divArticle = document.createElement("div");
  let footerDiv = document.createElement("footer");

  let h6Div = document.createElement("h6");
  h6Div.setAttribute("class", "heading");
  h6Div.innerHTML = naslovi[i];

  let aFooter = document.createElement("a");
  aFooter.setAttribute("href", "#kontakt");
  let aI = document.createElement("i");
  aI.setAttribute("class", `${ikonice[i]}`);

  aFooter.appendChild(aI);
  footerDiv.appendChild(aFooter);
  divArticle.appendChild(footerDiv);
  divArticle.appendChild(h6Div);
  articleLi.appendChild(divArticle);

  let pLi = document.createElement("p");
  pLi.innerHTML = opis[i];

  let p2Li = document.createElement("p");
  let aP2Li = document.createElement("a");
  aP2Li.setAttribute("href", "#cene");
  aP2Li.innerHTML = cene[i];
  p2Li.appendChild(aP2Li);

  articleLi.appendChild(pLi);
  articleLi.appendChild(p2Li);

  newLi.appendChild(articleLi);

  ulListaCene.appendChild(newLi);
}
