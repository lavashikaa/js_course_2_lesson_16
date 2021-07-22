let liList  = document.querySelectorAll('#list li');
let ul  = document.querySelector('#list');
// let parentOfUl = document.querySelector('.row');
console.log(liList)


// parentOfUl.onclick = function () {
//     alert('Всыплываю 2')
// }
//
// ul.onclick = function () {
//     alert('Всыплываю 1')
// }


liList.forEach(function (item) {

    item.onclick = function(e) {
        alert(e.target.innerHTML)
    }

})


ul.addEventListener('click', function (event) {
    // console.log(event);
    // console.log(event.target);
    alert(event.target.innerHTML)
})