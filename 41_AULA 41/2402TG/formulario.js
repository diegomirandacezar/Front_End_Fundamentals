document.getElementById("contactForm").addEventListener('submit',function(event){
    event.preventDefault();
    var name =document.getElementById('nameInput').value;
    var email =document.getElementById('emailInput').value;
    var idade =document.getElementById('ageInput').value;
    var message =document.getElementById('messageInput').value;
    
    // exibir a msg
    document.getElementById('submittedName').textContent = name;
    document.getElementById('submittedEmail').textContent = email;
    document.getElementById('submittedIdade').textContent = idade;
    document.getElementById('submittedMensagem').textContent = message;

    //exibindo a area e escondendo o form
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('submissionData').style.display = 'Block';
    document.getElementById("container").style.animation = 'slide';


})



