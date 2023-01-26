// run a function when the user presses a key!
const imgNode = document.querySelector('#myImg');
const orangeUrl = 'https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=';
const appleUrl = 'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=';

imgNode.onclick = () => {
    if(imgNode.src === orangeUrl)
        imgNode.src = appleUrl
    else
        imgNode.src = orangeUrl
}

const foo = (e) => {
    console.log('keep running')
    if(e.key == 'a')
        imgNode.src = appleUrl
    else if(e.key == 'o')
        imgNode.src = orangeUrl
}

const foo2 = () => {
    console.log('stop running');
}

// keydown: user pushes down the key
// keyup: user lifts their finger from key

document.addEventListener('keydown', foo)
document.addEventListener('keyup', foo2)

// difference between addEventListener('click', foo) and onClick = foo

// imgNode.addEventListener('click', foo2)
// imgNode.addEventListener('click', foo)

imgNode.onClick = foo;
imgNode.onClick = foo2;


// difference: you can add multiple callbacks using addEventListener but
// using on{event-name} you can only add one callback



