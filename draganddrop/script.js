// console.log('hello world')
const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
const div3 = document.getElementById('div3')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')

const imgDragStart = (e) => {
    console.log(e.target.id + ' drag start');
    e.dataTransfer.setData('imageid', e.target.id);
}

const divDragOver = (e) => {
    e.preventDefault();
    // because default behavious is that dragover prevents objects to be dropped!
    console.log(e.target.id + ' drag over');
    
}

const divDrop = (e) => {
    e.preventDefault();
    const imgDropped = document.getElementById(e.dataTransfer.getData('imageid'));
    const oldParent = imgDropped.parentElement;
    console.log(imgDropped.id + ' dropped into ', e.target.id);

    let parent = e.target;
    if(parent.tagName !== 'DIV') parent = parent.parentElement;
    const secondImg = parent.querySelector('img')

    parent.appendChild(imgDropped);
    oldParent.appendChild(secondImg);
}
// img1.ondragstart

img1.ondragstart = imgDragStart;
img2.ondragstart = imgDragStart;
img3.ondragstart = imgDragStart;


// div.ondragover, div.ondrop
div1.ondragover = divDragOver;
div2.ondragover = divDragOver;
div3.ondragover = divDragOver;

div1.ondrop = divDrop;
div2.ondrop = divDrop;
div3.ondrop = divDrop;


