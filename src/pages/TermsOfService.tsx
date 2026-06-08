import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { easeOutQuint, durationNormal, viewportAmountNormal } from "../utils/animationConstants";
import { useNavigate } from "react-router-dom";

export default function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: durationNormal, ease: easeOutQuint }}
        className="bg-primary text-white py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver
          </motion.button>
          <h1 className="text-4xl font-serif font-bold mb-4">Términos del Servicio</h1>
          <p className="text-white/80 text-lg">
            Dentistas Casanova - Condiciones de uso de nuestros servicios
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: durationNormal, delay: 0.2, ease: easeOutQuint }}
        viewport={{ once: true, amount: viewportAmountNormal }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="prose prose-slate max-w-none">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
            <p className="text-sm text-slate-600 mb-2">
              <strong>Fecha de última actualización:</strong> Junio 2026
            </p>
            <p className="text-sm text-slate-600">
              <strong>Prestador:</strong> Dentistas Casanova
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">1. Aceptación de Términos</h2>
            <p className="text-slate-700 leading-relaxed">
              Al utilizar los servicios de Dentistas Casanova, aceptas estos términos y condiciones. Si no estás de acuerdo con estos términos, por favor no utilices nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">2. Descripción de Servicios</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Dentistas Casanova proporciona servicios dentales que incluyen:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Odontología general</li>
              <li>Endodoncia</li>
              <li>Cirugía oral</li>
              <li>Periodoncia</li>
              <li>Prótesis dental</li>
              <li>Coronas</li>
              <li>Blanqueamiento dental</li>
              <li>Radiografía por computadora</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">3. Responsabilidades del Paciente</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Como paciente, te comprometes a:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Proporcionar información médica precisa y completa</li>
              <li>Asistir a tus citas puntualmente</li>
              <li>Cancelar con anticipación si no puedes asistir</li>
              <li>Seguir las instrucciones post-tratamiento</li>
              <li>Pagar por los servicios recibidos según los precios establecidos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">4. Cancelaciones y Reagendamientos</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Política de cancelaciones:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Cancela con al menos 24 horas de anticipación para evitar cargos</li>
              <li>Las cancelaciones tardías pueden estar sujetas a cargos</li>
              <li>Las no-shows (no presentarse) pueden tener cargos adicionales</li>
              <li>Para cancelar, llámanos al +52 81 8337 9438</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">5. Pagos</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Información sobre pagos:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Aceptamos efectivo y tarjetas de crédito/débito</li>
              <li>Los precios se confirman al momento de la consulta</li>
              <li>Ofrecemos opciones de pago para tratamientos extensos</li>
              <li>Los precios están sujetos a cambios sin previo aviso</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">6. Limitación de Responsabilidad</h2>
            <p className="text-slate-700 leading-relaxed">
              Dentistas Casanova no se hace responsable por complicaciones médicas que surjan de no seguir las instrucciones del tratamiento, o por información médica incompleta proporcionada por el paciente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">7. Modificaciones</h2>
            <p className="text-slate-700 leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor al publicarse en este sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">8. Contacto</h2>
            <p className="text-slate-700 leading-relaxed">
              Para cualquier pregunta sobre estos términos, contáctanos:
            </p>
            <p className="text-slate-800 font-semibold mt-2">
              Teléfono: +52 81 8337 9438
            </p>
            <p className="text-slate-800 font-semibold">
              Dirección: Calle Villa Rica 2401, Colonia Las Villas, C.P. 67175, Guadalupe, N.L.
            </p>
          </section>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600">
              Al utilizar nuestros servicios, confirmas que has leído, entendido y aceptado estos términos y condiciones.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
