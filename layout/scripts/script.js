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
    "Popravka uređaja"];
  var vrednosti = [
    "prazno",
    "servis",
    "bios",
    "maticna",
    "podaci",
    "instalacija",
    "popravka"];

    let lista = document.createElement("select");
    lista.setAttribute("name", "problem");
    lista.setAttribute("id", "problem");
    lista.setAttribute("required", "required");

for (let i = 0; i < opcije.length; i++) {
    var novaOpcija = document.createElement("option");
    novaOpcija.setAttribute("value",  vrednosti[i]);
    novaOpcija.innerHTML = opcije[i];
    lista.appendChild(novaOpcija);
}

for (let i = 0; i < opcije.lenght; i++) {
  var novaOpcija = document.createElement("option");
  novaOpcija.setAttribute("value", `${vrednosti[i]}`);
  var novaOpcijaOpis = document.createTextNode(`${opcije[i]}`);
  novaOpcija.appendChild(novaOpcijaOpis);
  lista.appendChild(novaOpcija);
}
let padajucaLista = document.getElementById("padajuca_lista");
padajucaLista.appendChild(lista);
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
