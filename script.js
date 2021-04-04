function onSignin(){}

document
.getElementById("login")
.addEventListener('click', function(){
    console.log('clicked');
    const userName = document.getElementById("yourname").value
    document.getElementById("yourname").value = ""
    localStorage.setItem('User', userName)
    document.getElementById("login-form").style.display = 'none'
    document.getElementById("logout-form").style.display = 'block'

    document.getElementById('name-prompt').innerHTML = userName
});

document.getElementById("logout").addEventListener('click', function(){
    localStorage.removeItem('User');
    document.getElementById("logout-form").style.display = 'none'
    document.getElementById("login-form").style.display = 'block'

})

function checkiflogged(){
    const userName = localStorage.getItem('User');
    console.log({userName});
    if(userName){
        document.getElementById("login-form").style.display = 'none'
        document.getElementById('name-prompt').innerHTML = userName
        document.getElementById("logout-form").style.display = 'block'
    }
}