const elemHouses = document.getElementsByClassName ("houses")[0];
const elemGallery = document.getElementsByClassName ("gallery-viewport")[0];
const elemPrev = document.getElementsByClassName ("arrow-prev")[0];
const elemNext = document.getElementsByClassName ("arrow-next")[0];
const elemNavBar = document.getElementsByClassName ("nav-bar")[0];
const elemNavPos = document.getElementsByClassName ("nav-pos")[0];
const elemNavigation = document.getElementsByClassName ("navigation")[0];

const compStyleHouses = getComputedStyle(elemHouses);
const compStyleGallery = getComputedStyle(elemGallery);
const compStyleNavBar = getComputedStyle(elemNavBar);
const compStyleNavPos = getComputedStyle(elemNavPos);
const compStyleNavigation = getComputedStyle(elemNavigation);

const getFullWidth = (element) => {
    let res = 0;
    let cs;
    const lastIdx = --element.children.length;
    for (let idx = 0; idx <= lastIdx; idx++) {
        cs = getComputedStyle(element.children[idx]);
        res += (parseInt(cs.width) + ((idx===0)?0:parseInt(cs.marginLeft)) + ((idx===lastIdx)?0:parseInt(cs.marginRight)));  
    };
    return res;
}

let fullHousesWidth = getFullWidth (elemHouses);
let viewPortWidth = parseInt(compStyleGallery.width);
let curHousesMargin = parseInt (compStyleHouses.marginLeft);
let maxHousesMargin = parseInt(compStyleNavigation.paddingLeft);
let minHousesMargin = viewPortWidth - fullHousesWidth - maxHousesMargin;
let curNavBarWidth = parseInt (compStyleNavBar.width);
let curNavPosWidth = curNavBarWidth * (viewPortWidth - 2 * maxHousesMargin) / fullHousesWidth;

function scrollHouses (delta) {
    // console.log(`try delta ${delta}\tcurMargin:${curHousesMargin}\tviewPortWidth:${viewPortWidth}`)
    if ((delta > 0)&&(curHousesMargin + delta >= maxHousesMargin)) {
        delta = maxHousesMargin - curHousesMargin;
        // console.log(`1 change delta to ${delta}`)
    }
    else if (curHousesMargin + delta <= minHousesMargin) {
        delta = minHousesMargin - curHousesMargin; 
        // console.log(`2 change delta to ${delta}`)
    }
    elemHouses.style.marginLeft = curHousesMargin + delta;
    curHousesMargin = parseInt (compStyleHouses.marginLeft);
    showNavigation ();
}

function showNavigation () {
    curNavPosWidth = curNavBarWidth * (viewPortWidth - 2 * maxHousesMargin) / fullHousesWidth;
    elemNavPos.style.width = curNavPosWidth;
    maxDeltaScroll = 2 * maxHousesMargin + (fullHousesWidth - viewPortWidth);
    curDeltaScroll = maxDeltaScroll - (curHousesMargin - minHousesMargin);
    elemNavPos.style.left = (curNavBarWidth - curNavPosWidth) * curDeltaScroll / maxDeltaScroll;
    elemPrev.classList.toggle ("disabled", curHousesMargin >= maxHousesMargin);
    elemNext.classList.toggle ("disabled", curHousesMargin <= minHousesMargin);
}

function showInfo () {
    console.log ('--------------------------------------');
    console.log (`gallery`);
    // console.log (compStyleGallery);
    // console.log (`\tleft: ${compStyleGallery.left}`);
    console.log (`\tmarginLeft: ${compStyleGallery.marginLeft}`);
    console.log (`\tmarginRight: ${compStyleGallery.marginRight}`);
    console.log (`\twidth: ${compStyleGallery.width}`);
    // console.log (`\tmarginLeft: ${elemGallery.style.marginLeft}`);
    // console.log (`\toffsetLeft: ${elemGallery.offsetLeft}`);
    // console.log (`\toffsetWidth: ${elemGallery.offsetWidth}`);
    console.log (`\tscrollLeft: ${elemGallery.scrollLeft}`);
    console.log (`\tscrollWidth: ${elemGallery.scrollWidth}`);
    console.log (`houses`);
    // console.log (compStyleHouses);
    // console.log (`\tleft: ${compStyleHouses.left}`);
    console.log (`\tmarginLeft: ${compStyleHouses.marginLeft}`)
    console.log (`\tmarginRight: ${compStyleHouses.marginRight}`)
    console.log (`\twidth: ${compStyleHouses.width}`);
    // console.log (`\toffsetLeft: ${elemHouses.offsetLeft}`);
    // console.log (`\toffsetWidth: ${elemHouses.offsetWidth}`);
    console.log (`\tscrollLeft: ${elemHouses.scrollLeft}`);
    console.log (`\tscrollWidth: ${elemHouses.scrollWidth}`);
}

elemNext.addEventListener ('click', () => {
    scrollHouses (-120);
//    showInfo();
});
elemPrev.addEventListener ('click', () => {
    scrollHouses (120);
//    showInfo();
});

window.onresize = () => {
    viewPortWidth = parseInt(compStyleGallery.width);
    curHousesMargin = parseInt (compStyleHouses.marginLeft);
    maxHousesMargin = parseInt(compStyleNavigation.paddingLeft);
    minHousesMargin = viewPortWidth - fullHousesWidth - maxHousesMargin;
    curNavBarWidth = parseInt (compStyleNavBar.width);
    curNavPosWidth = curNavBarWidth * (viewPortWidth - 2 * maxHousesMargin) / fullHousesWidth; 
    console.log ('resize');   
    showNavigation ();
};

//console.log(elemHouses);
//showInfo();
//console.log(`computed width ${getFullWidth(elemHouses)}`);
showNavigation ();