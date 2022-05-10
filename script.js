function clickMe(button) {
    let element = button.innerText;
    console.log(element);
    console.log(button);
    document.querySelector('.paragraph').innerText = button.innerText;

}

function selectLinks() {
    let oneLink = document.querySelector('.inner-div span .myLink');
    console.log(oneLink);
    let rightLink = document.querySelectorAll('.myLink');
    console.log(rightLink[1]);
}

function manipulateLinks() {
    let link2 = document.querySelector('.drugi-link');
    let link1 = link2.previousElementSibling; //prethodni slican element
    let link3 = link2.nextElementSibling; //slijedeci slicam element

    console.log(link2.innerText);
    console.log(link1.innerText);
    console.log(link3.innerText);

    let links = document.querySelector('.links');
    console.log(links.closest('div'));

    link2.setAttribute('href', 'https://www.meraba.com'); //postavlja nove atribute elementu

    console.log(link2.getAttribute('data-test')); //uzeli smo vrijednost atributa data-test iz html elementa
    link2.removeAttribute('data-test'); //ovako brišemo atribut i njegovu vrijednost iz elementa
}

function testing(testing) {
    let mainDiv = document.querySelector('.mainDiv');
    mainDiv.innerHTML = '<span>klikni ovaj link: <a href="#"></span>'
    console.log(testing);
    //na ovaj se nacin isto moze napraviti element ali je vise
    //preporucljivo koristiti createElement i appendChild
}

function validation() {
    /*let inputVal = document.querySelector('#email');
    let value = inputVal.value;
    let valueOfAt = value.indexOf('@');
    let valueOfAtPlus = value.indexOf('@') + 1;
    let valueOfFullStop = value.indexOf('.');
    
    console.log(valueOfAt, valueOfFullStop);
    //console.log(value.substring(valueOfAt));
    //console.log(value.substring(valueOfFullStop));
    if(valueOfAt > 1 && valueOfFullStop > valueOfAt
        && valueOfAt < valueOfAtPlus 
        && valueOfFullStop + 1> valueOfAtPlus) {
        console.log('The email is valid!');
    }
    else if(value == ''){
        console.log('You must write something!');
    }
    else {
        console.log('Invalid data!');
    }

    let valueOfBetween = value.substring(valueOfAt + 1, valueOfFullStop);
    let valueBeforeAt = value.substring(0, valueOfAt);
    let valueAfterFullStop = value.substring(valueOfFullStop + 1);
*/

let inputVal = document.querySelector('#email');
let value = inputVal.value;

if(value != ''){
    if(value.includes('@') && value.includes('.')){

        let valueAt = value.indexOf('@');
        let beforeAt = value.substring(0, valueAt);//substring je brojanje između

        if(0 < beforeAt.length){ //vrijednost prije @

            let valueFullStop = value.indexOf('.');
            let valueOfBetween = value.substring(valueAt + 1, valueFullStop); //vrijednost između @ i .

            if(valueOfBetween.length > 2) { //vrijednost između @ i . mora biti veća od 2
                
                let afterFullStop = value.substring(valueFullStop + 1); //vrijednost poslije .

                    if(afterFullStop.length > 2){ //vrijednost poslije . mora biti veća od 2
                        console.log();
                    }
                    else {
                        console.log('Invalid mail!');
                    }
            }
            else {
            }
        }
        else {
        }
    }
    else {
        console.log('Email must include special characters like @ nad . !');
    }
}
else {
    console.log('Write your email!');
}

}