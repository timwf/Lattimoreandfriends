
//hoverstate - point right
export const handleMouseHoverRight = () => {
  var cursor = document.getElementsByClassName('mouse-cursor')  
  cursor[0].classList.add('active')    
};

//hoverstate - exit
export const handleMouseHoverExit = () => {
  var cursor = document.getElementsByClassName('mouse-cursor')  
  cursor[0].classList.remove('active')    
  cursor[0].classList.remove('left-active')
};

//hoverstate - point left
export const handleMouseHoverLeft = () => {
  var cursor = document.getElementsByClassName('mouse-cursor')  
  cursor[0].classList.add('left-active')    
};





  
