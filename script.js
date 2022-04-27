

// tableau des notes classiques

const notAmerique = ['', 'c', 'd', 'e', 'f', 'g', 'a', 'b'];


notAmerique.forEach(element => {
    let option = document.createElement('option');
    option.innerHTML = element;
    document.getElementById('notesAmeriques').appendChild(option);
});
let selectNC = document.getElementById('notesClassiques');
selectNC.addEventListener('change', function () {
    for (var i = 0; i < selectNC.length; i++) {
        if (selectNC[i].selected == true) {

            let selectNA = document.getElementById('notesAmeriques');
            selectNA[i].selected = true;

            let res = document.getElementById('res');
            res.textContent = 'La notation americaine pour ' + selectNC[i].value + ' est ' + selectNA[i].value;
        }

    }

})
