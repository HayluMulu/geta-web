import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactForm = () => {
  return (
    <form className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-foreground-muted mb-2 block">
            שם מלא
          </label>
          <Input placeholder="השם שלך" className="bg-background/50" />
        </div>
        <div>
          <label className="text-sm text-foreground-muted mb-2 block">
            טלפון
          </label>
          <Input
            type="number"
            placeholder="050-1234567"
            className="bg-background/50"
          />
        </div>
      </div>

      <Button
        variant="cosmic"
        size="lg"
        className="w-full h-14 text-lg font-bold">
        יאללה בואו נדבר
      </Button>
    </form>
  );
};

export default ContactForm;
