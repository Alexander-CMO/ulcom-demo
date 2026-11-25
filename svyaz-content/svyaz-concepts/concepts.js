document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
document.querySelectorAll('.burger').forEach(function(button){
  button.addEventListener('click',function(){
    var nav=button.closest('.head').querySelector('.nav');
    var open=nav.classList.toggle('open');
    button.setAttribute('aria-expanded',String(open));
    button.textContent=open?'×':'☰';
  });
});
