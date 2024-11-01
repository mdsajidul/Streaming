document.addEventListener("DOMContentLoaded", function () {
    const videoLinks = [
        "https://www.youtube.com/embed/MqTJbzQQLbE?si=65-eJzOi8flNi6yO",
        "https://www.youtube.com/embed/AJiv6ER6tBw?si=KqEBZU1JO0fopboe",
        "https://www.youtube.com/embed/qasQOkCfeck?si=4Q3fyLlhv3EpDCEc",
        "https://www.youtube.com/embed/bUtJWJz3iUU?si=kDOIeNBaqhviRQ3F"
    ];

    const videoGrid = document.querySelector('.video-grid');

    videoLinks.forEach(link => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `<iframe src="${link}" frameborder="0" allowfullscreen></iframe>`;
        videoGrid.appendChild(videoCard);
    });
});
