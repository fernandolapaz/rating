// VARIABLES
const btn = document.querySelector('.btn')
const cardRating = document.querySelector('.card-rating')
const cardTy = document.querySelector('.card-ty')
const ratings = document.querySelectorAll('input[name="rating"]')
const rating = document.querySelector('#rating')
const box = document.querySelector('fieldset')

// EVENT
btn.addEventListener('click', (e) => {
    e.preventDefault()

    let selected

    for (r of ratings) {
        if (r.checked) {
            selected = r.value
            rating.innerHTML = selected

            cardRating.classList.toggle('hidden')
            cardTy.classList.toggle('hidden')
        }
    }

    if (!selected) {
        box.classList.add('show')
    }
})

box.addEventListener('click', () => box.classList.remove('show'))