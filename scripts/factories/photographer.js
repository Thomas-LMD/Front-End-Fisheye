// Fonction qui vas afficher les données de chaque photographe

function photographerFactory(data) {
    const { name, id, city, country, tagline , price , portrait } = data;
    
// On stocke dans une variable le chemin d'accès à la photo de profil d'un photographe
    const picture = `assets/photographers/${portrait}`;
    const url = `photographer.html?id=${id}`;

     // On crée la fonction qui contiendra les éléments HTML d'un photographe
    function getUserCardDOM() {

        // On crée un élément article qui contiendra les données d'un photographe
    const article = document.createElement( 'article' );
       
    // Élément pour la photo de profil
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt" , " photo de profille de " + name );
        
      
        
    // Élément pour le nom du photographe
        const h2 = document.createElement( 'h2' );
        h2.textContent = name ;
        h2.setAttribute("aria-label", "Nom du photographe ");

    // Élément pour sa localisation
        const p1 = document.createElement( 'p' );
        p1.textContent = city +', '+ country ;
        p1.className = "location";
        p1.setAttribute("aria-label", "Localisation du photographe ");
        
    // Élément pour son slogan
        const p5 = document.createElement( 'p' );
        p5.textContent = tagline;
        p5.className = "tagline";
        p5.setAttribute("aria-label", "slogan du photographe ");

     // Élément pour son tarif
        const p3 = document.createElement( 'p' );
        p3.className = "price";
        p3.textContent = price +'€/jour' ;
        p3.setAttribute("aria-label", "Tarif de la prestation par jour ");

       
        // Eléments pour le lien 
        
        const link = document.createElement('a');
        link.setAttribute( "href", url);
       
      
    
        // On ajoute au lien sa photo de profil
        link.appendChild(img);
        // Et son nom
         link.appendChild(h2);

    // Puis on ajoute a l'article le lien, sa localisation, son slogan et son tarif
         article.appendChild(link);
        article.appendChild(p1);
         article.appendChild(p5);
         article.appendChild(p3);  
    
     

        return (article);
    }
 // On retourne les données et la fonction qui contient les éléments HTML d'un photographe
    return {name, id, city, country, tagline, price, picture, getUserCardDOM }
}