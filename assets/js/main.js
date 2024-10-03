document.addEventListener('DOMContentLoaded', function() {
    const userDropdown = document.getElementById('userDropdown');
    const token = localStorage.getItem('token');

    if (!token) {
        userDropdown.style.display = 'none';
    } else {
        userDropdown.style.display = 'block';
        document.getElementById('dropdwnbtn').innerHTML = `<i id="personIcon" class="material-icons md-18">person</i> ${localStorage.getItem('username')}`;
    }
});