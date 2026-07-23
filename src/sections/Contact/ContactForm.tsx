import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema } from "../../validation/contactSchema";
import type { ContactFormData } from "../../validation/contactSchema";

import Card from "../../components/ui/Card";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success(
        "Message sent successfully! I'll get back to you soon."
        );

      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast.error(
        "Something went wrong. Please try again."
        );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div>
          <input
            type="text"
            {...register("name")}
            placeholder="Your Name"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-blue-500"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.name?.message}
          </p>
        </div>

        <div>
          <input
            type="email"
            {...register("email")}
            placeholder="Email Address"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-blue-500"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.email?.message}
          </p>
        </div>

        <div>
          <input
            type="text"
            {...register("subject")}
            placeholder="Subject"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-blue-500"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.subject?.message}
          </p>
        </div>

        <div>
          <textarea
            rows={6}
            {...register("message")}
            placeholder="Your Message"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-blue-500"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.message?.message}
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </Card>
  );
}

export default ContactForm;