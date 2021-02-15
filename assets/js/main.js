let userInput = document.getElementById("user-input")
let single = document.getElementById("single")
let married = document.getElementById("married")
let y2019 = document.getElementById("y2019")
let y2020 = document.getElementById("y2020")
let y2021 = document.getElementById("y2021")
let summe = document.getElementById("summe")
let persönlich = document.getElementById("persönlich")
let year = document.getElementById("year")
let result = document.getElementById("result")

function calc() {
    let a = "alleinstehend"
    let b = "2019"
    let b1 = "2020"
    let b2 = "2021"
    let c = "verheiratet/verpartnert"
    let y19 = ((userInput.value - 9168) / 10000)
    let y19A = ((userInput.value / 2 - 9168) / 10000)

    let y20 = ((userInput.value - 9408) / 10000)
    let y20A = ((userInput.value / 2 - 9408) / 10000)
    let y21 = ((userInput.value - 9744) / 10000)
    let y21A = ((userInput.value / 2 - 9744) / 10000)

    let x19 = ((userInput.value - 14254) / 10000)
    let x19A = ((userInput.value / 2 - 14254) / 10000)

    let x20 = ((userInput.value - 14532) / 10000)
    let x20A = ((userInput.value / 2 - 14532) / 10000)
    let x21 = ((userInput.value - 14753) / 10000)
    let x21A = ((userInput.value / 2 - 14753) / 10000)

    let est19 = (0.42 * userInput.value - 8780.90)
    let est19B = (0.42 * userInput.value / 2 - 8780.90)

    let est20 = (0.42 * userInput.value - 8963.74)
    let est20B = (0.42 * userInput.value / 2 - 8963.74)

    let est21 = (0.42 * userInput.value - 9136.63)
    let est21B = (0.42 * userInput.value / 2 - 9136.63)

    let est19A = (0.45 * userInput.value - 16740.68)
    let est19Ab = (0.45 * userInput.value / 2 - 16740.68)

    let est20A = (0.45 * userInput.value - 17078.74)
    let est20Ab = (0.45 * userInput.value / 2 - 17078.74)

    let est21A = (0.45 * userInput.value - 17374.99)
    let est21Ab = (0.45 * userInput.value / 2 - 17374.99)

    if (single.checked && y2019.checked) {
        if (userInput.value <= 9168.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b
            result.innerHTML = "0" + " \u20AC "
        } if (userInput.value >= 9169.00 && userInput.value <= 14254.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b
            result.innerHTML = Math.floor((980.14 * y19 + 1400) * y19) + " \u20AC "
        } if (userInput.value >= 14255.00 && userInput.value <= 55960.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b
            result.innerHTML = Math.floor((216.16 * x19 + 2397) * x19 + 965.58) + " \u20AC "
        } if (userInput.value >= 55961.00 && userInput.value <= 265326.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b
            result.innerHTML = Math.floor(est19) + " \u20AC "
        } if (userInput.value >= 265327.00) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b
            result.innerHTML = Math.floor(est19A) + " \u20AC "
        }
    }
    else if (married.checked && y2019.checked) {
        if (userInput.value <= 18336.00) {
            summe.innerHTML = "0" + " \u20AC"
            persönlich.innerHTML = c
            year.innerHTML = b
            result.innerHTML = "0" + " \u20AC"
        } if (userInput.value >= 18337.00 && userInput.value <= 28508.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC"
            persönlich.innerHTML = c
            year.innerHTML = b
            result.innerHTML = Math.floor((980.14 * y19A + 1400) * y19A * 2) + " \u20AC"
        } if (userInput.value >= 28509.00 && userInput.value <= 111920.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = c
            year.innerHTML = b
            result.innerHTML = Math.floor([(216.16 * x19A + 2397) * x19A + 965.58] * 2) + " \u20AC"
        } if (userInput.value >= 111921.00 && userInput.value <= 530652.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b
            result.innerHTML = Math.floor(est19B * 2) + " \u20AC "
        } if (userInput.value >= 530653.00) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b
            result.innerHTML = Math.floor(est19Ab * 2) + " \u20AC "
        }
    }
    if (single.checked && y2020.checked) {
        if (userInput.value <= 9408.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b1
            result.innerHTML = "0" + " \u20AC "
        } if (userInput.value >= 9409.00 && userInput.value <= 14532.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b1
            result.innerHTML = Math.floor((972.87 * y20 + 1400) * y20) + " \u20AC "
        } if (userInput.value >= 14533.00 && userInput.value <= 57051.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b1
            result.innerHTML = Math.floor((212.02 * x20 + 2397) * x20 + 972.79) + " \u20AC "
        } if (userInput.value >= 57052 && userInput.value <= 270500.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b1
            result.innerHTML = Math.floor(est20) + " \u20AC "
        } if (userInput.value >= 270501) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b1
            result.innerHTML = Math.floor(est20A) + " \u20AC "
        }

    }
    else if (married.checked && y2020.checked) {
        if (userInput.value <= 18816.00) {
            summe.innerHTML = "0" + " \u20AC"
            persönlich.innerHTML = c
            year.innerHTML = b1
            result.innerHTML = "0" + " \u20AC"
        } if (userInput.value >= 18817.00 && userInput.value <= 29064.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC"
            persönlich.innerHTML = c
            year.innerHTML = b1
            result.innerHTML = Math.floor((972.87 * y20A + 1400) * y20A * 2) + " \u20AC"
        } if (userInput.value >= 29065.00 && userInput.value <= 114102.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = c
            year.innerHTML = b1
            result.innerHTML = Math.floor([(212.02 * x20A + 2397) * x20A + 972.79] * 2) + " \u20AC"
        } if (userInput.value >= 114103.00 && userInput.value <= 541000.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b1
            result.innerHTML = Math.floor(est20B * 2) + " \u20AC "
        } if (userInput.value >= 541001.00) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b1
            result.innerHTML = Math.floor(est20Ab * 2) + " \u20AC "
        }
    } if (single.checked && y2021.checked) {
        if (userInput.value <= 9745.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b2
            result.innerHTML = "0" + " \u20AC "
        } if (userInput.value >= 9746.00 && userInput.value <= 14753.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b2
            result.innerHTML = Math.floor((995.21 * y21 + 1400) * y21) + " \u20AC "
        } if (userInput.value >= 14754.00 && userInput.value <= 57918.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b2
            result.innerHTML = Math.floor((208.85 * x21 + 2397) * x21 + 950.96) + " \u20AC "
        } if (userInput.value >= 57919 && userInput.value <= 274612.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b2
            result.innerHTML = Math.floor(est21) + " \u20AC "
        } if (userInput.value >= 274613) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b2
            result.innerHTML = Math.floor(est21A) + " \u20AC "
        }

    }
    else if (married.checked && y2021.checked) {
        if (userInput.value <= 19488.00) {
            summe.innerHTML = "0" + " \u20AC"
            persönlich.innerHTML = c
            year.innerHTML = b2
            result.innerHTML = "0" + " \u20AC"
        } if (userInput.value >= 19489.00 && userInput.value <= 29506.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC"
            persönlich.innerHTML = c
            year.innerHTML = b2
            result.innerHTML = Math.floor((995.21 * y21A + 1400) * y21A * 2) + " \u20AC"
        } if (userInput.value >= 29507.00 && userInput.value <= 115836.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = c
            year.innerHTML = b2
            result.innerHTML = Math.floor([(208.85 * x21A + 2397) * x21A + 950.56] * 2) + " \u20AC"
        } if (userInput.value >= 115837.00 && userInput.value <= 549224.99) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b2
            result.innerHTML = Math.floor(est21B * 2) + " \u20AC "
        } if (userInput.value >= 549225.00) {
            summe.innerHTML = Math.floor(userInput.value) + " \u20AC "
            persönlich.innerHTML = a
            year.innerHTML = b2
            result.innerHTML = Math.floor(est21Ab * 2) + " \u20AC "
        }
    }
}









