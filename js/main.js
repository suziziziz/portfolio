function classAdd( element, name = '' ) {
  let _attr = element.getAttribute('class');
  if ( _attr.includes(name) ) return;
  let _attr_arr = _attr.split(' ');
  _attr_arr.push(name);
  let _attr_str = _attr_arr.toString();
  while ( _attr_str.indexOf(',') !== -1 ) {
    _attr_str = _attr_str.replace(',', ' ');
  }
  element.setAttribute('class', _attr_str);
}
function classRemove( element = document.body, name = '' ) {
  let _attr = element.getAttribute('class');
  if ( !_attr.includes(name) ) return;
  let _attr_arr = _attr.split(' ');
  _attr_arr.splice(_attr_arr.indexOf(name), 1)
  let _attr_str = _attr_arr.toString();
  while ( _attr_str.indexOf(',') !== -1 ) {
    _attr_str = _attr_str.replace(',', ' ');
  }
  element.setAttribute('class', _attr_str);
}

function fadeText( view_top ) {
  let els = document.getElementsByClassName('step');
  for ( let i = 0; i < els.length; i++ ) {
    if ( view_top >= els[i].offsetTop - 8 && view_top < els[i].offsetTop + 8 ) {
      classAdd(els[i], 'scroll-inside');
    } else {
      classRemove(els[i], 'scroll-inside');
    }
  }
}


function handlerScroll() {
  let view_top = document.body.getBoundingClientRect().top * -1;
  fadeText(view_top);

  if ( view_top <= 0 ) {
    classAdd(document.getElementById('back-to-top'), 'hide')
  } else {
    classRemove(document.getElementById('back-to-top'), 'hide')
  }
}
handlerScroll();
window.addEventListener('scroll', handlerScroll);

function updateCssViewVars() {
  let root = document.documentElement;
  let gui  = document.getElementById('gui');
  root.style.setProperty('--vh', `${gui.offsetHeight}px`);
  root.style.setProperty('--vw', `${gui.offsetWidth}px`);
}
updateCssViewVars();
window.addEventListener('resize', updateCssViewVars);