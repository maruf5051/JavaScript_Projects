const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const msg = document.querySelector('#msg')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Provide a valid height!'
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Provide a valid weight!'
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>Your BMI is ${bmi} kg/m2. </span>`

        if (bmi < 18.6) {
            msg.innerHTML = 'You are underweight.'
        } else if (bmi >=)

    }
}
)
