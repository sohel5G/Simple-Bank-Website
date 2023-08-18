
document.getElementById('login-submit-btn').addEventListener('click', function(){
    let mailInputValue = document.getElementById('mail-input').value;
    let passInputValue = document.getElementById('pass-input').value;

    if( mailInputValue === 'admin@admin.com' && passInputValue === 'admin'){
        window.location.href = 'dashboard.html';
    }else{
        alert('Please enter a valid login');
    }

});
