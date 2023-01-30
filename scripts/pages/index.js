    async function getPhotographers() {
        // Récupèration des données Json
  const photographers = await fetch('./data/photographers.json')
  // Extraction des données
  const data = await photographers.json()
  console.log(JSON.stringify(data))

  // Affichage des données extraites
  return { photographers: data.photographers }

}

    async function displayData(photographers) {
        
        const photographersSection = document.querySelector(".photographer_section");
         // Sélection du querySelector pour afficher les données
        photographers.forEach((photographer) => {

            const photographerModel = photographerFactory(photographer);

              // On récupère la carte d'un photographe qui correspond à ses éléments HTML
            const userCardDOM = photographerModel.getUserCardDOM();
            
              // Puis on l'ajoute à la section des photographes
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
