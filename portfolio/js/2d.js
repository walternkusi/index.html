alert("hello freind")
const Name = document.getElementById('name')

const Email = document.getElementById('email')

const Message = document.getElementById('message')

const form = document.getElementById('form')

const name_error = document.getElementById('name_error')

const Email_error = document.getElementById('email_error')

const Message_error = document.getElementById('message_error')

form.addEventListener('submit',(e)=> 
{

   if(Name.value === '' || Name.value == null)
   {
    e.preventDefault(); 
    name_error.innerHTML= "name is required";
    }
else
{
   name_error.innerHTML= "";
}

if (Email.value=== '' || Name.value == null)
{
   e.preventDefault(); 
   Email_error.innerHTML= "email is required";
   }
   else
   {
      Email_error.innerHTML= "";  
   }

   if(Message.value=== '' || Message.value == null)
   {
      e.preventDefault(); 
      Message_error.innerHTML= "message is required";
      }
   else
   {
   Message_error.innerHTML= ""; 
   }
   
   
})