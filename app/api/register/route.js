import { dbConnect } from "@/lib/dbConnect";
import z from "zod";

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const validatedData = registerSchema.parse(body);
  } catch (error) {
    log.error("Error in registration:", error);
    return new Response(JSON.stringify({ error: "Registration failed" }), {
      status: 500,
    });
  }
}
