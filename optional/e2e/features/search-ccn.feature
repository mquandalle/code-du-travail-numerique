#language: fr

@ccn-search
Fonctionnalité: Recherche de convention collective
  Pour pouvoir trouver ma convention collective
  En tant que visiteur
  Je veux pouvoir consulter la page des conventions collectives et effectuer des recherches

Scénario: Recherche par nom
  Soit un utilisateur sur la page "convention-collective"
  Quand je renseigne "boulangerie" dans le champ "Nom d'entreprise, SIRET, nom de convention collective"
  Quand j'attend que le texte "CONVENTIONS COLLECTIVES" apparaisse
  Alors le lien "Boulangerie-pâtisserie (entreprises artisanales)" pointe sur "/convention-collective/843-boulangerie-patisserie-entreprises-artisanales"
  Alors le lien "Activités industrielles de boulangerie et pâtisserie" pointe sur "/convention-collective/1747-activites-industrielles-de-boulangerie-et-patisserie"

Scénario: Recherche par IDCC
  Soit un utilisateur sur la page "convention-collective"
  Quand je renseigne "2247" dans le champ "Nom d'entreprise, SIRET, nom de convention collective"
  Quand j'attend que le texte "CONVENTIONS COLLECTIVES" apparaisse
  Alors le lien "Entreprises de courtage d'assurances et/ou de réassurances" pointe sur "/convention-collective/2247-entreprises-de-courtage-dassurances-et-ou-de-reassurances"

Scénario: Recherche par nom d'entreprise
  Soit un utilisateur sur la page "convention-collective"
  Quand je renseigne "corso balard" dans le champ "Nom d'entreprise, SIRET, nom de convention collective"
  Quand j'attend que le texte "ENTREPRISES" apparaisse
  Alors je vois "CORSO BALARD 75015 PARIS 15E ARRONDISSEMENT"
  Alors le lien "Hôtels, cafés, restaurants" pointe sur "/convention-collective/1979-hotels-cafes-restaurants"

Scénario: Recherche par n° SIRET
  Soit un utilisateur sur la page "convention-collective"
  Quand je renseigne "82161143100015" dans le champ "Nom d'entreprise, SIRET, nom de convention collective"
  Quand j'attend que le texte "ENTREPRISES" apparaisse
  Alors je vois "CODEURS EN LIBERTE 75020 PARIS 20E ARRONDISSEMENT"
  Alors le lien "Bureaux d'études techniques, cabinets d'ingénieurs-conseils et sociétés de conseils" pointe sur "/convention-collective/1486-bureaux-detudes-techniques-cabinets-dingenieurs-conseils-et-societes-de"
