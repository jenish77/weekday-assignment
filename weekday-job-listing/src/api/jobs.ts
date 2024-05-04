const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
export async function getJobs(){
    const body = JSON.stringify({
        "limit": 10,
        "offset": 0
    });
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
    };
   const response =await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
   
    return response.json()
    

}

