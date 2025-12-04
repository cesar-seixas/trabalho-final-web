 const form = document.getElementById('formContato');
 const msg = document.getElementById('msgSucesso');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    msg.style.display = 'block'

    form.reset(); 
  });

