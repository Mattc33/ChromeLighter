
//contextMenuItem object
var contextMenuItem = {
    "id": "highlightSelection",
    "title": "Click to Highlight",
    "contexts": ["selection"]
}

chrome.contextMenus.create(contextMenuItem);

function highLightSelection(){
    console.dir(this.text);
}

//listening to the click event on the context menu
chrome.contextMenus.onClicked.addListener(highLightSelection);
