class DragAndDrop {
  constructor(elementSelector) {
    this._elements = document.querySelectorAll(elementSelector);

    if(this._elements.length > 1) this._elements.forEach(el => this._dragAndDrop(el));
    else if(this._elements.length == 1) this._dragAndDrop(this._elements[0]);

  }

  _dragAndDrop(element) {
    element.addEventListener('mousedown', (e) => {
      const target = e.currentTarget;
      target.style.position = 'absolute';
      const offsetX = e.clientX - target.getBoundingClientRect().left;
      const offsetY = e.clientY - target.getBoundingClientRect().top;
    
      document.addEventListener('mousemove', moveMouse);
      document.addEventListener('mouseup', () => document.removeEventListener('mousemove', moveMouse));
    
      function moveMouse(e){
        let x = e.pageX - offsetX;
        let y = e.pageY - offsetY;
    
        target.style.top =  y + 'px';
        target.style.left = x + 'px';
      }
    });
  }
}
export default DragAndDrop;