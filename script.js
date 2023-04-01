let inputFiled = document.getElementById('inputFiled');
let outPutContainer = document.querySelector('.outPutContainer');

inputFiled.addEventListener('input',()=>{
let currentPageUrl= window.location.href;
let inputVal = inputFiled.value;
outPutContainer.innerHTML=`<a href="${currentPageUrl}/tel:${inputVal}">Call Us By ${inputVal}</a>`;
});