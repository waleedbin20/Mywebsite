<?php

    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $vis_subject= $_POST['subject'];
    $message = $_POST['message'];

    //echo $name;


    // echo ($name + $vis_subject +$visitor_email+$message);

    $from = "hello@waleedbinasad.com";
    $subject = "New Form submission";
    $em_body = "User Name: $name. \n";
	$em_body .= "User Email: $visitor_email. \n";
	$em_body .= "User Message: $message.";

    // $message = "PHP mail works just fine";
    $headers = "From:" . $from;
    $to = "waleedbinasad18@gmail.com";

    // $headers = "From:" . $from;
    // $headers= "Reply-To:". $visitor_email ;
    mail($to,$vis_subject,$em_body,$headers);
    //echo "The email message was sent.";
    header('Location: index.html')
?>
