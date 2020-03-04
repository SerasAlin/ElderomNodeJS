<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "Va rugam sa completati cu datele necesare!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'serasalin96@gmail.com';
$email_subject = "Contact website Elderom  $name";
$email_body = "Mesaj primit prin intermediul formularului de pe website.\n\n"."Detalii:\n\nNume: $name\n\nEmail: $email_address\n\nTelefon: $phone\n\nMesaj:\n$message";
$headers = "De la: Website Contact\n";
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
