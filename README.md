Version test HTML : 20 pages navigables, sommaire, favoris, PDF/impression, checklist mémorisée, liens utiles et zones prévues pour les interactions. Les visuels 2-20 sont temporairement extraits de la planche maître ; ils seront remplacés par les 20 fichiers HD individuels sans modifier le HTML.

Pages 1, 2 et 3 : images HD finales intégrées (WebP, 1024x1536, ~400 Ko chacune), avec zones cliquables posées dessus (11 sur la page 1, 5 sur la page 2, 6 sur la page 3). Pages 4-20 : toujours des extraits provisoires en attendant les HD.
Toutes les images du guide sont en WebP + miniatures légères assets/thumbs/ (~10 Ko chacune, ne se rechargent qu'une fois).
Zones cliquables : bloc HOTSPOTS dans index.html (x,y,w,h en % + destination href/page/panel). Mode placement à la souris : ouvrir index.html?edit=1.

Page 4 (Visa & Entrée en Thaïlande) intégrée : image HD portrait 1024x1536, 6 zones cliquables sur les cartes numérotées (Passeport/Preuves→checklist, TDAC→site officiel, Visa→France Diplomatie, Assurance→SafetyWing, Autres informations→Liens utiles).

Page 5 intégrée : ton fichier porte le titre « À l'arrivée en Thaïlande » — j'ai mis à jour le titre de la page 5 dans le sommaire en conséquence (il portait l'ancien placeholder « Vols & Réservations »). 6 zones cliquables : Contrôle d'immigration→page Visa (4), Bagages→page Valise (9), Douane→France Diplomatie, Transport→page Se déplacer (11), Argent→page Mon argent (8), SIM/Internet→page eSIM (7).

Page 6 intégrée : titre réel « Où aller en Thaïlande ? » (mis à jour, remplace l'ancien placeholder « Assurance voyage »). 6 zones cliquables (les 6 régions) → toutes vers la page Itinéraires recommandés (15).

Page 7 intégrée : titre réel « Itinéraires conseillés » (remplace l'ancien placeholder « eSIM & Internet »). 6 zones cliquables : les 5 durées → page Où aller (6), Thématiques → page Excursions (19).
⚠️ Le lien « Carte SIM/Internet » de la page 5 pointait vers la page 7 en pensant y trouver du contenu eSIM plus tard — corrigé vers le panneau Liens utiles, car la page 7 est maintenant les Itinéraires.

Page 8 intégrée : titre réel « Conseils pratiques pour un séjour réussi » (remplace l'ancien placeholder « Mon argent en Thaïlande »). 6 zones cliquables : Meilleure période → Liens utiles, Budget → Liens utiles, Transports → page Se déplacer (11), Hébergement → page Se loger (12), Santé et sécurité → SafetyWing (assurance voyage), Étiquette et culture → page Culture & Traditions (17).
⚠️ Le titre de la page 8 (« Conseils pratiques pour un séjour réussi ») est très proche de celui de la page 16 (« Conseils pratiques au quotidien ») — à vérifier lors du point sur le plan final pour éviter un doublon de sujet.

Page 9 intégrée : titre réel « À ne pas manquer en Thaïlande » (remplace l'ancien placeholder « Ma valise »). 6 zones cliquables : Temples & culture → page Visiter les incontournables (14), Plages & îles → page Où aller (6), Gastronomie → page Manger en Thaïlande (13), Nature & aventure → page Excursions (19), Marchés & shopping → page Shopping & Souvenirs (18), Bien-être & détente → Liens utiles.
⚠️ Autre doublon potentiel à surveiller : le sujet de la page 9 (« À ne pas manquer ») recoupe fortement celui prévu pour la page 14 (« Visiter les incontournables »).

Page 10 intégrée : titre réel « Le petit plus pour un séjour parfait » (remplace l'ancien placeholder « Arrivée en Thaïlande »).
⚠️ Cette page recoupe fortement la page 8 sur 3 des 6 cartes (Climat/Meilleure période, Argent/Budget, Santé et sécurité — contenus quasi identiques). Sur demande de Pascal : ces 3 cartes redondantes pointent vers la page 8 au lieu de dupliquer l'info. Seules les 3 cartes vraiment nouvelles ont un lien propre : Applications utiles → Liens utiles, Respect et culture → page Culture & Traditions (17), Au quotidien → Liens utiles.

Page 11 intégrée : titre réel « Astuces et bons plans » (remplace l'ancien placeholder « Se déplacer en Thaïlande »).
⚠️ Cette page reprenait à 100% du contenu déjà couvert par les pages 8 et 10 (eSIM/apps déjà vues 2 fois, argent, transport, coutumes, petits plus). Sur demande de Pascal : aucune carte n'a de contenu propre, les 6 hotspots redirigent vers la page 8 ou 10 correspondante (Internet/téléphone→10, Change et paiements→10, Se déplacer malin→8, Applications indispensables→10, Respecter les coutumes→8, Petits plus→10).
⚠️ Corrections en cascade liées à la disparition de la page « Se déplacer en Thaïlande » (qui n'existe plus en tant que page dédiée) :
  - Page 5, carte « Moyens de transport » : pointait vers la page 11 en anticipant une page transport dédiée → corrigé vers le panneau Liens utiles.
  - Page 5, carte « Récupération des bagages » : pointait vers la page 9 en anticipant du contenu bagages qui n'y est jamais arrivé (page 9 = « À ne pas manquer ») → corrigé vers le panneau Checklist.
  - Page 8, carte « Transports » : pointait vers la page 11 en anticipant la même page transport dédiée → corrigé vers le panneau Liens utiles.

Page 12 intégrée : titre réel « En résumé — Tout pour un séjour réussi » (récap volontaire, remplace l'ancien placeholder « Se loger »). 6 zones cliquables : Les indispensables → Checklist, Le budget → page 8, Se déplacer facilement → Liens utiles, Où dormir ? → page 8, Santé et sécurité → page 8, Profiter pleinement → Liens utiles.
⚠️ Comme pour « Se déplacer », le sujet « Se loger » n'a plus de page dédiée dans le plan actuel (le placeholder a été remplacé par ce récap). Corrigé en cascade : la carte « Hébergement » de la page 8 pointait vers la page 12 en anticipant cette page dédiée → repointée vers le panneau Liens utiles.

Page 13 intégrée : titre réel « Les erreurs à éviter » (choisi par Pascal parmi 2 visuels proposés ; remplace l'ancien placeholder « Manger en Thaïlande »). 6 zones cliquables : Arnaques courantes → Liens utiles, Nourriture et eau → Liens utiles, Climat et saison → page 8, Règles et culture → page 17, Santé et sécurité → page 8, Déplacements → Liens utiles.
⚠️ Troisième sujet fantôme : « Manger en Thaïlande » n'a plus de page dédiée (comme Se déplacer et Se loger avant lui). Corrigé en cascade : 3 hotspots qui pointaient vers la page 13 en anticipant du contenu gastronomie (« Gastronomie » et « Cuisine délicieuse » sur la page 1, « La gastronomie thaïlandaise » sur la page 9) → tous repointés vers le panneau Liens utiles.

Page 14 intégrée : titre réel « Les petits plus pour une expérience inoubliable » (remplace l'ancien placeholder « Visiter les incontournables »). Sur demande de Pascal, cartes redondantes liées vers leur source plutôt que dupliquées : Activités selon vos envies → page 9, Souvenirs à rapporter → page 18 (Shopping & Souvenirs), Itinéraires sur mesure → page 7 (Itinéraires conseillés). Cartes propres restantes → Liens utiles : Expériences à vivre, Bonnes adresses, Mot de la fin.
⚠️ Corrections en cascade liées à la disparition du sujet « Visiter les incontournables / Temples » : la carte « Temples majestueux » de la page 1 et « Les temples et la culture » de la page 9 pointaient vers la page 14 en anticipant une page dédiée aux temples → toutes deux repointées vers la page Culture & Traditions (17), plus pertinente.

📌 Réservé pour la page 20 : le visuel « Derniers conseils et mot de la fin » (reçu comme "page 15") a été mis de côté dans _reserved/page-20-source-derniers-conseils.png. C'est clairement une page de clôture de guide (carte "Merci et bon voyage !") — elle sera intégrée en page 20 une fois qu'on aura les vraies pages 15-19. Sa carte "Les choses à éviter" recoupera la page 13 quand elle sera intégrée.

📌 Deuxième visuel de clôture reçu (envoyé comme "page 16") : « À bientôt en Thaïlande ! » — réservé sans décision dans _reserved/page-20-source-a-bientot.png, en attendant les vraies pages 16-19. À trancher avec Pascal : celui-ci remplace le premier réservé, ou les deux se suivent en pages 19/20.

📌 Troisième visuel réservé (envoyé comme "page 17") : « Après la Thaïlande... et pourquoi pas la suite ? » — autres destinations Asie (Bali, Vietnam, Laos, Cambodge, Singapour...). Hors-sujet par rapport à « Culture & Traditions » attendu en page 17, et de nombreux hotspots (pages 1,8,9,10,11,13,14) pointent déjà vers la page 17 en anticipant du contenu Culture/Étiquette. Réservé dans _reserved/page-source-apres-thailande-autres-destinations.png, probablement une page de fin de guide (proche des 2 visuels de clôture déjà en réserve). La vraie page 17 « Culture & Traditions » reste à recevoir.

⏳ EN ATTENTE DE RÉGÉNÉRATION (non intégrées) :
- Page 18 « Conseils pratiques pour un voyage réussi ! » — erreur factuelle : indique 60 jours sans visa au lieu de 30 (règle en vigueur depuis le 15/09/2026). Sauvegardée dans _pending/page-18-visa-60jours-conseils-pratiques.png.
- Page 19 « Astuces et bons plans pour un séjour au top ! » — bug visuel sur le logo « Réunion Malin » (le M s'affiche comme un Λ). Sauvegardée dans _pending/page-19-logo-glitch-astuces-bons-plans.png.
Les deux recoupent aussi fortement les pages 8/10/11/12 déjà intégrées et ne correspondent pas aux sujets placeholder attendus (Shopping & Souvenirs / Excursions).

Page 20 intégrée : titre réel « Prêt pour l'aventure ? » (remplace l'ancien placeholder « Numéros utiles & SOS »). C'est la vraie page de clôture (badge "20", "Merci d'avoir lu ce mini-guide !"). 6 zones cliquables : Check-list → panneau Checklist, Adoptez le bon état d'esprit / Voyagez responsable / Immortalisez vos souvenirs → Liens utiles, Rejoignez la communauté → thaimalin.fr, Et maintenant à vous ! → retour page 1 (relance le guide).
⚠️ Quatrième sujet fantôme : « Numéros utiles & SOS » (numéros d'urgence) n'a plus de page dédiée dans le plan actuel.
⚠️ Cette vraie page 20 change la donne pour les 3 visuels de clôture mis en réserve plus tôt (Derniers conseils/mot de la fin, À bientôt en Thaïlande, Après la Thaïlande/autres destinations) : ils ne sont probablement plus nécessaires puisqu'on a maintenant la vraie fin du guide. À confirmer avec Pascal.

Page 15 intégrée : « Itinéraires recommandés » — contenu enfin conforme au sujet attendu. 5 zones cliquables (7/10/15/21/30 jours) → Liens utiles.

Page 17 intégrée : « Culture & Traditions » — enfin le bon sujet, tous les liens posés depuis les pages 1, 8, 9, 10, 11, 13, 14 pointent maintenant vers du contenu pertinent. 6 zones cliquables : Art/artisanat → page 18 (Shopping & Souvenirs), les 5 autres → Liens utiles.

Page 18 intégrée : titre réel « Formalités & Entrée en Thaïlande » (visa 30 jours correct, mentionne explicitement la suppression de l'exemption 60 jours — remplace le placeholder « Shopping & Souvenirs »). Sur demande de Pascal, cartes redondantes avec les pages 3/4 liées plutôt que dupliquées : Exemption de visa → page 4, Passeport et documents → page 3, TDAC obligatoire → page 3, Assurance voyage → page 4. Cartes nouvelles : Billet de sortie/retour → Checklist, Séjour de plus de 30 jours → Liens utiles.
⚠️ Cinquième sujet fantôme : « Shopping & Souvenirs » n'a plus de page dédiée. Corrigé en cascade : 4 hotspots qui pointaient vers la page 18 en anticipant du contenu shopping (page 1 ×2, page 9, page 14) → tous repointés vers le panneau Liens utiles.

Page 16 intégrée : « Conseils pratiques au quotidien » (visa 30 jours correct). Sur demande de Pascal, cartes redondantes liées vers leur source : Formalités et documents → page 18, Argent et paiements → page 10, Se loger malin → page 8, Communication et internet → page 10. Cartes gardant leur propre lien : Se déplacer facilement → Liens utiles, Santé/sécurité/bien-être → Liens utiles (contient les numéros d'urgence 191/1669, qui comblent en partie le sujet « Numéros utiles & SOS » disparu plus tôt).

Page 19 intégrée : « Excursions & Activités » — enfin le bon sujet, logo « Réunion Malin » correctement rendu cette fois. 6 zones cliquables : Culture et découverte locale → page 17, les 5 autres → Liens utiles.

🎉 GUIDE COMPLET : 20/20 pages réelles intégrées, testées et vérifiées (dimensions, texte, hotspots, alignement pixel-perfect, zéro erreur JS/réseau sur l'ensemble des 20 pages).

Note : les dossiers _reserved/ et _pending/ contiennent des visuels reçus en trop ou obsolètes pendant la construction (3 visuels de clôture redondants avec la page 20, remplacés par les vraies pages 18/19 corrigées). Ils ne sont pas utilisés par le site et peuvent être supprimés sans impact.

Fix mobile : les vignettes de la barre du haut étaient trop grosses sur téléphone (100px + texte sous chaque image, prenant beaucoup de hauteur d'écran). Réduites à 52px, texte masqué sur mobile (déjà visible via le numéro de page en haut).

Ajout : bouton "🔍 Agrandir" sur chaque page (+ clic direct sur l'image) qui ouvre une vue plein écran zoomée (220%) avec défilement pour bien lire le texte des cartes, fermeture par ✕ ou touche Échap. Le pincement (pinch-to-zoom) natif fonctionne aussi sur mobile. N'interfère pas avec les zones cliquables existantes (elles restent prioritaires pour la navigation).

Page 11 REMPLACÉE : « Se loger en Thaïlande » (remplace « Astuces et bons plans », qui ne contenait plus que des redirections). 6 zones cliquables : Bangkok / Îles et plages / Nord → page 6 (Où aller), Types d'hébergement / Où réserver / Astuces réservation → Liens utiles.

🎉 Le sujet « Se loger » — disparu depuis la page 12 — a maintenant sa vraie page dédiée. Il reste 4 sujets fantômes (Se déplacer, Manger, Numéros utiles, Shopping & Souvenirs) si Pascal veut continuer à combler les trous du plan initial.

Page 10 REMPLACÉE : « Se déplacer en Thaïlande » (remplace « Le petit plus pour un séjour parfait », qui ne contenait plus que des redirections). 6 zones cliquables : Vols intérieurs / Trains en Thaïlande / Bus et vans / Location scooter ou voiture → Liens utiles (12Go et autres plateformes de réservation transport), Bangkok au quotidien / Îles et ferries → page 6 (Où aller).
Corrections en cascade suite au changement de sujet de la page 10 :
- Page 16 : « Argent et paiements » et « Communication et internet » pointaient vers l'ancienne page 10 (Applications/Argent) → repointées vers Liens utiles.
- Nettoyage complémentaire : plusieurs cartes « transport » existantes qui redirigeaient faute de page dédiée pointent maintenant vers la vraie page 10 : page 5 « Moyens de transport », page 8 « Transports », page 12 « Se déplacer facilement », page 13 « Les déplacements », page 16 « Se déplacer facilement ».
Vérifié : `grep "page": 10` ne retourne plus que ces 5 renvois corrects vers le nouveau contenu transport ; balayage complet des 20 pages en navigateur headless = zéro erreur JS/réseau ; alignement pixel-perfect des 6 hotspots confirmé par capture avec surbrillance rouge.

🎉 Le sujet « Se déplacer » — disparu depuis la page 10 — a maintenant sa vraie page dédiée, avec en prime tous les anciens renvois « transport » du guide qui pointent enfin vers elle. Il reste 3 sujets fantômes (Manger, Numéros utiles, Shopping & Souvenirs). Brief déjà donné à Pascal pour remplacer la page 16 par « Manger en Thaïlande » (en préservant les numéros d'urgence 191/1669).

Page 16 REMPLACÉE : « Manger en Thaïlande » (remplace « Conseils pratiques au quotidien »). 6 zones cliquables : Street food thaïlandaise / Les plats incontournables / Où manger ? / Boissons et spécialités / Régimes spéciaux / Bon à savoir → toutes vers Liens utiles. Les numéros d'urgence 191 (Police) et 1669 (Urgences médicales) sont conservés, affichés dans la carte « Bon à savoir ».
Corrections en cascade suite au changement de sujet de la page 16 (qui n'est plus « bons plans / conseils pratiques ») :
- Page 1 : mots-clés « Bons plans » et « Astuces et bons plans » pointaient vers la page 16 en anticipant du contenu « conseils/tips » → repointés vers la page 8 (Conseils pratiques pour un séjour réussi), qui couvre bien ce thème.
- Anciennes cartes « Formalités et documents » → page 18 et « Se loger malin » → page 8 (qui dupliquaient du contenu ailleurs) ont disparu avec le nouveau contenu, plus besoin de redirection puisque la page 16 ne couvre plus ces sujets.
- Cartes déjà orientées « nourriture » ailleurs dans le guide, qui redirigeaient faute de page dédiée, pointent maintenant vers la vraie page 16 : page 1 « Gastronomie » et « Cuisine délicieuse » (mots-clés couverture), page 9 « La gastronomie thaïlandaise », page 13 « La nourriture et l'eau ».
Vérifié : balayage complet des 20 pages en navigateur headless = zéro erreur JS/réseau ; alignement pixel-perfect des 6 hotspots confirmé par capture avec surbrillance rouge.

🎉 Le sujet « Manger » — disparu depuis la page 16 — a maintenant sa vraie page dédiée, numéros d'urgence préservés, tous les anciens renvois « gastronomie » du guide pointent enfin vers elle. Il reste 2 sujets fantômes (Numéros utiles & SOS complet, Shopping & Souvenirs) — les urgences 191/1669 sont déjà couvertes en partie par cette page 16, donc le sujet le plus prioritaire restant est Shopping & Souvenirs si Pascal veut continuer.

Page 14 REMPLACÉE : « Shopping & Souvenirs en Thaïlande » (remplace « Les petits plus pour une expérience inoubliable », qui était très redondante — 4 cartes sur 6 redirigeaient déjà ailleurs). 6 zones cliquables : Marchés locaux / Souvenirs typiques / Vêtements & artisanat / Où faire de bonnes affaires ? / Centres commerciaux / Bon à savoir (détaxe TouristVAT, douane, contrefaçons) → toutes vers Liens utiles.
Corrections en cascade suite au changement de sujet de la page 14 :
- Page 2 : mot-clé « Profiter » pointait vers l'ancienne page 14 (petits plus / expérience inoubliable) → repointé vers la page 9 (À ne pas manquer en Thaïlande), qui correspond mieux à l'idée de « profiter du séjour ».
- Cartes déjà orientées « shopping/marchés » ailleurs, qui redirigeaient faute de page dédiée, pointent maintenant vers la vraie page 14 : page 1 mot-clé « Shopping et marchés », page 9 « Les marchés et le shopping ».
Vérifié : balayage complet des 20 pages en navigateur headless = zéro erreur JS/réseau ; alignement pixel-perfect des 6 hotspots confirmé par capture avec surbrillance rouge.

🎉 GUIDE À JOUR : 4 sujets fantômes comblés sur 5 (Se loger, Se déplacer, Manger, Shopping & Souvenirs). Il ne reste que « Numéros utiles & SOS » (déjà partiellement couvert par les urgences 191/1669 sur la page 16). Pascal a choisi d'ajouter une vraie page 21 dédiée plutôt que de sacrifier une page existante — brief donné, en attente de l'image.

🆕 NOUVELLE PAGE 21 AJOUTÉE : « Numéros utiles & SOS en Thaïlande » (le guide passe de 20 à 21 pages, sur demande de Pascal, plutôt que de sacrifier une page existante). 6 zones cliquables : Urgences vitales (191 Police, 1669 Médical, 199 Pompiers) / Tourist Police (1155) / Ambassade de France / Hôpitaux internationaux → Liens utiles ; Assurance voyage → lien affilié SafetyWing (même lien que la page 8) ; Numéros pratiques (Immigration, aéroports, perte de passeport) → Liens utiles.
Adaptations techniques pour passer à 21 pages : compteur d'en-tête (« 1 / 20 » → « 1 / 21 »), fonction `go()` (limite de navigation 20 → 21), outil d'édition des zones (plage acceptée 1 à 20 → 1 à 21). Le sommaire et la barre de vignettes se génèrent dynamiquement à partir du tableau `titles`, donc aucune autre adaptation nécessaire.
Vérifié : balayage complet des 21 pages en navigateur headless = zéro erreur JS/réseau, 21 vignettes générées, compteur correct sur chaque page, navigation bloquée au-delà de la page 21 ; alignement pixel-perfect des 6 hotspots confirmé par capture avec surbrillance rouge.

🎉🎉 GUIDE COMPLET : 21/21 pages réelles, tous les 5 sujets fantômes du plan initial sont maintenant comblés (Se loger, Se déplacer, Manger, Shopping & Souvenirs, Numéros utiles & SOS). Chaque remplacement a aussi permis de corriger les anciens renvois devenus obsolètes ailleurs dans le guide.

Fix export PDF : le bouton "↓ PDF" faisait un simple window.print() de l'écran affiché (en-tête + colonne de vignettes + UNE seule page ouverte), donc seulement 1-2 pages physiques apparaissaient dans l'impression au lieu des 21 pages du guide. Corrigé : un conteneur caché #printAll est généré au chargement avec les 21 images du guide dans l'ordre ; en mode impression (@media print), toute l'interface (en-tête, vignettes, panneaux) est masquée et seul ce conteneur s'affiche, une image par page PDF (page-break-after + object-fit:contain pour que chaque page tienne entière sans recadrage ni déformation).
Vérifié : export PDF headless testé → exactement 21 pages générées, contenu identique à chaque page du site, rien de recadré. Navigation et hotspots non affectés (le conteneur d'impression est invisible à l'écran, seulement actif au moment de l'impression/export PDF).

Sommaire rendu interactif : remplacement de la simple liste de boutons texte par une grille de cartes visuelles (vignette de chaque page, badge numéroté, titre), regroupées en 5 sections thématiques (🧳 Avant de partir, 🗺️ Destinations & itinéraires, 🎒 Infos pratiques au quotidien, 🏮 Culture & traditions, 🎉 Prêt à partir). Ajouts :
- Barre de recherche en haut du sommaire pour filtrer les 21 pages par mot-clé (ex. « visa », « manger », « shopping ») — masque aussi les sections vides.
- La carte de la page actuellement affichée est mise en évidence (contour rose).
- Un cœur ♥ apparaît sur la vignette des pages ajoutées aux favoris, mis à jour en direct.
- Responsive : grille à 3 colonnes sur mobile, plus large sur desktop.
Vérifié : les 21 pages sont représentées une seule fois chacune (aucun doublon, aucun oubli) ; navigation, recherche et favoris testés en navigateur headless ; balayage complet des 21 pages = zéro erreur JS/réseau.

🆕 Pascal ajoute une page 22 : « Mon centre de réservation » (hub final avec les liens de réservation). Ajustement anticipé du flux de clôture : page 20 « Et maintenant… à vous ! » ne boucle plus directement vers la page 1, elle mène maintenant vers la page 21 (Numéros utiles & SOS), comme dernier rappel pratique avant le départ. Une fois la page 22 intégrée, la chaîne de clôture sera complète : 20 (adieu) → 21 (SOS) → 22 (centre de réservation, vrai point final qui bouclera vers la page 1 ou thaimalin.fr).

🆕 NOUVELLE PAGE 22 AJOUTÉE : « Mon Centre de Réservation » (le guide passe de 21 à 22 pages). 6 partenaires avec QR code : Vols et séjours (Trip.com), Hébergements (Agoda), Excursions & Activités (GetYourGuide/Klook), Transports (12Go), Cartes SIM & eSIM (Airalo/Holafly), Assurance voyage (SafetyWing).
Fonctionnalités spécifiques à cette page :
- Chaque grande carte est cliquable vers le lien affilié correspondant déjà utilisé ailleurs dans le guide (Trip.com, GetYourGuide, 12Go, Airalo, SafetyWing) ; Hébergements (Agoda, pas de lien affilié existant) → panneau Liens utiles.
- Chaque QR code a été découpé individuellement en image nette (assets/qr/qr22-1.png à qr22-6.png, upscalées ×3 pour rester bien lisibles) et possède sa propre zone cliquable superposée précisément dessus.
- Cliquer sur un QR code ouvre une vue plein écran agrandie (jusqu'à 420px, bien plus lisible pour scanner à l'écran) avec un bouton « 📥 Télécharger le QR code » qui enregistre l'image PNG du QR sur l'appareil.
- Le zoom classique (🔍 Agrandir / clic sur l'image) continue de fonctionner normalement sur cette page pour voir toute la page en grand.
Flux de clôture complété : page 20 (adieu) → page 21 (Numéros utiles & SOS, via le bouton « Et maintenant… à vous ! ») → page 22 (Centre de réservation, vrai point final du guide, accessible aussi via la flèche → depuis la page 21).
Adaptations techniques pour passer à 22 pages : compteur, fonction `go()`, outil d'édition (plage 1 à 22). Sommaire, vignettes et export PDF se génèrent dynamiquement à partir de `titles`, aucune autre adaptation nécessaire.
Vérifié : balayage complet des 22 pages en navigateur headless = zéro erreur JS/réseau ; alignement pixel-perfect des 6 cartes ET des 6 zones QR (superposées avec précision, testé par capture avec surbrillance rouge) ; zoom QR + téléchargement testés individuellement (source, nom de fichier, affichage du bouton) ; le zoom classique reste inchangé sur les autres pages.

🆕 NOUVELLE PAGE 23 AJOUTÉE (finale) : « FIN — Merci ! » — vraie page de clôture envoyée par Pascal (badge « Merci ! » au lieu d'un numéro). Layout différent des autres pages : grille 3 colonnes × 2 lignes.
6 cartes : Mini-guide Thaïlande (→ boucle vers la page 1, ce guide-ci), Mini-guide Vietnam (→ Liens utiles, pas de lien externe connu), Mini-guide Bali (→ Liens utiles), Newsletter Thaï Malin (→ thaimalin.fr), Facebook Thaï Malin (→ Liens utiles, pas de lien confirmé), Application Thaï Malin (→ Liens utiles).
5 des 6 cartes ont un QR code (la carte Application n'en a pas, juste une maquette du téléphone) — chaque QR a été découpé individuellement (assets/qr/qr23-1.png à qr23-5.png) avec sa propre zone cliquable superposée précisément dessus, ouvrant la vue zoomée + bouton de téléchargement (même fonctionnalité que la page 22).
Adaptations techniques pour passer à 23 pages : compteur, fonction `go()`, outil d'édition (plage 1 à 23). Sommaire, vignettes et export PDF se génèrent dynamiquement, aucune autre adaptation nécessaire.
Vérifié : balayage complet des 23 pages en navigateur headless = zéro erreur JS/réseau ; alignement pixel-perfect des 6 cartes ET des 5 zones QR (grille 3×2, différente du gabarit habituel 2×3, testé par capture avec surbrillance rouge) ; zoom QR + téléchargement testés.

🎉🎉🎉 GUIDE FINAL : 23/23 pages réelles. Flux de clôture complet : page 20 (adieu) → page 21 (SOS) → page 22 (centre de réservation) → page 23 (FIN — découvrez mes autres mini-guides, newsletter, Facebook, application). Chaque page de clôture mène naturellement à la suivante via la flèche →, la vraie fin du guide est maintenant la page 23.

🔧 DOUBLON RÉSOLU (pages 3, 4 et 18) : Pascal a signalé que les pages 3 et 4 étaient quasiment identiques (mêmes 6 cartes : Passeport, TDAC, Visa, Assurance, Preuves de séjour, Autres infos). En creusant, la page 18 (« Formalités & Entrée en Thaïlande ») couvrait le même sujet en plus complet et plus à jour (règle des 30 jours depuis le 15 sept. 2026). Décision de Pascal : garder la page 18 comme référence unique documents/visa, et remplacer entièrement les pages 3 et 4 par deux nouveaux sujets inédits dans le guide.
- Page 5, carte « Contrôle d'immigration » : pointait vers la page 4 → corrigée vers la page 18 (nouvelle référence visa/documents).
- Page 18, cartes « Exemption de visa touristique », « Passeport et documents », « TDAC obligatoire », « Assurance voyage » : pointaient vers les pages 3/4 (auto-référence désormais fausse puisque ces pages changent de sujet) → corrigées vers des liens directs (France Diplomatie, panneau Checklist, site officiel TDAC, SafetyWing).

🆕 PAGE 3 REMPLACÉE : « Comment aller en Thaïlande ? » (ex « Documents & TDAC »). Image HD 1024×1536 intégrée, gabarit standard 2×3. 6 cartes : Vol direct Air Austral (→ air-austral.com), Routes avec escale (→ Liens utiles), Durée du trajet (→ Liens utiles), Quand réserver (→ Liens utiles), Budget indicatif (→ page Conseils pratiques 8), Astuces malines (→ Skyscanner).

🆕 PAGE 4 REMPLACÉE : « Parler Thaï au quotidien » (ex « Visa & Entrée en Thaïlande »). Image HD 1024×1536 intégrée, gabarit standard 2×3, kit de phrases essentielles (français / thaï / prononciation). 6 cartes : Politesse de base (→ Liens utiles), Se faire comprendre (→ Liens utiles), Marchander (→ page Shopping & Souvenirs 14), Se déplacer (→ page Se déplacer 10), Au restaurant (→ page Manger en Thaïlande 16), Urgences (→ page Numéros utiles & SOS 21).

Vérifié : balayage complet des 23 pages en navigateur headless = zéro erreur JS/réseau, 6 zones cliquables sur chaque page, alignement pixel-perfect vérifié par capture avec surbrillance rouge sur les pages 3 et 4 ; plus aucune référence orpheline vers les anciennes pages 3/4.

---
Relance déploiement : 2026-09-30 12:36 UTC
