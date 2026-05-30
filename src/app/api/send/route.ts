import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_mock_key");

export async function POST(request: Request) {
  try {
    const { nombre, email, servicio, telefono, mensaje } = await request.json();

    if (!nombre || !email || !servicio || !telefono || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    // Enviar el correo usando el SDK de Resend
    const { data, error } = await resend.emails.send({
      from: "Sabia Contable <onboarding@resend.dev>",
      to: "contacto@sabiacontable.cl",
      subject: `Nueva Consulta Web: ${servicio} - ${nombre}`,
      html: `
        <h2>Nueva solicitud de asesoría recibida</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Servicio:</strong> ${servicio}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Error interno del servidor";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

