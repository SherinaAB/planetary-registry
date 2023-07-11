import React from "react"
import Planet from "./Planet"

function PlanetList({planets}) {
    console.log(planets)
    //creating const to reference all items in the array from the planet component
    const planetList = planets.map((planet) =>{
        return<Planet key={planet.id} planet={planet}/>
   
    // or could do 
// return<Planet key={planet.id} name={planet.name} rotation_period={planet.rotation_period} etc... with all items in the array />
     })

    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {planetList} //always call the const here though
                //instead of creating above const planetList =planets.map...you could create down here where it is referencing the arrays
                {
                    planets.map(planet => {
                    return <Planet key={planet.name} planet={planet}/>
                    })
                }
                {/** Render a list of <Planet> components here. */}
            </tbody>
        </table>
    );
}

export default PlanetList;