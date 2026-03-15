import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxSF-rmEWtt1Yc1kUthS8QD-ZnI2Tucx2lg0EDMCkSjspr8xBMyG3yjQ5QTGaUyhlR5/exec";

const PHONE_REGEX = /^0(?:[23489]|5[0-9]|7[2-9])[-]?\d{7}$/;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = e.target.value.replace(/[^0-9-]/g, "");
    setPhone(filtered);
    if (phoneError) setPhoneError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedPhone) {
      setPhoneError("חובה להזין מספר טלפון");
      return;
    }

    if (!PHONE_REGEX.test(trimmedPhone)) {
      setPhoneError("מספר הטלפון אינו תקין (10 ספרות, למשל: 05XXXXXXXX)");
      return;
    }

    if (!trimmedName) return;

    setIsLoading(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, phone: trimmedPhone, timestamp: new Date().toISOString() }),
      });
      setName("");
      setPhone("");
      setPhoneError("");
      setIsSuccess(true);
    } catch {
      setPhoneError("משהו השתבש, נסה שוב מאוחר יותר.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="text-4xl mb-4">🎬</div>
        <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>
          תודה, אלי גטה יחזור אליך בקרוב!
        </h3>
        <div className="h-1 w-24 mx-auto mt-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
      </motion.div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="text-sm text-muted-foreground mb-2 block">
            שם מלא
          </label>
          <Input
            id="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="השם שלך"
            className="bg-background/50"
            required
            aria-required="true"
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="text-sm text-muted-foreground mb-2 block">
            טלפון
          </label>
          <Input
            id="contact-phone"
            type="tel"
            inputMode="numeric"
            dir="rtl"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="050-1234567"
            className={`bg-background/50 ${phoneError ? "border-destructive ring-destructive/30 ring-2" : ""}`}
            required
            aria-required="true"
            aria-invalid={!!phoneError}
            aria-describedby={phoneError ? "phone-error" : undefined}
            maxLength={11}
          />
          <AnimatePresence>
            {phoneError && (
              <motion.p
                id="phone-error"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="text-xs text-destructive mt-1.5 font-medium"
              >
                {phoneError}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Button
        type="submit"
        variant="cosmic"
        size="lg"
        className="w-full h-14 text-lg font-bold"
        disabled={isLoading}
        aria-label="שלח פרטים ליצירת קשר"
      >
        {isLoading ? "שולח..." : "יאללה בואו נדבר"}
      </Button>
    </form>
  );
};

export default ContactForm;
