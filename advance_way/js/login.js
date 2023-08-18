document.getElementById('login-submit-btn').addEventListener('click', function(){
    if( getInputValueByIdAsString('mail-input') === 'admin@admin.com' && getInputValueByIdAsString('pass-input') === 'admin' ){
        window.location.href = 'dashboard.html';
    }else{
        alert('Please enter valid login information');
    }
    
});


