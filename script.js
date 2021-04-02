function onSignin(){}

document
.getElementById("login")
.addEventListener('click', function(){
    console.log('clicked');
    const username = document.getElementById("yourname").value
    document.getElementById("yourname").value = ""
    localStorage.setItem('User', username)
    document.getElementById("log-form").style.display = 'none'

    document.getElementById('name-prompt').innerHTML = username
});

function checkiflogged(){
    const username = localStorage.getItem('User');
    console.log({username});
    if(username){
        document.getElementById("log-form").style.display = 'none'
        document.getElementById('name-prompt').innerHTML = username
    }
}