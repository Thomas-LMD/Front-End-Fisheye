function photographerFactory(data) {
    const {   portrait } = data;
    
// On stocke dans une variable le chemin d'accès à la photo de profil d'un photographe
    const picture = `assets/photographers/${portrait}`;

// On creer les fonction neccessaire afin d 'obtenir les data voulu .
    function name () { 
        return data.name;               
    }

    function city () {
        return data.city;           
    }

    function country () {
    return data.country;       
    }

    function tagline () {
        return data.tagline;         
        }

    function price () {
        return data.price ; 
    }

    // On crée un élément article qui contiendra les données d'un photographe
    const article = document.createElement( 'article' );

     // On crée la fonction qui contiendra les éléments HTML d'un photographe
    function getUserCardDOM() {
       
       
    // Élément pour la photo de profil
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt" , " photo de profille de " + name );

    // Élément pour le nom du photographe
        const h2 = document.createElement( 'h2' );
        h2.textContent = name() ;
        h2.setAttribute("aria-label", "Nom du photographe ");

    // Élément pour sa localisation
        const p1 = document.createElement( 'p' );
        p1.textContent = city()+', '+ country() ;
        p1.className = "location";
        p1.setAttribute("aria-label", "Localisation du photographe ");
        
    // Élément pour son slogan
        const p5 = document.createElement( 'p' );
        p5.textContent = tagline();
        p5.className = "tagline";
        p5.setAttribute("aria-label", "slogan du photographe ");

     // Élément pour son prix
        const p3 = document.createElement( 'p' );
        p3.className = "price";
        p3.textContent = price()+'€/jour' ;
        p3.setAttribute("aria-label", "Tarif de la prestation par jour ");

        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p5);
        article.appendChild(p3);

    // Et enfin on retourne l'article

        return (article);
    }
 // On retourne les données et la fonction qui contient les éléments HTML d'un photographe
    return { name,price, getUserCardDOM ,city,country, tagline}
}