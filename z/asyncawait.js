async function getData(){
    try{
        const response = await fetch('https://www.cleartrip.com/offermgmt/popular_destinations/index.json?trips=popular_destinations');
        const countrieList = await response.json();
        return countrieList;
    }catch(e){  
        throw e;
    }
}
getData().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})