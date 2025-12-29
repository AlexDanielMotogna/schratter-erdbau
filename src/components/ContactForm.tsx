"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import Button from "./Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name ist erforderlich";
    }

    // Require either email or phone
    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.email = "E-Mail oder Telefon erforderlich";
      newErrors.phone = "E-Mail oder Telefon erforderlich";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ungültige E-Mail-Adresse";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Nachricht ist erforderlich";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white border border-border rounded-card p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h3 className="font-heading font-bold text-h3 text-text mb-2">
          Nachricht gesendet!
        </h3>
        <p className="text-body text-muted mb-6">
          Vielen Dank für Ihre Anfrage. Wir melden uns so bald wie möglich bei
          Ihnen.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="secondary"
        >
          Neue Anfrage senden
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-border rounded-card p-6 lg:p-8"
    >
      <h3 className="font-heading font-bold text-h3 text-text mb-6">
        Anfrage senden
      </h3>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-small font-semibold text-text mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full h-12 px-4 rounded-input border ${
              errors.name ? "border-error" : "border-border"
            } focus:border-focus focus:ring-2 focus:ring-focus/20 outline-none transition-colors`}
            placeholder="Ihr Name"
          />
          {errors.name && (
            <p className="mt-1 text-micro text-error">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-small font-semibold text-text mb-2"
          >
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full h-12 px-4 rounded-input border ${
              errors.email ? "border-error" : "border-border"
            } focus:border-focus focus:ring-2 focus:ring-focus/20 outline-none transition-colors`}
            placeholder="ihre@email.at"
          />
          {errors.email && (
            <p className="mt-1 text-micro text-error">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-small font-semibold text-text mb-2"
          >
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full h-12 px-4 rounded-input border ${
              errors.phone ? "border-error" : "border-border"
            } focus:border-focus focus:ring-2 focus:ring-focus/20 outline-none transition-colors`}
            placeholder="+43 664 ..."
          />
          {errors.phone && (
            <p className="mt-1 text-micro text-error">{errors.phone}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-small font-semibold text-text mb-2"
          >
            Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 rounded-input border ${
              errors.message ? "border-error" : "border-border"
            } focus:border-focus focus:ring-2 focus:ring-focus/20 outline-none transition-colors resize-none`}
            placeholder="Ihre Nachricht..."
          />
          {errors.message && (
            <p className="mt-1 text-micro text-error">{errors.message}</p>
          )}
        </div>

        <p className="text-micro text-muted">
          * Pflichtfelder. Entweder E-Mail oder Telefon ist erforderlich.
        </p>

        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="w-full justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Wird gesendet...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Nachricht senden
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
