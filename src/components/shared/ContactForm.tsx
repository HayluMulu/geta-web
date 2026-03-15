import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactForm = () => {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="text-sm text-foreground-muted mb-2 block">
            שם מלא
          </label>
          <Input
            id="contact-name"
            placeholder="השם שלך"
            className="bg-background/50"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="text-sm text-foreground-muted mb-2 block">
            טלפון
          </label>
          <Input
            id="contact-phone"
            type="tel"
            inputMode="numeric"
            placeholder="050-1234567"
            className="bg-background/50"
            required
            aria-required="true"
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="cosmic"
        size="lg"
        className="w-full h-14 text-lg font-bold"
        aria-label="שלח פרטים ליצירת קשר">
        יאללה בואו נדבר
      </Button>
    </form>
  );
};

export default ContactForm;
