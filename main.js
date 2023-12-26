console.log("test main");

//varType varName = source
const endpoint = "https://reqres.in/api/users";

//USING 'THEN' >> GET-METHOD
/* fetch(endpoint)
    .then((data) => data.json()) //must json format
    .then((result) => console.log(result.data))*/ //if hit source only, use 'result', if hit data source, can add .data or etc.

//Another techniques
/*.then((result) => result.json())
    .then(({data}) =>  console.(data))*/ //>> this same = .then((data) =>  console.(data.data)) ... result at data on data
//====================================================================================

//====================================================================================
//USING 'ASYNC AWAIT >> GET-METHOD
/*async function hitAPI(){
    const api = await fetch(endpoint)
    const { data } = await api.json()
    console.log(data)
}

hitAPI();*/ //>>call function
//====================================================================================


