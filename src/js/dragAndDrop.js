class DragAndDrop {
  constructor(elementSelector) {
    this._elements = document.querySelectorAll(elementSelector);
    this._dragAndDrop();
    this._setDraggableFalse();
  }

  _setDraggableFalse() {
    this._elements.forEach(el => el.setAttribute('draggable', false));
  }

  _searchElement(element) {
    let exist = false;
    this._elements.forEach(el => {
      if(el === element) exist = true;      
    });
    return exist;
  }

  _dragAndDrop() {
    document.addEventListener('mousedown', (e) => {
      let target = e.target;
      if(!this._searchElement(target)) return;
      let offsetX = e.clientX - target.getBoundingClientRect().left;
      let offsetY = e.clientY - target.getBoundingClientRect().top;
    
      document.addEventListener('mousemove', moveMouse);
      document.addEventListener('mouseup', () => document.removeEventListener('mousemove', moveMouse));
    
      function moveMouse(e){
        target.style.position = 'absolute';
        let x = e.pageX - offsetX;
        let y = e.pageY - offsetY;
    
        target.style.top =  y + 'px';
        target.style.left = x + 'px';
      }
    });
  }
}
export default DragAndDrop;