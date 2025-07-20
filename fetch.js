document.addEventListener('DOMContentLoaded', function() {
    fetch('fetch.php')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#user-table tbody').innerHTML = data;
        });

    // إضافة وظيفة Toggle لتغيير الحالة
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const userId = this.getAttribute('data-id');
            toggleStatus(userId);
        });
    });

    function toggleStatus(userId) {
        // إرسال طلب لـ PHP لتغيير حالة المستخدم
        fetch('update.php', {
            method: 'POST',
            body: JSON.stringify({id: userId}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(data => {
            alert("Status updated");
            location.reload(); // تحديث الصفحة لعرض التغييرات
        });
    }
});
