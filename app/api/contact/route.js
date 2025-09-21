import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  // Initialize Resend client lazily to avoid build-time failures when
  // environment variables are not present during static analysis.
  const apiKey = process.env.RESEND_API_KEY;
  let resend;
  if (apiKey) {
    resend = new Resend(apiKey);
  } else {
    // If the API key is missing, return a 503 to indicate the email service
    // is unavailable. This prevents build-time crashes.
    return NextResponse.json({ message: "Email service unavailable (missing API key)" }, { status: 503 });
  }
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const userHtml = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  </head>
  <body style="margin:0; padding:0; background-color:#f5f5f5;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
      <!-- Centering container -->
      <tr>
        <td align="center" style="padding:40px 10px;">
          <!-- Main content table -->
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="max-width:600px; background:#ffffff; border:1px solid #e0e0e0;">
            <!-- Decorative Header Image -->
            <tr>
              <td>
                <!-- IMPORTANT: image URL -->
                <img src="https://naldzgraphics.net/wp-content/uploads/2012/02/black-and-white-patterns1.jpg" alt="Decorative Header" width="600" style="display:block; width:100%; max-width:600px; height:auto;">
              </td>
            </tr>
            <!-- Main Content -->
            <tr>
              <td style="padding:40px 30px; color:#111111; font-family:'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size:16px; line-height:1.6;">
                <h1 style="margin:0 0 24px; font-size:28px; font-weight:700;">Thanks for reaching out, ${name}!</h1>
                <p style="margin:0 0 24px;">I&apos;ve received your message and will get back to you as soon as possible. Here is a copy of your message for your records:</p>
                <!-- Message Details Table -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #eeeeee;">
                  <tr>
                    <td style="padding:12px 16px; background:#fafafa; color:#111111; font-size:14px; font-weight:700;">Your Message</td>
                  </tr>
                  <tr>
                    <td style="padding:16px; color:#333333; white-space:pre-wrap; font-size:15px; line-height:1.7;">${message}</td>
                  </tr>
                </table>
                <p style="margin:24px 0 0; color:#555555;">Best regards,<br>Ritam Saha</p>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding:20px 30px; text-align:center; font-size:12px; color:#999999; background:#fafafa; border-top: 1px solid #eeeeee;">
                This is an automated response to a contact form submission.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

    const ownerHtml = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New contact submission</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  </head>
  <body style="margin:0; padding:0; background-color:#f5f5f5;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
      <!-- Centering container -->
      <tr>
        <td align="center" style="padding:40px 10px;">
          <!-- Main content table -->
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="max-width:600px; background:#ffffff; border:1px solid #e0e0e0;">
            <!-- Decorative Header Image -->
            <tr>
              <td>
                <img src="https://naldzgraphics.net/wp-content/uploads/2012/02/black-and-white-patterns1.jpg" alt="Decorative Pattern" width="600" style="display:block; width:100%; max-width:600px; height:auto;">
              </td>
            </tr>
            <!-- Main Content -->
            <tr>
              <td style="padding:40px 30px; color:#111111; font-family:'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size:16px; line-height:1.6;">
                <h1 style="margin:0 0 24px; font-size:28px; font-weight:700;">New contact form submission</h1>
                <p style="margin:0 0 24px;">You have received a new message from your portfolio contact form.</p>
                <!-- Submission Details Table -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #eeeeee;">
                  <tr>
                    <td style="padding:12px 16px; background:#fafafa; color:#111111; font-size:14px; font-weight:700;" colspan="2">Submission Details</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 16px; font-weight: 600; color:#333333; width:100px; border-top:1px solid #eeeeee;">Name</td>
                    <td style="padding:12px 16px; color:#333333; border-top:1px solid #eeeeee;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 16px; font-weight: 600; color:#333333; width:100px; border-top:1px solid #eeeeee;">Email</td>
                    <td style="padding:12px 16px; color:#333333; border-top:1px solid #eeeeee;">${email}</td>
                  </tr>
                   <tr>
                    <td style="padding:12px 16px; font-weight: 600; color:#333333; width:100px; vertical-align:top; border-top:1px solid #eeeeee;">Message</td>
                    <td style="padding:12px 16px; color:#333333; white-space:pre-wrap; border-top:1px solid #eeeeee;">${message}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding:20px 30px; text-align:center; font-size:12px; color:#999999; background:#fafafa; border-top: 1px solid #eeeeee;">
                This email was sent from your portfolio contact form.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
    `;

    // Send confirmation email to the user
    const { data: userEmailData, error: userEmailError } =
      await resend.emails.send({
        from: process.env.FROM_EMAIL,
        to: email,
        subject: "Thank you for contacting me!",
        html: userHtml,
      });

    if (userEmailError) {
      console.error("User email error:", userEmailError);
      return NextResponse.json({ message: "Failed to send confirmation email" }, { status: 500 });
    }

    // Send notification email to yourself
    const { data: ownerEmailData, error: ownerEmailError } =
      await resend.emails.send({
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        subject: `New contact form submission from ${name}`,
        html: ownerHtml,
      });

    if (ownerEmailError) {
      console.error("Owner email error:", ownerEmailError);
      // Don't fail the request if owner email fails, but log it
    }

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function OPTIONS(request) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}