const content = document.querySelector('.content')
const cover = document.querySelector('.cover')

let currentElem = null;

content.addEventListener('mouseover', event => {
  if (currentElem) return;
  let target = event.target.closest('li');
  if (!target) return;
  if (!content.contains(target)) return;
  currentElem = target;
  console.log(currentElem)
  currentElem.style.color = 'white';
  elemComp = window.getComputedStyle(currentElem)
  cover.style.width = elemComp.getPropertyValue('width')
  cover.style.height = elemComp.getPropertyValue('height')
  coord = currentElem.getBoundingClientRect()
  cover.style.left = coord.left + 'px'
  cover.style.top = coord.top + 'px'
  console.log(currentElem)
});

content.onmouseout = function(event) {
  if (!currentElem) return;
  let relatedTarget = event.relatedTarget;

  while (relatedTarget) {
    if (relatedTarget == currentElem) return;
    relatedTarget = relatedTarget.parentNode;
  }
  cover.style.height = '0'
  cover.style.width = '0'
  currentElem.style.color = '';
  currentElem = null;
};