


addEventListener('DOMContentLoaded', function(){
    var gallerybox1 = document.querySelector('.gallery-box1');
    var gallerybox2 = document.querySelector('.gallery-box2');
    var name1 = document.querySelector('.product-name1');
    var name2 = document.querySelector('.product-name2');

    gallerybox1.addEventListener('mouseover', function() {
        name1.classList.add('hide');
    });

    gallerybox1.addEventListener('mouseout', function() {
        name1.classList.remove('hide');
    });

    gallerybox2.addEventListener('mouseover', function() {
        name2.classList.add('hide');
    });

    gallerybox2.addEventListener('mouseout', function() {
        name2.classList.remove('hide');
    });
    //Slider krzesła

    var leftarrow = document.querySelector('.left-arrow');
    var rightarrow = document.querySelector('.right-arrow');
    var slideimg = document.querySelector('.slideimg');
        slideimg.classList.add('slider');
    var list = slideimg.querySelector('ul').children;
    var index = 0;
        list[index].classList.add('visible');

    rightarrow.addEventListener('click', function(){

        list[index].classList.remove('visible');
        index += 1;
        if(index > 2) {
            index = 0;
        }
        list[index].classList.add('visible');
});

    leftarrow.addEventListener('click', function(){

        list[index].classList.remove('visible');
        index -= 1;
        if(index < 0) {
            index = 0;
        }
        list[index].classList.add('visible');
});
// wybor krzeseł (dropdown list)
// dotyczy rodzaju krzesła
var arrowtype = document.querySelector('.arrow-type');
var listtype = document.querySelector('.chair-list');
var listitems = document.querySelector('.chair-list').children;
var twojFotel = document.querySelector('.title');
var price = document.querySelector('h4.value');
var cena = document.querySelector('.sum');
var suma = 0;

arrowtype.addEventListener('click', function(){
    listtype.classList.toggle('visible');
    });

    for(var i = 0; i < listitems.length; i++) {
        listitems[i].addEventListener('click', function() {

            twojFotel.innerText = this.innerText;
            price.innerText = this.dataset.price;
            listtype.classList.toggle('visible');
            suma += parseFloat(this.dataset.price);
            cena.innerText = suma + "zł";

        });
}
// dotyczy coloru krzesła
var arrowcolor = document.querySelector('.arrow-color');
var listcolor = document.querySelector('.color-list');
var colors = document.querySelector('.color-list').children;
var color = document.querySelector('.panel_right span.color');
var kolor = document.querySelector('.panel_left span.color');

arrowcolor.addEventListener('click', function(){
    listcolor.classList.toggle('visible');
});
for(var i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function() {
        kolor.innerText = this.innerText;
        color.innerText = "0";
        listcolor.classList.toggle('visible');
    });
}
// dotyczy materiału

var arrowmaterial = document.querySelector('.arrow-material');
var listmaterial = document.querySelector('.material-list');
var materials = document.querySelector('.material-list').children;
var tkanina = document.querySelector('.panel_left span.pattern');
var pattern = document.querySelector('.panel_right span.pattern');

arrowmaterial.addEventListener('click', function(){
    listmaterial.classList.toggle('visible');
});

for(var i = 0; i < materials.length; i++) {
    materials[i].addEventListener('click', function() {
        tkanina.innerText = this.innerText;
        pattern.innerText = this.dataset.price;
        listmaterial.classList.toggle('visible');
        suma += parseFloat(this.dataset.price);
        cena.innerText = suma + "zł";

    });
}
//dotyczy transportu

var checkbox = document.querySelector('#transport');
var transport = document.querySelector('.panel_left span.transport');
var transport_price = document.querySelector('.panel_right span.transport');

checkbox.addEventListener('click', function(){
    if(checkbox.checked) {
        transport.innerText = "Transport";
        transport_price.innerText = checkbox.dataset.transportprice;
        suma += parseFloat(this.dataset.transportprice);
        cena.innerText = suma +"zł";
}
    else {
        transport.innerText = "";
        transport_price.innerText = "";
        suma -= parseFloat(this.dataset.transportprice);
        cena.innerText = suma + "zł";
        }
    })
});
