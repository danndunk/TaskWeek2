function showData(){
    let name = document.getElementById("input-name").value
    console.log(name)
    document.getElementById("input-name").value = ""

    let email = document.getElementById("input-email").value
    console.log(email)
    document.getElementById("input-email").value = ""

    let phonenumber = document.getElementById("input-phonenumber").value
    console.log(phonenumber)
    document.getElementById("input-phonenumber").value = ""

    let subject = document.getElementById("input-subject").value
    console.log(subject)
    document.getElementById("input-subject").value = ""

    let message = document.getElementById("input-message").value
    console.log(message)
    document.getElementById("input-message").value = ""

    if(name == ""){
        alert("input name field must be not empty")
    }

    if(email == ""){
        alert("input email field must be not empty")
    }

    if(phonenumber == ""){
        alert("input phone number field must be not empty")
    }

    if(subject == ""){
        alert("input subject must be selected")
    }

    if(message == ""){
        alert("input name field must be not empty")
    }

    let emailReceiver = 'squidward@mail.com'

    let aEmail = document.createElement("a")
    aEmail.href = `mailto:${emailReceiver}?subject=${subject}&body= Hello my name is ${name}, ${message}, this is my number phone ${phonenumber}`

    aEmail.click()

    let dataObject = {
        dataName : name,
        dataEmail : email,
        dataPhoneNumber : phonenumber,
        dataSubject : subject,
        dataMessage : message
    }

    console.table(dataObject)
}