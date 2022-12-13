# Test Technique, Chat en Angular

Cette application en Angular est composé de deux chats reliés sur lesquels deux utilisateurs peuvent communiquer entre eux.
Les objets `Message` (user: string, text: string) sont stockés dans une liste `messageList` à l'aide des fonctionnalité d'Input/Output des components Angular et l'interface est actualisée à chaque envoi de nouveau message.
Je n'ai pas eu l'utilité des observables dans ce projet puisque les fonctionnalité d'Input/Output étaient suffisantes.

L'application a été créé grâce à Angular v. 14.2.3. et je me suis aussi servi de la librairie Bootstrap pour l'UI.
Le design est inspiré des systèmes de messagerie commme Messenger, l'application mobile Messages, ou même Telegram.


# Accès à app

Accéder au repo, puis lancer `ng serve` pour avoir accès à l'application à l'adresse `http://localhost:4200/`