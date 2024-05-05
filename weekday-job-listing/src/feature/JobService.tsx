
// const getJobList= async () => {     
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     const body = JSON.stringify({
//         "limit": 9,
//         "offset": 0
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body
//     };
//     const response =await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
//     return response.json()
// };

// const jobService = {        
//     getJobList
// };

// export default jobService;



const getJobList = async (offset: number, limit: number) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const body = JSON.stringify({
      "limit": limit,
      "offset": offset
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };
  
    const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);

    return response.json();
  };
  
  export default { getJobList };
  