const form = document.querySelector('form');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    form.elements.query.value = "";
    const config = {params: {q: searchTerm}};
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config);
    makeImages(res.data);
})

const makeImages = shows => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img); 
        }
    }
}

form.addEventListener('submit', function () {
    deleteImgs();
})

const deleteImgs = () => {
    const images = document.querySelectorAll('img');
    for(let img of images){
    img.remove();
    }
}