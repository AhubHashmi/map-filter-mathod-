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

const arr = ["z", "s", "a", "abc"];
arr.map(function(e, i){
console.log(e);
})

let a = [{category : 'A'}];
let b = a.filter(function(x, i){
if(x.category == "A") {
console.log(b);
    x.in = i;
    return x;
}
});
