#language: fr

@search
Fonctionnalité: Recherche
  Pour trouver une réponse à ma question sur le droit du travail
  En tant que visiteur
  Je veux pouvoir faire une recherche

Scénario:
  Soit un utilisateur sur la page d'accueil

  Quand je recherche "prime de fin d'année"
  Quand j'attends que les suggestions apparaissent
  Alors je vois "5" suggestions

  Quand je clique sur "Rechercher"
  Quand j'attends que les résultats de recherche apparaissent
  Alors je vois "7" tuiles sous le texte "Résultats de recherche pour"
  Alors je vois "Que dit le code du travail"
  Alors je vois "Les thèmes suivants peuvent vous intéresser"
  Alors je vois "Vous n’avez pas trouvé ce que vous cherchiez"

  Quand je clique sur "Plus de résultats"
  Alors je vois "14" tuiles sous le texte "Résultats de recherche pour"
