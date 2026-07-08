const eingabefeld = document.getElementById("eingabe");
const knopf = document.getElementById("hinzufuegen");
const liste = document.getElementById("liste");
const erledigteEntfernenKnopf = document.getElementById("erledigte-entfernen");

function artikelHinzufuegen() {
  const name = eingabefeld.value.trim();

  if (name === "") {
    return;
  }

  const neuerArtikel = document.createElement("li");
  neuerArtikel.classList.add("artikel");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("artikel-check");

  checkbox.addEventListener("change", function () {
    neuerArtikel.classList.toggle("erledigt", checkbox.checked);
  });

  const artikelName = document.createElement("span");
  artikelName.classList.add("artikel-name");
  artikelName.textContent = name;

  const loeschKnopf = document.createElement("button");
  loeschKnopf.classList.add("artikel-loeschen");
  loeschKnopf.textContent = "Löschen";

  loeschKnopf.addEventListener("click", function () {
    loeschKnopf.parentElement.remove();
  });

  neuerArtikel.appendChild(checkbox);
  neuerArtikel.appendChild(artikelName);
  neuerArtikel.appendChild(loeschKnopf);

  liste.appendChild(neuerArtikel);

  eingabefeld.value = "";
  eingabefeld.focus();
}

knopf.addEventListener("click", function () {
  artikelHinzufuegen();
});

eingabefeld.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    artikelHinzufuegen();
  }
});

erledigteEntfernenKnopf.addEventListener("click", function () {
  const erledigte = liste.querySelectorAll(".artikel.erledigt");
  erledigte.forEach(function (artikel) {
    artikel.remove();
  });
});
