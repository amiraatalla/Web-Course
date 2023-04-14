const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const ul = document.querySelector('ul');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const text = input.value.trim();
    if(text !== ''){
       const li = document.createElement('li'); 
       const button = document.createElement('button');
       button.textContent = 'Delete';
       li.textContent = text;
       li.appendChild(button);
       ul.appendChild(li);
    }
})

ul.addEventListener('click', function(e){
    if(e.target.nodeName === 'BUTTON'){
        e.target.parentNode.remove();
    }
});

