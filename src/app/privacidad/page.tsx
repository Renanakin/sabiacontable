export default function PrivacidadPage() {
  return (
    <div className="bg-[#032030] text-slate-100 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Política de Privacidad</h1>
        <p className="text-slate-300 leading-relaxed">
          Los datos enviados por formularios de contacto se utilizan exclusivamente para responder consultas y gestionar solicitudes de asesoría.
          No compartimos información personal con terceros fuera de los proveedores técnicos necesarios para operar el servicio.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Si deseas actualizar o eliminar tus datos, puedes escribir a <a className="text-[#d80073] hover:underline" href="mailto:contacto@sabiacontable.cl">contacto@sabiacontable.cl</a>.
        </p>
      </div>
    </div>
  );
}

