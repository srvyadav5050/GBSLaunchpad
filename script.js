// Handle the first audio modal
document.getElementById('start-here-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const modal = document.getElementById('audio-modal');
    const audio = document.getElementById('demo-audio');
    modal.style.display = 'block';
    audio.play();
});

document.querySelector('.modal .close').addEventListener('click', function() {
    const modal = document.getElementById('audio-modal');
    const audio = document.getElementById('demo-audio');
    modal.style.display = 'none';
    audio.pause();
    audio.currentTime = 0;  // Reset audio to start
});

// Handle the second audio modal
document.getElementById('global_reach_icon').addEventListener('click', function(event) {
    event.preventDefault();
    const modal = document.getElementById('audio-modal2');
    const audio = document.getElementById('demo-audio2');
    modal.style.display = 'block';
    audio.play();
});

document.querySelector('.modal2 .close').addEventListener('click', function() {
    const modal = document.getElementById('audio-modal2');
    const audio = document.getElementById('demo-audio2');
    modal.style.display = 'none';
    audio.pause();
    audio.currentTime = 0;  // Reset audio to start
});

// Handle the third audio modal
document.getElementById('india_leading_hub_icon').addEventListener('click', function(event) {
    event.preventDefault();
    const modal = document.getElementById('audio-modal3');
    const audio = document.getElementById('demo-audio3');
    modal.style.display = 'block';
    audio.play();
});

document.querySelector('.modal3 .close').addEventListener('click', function() {
    const modal = document.getElementById('audio-modal3');
    const audio = document.getElementById('demo-audio3');
    modal.style.display = 'none';
    audio.pause();
    audio.currentTime = 0;  // Reset audio to start
});

// Handle the fourth audio modal
document.getElementById('inside_gbs_center_icon').addEventListener('click', function(event) {
    event.preventDefault();
    const modal = document.getElementById('audio-modal4');
    const audio = document.getElementById('demo-audio4');
    modal.style.display = 'block';
    audio.play();
});

document.querySelector('.modal4 .close').addEventListener('click', function() {
    const modal = document.getElementById('audio-modal4');
    const audio = document.getElementById('demo-audio4');
    modal.style.display = 'none';
    audio.pause();
    audio.currentTime = 0;  // Reset audio to start
});

// Handle reach-us button email
document.getElementById('reach-us-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const subject = encodeURIComponent('GBS Launchpad Trial Request');
    const body = encodeURIComponent(`Dear Anushka Chadha,\n\nWe browsed through the GBS Launchpad and are interested in trying out the product.\n\nTo proceed, kindly let us know the next steps.\n\nBest regards,\n[Your Name]\n[Your Position]\n[Your Contact Information]`);
    const mailtoLink = `mailto:anuchadha@deloitte.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
});
