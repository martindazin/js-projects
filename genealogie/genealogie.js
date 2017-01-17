// Giving a value to "pseudo"
const pseudoElt = document.getElementById('name');
pseudoElt.value = 'My name';

let JSONTab = [];
let JSONFile = {};
console.log(JSONFile);


let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const liElt = document.createElement('li');
    liElt.textContent = pseudoElt.value;
    document.getElementById('tree').appendChild(liElt);

    const liElts = document.getElementsByTagName('li');

    
    const selectElt = document.createElement('select');

    // let pElt = document.createElement('p');


    if (liElts.length === 1) {


        // pElt.id = 'selector';
        // console.log(pElt);
        // pElt.innerHTML = 'est ';

        // Change it !
        document.getElementById('formElements').insertAdjacentHTML('afterend', '<p id="selector"></<p>');
        
        
        selectElt.id = 'mySelect';

        const optionElt = document.createElement('option');

        optionElt.text = liElt.textContent;




        // document.getElementById('mySelect').appendChild(optionElt);
        
        selectElt.add(optionElt);

        // Creating the select before the submit button
        // document.querySelector('form').insertBefore(selectElt, document.getElementById('submit'));
        document.getElementById('selector').appendChild(selectElt);

        // pElt.innerText = ' avec ';

        
    
    }

    const selectElts = document.getElementsByTagName('option');

    if (liElts.length >= 2 ) {

        let selectElt = document.getElementById('mySelect');

        // selectElt.id = 'mySelect';

        const optionElt = document.createElement('option');

        optionElt.text = liElt.textContent;

        selectElt.add(optionElt);
    }

    

    console.log(selectElts);

    // if (selectElts)

    // console.log(liElts);

    // for (let i = 0; i < liElts.length; i++) {
        // console.log(liElts[i].innerText);
    // }
});

