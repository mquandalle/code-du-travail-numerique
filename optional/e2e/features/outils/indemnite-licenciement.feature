#language: fr

@indemnite-licenciement-outil
Fonctionnalité: Outil - Indemnité de licenciement
  Pour pouvoir calculer mon indemnité de licenciement
  En tant que visiteur
  Je veux pouvoir utiliser le calculateur d'indemnité de licenciement

Scénario:
  Soit un utilisateur sur la page "outils/indemnite-licenciement"
  Alors je vois "Étapes"
  Alors je vois "Indemnité de licenciement"
  Alors je vois "permet d’estimer le montant de l’indemnité minimale de licenciement"

  Quand je clique sur "Suivant"
  Alors je vois "Quel est le type du contrat de travail"

  Alors je vois "Le licenciement est-il dû à une faute grave (ou lourde)"
  Alors je vois "Le licenciement est-il dû à une inaptitude suite à un accident du travail ou maladie professionnelle reconnue"

