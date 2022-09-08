let mobiles = {
    mobileName: 'samsung',
    mobileModel: {
        modelName: 's4',
    }
};

let mobileName = document.getElementById("mobileName");
let model = document.getElementById("mobileModel");

function searchVal() {
    let res = mobiles[mobileName.value][mobileModel.value];
    console.log(res);
}

function fillMainKeys() {
    let mainKeys = Object.keys(mobiles);
    mobileName.innerHTML = "";
    for (var i = 0; i < mainKeys.length; i++) {
        mobileName.innerHTML += `<option>${mainKeys[i]}</option>`;
    }
}
fillMainKeys();

function fillNestedDropDown() {
    mobileModel.disabled = false;
    let nestedKeys = Object.keys(mobiles[mobileName.value]);

    mobileName.innerHTML = "";
    for (var i = 0; i < mainKeys.length; i++) {
        mobileName.innerHTML += `<option>${mainKeys[i]}</option>`;
    }
    console.log(nestedKeys);
}