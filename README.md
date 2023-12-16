# DoctoLib

Membres du groupe :
- Mathis Talbi
- Jérémy Weltmann
- Rayan Mamache

Résumé :
DoctoLib est une application Angular conçue pour permettre aux utilisateurs de planifier des rendez-vous médicaux, s'inspirant du modèle de Doctolib. Les fonctionnalités développées comprennent la connexion, l'inscription, l'affichage des rendez-vous disponibles, la prise de rendez-vous, l'annulation de rendez-vous, l'affichage détaillé des informations des médecins, et la page de profil de l'utilisateur avec la possibilité d'éditer son profil.

Caractéristiques clés :

- Connexion
- Inscription
- Affichage des rendez-vous disponibles
- Prise de rendez-vous
- Annulation de rendez-vous
- Affichage détaillé des informations des médecins
- Page de profil de l'utilisateur avec édition de profil

Utilisation d'@Input et @Output :
Les fonctionnalités d'affichage de mes rendez-vous utilisent les directives @Input et @Output, notamment dans la partie détaillée des rendez-vous.

Validators personnalisés :
Plusieurs validateurs personnalisés ont été développés, dont :

- Vérification des caractères spéciaux
- Vérification de la validité d'une adresse e-mail
- Confirmation du mot de passe par rapport à la saisie précédente
- Validation pour s'assurer que le champ saisi est un chiffre

Pipes personnalisés :
Divers pipes ont été créés, parmi lesquels :
- Formatage de la date en format français
- Affichage de la conventionnalité d'un médecin

Directive personnalisée :
Une directive a été développée pour mettre en évidence les rendez-vous dans la semaine (jaune) et ceux du jour (orange).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Run server

json-server --watch backend/db.json
