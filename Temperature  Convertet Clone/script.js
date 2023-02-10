
const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_differ');
    const valueTemp = temp_differ.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit

    const CelToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius

    const FahToCel = (Fah) => {
        let celsius = ((Fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("resultContainer").innerHTML = CelToFah
            (inputTemp) + "&#176; Fahrenheit";

    } else {
        document.getElementById("resultContainer").innerHTML = FahToCel
            (inputTemp) + "&#176; Celsius";
    }

}



