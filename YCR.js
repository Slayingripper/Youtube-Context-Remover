//remove element by id
function removeElement(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
}
removeElement('clarify-box');



//get element by name
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

removeElementsByClass('ytd-clarification-renderer');
removeElementsByClass('style-scope ytd-item-section-renderer')
