#language: fr

@footer
Fonctionnalité: Footer
  Pour en savoir plus sur le site Code du travail numérique
  En tant que visiteur
  Je veux pouvoir consulter les fonctionnalités et pages présentes dans le footer

  Scénario: Pages statiques
    Soit un utilisateur sur la page d'accueil

    Alors je vois "Besoin de plus d’information"
    Quand je clique sur "Contacter nos services en région"
    Alors je vois "Contact téléphonique"
    Quand je cherche "75" dans le champ "search-service"
    Alors le lien "http://idf.direccte.gouv.fr" pointe sur "http://idf.direccte.gouv.fr"
    Quand je ferme la modale

    Quand je clique sur "Le droit du travail"
    Alors je vois "Qu’est-ce que le droit du travail"
    Alors je vois "Quels sont les textes à l’origine du droit du travail"
    Alors je vois "Existe-t-il une hiérarchie entre les textes"

    Quand je clique sur "Glossaire"
    Alors le lien "A" pointe sur "#ancre-A"
    Alors le lien "Z" pointe sur "#ancre-Z"
    Quand je clique sur "Abrogation"
    Alors je vois "Définition"
    Alors je vois "Sources"
    Alors le lien "Retour" pointe sur "glossaire"

    Quand je clique sur "À propos"
    Alors je vois "Qu’est-ce que le Code du travail numérique"
    Alors je vois "Qui sommes-nous"

    Quand je clique sur "Mentions légales"
    Alors je vois "Directeur de la publication"
    Alors je vois "Hébergement"
    Alors je vois "Accessibilité"
    Alors je vois "Sécurité"

    Quand je clique sur "Politique de confidentialité"
    Alors je vois "Traitement des données à caractère personnel"
    Alors je vois "Utilisation de témoins de connexion"

    Quand je clique sur "Statistiques d’utilisation"
    Quand j'attends que le titre de page "Statistiques du Code du travail numérique" apparaisse
    Alors je vois "Statistiques d’utilisation depuis le"

    Quand je clique sur "Contact"
    Alors je vois "Vous pouvez joindre"
    Alors le lien "codedutravailnumerique@travail.gouv.fr" pointe sur "mailto:"
    Alors je vois le bouton "les services dédiés"
