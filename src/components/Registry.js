import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
   
    //add const here to reference 
    const [planets, setPlanets]=useState([])
    const [filterText,setFilterText] = useState('')
    //create useEffect to reference 

    //FOR GET REQUEST
    useEffect(()=> {
        fetch("http://localhost:8085/planets")
        .then (response => response.json())
        .then(data => setPlanets(data))
    },[])

    console.log(planets)

    function addNewPlanet(newPlanet){
        setPlanets([...planets, newPlanet])
    }

        // setting state to whatever information we provide to in the search box then add an onChange to call the value and then pass it to the callback functiion
        //then pass it down as prop in return
    function onFilterText(text){
        setFilterText(text)
    }
    console.log(filterText)

    const displayPlanets = planets.filter(planet => {
        return(
            planet.name.toLowerCase().includes(filterText.toLowerCase())
            || planet.climate.toLowerCase().includes(filterText.toLowerCase())
            || planet.terrain.toLowerCase().includes(filterText.toLowerCase())
            || planet.population.toLowerCase().includes(filterText.toLowerCase())
        )
    })

    return(
        <div className="registry">
            <Search onFilterText = {onFilterText}/>
            <div className="content">
                <PlanetList planets = {displayPlanets}/>
                <NewPlanetForm addNewPlanet ={addNewPlanet}/>
            </div>
        </div>
    )
}

export default Registry;