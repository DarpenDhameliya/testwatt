import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB per PDF

function isPdfFile(file: File): boolean {
  return file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please set RESEND_API_KEY in your .env.local file.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const formData = await req.formData();
    const name = formData.get("name");
    const company = formData.get("company");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const details = formData.get("details");

    const attachmentEntry = formData.get("attachments");
    const attachmentFile =
      attachmentEntry instanceof File && attachmentEntry.size > 0 ? attachmentEntry : null;

    if (attachmentFile) {
      if (!isPdfFile(attachmentFile)) {
        return NextResponse.json(
          { error: "Only a PDF file can be attached." },
          { status: 400 }
        );
      }
      if (attachmentFile.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "The PDF must be 20MB or smaller." },
          { status: 400 }
        );
      }
    }

    // Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Full name is required." }, { status: 400 });
    }
    if (name.trim().length < 2) {
      return NextResponse.json({ error: "Full name must be at least 2 characters." }, { status: 400 });
    }

    if (!company || typeof company !== "string" || !company.trim()) {
      return NextResponse.json({ error: "Company name is required." }, { status: 400 });
    }
    if (company.trim().length < 2) {
      return NextResponse.json({ error: "Company name must be at least 2 characters." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }
    const phoneDigits = phone.trim().replace(/\D/g, "");
    const phoneRegex = /^[+]?[\d\s\-().]{7,25}$/;
    if (!phoneRegex.test(phone.trim()) || phoneDigits.length < 7 || phoneDigits.length > 15) {
      return NextResponse.json({ error: "Please enter a valid phone number (7 to 15 digits)." }, { status: 400 });
    }

    if (!service || typeof service !== "string" || !service.trim()) {
      return NextResponse.json({ error: "Please select a service." }, { status: 400 });
    }

    if (!details || typeof details !== "string" || !details.trim()) {
      return NextResponse.json({ error: "Please describe your project or equipment requirements." }, { status: 400 });
    }
    if (details.trim().length < 10) {
      return NextResponse.json({ error: "Please provide more details (minimum 10 characters)." }, { status: 400 });
    }

    const adminEmail = process.env.ADMIN_EMAIL || "admin@testwatt.com";
    const fromAddress = process.env.RESEND_FROM_EMAIL || "TestWatt Leads <onboarding@resend.dev>";
    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "short",
    });

    const cleanName = String(name).trim();
    const cleanCompany = String(company).trim();
    const cleanEmail = String(email).trim();
    const cleanPhone = phone ? String(phone).trim() : "Not provided";
    const cleanService = String(service).trim();
    const cleanDetails = details && String(details).trim().length > 0 ? String(details).trim() : "No additional specifications provided.";

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Service Request - TestWatt</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #0a192f 0%, #112240 100%); padding: 28px 32px; border-bottom: 3px solid #e11d48;">
      <div style="color: #fda4af; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 6px;">
        TEST WATT // CRITICAL POWER SERVICES
      </div>
      <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0; line-height: 1.2;">
        New Client Service Enquiry
      </h1>
    </div>

    <!-- Content -->
    <div style="padding: 32px;">
      <div style="background-color: #f8fafc; border-left: 4px solid #e11d48; padding: 14px 18px; border-radius: 4px; margin-bottom: 24px;">
        <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #64748b; display: block; margin-bottom: 4px;">
          REQUESTED SERVICE
        </span>
        <span style="font-size: 17px; font-weight: 700; color: #e11d48;">
          ${cleanService}
        </span>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
        <tbody>
          <tr>
            <td style="padding: 12px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b; width: 35%;">
              Contact Name
            </td>
            <td style="padding: 12px 14px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 600; color: #0f172a;">
              ${cleanName}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
              Company
            </td>
            <td style="padding: 12px 14px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a;">
              ${cleanCompany}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
              Email Address
            </td>
            <td style="padding: 12px 14px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0284c7;">
              <a href="mailto:${cleanEmail}" style="color: #0284c7; text-decoration: underline;">
                ${cleanEmail}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b;">
              Phone Number
            </td>
            <td style="padding: 12px 14px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a;">
              ${cleanPhone}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b; vertical-align: top;">
              Project &amp; Equipment Notes
            </td>
            <td style="padding: 12px 14px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap;">
              ${cleanDetails}
            </td>
          </tr>
          ${attachmentFile
        ? `<tr>
            <td style="padding: 12px 14px; font-size: 13px; font-weight: 600; color: #64748b;">
              Attached File
            </td>
            <td style="padding: 12px 14px; font-size: 14px; color: #0f172a;">
              ${attachmentFile.name} attached below
            </td>
          </tr>`
        : ""
      }
        </tbody>
      </table>

      <!-- Quick Action Button -->
      <div style="text-align: center; margin-bottom: 24px;">
        <a href="mailto:${cleanEmail}?subject=Re: Enquiry for ${encodeURIComponent(cleanService)} - TestWatt" 
           style="display: inline-block; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-size: 14px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase;">
          Reply Directly to Client
        </a>
      </div>

      <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #94a3b8; display: flex; justify-content: space-between;">
        <span>Submitted: ${submittedAt} UTC</span>
        <span>TestWatt Web Portal</span>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    const resendAttachments = attachmentFile
      ? [
        {
          filename: attachmentFile.name || "attachment.pdf",
          content: Buffer.from(await attachmentFile.arrayBuffer()),
        },
      ]
      : undefined;

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [adminEmail],
      replyTo: cleanEmail,
      subject: `New Enquiry: ${cleanService} — ${cleanCompany} (${cleanName})`,
      html: emailHtml,
      attachments: resendAttachments,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    const error = err as { message?: string };
    console.error("Contact API exception:", err);
    return NextResponse.json(
      { error: error?.message || "An unexpected error occurred while sending your enquiry." },
      { status: 500 }
    );
  }
}
