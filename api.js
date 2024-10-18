async function obteneranimales() {
    try {
        const res = await fetch (`https://api.api-ninjas.com/v1/animals?name=${document.getElementById("nombre").value}`, {
            headers: {'X-Api-Key': 'f1xBvCB/u5fdO57yUqF+5w==MxjIztde4qdyIW98'}
        })
        const animales = await res.json()
        console.log(animales)
        document.getElementById("contenido").innerHTML = ("")
        animales.forEach(animal => {
            document.getElementById("contenido").innerHTML += (`<h1 id="nombreanimal">${animal.name}</h1>
                <h1 id="titular">Taxonomía</h1>
                <h2>Familia: ${animal.taxonomy.family}</h2>
                <h2>Clase: ${animal.taxonomy.class}</h2>
                <h2>Orden: ${animal.taxonomy.order}</h2>
                <h2>Nombre científico: ${animal.taxonomy.scientific_name}</h2>
                <h1 id="titular">Localizaciones</h1>
                <h2>${animal.locations}</h2>
                <h1 id="titular">Características</h1>
                <h2>Dieta: ${animal.characteristics.diet}</h2>
                <h2>Hábitat: ${animal.characteristics.habitat}</h2>
                <h2>Estilo de vida: ${animal.characteristics.lifestyle}</h2>
                <h2>Población estimada: ${animal.characteristics.estimated_population_size}</h2>
                <h2>Depredadores: ${animal.characteristics.predators}</h2>`
        )})
    } catch (error) {
        console.error("error al obtener los animales:", error)
        document.getElementById("contenido").innerHTML=`<h1>ESCRIBÍ ALGO GIL</h1>`
    }
}
