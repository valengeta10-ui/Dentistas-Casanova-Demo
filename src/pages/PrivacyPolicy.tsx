import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { easeOutQuint, durationNormal, viewportAmountNormal } from "../utils/animationConstants";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-serif font-bold mb-4">Aviso de Privacidad</h1>
          <p className="text-white/80 text-lg">
            Dentistas Casanova - Protección de tus datos personales
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
              <strong>Responsable:</strong> Dentistas Casanova
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">1. Responsable del Tratamiento</h2>
            <p className="text-slate-700 leading-relaxed">
              Dentistas Casanova, con domicilio en Calle Villa Rica 2401, Colonia Las Villas, C.P. 67175, Guadalupe, Nuevo León, México, es responsable del tratamiento de tus datos personales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">2. Datos que Recopilamos</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Recopilamos los siguientes datos personales cuando solicitas una cita o te comunicas con nosotros:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Nombre completo</li>
              <li>Número de teléfono</li>
              <li>Correo electrónico (opcional)</li>
              <li>Información sobre el tratamiento dental requerido</li>
              <li>Fecha y hora preferida para la cita</li>
              <li>Mensajes o notas adicionales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">3. Finalidad del Tratamiento</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Tus datos personales se utilizan para:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Agendar y confirmar citas dentales</li>
              <li>Comunicarte contigo sobre tu tratamiento</li>
              <li>Enviar recordatorios de citas</li>
              <li>Mejorar nuestros servicios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">4. Derechos ARCO</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Tienes derecho a:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre ti</li>
              <li><strong>Rectificación:</strong> Solicitar corrección de datos inexactos</li>
              <li><strong>Cancelación:</strong> Solicitar la eliminación de tus datos</li>
              <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              Para ejercer estos derechos, contáctanos al teléfono +52 81 8337 9438.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">5. Seguridad de tus Datos</h2>
            <p className="text-slate-700 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra acceso no autorizado, alteración, destrucción o pérdida.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">6. Cambios a este Aviso</h2>
            <p className="text-slate-700 leading-relaxed">
              Nos reservamos el derecho de modificar este aviso de privacidad. Cualquier cambio será publicado en esta página.
            </p>
          </section>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600">
              Para cualquier pregunta sobre este aviso de privacidad, contáctanos:
            </p>
            <p className="text-sm text-slate-800 font-semibold mt-2">
              Teléfono: +52 81 8337 9438
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
