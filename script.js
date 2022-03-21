let claNote = document.getElementsByName("option");
a = document.getElementById("note");
let form= document.createElement('form');
let label =document.createElement('label');
label.textContent="Liste des notes classiques";
form.append(label);
let select=document.createElement('select');
// tableau des notes classiques
let amNotes = ["", "do", "re", "mi", "fa", "sol", "la", "si"];

for (i = 0; i < amNotes.length; i++) {
    option = document.createElement("option");
    option.id = amNotes[i];
    option.innerText = amNotes[i];
    select.appendChild(option);
}
form.appendChild(select);
document.getElementById('main').appendChild(form);
//select.onselect
