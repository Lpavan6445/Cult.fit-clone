async function getData(input,divsec){
        // var response =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        // var data = await response.json();
        // console.log(divsec,data.meals);
        // showProd(data.meals,divsec)
        var response = await axios.get(`https://cult-fit-clone-w13.herokuapp.com/store/${input}`)
        console.log(response.data);
        showProd(response.data,divsec)
}
 
export {mendata}