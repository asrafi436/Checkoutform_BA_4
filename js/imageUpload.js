
function validateImage() {
    const fileInput = document.getElementById('image-upload');
    const file = fileInput.files[0];
    const errorElement = document.getElementById('image-error');
    
    if (file) {
        const img = new Image();
        img.onload = function() {
            if (img.width !== 300 || img.height !== 300) {
                errorElement.style.display = 'block';
                fileInput.setCustomValidity("Image must be 300x300.");
            } else {
                errorElement.style.display = 'none';
                fileInput.setCustomValidity("");
            }
        };
        img.src = URL.createObjectURL(file);
    }
}