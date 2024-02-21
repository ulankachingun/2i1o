const names=[];
//const nam=[];

function FistFunction(){
    let box='';
    
    for(let i=0; i < names.length; i++){
        box+='<p class="red">' +'Bat:' + names[i]+"<br>";
        console.log(i,": ",box);
    }
    document.getElementById('list').innerHTML=box;
}
function SecondFunction(){
    let box2='';
    
    for(let i=0; i < names.length; i++){
        box2+='<p class="red">' +'Dorj:' + names[i]+"<br>";
        console.log(i,": ",box2);
    }
    document.getElementById('list').innerHTML=box2;
}

function S1(){
let newName = document.getElementById('bat').value;
names.push(newName);
// console.log(newName)
FistFunction()
}

function S2(){
    let dorj = document.getElementById('dorj').value;
    names.push(dorj);
    // console.log(dorj)
    SecondFunction()
    }
    