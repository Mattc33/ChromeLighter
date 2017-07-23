//contextMenuItem object
var contextMenuItem = {
    "id": "highLightSelection",
    "title": "Click to Highlight",
    "contexts": ["selection"]
}

chrome.contextMenus.create(contextMenuItem);

//listening to the click event on the context menu
chrome.contextMenus.onClicked.addListener(highLightSelection);


function highLightSelection(){
     $('a').css("background-color", "yellow";)
     //console.log("working");
}
