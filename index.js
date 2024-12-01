
const unit = document.querySelectorAll('.unit')
const table = document.querySelectorAll('table')
const circle = document.querySelectorAll('.circle')
const innerCircle = document.querySelectorAll('.innerCircle')
const total = document.querySelector('.total')
const price = document.querySelectorAll('.price')


unit.forEach((t,id)=>{
    t.addEventListener('click', e=>{
        table.forEach(tb=>tb.classList.remove('active'))
        circle.forEach(cir=>cir.classList.remove('activeCircle'))
        innerCircle.forEach(inn=>inn.classList.remove('show'))
        table[id].classList.add('active')
        circle[id].classList.add('activeCircle')
        innerCircle[id].classList.add('show')
        total.innerText = price[id].innerText
    })
})