<?php
// Set the recipient email address.
$to = "mughalmuneebwaheed@gmail.com";

// Set the subject of the email.
$subject = "Test Email";

// Compose the email message.
$message = "<!DOCTYPE html>
<head>
  <title>Email Template</title>
  <style>
    body {
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
      background-color: #283C4B;
      color: #283c4b;
      margin: 0;
      padding: 0;
    }
    .container {
      margin: 0 auto;
      max-width: 600px;
      background-color: #ffffff;
    }
    .header {
      background-color: #253356;
      text-align: center;
      padding: 10px 0;
    }
    .header img {
      width: 100%;
      max-width: 600px;
    }
    .content {
      padding: 20px;
      border: 1px solid #ddd;
      line-height: 1.5;
    }
    .content strong {
      font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
      font-size: 16px;
    }
    .footer {
      background-color: #e9ebee;
      text-align: center;
      padding: 20px 0;
    }
    .footer img {
      margin: 0 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header Section -->
    <div class="header">
      <img src="https://onlineadmissions.umt.edu.pk/files/Email_Banner.jpg" alt="Email Banner">
    </div>
    
    <!-- Main Content Section -->
    <div class="content">
      <p><strong>Dear MUNEEB MUGHAL,</strong></p>
      <p><strong>Your Admission Application is Submitted Successfully</strong> <img src="https://admin.umt.edu.pk/Media/Site/oia1/FileManager/2020/tick.png" alt="Success Icon" style="max-width: 50px;"></p>
      <p>Once your application is approved, your Admit Slip will be sent to you via email. <strong>Please keep checking your email for further instructions and updates.</strong></p>
      <p><strong>Be Success Ready. <br> Join Pakistan's Premier General Research University.</strong></p>
      <p><strong>Click on the images below to download related PDF File:</strong></p>
      <center>
        <a href="https://onlineadmissions.umt.edu.pk/files/Fee-Structure-Fall-2022.pdf" target="_blank">
          <img src="https://onlineadmissions.umt.edu.pk/files/Fee_Structure_Title.jpg" alt="Fee Structure" width="168" height="168">
        </a>
        <img src="https://admin.umt.edu.pk/Media/Site/oia1/FileManager/emailtemplate/great-umt.jpg" alt="UMT Image" width="168" height="168">
      </center>
      <p><strong>Related Links:</strong></p>
      <ul>
        <li><a href="http://umt.edu.pk/org/Scholarship-Financial-Assistance/Merit-Based-Other-Scholarships.aspx" target="_blank">Scholarships</a></li>
        <li><a href="https://admissions.umt.edu.pk/Admission-Criteria/Get-Consultation.aspx" target="_blank">Get Consultation</a></li>
      </ul>
    </div>
    
    <!-- Footer Section -->
    <div class="footer">
      <a href="https://twitter.com/UMTOfficial" target="_blank">
        <img src="https://admin.umt.edu.pk/Media/Site/UMT/FileManager/2019/newsletterfootericon/twitter.png" alt="Twitter" width="37">
      </a>
      <a href="https://www.facebook.com/umtofficial" target="_blank">
        <img src="https://admin.umt.edu.pk/Media/Site/UMT/FileManager/2019/newsletterfootericon/fb.png" alt="Facebook" width="37">
      </a>
      <a href="https://www.linkedin.com/school/university-of-management-and-technology/" target="_blank">
        <img src="https://admin.umt.edu.pk/Media/Site/UMT/FileManager/2019/newsletterfootericon/linkden.png" alt="LinkedIn" width="37">
      </a>
      <a href="http://websta.me/n/umtofficial" target="_blank">
        <img src="https://admin.umt.edu.pk/Media/Site/UMT/FileManager/2019/newsletterfootericon/insta.png" alt="Instagram" width="37">
      </a>
    </div>
  </div>
</body>
</html>";

// Set sender's email and name.
$senderEmail = "onlineadmissions@umt.edu.pk";
$senderName = "UMT Admissions";

// Format the 'From' header with sender's name and email.
$headers = "From: $senderName <$senderEmail>" . "\r\n" .
           "Reply-To: $senderEmail" . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

// Send the email.
if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully.";
} else {
    echo "Failed to send the email.";
}
?>
