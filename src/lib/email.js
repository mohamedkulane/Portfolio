import emailjs from "@emailjs/browser"

export async function sendContactEmail(data) {
  const serviceId =
    import.meta.env.VITE_EMAILJS_SERVICE_ID

  const templateId =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID

  const publicKey =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS configuration is missing."
    )
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject,
    message: data.message,

    source: "Mohamed Ahmed Portfolio",

    submitted_at: new Date().toLocaleString(
      "en-GB",
      {
        timeZone: "Africa/Mogadishu",
      }
    ),
  }

  return emailjs.send(
    serviceId,
    templateId,
    templateParams,
    {
      publicKey,
    }
  )
}