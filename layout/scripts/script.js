//saznaj vise
let dugme = document.getElementById("more_dugme");
let dodatniText = document.getElementById("text_vise");
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
let padajuci = document.getElementById("padajuca_lista");

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
let padajucaLista = document.getElementById("padajuca_lista");
padajucaLista.appendChild(lista);
//provera forme
function Provera() {
  var ime, email, vreme, telefon, usluga;
  var brojGresaka = 0;
  ime = document.querySelector("#name");
  email = document.querySelector("#email");
  telefon = document.querySelector("#tel");
  usluga = document.getElementsByName("opcija");
  vreme = document.querySelector("termin");
  const regexIme=/^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,15}$/;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  var regexTel=/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
  if (ime.lenght < 4) {
    ime.nextElementSibling.classList.add("prikaz");
    brojGresaka++;
  } else ime.nextElementSibling.classList.remove("prikaz");
  if (email.value.lenght < 4||email!==regexEmail) {
    email.nextElementSibling.classList.add("prikaz");
    brojGresaka++;
  } else email.nextElementSibling.classList.remove("prikaz");
  if (telefon.value.lenght < 10||telefon!==regexTel) {
    telefon.nextElementSibling.classList.add("prikaz");
    brojGresaka++;
  } else telefon.nextElementSibling.classList.remove("prikaz");
  if(brojGresaka==0) alert("Uspešno ste zakazali termin. Očekujemo vas!")
}
var zakazi=document.getElementById("zakazi");
zakazi.addEventListener("click",Provera);
//menjanje texta
var recenica = document.getElementById("recenica");
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
