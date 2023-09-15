function volume_sphere() {
    // Get the input radius value
    const radiusInput = document.getElementById('radius');
    const radius = parseFloat(radiusInput.value);

    // Check if the input is a valid number
    if (!isNaN(radius)) {
        // Calculate the volume of the sphere using the formula (4/3) * π * r^3
        const volume = (4/3) * Math.PI * Math.pow(radius, 3);

        // Display the calculated volume in the volume field
        const volumeField = document.getElementById('volume');
        volumeField.value = volume.toFixed(2); // Display the volume rounded to 2 decimal places
    } else {
        // If the input is not a valid number, clear the volume field
        const volumeField = document.getElementById('volume');
        volumeField.value = '';
    }

    // Prevent the form from submitting
    return false;
} 

// Attach the volume_sphere function to the form submission
window.onload = function() {
    const myForm = document.getElementById('MyForm');
    myForm.onsubmit = volume_sphere;
};
