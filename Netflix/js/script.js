console.log('hello world')

const tab1 = document.querySelector("#tab-1");
const tab2 = document.querySelector("#tab-2");
const tab3 = document.querySelector("#tab-3");

const tabcontent1 = document.querySelector("#tab-content-1");
const tabcontent2 = document.querySelector("#tab-content-2");
const tabcontent3 = document.querySelector("#tab-3-content");


const Tabs = [tab1, tab2, tab3]
const TabsContent = [tabcontent1, tabcontent2, tabcontent3]

function handleClick(e) {

    switch(e.target.className){
        case "fas fa-door-open fa-3x":
                tab1.style.color="#fff"
                tab2.style.color="#999"
                tab3.style.color="#999"
                tabcontent1.style.display = "initial";
                tabcontent2.style.display = "none";
                tabcontent3.style.display = "none";
                break;
        case "fas fa-tablet-alt fa-3x":
                tab1.style.color="#999"
                tab2.style.color="#fff"
                tab3.style.color="#999"
                tabcontent1.style.display = "none";
                tabcontent2.style.display = "initial";
                tabcontent3.style.display = "none";
                break;
        case "fas fa-tags fa-3x":
                tab1.style.color="#999"
                tab2.style.color="#999"
                tab3.style.color="#fff"
                tabcontent1.style.display = "none";
                tabcontent2.style.display = "none";
                tabcontent3.style.display = "initial";
                break;
        }
}

Tabs.forEach(tab => {
    tab.addEventListener('click', handleClick)
})


// .tabs .container > div:hover {
//    color:#fff;