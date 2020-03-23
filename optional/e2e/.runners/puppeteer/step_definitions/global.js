const { Soit, Quand, Alors } = require("./_fr");

//

const { I } = inject();

//

Soit("un utilisateur sur la page d'accueil", () => {
  I.amOnPage("/");
});

Soit("un utilisateur sur la page {string}", page => {
  I.amOnPage(`/${page}`);
});

//

Quand("je recherche {string}", searchText => {
  I.fillField("q", searchText);
});

Quand(
  "je cherche {string} dans le champ {string}",
  (searchText, searchInput) => {
    I.fillField(searchInput, searchText);
  },
);

Quand("je clique sur {string}", text => {
  I.click(text);
});

Quand("je ferme la modale", () => {
  I.click('button[title="fermer la modale"]');
});

Quand("j'attends que les suggestions apparaissent", () => {
  I.waitForElement("//ul[@role='listbox']", 3);
});

Quand("j'attends que les résultats de recherche apparaissent", () => {
  I.waitForElement("[aria-label^='Résultats de recherche']", 3);
});

Quand("j'attends que le titre de page {string} apparaisse", title => {
  I.waitForElement(`//h1[starts-with(., "${title}")]`)
})

Quand("j'attend que le texte {string} apparaisse", text => {
  I.waitForText(text)
})

//

Alors("je vois {string}", text => {
  I.see(text);
});

Alors("je vois le bouton {string}", text => {
  I.seeElement(`//button[text()="${text}"]`)
})

Alors("je vois {string} suggestions", (num) => {
  I.seeNumberOfVisibleElements("//ul[@role='listbox']//li", parseInt(num));
})

Alors("je vois {string} tuiles sous le {string} {string}", (num, element, title) => {
  const container = `ancestor::div`
  const titleElement = `${element}[starts-with(., "${title}")]`;
  I.seeNumberOfVisibleElements(`//li/a[${container}/child::header/child::${titleElement} or ${container}/child::${titleElement}]`, parseInt(num))
})

Alors("le lien {string} pointe sur {string}", (text, url) => {
  I.seeElement(`//a[starts-with(., "${text}") and contains(./@href, "${url}")]`);
});
