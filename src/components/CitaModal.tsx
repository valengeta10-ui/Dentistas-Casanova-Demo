import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Calendar, Phone, Mail, User, ShieldCheck } from "lucide-react";
import { SERVICES } from "../data";
import { useForm, ValidationError } from "@formspree/react";

interface CitaModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function CitaModal({ isOpen, onClose, initialService = "" }: CitaModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService,
    date: "",
    time: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, handleSubmit] = useForm("mzdqrpdl");
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Reset form when modal opens with new service
  React.useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: initialService,
        date: "",
        time: "",
        message: ""
      });
      setErrors({});
      setSubmittedData(null);
      setShowSuccess(false);
    }
  }, [isOpen, initialService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es obligatorio";
    } else if (!/^\+?[\d\s-]{10,13}$/.test(formData.phone.trim())) {
      newErrors.phone = "Introduce un número de teléfono válido (10 dígitos)";
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido";
    }
    if (!formData.service) newErrors.service = "Selecciona un tratamiento";
    if (!formData.date) newErrors.date = "Selecciona una fecha";
    if (!formData.time) newErrors.time = "Selecciona una hora";
    return newErrors;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      
      // Store submitted data for success message
      setSubmittedData({ ...formData });
      
      // Add clear appointment date/time fields for Formspree
      const form = e.target as HTMLFormElement;
      
      // Add _subject field to customize email subject
      let subjectField = form.querySelector('input[name="_subject"]') as HTMLInputElement;
      if (!subjectField) {
        subjectField = document.createElement('input');
        subjectField.type = 'hidden';
        subjectField.name = '_subject';
        form.appendChild(subjectField);
      }
      const serviceName = SERVICES.find(s => s.id === formData.service)?.title || formData.service;
      subjectField.value = `Nueva Cita: ${serviceName} - ${formData.date} ${formData.time}`;
      
      // Add appointment_date field
      let dateField = form.querySelector('input[name="appointment_date"]') as HTMLInputElement;
      if (!dateField) {
        dateField = document.createElement('input');
        dateField.type = 'hidden';
        dateField.name = 'appointment_date';
        form.appendChild(dateField);
      }
      dateField.value = formData.date;
      
      // Add appointment_time field
      let timeField = form.querySelector('input[name="appointment_time"]') as HTMLInputElement;
      if (!timeField) {
        timeField = document.createElement('input');
        timeField.type = 'hidden';
        timeField.name = 'appointment_time';
        form.appendChild(timeField);
      }
      timeField.value = formData.time;
      
      // Add timezone field
      let timezoneField = form.querySelector('input[name="timezone"]') as HTMLInputElement;
      if (!timezoneField) {
        timezoneField = document.createElement('input');
        timezoneField.type = 'hidden';
        timezoneField.name = 'timezone';
        form.appendChild(timezoneField);
      }
      timezoneField.value = 'Mexico City (UTC-6)';
      
      handleSubmit(e);
      
      // Show success screen after Formspree submission
      setShowSuccess(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      message: ""
    });
    setSubmittedData(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="cita-modal-container" key={isOpen ? 'modal-open' : 'modal-closed'} className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            id="cita-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal content */}
          <motion.div
            id="cita-modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl focus:outline-none z-10"
          >
            {/* Header decor */}
            <div className="bg-primary px-6 py-6 text-white relative">
              <button
                id="close-cita-modal-btn"
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors duration-200"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="inline-block text-xs uppercase tracking-widest text-secondary font-semibold mb-1">
                Atención Dental
              </span>
              <h3 className="text-2xl font-serif text-white">Solicitar cita</h3>
              <p className="text-xs text-white/80 mt-1">
                Dentistas Casanova — Casi 40 años cuidando tu sonrisa con cariño y dedicación.
              </p>
            </div>

            <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
              {showSuccess ? (
                <motion.div
                  id="success-booking-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200 shadow-sm animate-bounce">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-serif text-primary mb-2">¡Solicitud de cita enviada!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Estimado/a <strong className="text-slate-800">{submittedData?.name || formData.name}</strong>, hemos recibido tu solicitud de cita para el tratamiento de <strong>{SERVICES.find(s => s.id === (submittedData?.service || formData.service))?.title || submittedData?.service || formData.service}</strong> preferentemente el <strong>{submittedData?.date || formData.date}</strong> a las <strong>{submittedData?.time || formData.time}</strong>.
                  </p>
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-left text-xs text-amber-700 mb-6">
                    <p className="font-semibold text-amber-800 mb-1">Importante:</p>
                    <p className="mb-2">Esta es una solicitud de cita, no una confirmación definitiva.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-left text-xs text-slate-500 mb-6">
                    <p className="font-semibold text-slate-700 mb-1">¿Qué sigue ahora?</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Un coordinador de Dentistas Casanova se comunicará contigo vía WhatsApp o telefónica para confirmar disponibilidad y horario definitivo.</li>
                      <li>Recibirás indicaciones de llegada de ser necesario.</li>
                    </ul>
                  </div>
                  <div className="flex gap-3">
                    <button
                      id="another-booking-btn"
                      onClick={() => {
                        setSubmittedData(null);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          service: initialService,
                          date: "",
                          time: "",
                          message: ""
                        });
                        setErrors({});
                        setShowSuccess(false);
                      }}
                      className="flex-1 border border-slate-200 text-slate-600 hover:bg-slate-50 py-3 rounded-lg font-semibold transition-colors text-sm cursor-pointer"
                    >
                      Agendar otra cita
                    </button>
                    <button
                      id="finish-booking-btn"
                      onClick={handleReset}
                      className="flex-1 bg-primary hover:bg-primary/95 text-white py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-primary/20 cursor-pointer"
                    >
                      Entendido, ¡gracias!
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form 
                  id="booking-form" 
                  onSubmit={handleFormSubmit} 
                  className="space-y-4"
                >
                  <input type="hidden" name="service_name" value={SERVICES.find(s => s.id === formData.service)?.title || formData.service} />
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-705 mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-primary" /> Nombre y Apellido *
                    </label>
                    <input
                      id="form-name-input"
                      type="text"
                      name="name"
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                      placeholder="Ej. Roberto Casanova"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <ValidationError field="name" errors={state.errors} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone & Email (grid) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-705 mb-1 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-primary" /> Teléfono Móvil *
                      </label>
                      <input
                        id="form-phone-input"
                        type="tel"
                        name="phone"
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        placeholder="Ej. 81 8337 9438"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      <ValidationError field="phone" errors={state.errors} />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-705 mb-1 flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-primary" /> Correo Electrónico (Opcional)
                      </label>
                      <input
                        id="form-email-input"
                        type="email"
                        name="email"
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        placeholder="Ej. contacto@ejemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <ValidationError field="email" errors={state.errors} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-705 mb-1 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Tratamiento Requerido *
                    </label>
                    <select
                      id="form-service-select"
                      name="service"
                      className="w-full border border-slate-200 bg-white rounded-lg px-3 py-2 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Selecciona un tratamiento...</option>
                      {SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>

                  {/* Date & Time (grid) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-705 mb-1 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-primary" /> Fecha Preferida *
                      </label>
                      <input
                        id="form-date-input"
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                      {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-705 mb-1 flex items-center gap-1">
                        Horario Recomendado o Preferido *
                      </label>
                      <select
                        id="form-time-select"
                        name="time"
                        className="w-full border border-slate-200 bg-white rounded-lg px-3 py-2 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      >
                        <option value="">Selecciona una hora...</option>
                        <option value="09:00 AM">09:00 AM (Mañana)</option>
                        <option value="10:30 AM">10:30 AM (Mañana)</option>
                        <option value="12:00 PM">12:00 PM (Mediodía)</option>
                        <option value="01:30 PM">01:30 PM (Tarde)</option>
                        <option value="04:00 PM">04:00 PM (Tarde)</option>
                        <option value="05:30 PM">05:30 PM (Tarde)</option>
                        <option value="07:00 PM">07:00 PM (Noche)</option>
                      </select>
                      {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                    </div>
                  </div>

                  {/* Message / Comments */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-705 mb-1">
                      Mensaje o Notas adicionales (Opcional)
                    </label>
                    <textarea
                      id="form-message-textarea"
                      name="message"
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all h-20 resize-none"
                      placeholder="Platícanos brevemente tus síntomas o dudas..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Submission buttons */}
                  <div className="pt-2 flex gap-3">
                    <button
                      id="cancel-booking-btn"
                      type="button"
                      onClick={onClose}
                      className="w-1/3 border border-slate-200 text-slate-600 hover:bg-slate-50 py-3 rounded-lg font-semibold transition-colors text-sm cursor-pointer text-center"
                    >
                      Cancelar
                    </button>
                    <button
                      id="submit-booking-btn"
                      type="submit"
                      disabled={state.submitting}
                      className="w-2/3 bg-primary hover:bg-primary/95 text-white py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-primary/20 text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? "Enviando..." : "Enviar Solicitud de Cita"}
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                    Al agendar, aceptas que tus datos sean compartidos cumpliendo con nuestra política de privacidad local.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
