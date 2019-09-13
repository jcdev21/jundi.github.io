var kata = 'Jundi';
var inKata = 0;
var kecepatan = 1000;

function tampilHeader() {
    setTimeout(() => {
        let target = document.getElementById('jundi');
        let textNode = document.createTextNode(kata[inKata]);
        target.appendChild(textNode);
        inKata++;
        if (inKata < 6) {
            tampilHeader();
        } else {
            inKata = 0;
            target.innerHTML = '';
            tampilHeader();
        }
    }, kecepatan);
}

tampilHeader();

// var profil = document.getElementById('profil-content');
// profil.addEventListener("click", (e) => {

//     let scrolled = document.scrollingElement.scrollTop;
//     let position = profil.offsetTop;

//     scrolled = position - 400;
    
//     // if(scrolled > position + 100){
//     //   content.classList.add(
//     //     'curtain-in');
//     //   }
//   });
