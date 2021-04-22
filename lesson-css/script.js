document.querySelectorAll("*").forEach ((element) => {

    element.addEventListener ("click", ()=>{
        console.log (`погружение ${element.tagName}[${element.className}]`)
    }, true);

    element.addEventListener ("click", ()=>{
        console.log (`всплытие ${element.tagName}[${element.className}]`)
    });
});