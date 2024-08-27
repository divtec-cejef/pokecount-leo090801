/**
 * Exercice PokeCount
 * @author Léo Mory <leo.mory@divtec.ch>
 * @version 0.1 (Version actuelle)
 * @since 2024-08-20 (Date de création)
 */

"use strict";
// Récupère le premier <h2> du document
// document.querySelector('h2').textContent = '20';

// Déclaration et initialisation du compteur de captures
let compteur = 0;
// Récupère l'élément avec l'identifiant "compteur-el"
const compteurEl = document.getElementById('compteur-el');
const sauvegardeEl = document.getElementById('sauvegarde-el');
console.log(compteur, compteurEl, sauvegardeEl);

sauvegardeEl.textContent = '<strong>Coucou</strong> hello';

// Fonction qui incrémente le compteur et mets à jours le texte du <h2>
function capturer() {
    compteur += 1;
    compteurEl.textContent = compteur;
    // Change la couleur du texte en fonction du nombre de captures
    if (compteur < 5) {
        compteurEl.style.color = 'green';
    } else if (compteur < 10) {
        compteurEl.style.color = 'yellow';
    } else {
        compteurEl.style.color = 'red';
    }
}

// Fonction qui sauvegarde les captures et réinitialise le compteur
function sauvegarder() {
    // sauvegardeEl.textContent += compteur + ' Pokémons | ';
    sauvegardeEl.textContent += ` ${compteur} Pokémons | `;
    // Sauvegarde l'historique de mes captures en local dans le navigateur
    localStorage.setItem("captures", sauvegardeEl.textContent)
    compteur = 0;
    compteurEl.textContent = compteur;
}

// Ecouter les événements et fait appelle à un callback
document.getElementById('capturer-btn').addEventListener('click', capturer);
document.getElementById('sauvegarder-btn').addEventListener('click', sauvegarder);
// Quand l'onglet du navigateur à fini de se charger
window.addEventListener('load', () => {
    sauvegardeEl.textContent = localStorage.getItem("captures") || "Mes captures: ";
});