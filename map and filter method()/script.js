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


let mobiles = [
        {                    
          companyName: "Iphone",
          Model: "Iphone X",
          Ram: "3 GB",
          Rom: "64 GB",
          Price: "$218",
        },
        {
          companyName: "Iphone",
          Model: "Iphone 12",
          Ram: "4 GB",
          Rom: "128 GB",
          Price: "$799",
        },
        {
          companyName: "Iphone",
          Model: "Iphone 13",
          Ram: "4 GB",
          Rom: "128 GB",
          Price: "$1699",
        },
        {
          companyName: "Samsung",
          Model: "Galaxy Note 5",
          Ram: "4 GB",
          Rom: "32 GB",
          Price: "$101",
        },
        {
          companyName: "Samsung",
          Model: "Galaxy Note 8",
          Ram: "6 GB",
          Rom: "64 GB",
          Price: "$419",
        },
        {
          companyName: "Samsung",
          Model: "Galaxy S22",
          Ram: "8 GB",
          Rom: "128 GB",
          Price: "$799",
        },
        {
          companyName: "Oppo",
          Model: "Reno 8",
          Ram: "8 GB",
          Rom: "128 GB",
          Price: "$399",
        },
        {
          companyName: "Oppo",
          Model: "A36",
          Ram: "8 GB",
          Rom: "256 GB",
          Price: "$353",
        },
        {
          companyName: "Oppo",
          Model: "K10",
          Ram: "6 GB",
          Rom: "128 GB",
          Price: "$220",
        },
        {
          companyName: "Google",
          Model: "Pixel 6",
          Ram: "8 GB",
          Rom: "128 GB",
          Price: "$599",
        },
        {
          companyName: "Google",
          Model: "Pixel 7",
          Ram: "8 GB",
          Rom: "128 GB",
          Price: "$400",
        },
        {
          companyName: "Google",
          Model: "Pixel 8",
          Ram: "8 GB",
          Rom: "256 GB",
          Price: "$600",
        },
        {
          companyName: "Infinix",
          Model: "Smart 6",
          Ram: "2 GB",
          Rom: "32 GB",
          Price: "$102",
        },
        {
          companyName: "Infinix",
          Model: "Hot 11",
          Ram: "4 GB",
          Rom: "64 GB",
          Price: "$128",
        },
        {
          companyName: "Infinix",
          Model: "Note 11",
          Ram: "6 GB",
          Rom: "128 GB",
          Price: "$229",
        },
        {
          companyName: "Xiaomi",
          Model: "Redmi 10",
          Ram: "4 GB",
          Rom: "64 GB",
          Price: "$173",
        },
        {
          companyName: "Xiaomi",
          Model: "Redmi Note 10",
          Ram: "4 GB",
          Rom: "128 GB",
          Price: "$182",
        },
        {
          companyName: "Xiaomi",
          Model: "Redmi K50",
          Ram: "8 GB",
          Rom: "128 GB",
          Price: "$368",
        },
]
