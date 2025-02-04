document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth < 1024) {
        alert("This site is not compatible with mobile devices. Please open it on a desktop.");
    }

    document.getElementById('start-here-btn').addEventListener('click', function(event) {
        event.preventDefault();
        const modal = document.getElementById('audio-modal');
        const video = document.getElementById('demo-video');
        modal.style.display = 'block';
        video.play();
    });

    document.querySelector('.modal .close').addEventListener('click', function() {
        const modal = document.getElementById('audio-modal');
        const video = document.getElementById('demo-video');
        modal.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    });

    document.getElementById('global_reach_icon').addEventListener('click', function(event) {
        event.preventDefault();
        const modal = document.getElementById('audio-modal2');
        const video = document.getElementById('demo-video2');
        modal.style.display = 'block';
        video.play();
    });

    document.querySelector('.modal2 .close').addEventListener('click', function() {
        const modal = document.getElementById('audio-modal2');
        const video = document.getElementById('demo-video2');
        modal.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    });

    document.getElementById('india_leading_hub_icon').addEventListener('click', function(event) {
        event.preventDefault();
        const modal = document.getElementById('audio-modal3');
        const video = document.getElementById('demo-video3');
        modal.style.display = 'block';
        video.play();
    });

    document.querySelector('.modal3 .close').addEventListener('click', function() {
        const modal = document.getElementById('audio-modal3');
        const video = document.getElementById('demo-video3');
        modal.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    });

    document.getElementById('inside_gbs_center_icon').addEventListener('click', function(event) {
        event.preventDefault();
        const modal = document.getElementById('audio-modal4');
        const video = document.getElementById('demo-video4');
        modal.style.display = 'block';
        video.play();
    });

    document.querySelector('.modal4 .close').addEventListener('click', function() {
        const modal = document.getElementById('audio-modal4');
        const video = document.getElementById('demo-video4');
        modal.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    });

    document.getElementById('reach-us-btn').addEventListener('click', function(event) {
        event.preventDefault();
        const subject = encodeURIComponent('GBS Launchpad Trial Request');
        const body = encodeURIComponent(`Dear Anushka Chadha,\n\nWe browsed through the GBS Launchpad and are interested in trying out the product.\n\nTo proceed, kindly let us know the next steps.\n\nBest regards,\n[Your Name]\n[Your Position]\n[Your Contact Information]`);
        const mailtoLink = `mailto:anuchadha@deloitte.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    });

    document.getElementById('reach-us-btn').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('download-link').click();
        const popup = document.getElementById('popup-message');
        popup.style.display = 'block';
        document.querySelector('.close-popup').addEventListener('click', function() {
            popup.style.display = 'none';
        });
    });
});
