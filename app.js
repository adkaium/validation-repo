function validation(){
    const form = document.getElementById('form');
    const email = document.getElementById('email').value;
    const text = document.getElementById('text');
    const patten = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(patten)){
        form.classList.add('valid')
        form.classList.remove('invalid')
        text.innerHTML = 'Your Email is Valid';
        text.style.color = '#00ff00'
    }
    else if(email == ''){
        form.classList.remove('valid')
        form.classList.remove('invalid')
        text.innerHTML = '';
        text.style.color = '#00ff00'
    }
    else
    {
        // form.classList.remove('valid')
        form.classList.add('invalid');
        text.innerHTML= 'Please Enter Valid Email';
        text.style.color ='red';
    }
}