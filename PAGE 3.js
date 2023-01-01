var course = document.querySelector('.course');

function creationCours(path, titre, prix) {
    course.innerHTML += "<div class=\"col-3 card me-2 mb-2\"><img src=\"" + path + "\" alt=\"\" class=\"card-img\"> <p class=\"card-title\">" + titre + " </p><span class=\"card-text\">" + prix + "</span></div>";
}


function creationCours2(path, titre, prix) {
    
    let div = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');

    div.setAttribute('class', 'col-3 card me-2 mb-2');
    img.src = path;
    img.setAttribute('class', 'card-img');
    p.setAttribute('class', 'card-title');
    span.setAttribute('class', 'card-text');

    p.appendChild(document.createTextNode(titre));
    span.appendChild(document.createTextNode(prix));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    course.append(div)
}



courses.forEach((element) => {
    creationCours2(element.image, element.title, element.price)
})
document.getElementById('priceV').oninput = function()
{
var priceV = document.getElementById("priceV").value; 
document.getElementById("priceValue").innerHTML = "Value :" + priceV + "$";
}
