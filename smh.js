let nodes = document.querySelector("body").childNodes;  
for(let i = 0; i < nodes.length; i++) {
  nodes[i].style.overflow = 'auto';
  nodes[i].style.position = 'relative';
}

// document.querySelectorAll("[style='overflow: hidden;']").forEach(elem => elem.style.overflow = 'auto');

