


const orderName =  document.getElementById('orderName');
 const orderEmail =  document.getElementById('orderEmail');
 const orderTel =  document.getElementById('orderTel');
 const selectProduct = document.getElementById('selectProduct');
 const selectData = document.getElementById('data');
 const selectHour = document.getElementById('selectHour');

//Send order without pay
function sendWhatsapp(){
    var bodyWhatsapp = `\t\nNome e Cognome: ${orderName.value}\t\n
        Email: ${orderEmail.value}\t\n
        Telefono: ${orderTel.value}\t\n
        Prodotto ordinato: ${selectProduct.value}\t\n
        Data: ${selectData.value}\t\n
        Ora di ritiro: ${selectHour.value}\t\n
        Stato pagamento: Non pagato`;

        //This will be called when the link is clicked
        var sMsg    = encodeURIComponent( bodyWhatsapp );
        var whatsapp_url = `https://wa.me/393462168158?text=${sMsg}`;

    if (orderName.value === "" || orderEmail.value === "" || orderTel.value === "" || selectProduct.value === "Seleziona" || selectData.value === "GG/MM/AAAA" || selectHour.value === "Seleziona") {
        alert("Conrtola se hai riempito tutti i campi.")

    } else { 
            window.open(whatsapp_url,"_blank").focus();  
            orderName.value = "";
            orderEmail.value ="";
            orderTel.value = ""
            selectProduct.value = "Seleziona";
            selectData.value = "GG/MM/AAAA";
            selectHour.value = "Seleziona";
    }
}

//Pay function  to do

//Send Email after user pay order
var btn = document.getElementById('send-request');

btn.addEventListener('click', function(e) {
    
    e.preventDefault()

    var bodyOrder = `Nome e Cognome: ${orderName.value}\t\n
    Email: ${orderEmail.value}\t\n
    Telefono: ${orderTel.value}\t\n
    Prodotto ordinato: ${selectProduct.value}\t\n
    Data: ${selectData.value}\t\n
    Ora di ritiro: ${selectHour.value}\t\n
    Stato pagamento: Pagato`;
                

    Email.send({
    SecureToken : "7d3a7a88-2a06-4732-9627-ca6cc311e2da",
    To : 'sisayasenova@gmail.com',
    From : 'sisayasenova@gmail.com',
    Subject : "Contact for work project",
    Body : bodyOrder
    });

});
