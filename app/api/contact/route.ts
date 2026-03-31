import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, company, message, service } = await request.json();

    const apiKey = process.env.BREVO_API_KEY;
    const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL || 'lumoratriad@gmail.com';
    const fromName = process.env.NEXT_PUBLIC_FROM_NAME || 'Lumora Triad';

    if (!apiKey) {
      console.error('Brevo API key is missing');
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

    console.log('Sending notification to Lumora Triad...');

    // Send email to Lumora Triad (Notification)
    const notificationResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: fromName, email: fromEmail },
        to: [{ email: fromEmail, name: fromName }],
        subject: `New Contact Form Submission: ${firstName} ${lastName}`,
        htmlContent: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2 style="color: #333;">New Project Inquiry</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
          </div>
        `,
      }),
    });

    const notificationResult = await notificationResponse.json();
    console.log('Brevo Notification Response:', notificationResult);

    if (!notificationResponse.ok) {
      return NextResponse.json({ 
        error: 'Failed to send notification email', 
        details: notificationResult 
      }, { status: 500 });
    }

    console.log(`Sending auto-responder to: ${email}...`);

    // Send confirmation email to the user (Auto-responder)
    const confirmationResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: fromName, email: fromEmail },
        to: [{ email: email, name: firstName }],
        subject: `Thank you for reaching out to Lumora Triad`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 30px; border-radius: 10px;">
            <p>Hi ${firstName},</p>
            <p>Thank you for reaching out to <strong>Lumora Triad</strong>! We've received your inquiry regarding our <strong>${service}</strong> solutions.</p>
            <p>Our team is currently reviewing your message and we'll get back to you shortly.</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0;">
            <p><strong>What happens next?</strong></p>
            <ul style="padding-left: 20px;">
               <li>We will message you on <strong>WhatsApp</strong>.</li>
               <li>Or we will schedule a <strong>direct call within the next 24 hours</strong>.</li>
            </ul>
            <p>If your project is urgent, please feel free to reach us via WhatsApp directly at +91 99478 78418.</p>
            <p>Best regards,<br><strong>The Lumora Triad Team</strong></p>
          </div>
        `,
      }),
    });

    const confirmationResult = await confirmationResponse.json();
    console.log('Brevo Confirmation Response:', confirmationResult);

    if (!confirmationResponse.ok) {
      console.warn('Auto-responder failed, but primary notification succeeded.');
      // We don't fail the entire request if just the confirmation fails, 
      // but we return the success status of the notification at least.
    }

    return NextResponse.json({ success: true, notificationId: notificationResult.messageId });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
