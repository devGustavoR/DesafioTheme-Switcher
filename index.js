const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change',()=>
{
  document.body.classList.toggle('dark');
  document.text.classList.toggle('dark2');
});