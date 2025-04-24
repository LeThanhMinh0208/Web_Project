function getComboSummary() {
    const arr = [];
    $('.combo-qty').each(function() {
        const qty = +$(this).val();
        if (qty > 0) {
            const idx = $(this).data('id') + 1; // Combo 1,2,3…
            arr.push(`Combo ${idx} × ${qty}`);
        }
    });
    return arr.join(', ');
}

/* ===== nút Xác nhận ==== */
$('#confirmBtn').on('click', () => {
    if (!selectedSeats.length) {
        alert('Vui lòng chọn ghế!');
        return;
    }

    /* 1. Gom dữ liệu vé */
    const ticket = {
        code: 'VE' + Date.now(), // mã vé duy nhất
        movie: selectedMovie,
        city: $('#citySelect').val(),
        date: $('#dateInput').val(), // yyyy-mm-dd
        cinema: $('#cinemaSelect').val(),
        show: selectedShowtime,
        seats: selectedSeats.join(' '),
        combo: getComboSummary(),
        total: $('#totalDisplay').text() // đã có định dạng
    };

    /* 2. Lưu vào localStorage */
    const list = JSON.parse(localStorage.getItem('tickets') || '[]');
    list.push(ticket);
    localStorage.setItem('tickets', JSON.stringify(list));

    /* 3. Chuyển tới trang Vé của tôi */
    window.location.href = 'VeCuaToi.html';
});