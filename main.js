const btn = document.querySelector('.btn');
const wrap = document.querySelector('.wrap');

btn.addEventListener('click', e => {
//e.stopPropagation();
  alert('click btn');
});

wrap.addEventListener('click', e => {
  alert('click wrap');
});

btn.addEventListener('click', e => {
  //e.stopPropagation();
    alert('click btn');
  }, true);
  
  wrap.addEventListener('click', e => {
    alert('click wrap');
  }, true);
  