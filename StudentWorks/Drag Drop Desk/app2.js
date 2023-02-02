const item1 = document.querySelector('.item1')
const placeholders1 = document.querySelectorAll ('.placeholder1')

item1.addEventListener('dragstart', dragstart)
item1.addEventListener('dragend', dragend)

for (const placeholder1 of placeholders1){
    placeholder1.addEventListener('dragover', dragover)
    placeholder1.addEventListener('dragenter', dragenter)
    placeholder1.addEventListener('dragleave', dragleave)
    placeholder1.addEventListener('drop', dragdrop) 
}

function dragstart(event){
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend (event){
    event.target.className = 'item1'
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.append(item1)
    event.target.classList.remove('hovered')
}
