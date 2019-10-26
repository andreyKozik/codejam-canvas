document.querySelector('.size4x4').addEventListener('click', function () {
    document.querySelector('.size4x4').classList.add('active')
    document.querySelector('.size32x32').classList.remove('active')
    document.querySelector('.size256x256').classList.remove('active')
    fetch("/data/json/4x4.json")
    .then(response => response.json())
    .then(function (json) { 
        var canvas = document.querySelector("canvas"), // Select our canvas element
            ctx = canvas.getContext("2d"), // Save the context we're going to use
            width = json[0].length, // Get the width of the array
            height = json.length, // Get the height of the array
            scale = 128; // Scales the whole image by this amount, set to 1 for default size

        // Make sure the canvas is no larger than the size we need
        canvas.width = width * scale;
        canvas.height = height * scale;

        // Loop through each color and draw that section
        for (var row = 0; row < height; row++) {
            for (var col = 0; col < width; col++) { // Since there are nested arrays we need two for loops
                ctx.fillStyle = '#' + json[row][col]; // Set the color to the one specified
                ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle
            }
        }
    });
});

document.querySelector('.size32x32').addEventListener('click', function () {
    document.querySelector('.size4x4').classList.remove('active')
    document.querySelector('.size32x32').classList.add('active')
    document.querySelector('.size256x256').classList.remove('active')
    fetch("/data/json/32x32.json")
    .then(response => response.json())
    .then(function (json) {
        var canvas = document.querySelector("canvas"), // Select our canvas element
            ctx = canvas.getContext("2d"), // Save the context we're going to use
            width = json[0].length, // Get the width of the array
            height = json.length, // Get the height of the array
            scale = 16; // Scales the whole image by this amount, set to 1 for default size

        // Make sure the canvas is no larger than the size we need
        canvas.width = width * scale;
        canvas.height = height * scale;

        // Loop through each color and draw that section
        for (var row = 0; row < height; row++) {
            for (var col = 0; col < width; col++) { // Since there are nested arrays we need two for loops
                ctx.fillStyle = 'rgb(' + json[row][col] + ')' ; // Set the color to the one specified
                ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle
            }
        }
    });
});

document.querySelector('.size256x256').addEventListener('click', function () {
    document.querySelector('.size4x4').classList.remove('active')
    document.querySelector('.size32x32').classList.remove('active')
    document.querySelector('.size256x256').classList.add('active')
    var size256x256 = document.querySelector("canvas"),
    ctx = size256x256.getContext('2d');
    var img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 512, 512);
    };
    img.src = '/data/json/image.png';
});
    
