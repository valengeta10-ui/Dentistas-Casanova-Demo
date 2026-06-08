import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Phone, MapPin, Mail, Award, CheckCircle2, Clock } from "lucide-react";
import { easeOutQuint, durationNormal, staggerNormal, viewportAmountNormal } from "../utils/animationConstants";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, handleSubmit] = useForm("mzdqrpdl");
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Por favor escribe tu nombre completo";
    if (!formData.phone.trim()) {
      errs.phone = "El teléfono celular es requerido";
    } else if (!/^\+?[\d\s-]{10,13}$/.test(formData.phone.trim())) {
      errs.phone = "Por favor escribe un teléfono de 10 dígitos válido";
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Por favor escribe un correo válido";
    }
    if (!formData.subject.trim()) errs.subject = "Por favor selecciona un asunto";
    if (!formData.message.trim()) errs.message = "Por favor escribe tu duda o tratamiento de interés";
    return errs;
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const systemErrors = validate();
    if (Object.keys(systemErrors).length > 0) {
      setErrors(systemErrors);
    } else {
      setErrors({});
      
      // Store submitted data for success message
      setSubmittedData({ ...formData });
      
      // Add _subject field to customize email subject
      const form = e.target as HTMLFormElement;
      let subjectField = form.querySelector('input[name="_subject"]') as HTMLInputElement;
      if (!subjectField) {
        subjectField = document.createElement('input');
        subjectField.type = 'hidden';
        subjectField.name = '_subject';
        form.appendChild(subjectField);
      }
      subjectField.value = `Nuevo mensaje de contacto: ${formData.subject || 'General'} - ${formData.name}`;
      
      handleSubmit(e);
      
      // Show success screen after Formspree submission
      setShowSuccess(true);
      
      // Reset form after 8 seconds
      setTimeout(() => {
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
        setShowSuccess(false);
        setSubmittedData(null);
      }, 8000);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-surface-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Local SEO info & benefits */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationNormal, ease: easeOutQuint }}
          >
            <motion.span 
              className="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal, ease: easeOutQuint }}
            >
              Contacto Humano
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 2, ease: easeOutQuint }}
            >
              Permítenos solucionar tu caso con calidez y sinceridad
            </motion.h2>
            <motion.div 
              className="h-0.5 w-12 bg-accent"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 3, ease: easeOutQuint }}
            />
            
            <motion.p 
              className="text-slate-600 font-light leading-relaxed text-sm"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 4, ease: easeOutQuint }}
            >
              Escríbenos directamente o solicita una llamada rápida. Un dentista certificado de nuestro consultorio resolverá tus inquietudes sin ningún compromiso financiero.
            </motion.p>

            {/* Quick trust arguments icons */}
            <motion.div 
              className="space-y-4 pt-2"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 5, ease: easeOutQuint }}
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Presupuestos 100% honestos sin cargos sorpresa</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Atención oportuna de urgencias el mismo día</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-accent shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Casi 40 años curando sonrisas</span>
              </div>
            </motion.div>

            {/* Local business stats contact banner */}
            <motion.div 
              className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm space-y-3"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 6, ease: easeOutQuint }}
            >
              <p className="text-xs font-bold text-slate-800">¿Prefieres atención express?</p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+528183379438"
                  className="inline-flex items-center gap-2 text-sm text-primary font-bold hover:underline"
                >
                  <Phone className="w-4 h-4 text-secondary" />
                  +52 81 8337 9438
                </a>
                <span className="text-xs text-slate-500 font-light">Ubicados en Calle Villa Rica 2401</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium validation form card */}
          <motion.div 
            className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 p-8 sm:p-10 shadow-xl shadow-slate-200/50"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationNormal, delay: staggerNormal, ease: easeOutQuint }}
          >
            <AnimatePresence mode="wait">
              {showSuccess ? (
                <motion.div 
                  className="text-center py-12 space-y-4" 
                  id="contact-success-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: durationNormal, ease: easeOutQuint }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-green-200"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="font-serif text-2xl font-bold text-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    ¡Mensaje enviado con éxito!
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-slate-600 max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    Hola <strong className="text-slate-800">{submittedData?.name || formData.name}</strong>, hemos registrado tus datos correctamente. Uno de nuestros odontólogos se pondrá en contacto contigo en los próximos minutos para responder tus dudas.
                  </motion.p>
                  <motion.div 
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <span className="inline-block text-xs text-slate-400">Gracias por confiar en Dentistas Casanova</span>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.form 
                  id="contact-general-form" 
                  onSubmit={handleSend} 
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: durationNormal, ease: easeOutQuint }}
                >
                  <input type="hidden" name="form_type" value="contact" />
                  <h3 className="font-serif text-xl font-bold text-slate-800">Formulario de Contacto</h3>
                  <p className="text-xs text-slate-500 font-light">Completa los campos y nos comunicamos contigo.</p>
                  
                  {/* Subject */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Asunto *</label>
                    <motion.select
                      id="contact-subject-select"
                      name="subject"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-slate-800 bg-white"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="Dudas generales">Dudas generales</option>
                      <option value="Cotización de tratamiento">Cotización de tratamiento</option>
                      <option value="Urgencia dental">Urgencia dental</option>
                      <option value="Segunda opinión">Segunda opinión</option>
                      <option value="Otro">Otro</option>
                    </motion.select>
                    {errors.subject && <p className="text-red-500 text-xs mt-1 font-mono">Por favor selecciona un asunto</p>}
                  </motion.div>

                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Nombre *</label>
                    <motion.input
                      id="contact-name-input"
                      type="text"
                      name="name"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-slate-800"
                      placeholder="Ej. María Elena Casanova"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    <ValidationError field="name" errors={state.errors} />
                    {errors.name && <p className="text-red-500 text-xs mt-1 font-mono">{errors.name}</p>}
                  </motion.div>

                  {/* Grid (Phone & Email) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Teléfono *</label>
                      <motion.input
                        id="contact-phone-input"
                        type="tel"
                        name="phone"
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-slate-800"
                        placeholder="Ej. 81 8337 9438"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      />
                      <ValidationError field="phone" errors={state.errors} />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 font-mono">{errors.phone}</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Correo (Opcional)</label>
                      <motion.input
                        id="contact-email-input"
                        type="email"
                        name="email"
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-slate-800"
                        placeholder="Ej. elena@casanovadistritodental.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      />
                      <ValidationError field="email" errors={state.errors} />
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-mono">{errors.email}</p>}
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mensaje *</label>
                    <motion.textarea
                      id="contact-message-input"
                      name="message"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all h-28 resize-none text-slate-800"
                      placeholder="Ej. Me interesa agendar una cita de ortodoncia con la Dra. Fernanda Díaz, o saber el costo estimado de una endodoncia..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    <ValidationError field="message" errors={state.errors} />
                    {errors.message && <p className="text-red-500 text-xs mt-1 font-mono">{errors.message}</p>}
                  </motion.div>

                  {/* Submitting button */}
                  <motion.button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    whileFocus={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="w-full bg-primary text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <motion.div
                      animate={state.submitting ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 1, repeat: state.submitting ? Infinity : 0, ease: "linear" }}
                    >
                      <Send className="w-4 h-4 text-secondary" />
                    </motion.div>
                    {state.submitting ? "Enviando..." : "Solicitar información"}
                  </motion.button>

                  <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                    * Sus datos personales se tratarán con absoluta discreción y confidencialidad médica conforme a la Ley Federal de Datos de México.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
