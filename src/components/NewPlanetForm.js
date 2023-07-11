import React, {useState} from "react";
import {v4 as uuid} from "uuid";

function NewPlanetForm({addNewPlanet}) {
    const [name, setName] = useState("")
    const [population, setPopulation] = useState("")
    const [climate, setClimate] = useState("")
    const [terrain, setTerrain] = useState("")

    function handleSubmit (event) {
        event.preventDefault()
       //making it dynamic:
        const formElement = event.target

        const planetData = { //created to target the attributes below for the event
            id: uuid(),  //use UUID as imported above to reference id 
            name: formElement["name"].value,    //use hard brackets to target the below form attributes
            climate: formElement["climate"].value,
            terrain: formElement["terrain"].value,
            population: formElement["population"].value
            
        }
        //fetch again so thaat we can POST, the other one is for the GET request  POST WILL ALWAYS FETCH IN THIS FORMAT
        fetch("http://localhost:8085/planets",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(planetData)  //UTILIZE THE CONST VARIABLE FROM THE ATTRIBUTE RENDERING LIST
            //the JSON.stringify returns a response and ".then" (below) convert into readable file in the .then
        })
        // dynamic event code w/ using id (us npmjs.com uuid) ....THEN ADD .thens like regular fetching
        .then(response => response.json())
        .then(data => addNewPlanet(data))

        formElement.reset()
    }

    return(
        <form onSubmit = {handleSubmit}>  
        {/* if using long format you have to add to each attribute in the form "adding value={name} onChange={(e) => setName(e.target.value)}" */}
            <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" name="climate" placeholder="Climate" value={climate} onChange={(e) => setClimate(e.target.value)}/>
            <input type="text" name="terrain" placeholder="Terrain"value={terrain} onChange={(e) => setTerrain(e.target.value)}/>
            <input type="text" name="population" placeholder="Population" value={population} onChange={(e) => setPopulation(e.target.value)}/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;