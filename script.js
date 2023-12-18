
document.addEventListener('DOMContentLoaded', function () {
    // Array of image filenames in the Extra Images folder
    const imageFilenames = [
        'Wolf Shadow Howling.jpg',
        '3D Orange Cup with light orange background - Alex Ewida May 19, 2022.jpg',
        'Game Jungle Logo.jpg',
        '3D Pancakes - Alex.jpg',
        'Glowing Pigeon.jpg',
        'Planet Saturn.jpg',
        '3D Words - ASK.jpg',
        'Green Tree.jpg',
        'GaryBlueDiner.jpg',
        'BlueJay.jpg',
        'DogWebsite.jpg',

        // Add more image filenames as needed
    ];

    const projectBox = document.getElementById('image-scroll-box');

    // Dynamically add images to the project box
    imageFilenames.forEach((filename) => {
        const img = document.createElement('img');
        img.src = `Extra Images/${filename}`;
        projectBox.appendChild(img);
    });

    const images = projectBox.querySelectorAll('img');
    let currentImageIndex = 0;

    // Function to scroll to the next image
    function scrollNextImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    // Set an interval to automatically scroll to the next image every 3 seconds
    setInterval(scrollNextImage, 3000);
});
