# ACTIVITE MAPS
## Sujet de l'activité
Vous trouverez le sujet via ce [lien](https://docs.google.com/document/d/1_f3wa046GHqpQVQXHYsbJi_vZGt_tLwtoiRUXwrdVQ8/edit?tab=t.0).

## Structure du dépôt

| Dossier/File         | Description                                           |
|------------------------|-------------------------------------------------------|
| ├── app1/              | `Dossier contenant votre application web (HTML, CSS, JS, etc.) sur le port:`**8092** |
| ├── docker-compose.yml |  `Fichier docker-compose pour exécuter le conteneur Nginx` |
| └── README.md          | `Le fichier README de votre projet`                     |


## Prérequis

Avant de commencer, assurez-vous d'avoir installé les logiciels suivants sur votre machine :
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/) (si vous optez pour la méthode `docker-compose`)




## Lancer le service web
```bash
# Clonez ce repo en utilisant la commande suivante :
git clone https://github.com/votre-utilisateur/votre-repo.git
cd votre-repo

# Utiliser docker-compose
Assurez-vous que vous êtes dans le répertoire racine du dépôt cloné, où se trouve le fichier docker-compose.yml.
Exécutez la commande suivante pour démarrer le serveur Nginx :
docker-compose up -d
```

## Développement
- coder les exercices donnés dans l'énoncé dans les différents répèrtoires appropriès.
