import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxSF-rmEWtt1Yc1kUthS8QD-ZnI2Tucx2lg0EDMCkSjspr8xBMyG3yjQ5QTGaUyhlR5/exec";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string).trim();
    const phone = (formData.get("phone") as string).trim();

    if (!name || !phone) return;

    setIsSubmitting(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, timestamp: new Date().toISOString() }),
      });
      toast.success("קיבלנו את הפרטים שלך, נחזור אליך בהקדם.");
      form.reset();
    } catch {
      toast.error("משהו השתבש, נסה שוב מאוחר יותר.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="text-sm text-foreground-muted mb-2 block">
            שם מלא
          </label>
          <Input
            id="contact-name"
            name="name"
            placeholder="השם שלך"
            className="bg-background/50"
            required
            aria-required="true"
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="text-sm text-foreground-muted mb-2 block">
            טלפון
          </label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            dir="rtl"
            placeholder="050-1234567"
            className="bg-background/50"
            required
            aria-required="true"
            maxLength={11}
            pattern="[\d\-]{7,11}"
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="cosmic"
        size="lg"
        className="w-full h-14 text-lg font-bold"
        disabled={isSubmitting}
        aria-label="שלח פרטים ליצירת קשר">
        {isSubmitting ? "שולח..." : "יאללה בואו נדבר"}
      </Button>
    </form>
  );
};

export default ContactForm;
