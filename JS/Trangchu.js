document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("videoModal");
    let iframe = document.getElementById("youtubeFrame");
    let closeBtn = document.querySelector(".close");

    document.querySelectorAll(".play-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            let videoUrl = this.getAttribute("data-video");
            iframe.src = videoUrl + "?autoplay=1"; // Tự động phát video
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        iframe.src = ""; // Dừng video khi đóng
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            iframe.src = "";
        }
    });
});