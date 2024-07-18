document.getElementById('start-here-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('demo-video');
    modal.style.display = 'block';
    video.play();
});

document.getElementById('global_reach_icon').addEventListener('click', function(event) {
    event.preventDefault();
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('demo-video');
    modal.style.display = 'block';
    video.play();
});

document.getElementById('india_leading_hub_icon').addEventListener('click', function(event) {
    event.preventDefault();
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('demo-video');
    modal.style.display = 'block';
    video.play();
});

document.getElementById('inside_gbs_center_icon').addEventListener('click', function(event) {
    event.preventDefault();
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('demo-video');
    modal.style.display = 'block';
    video.play();
});

document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('demo-video');
    modal.style.display = 'none';
    video.pause();
    video.currentTime = 0; // Reset the video to the start
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('demo-video');
    if (event.target == modal) {
        modal.style.display = 'none';
        video.pause();
        video.currentTime = 0; // Reset the video to the start
    }
});

document.getElementById('reach-us-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const subject = encodeURIComponent(' GBS Launchpad Trial Request');
    const body = encodeURIComponent(`Dear Anushka Chadha,\n\nWe browsed through the GBS Launchpad and are interested in trying out the product.\n\nTo proceed, kindly let us know the next steps.\n\nBest regards,\n[Your Name]\n[Your Position]\n[Your Contact Information]`);
    const mailtoLink = `mailto:anuchadha@deloitte.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
});