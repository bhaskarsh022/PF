document.querySelectorAll('.video-wrapper').forEach(wrapper => {
    const video = wrapper.querySelector('.video');

    wrapper.addEventListener('mouseover', () => {
        video.play();
    });

    wrapper.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset video to start
    });
});
