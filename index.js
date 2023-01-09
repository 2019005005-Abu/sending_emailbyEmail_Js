const submitBouuron=document.getElementById('Button');
console.log(submitBouuron);
submitBouuron.addEventListener('click',()=>{
const nameField=document.getElementById('contactName');
const emailField=document.getElementById('contactEmail');
const textAreaFi=document.getElementById('contactEmail');


const namevalue=nameField.value;
const emailvalue=emailField.value;
const messagevalue=textAreaFi.value;

const templateParams = {
    namevalue: namevalue,
    emailvalue: emailvalue,
    messagevalue:messagevalue
};


if(namevalue &&emailvalue && messagevalue){
    emailjs.send(
    "service_xhyo175",
    "template_k2pxajz",
    templateParams,
     "aGsIs56BlIWkOx2hi");
}


})