Deno.serve(async (req: Request) => {
    const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, x-client-info, apikey",
    };

    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders });
    if (req.method !== "POST") return new Response("Method not allowed", { status: 405, headers: corsHeaders });

    let body: ContactMessage;
    try {
        body = await req.json();
        console.log("Request body:", body);
    } catch (err) {
        console.error("Invalid JSON:", err);
        return new Response(JSON.stringify({ success: false, error: "Invalid JSON" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
        console.error("RESEND_API_KEY is missing!");
        return new Response(JSON.stringify({ success: false, error: "Server misconfiguration" }), {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    }

    const { name, email, subject, message } = body;
    const payload = {
        from: "Technukes <no-reply@technukes.com>",
        to: ["imwa5i7@gmail.com"],
        subject: `[Contact] ${subject}`,
        replyTo: email,
        html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
           <p><strong>Message:</strong></p>
           <p>${message.replace(/\n/g, "<br/>")}</p>`,
        text: `From: ${name} <${email}>\n\n${message}`,
    };

    try {
        const resendRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const text = await resendRes.text();
        console.log("Resend API response:", text);

        return new Response(JSON.stringify({ success: resendRes.ok }), {
            status: resendRes.ok ? 200 : 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error("Resend API error:", err);
        return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    }
});