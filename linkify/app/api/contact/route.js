import { Mea_Culpa } from "next/font/google";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Basic Validation for form
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required!" }),
        { status: 400 }
      );
    }

    console.log("New Contact Form Submission:");
    console.log({ name, email, message });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message Received Successfully!",
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: "Something Went Wrong!" }),
      { status: 500 }
    );
  }
}
