// Hàm tạo hiệu ứng pháo hoa trên canvas
function startFireworks() {
    let canvas = document.getElementById('fireworksCanvas');
    canvas.style.display = "block";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext('2d');
    let particles = [];
    let particleCount = 100;
    let angleStep = (Math.PI * 2) / particleCount;
    let cx = canvas.width / 2;
    let cy = canvas.height - 50; // Gần đáy màn hình
    let speed = 5;

    for (let i = 0; i < particleCount; i++) {
        let angle = i * angleStep;
        particles.push({
            x: cx,
            y: cy,
            vx: Math.cos(angle) * (Math.random() * speed),
            vy: Math.sin(angle) * (Math.random() * speed) - 3,
            alpha: 1,
            radius: Math.random() * 2 + 1
        });
    }

    let startTime = performance.now();

    function animate(time) {
        let elapsed = time - startTime;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.alpha -= 0.02;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 7, 58," + particle.alpha + ")";
            ctx.fill();
        });
        if (elapsed < 2000) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.style.display = "none";
        }
    }
    requestAnimationFrame(animate);
}

// Hàm hiển thị hộp thoại modal thành công
function showSuccessModal(message) {
    const modal = document.getElementById('modalSuccess');
    modal.textContent = message;
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.display = "none";
    }, 3000);
}

// Xử lý sự kiện form đăng ký và đăng nhập bằng jQuery
$(document).ready(function() {
    $("#signUpForm").on("submit", function(e) {
        e.preventDefault(); // Ngăn form gửi đi
        // Giả sử thông tin đăng ký hợp lệ
        showSuccessModal("Chúc mừng bạn đăng ký thành công tài khoản CGV!");
        startFireworks();
    });
    $("#signInForm").on("submit", function(e) {
        e.preventDefault(); // Ngăn form gửi đi
        // Giả sử thông tin đăng nhập hợp lệ
        showSuccessModal("Chúc mừng bạn đăng nhập thành công tài khoản CGV!");
        startFireworks();
    });
});

// Xử lý chuyển đổi giữa form đăng ký và đăng nhập
const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});