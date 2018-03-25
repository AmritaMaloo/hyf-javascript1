console.log('Hi')

function validateEmail(email){
    return email.includes('@') && email.length > 4 && email.includes('.')
}
function validateProfile(profile){
    return profile.length <=10  
}
function validateSubject(subject){
    return subject.length <=10 && subject.includes('Maths') || subject.includes('English') || subject.includes('Danish')      
}
$('button').click(function () {
    let email = $('.email').val()
    if(validateEmail(email)){
        $('.message1').text('Success')
    } else {
        Event.preventDefault();
        $('.message1').text('Did not validate email')

    }
    let profile = $('.profile').val()
    if(validateProfile(profile)){
        $('.message2').text('Success')
    } else {
        Event.preventDefault();
        $('.message2').text('the limit exceeds 10 words')
    }

    let subject = $('.subject').val()
    if(validateSubject(subject)){
        $('.message3').text('Success')
    } else {
        Event.preventDefault();
        $('.message3').text('the limit exceeds 10 words or you can only enter Maths, English, Danish')
    }

    


    

})