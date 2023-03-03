const ipn = document.querySelector('.input-pass')
const btn = document.querySelector('.show-btn')

btn.addEventListener('click',function() {
    const currentType = ipn.getAttribute('type')
    ipn.setAttribute(
        'type',
        currentType === 'password' ? 'text' : 'password'
    )
})