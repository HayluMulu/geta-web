import { motion } from "framer-motion";
import { Mail, Instagram } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import { trackEvent } from "@/lib/analytics";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6 scroll-mt-20">
      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            מוכנים לתת לעסק שלכם את ה-
            <span className="title-text-gradient">Show</span> שמגיע לו?
          </h2>
          <p className="text-foreground-muted text-lg">
            אני כאן כדי לעזור לכם להפוך כל רעיון לתוכן שמושך את העין (ומביא
            לידים). השאירו פרטים, נקבע לשיחה ונתחיל לתכנן את הפרויקט הבא שלכם.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-cosmic p-6 md:p-8">
            <ContactForm />
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 lg:pr-8">
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-foreground">
                דרכים נוספות ליצירת קשר:
              </h3>

              <div className="grid grid-cols-1 gap-8">
                {/* WhatsApp */}
                <a
                  href="https://wa.link/ofhnmb"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    trackEvent("whatsapp_click", {
                      link_location: "contact_section",
                    })
                  }
                  className="flex items-center gap-4 group"
                  aria-label="שלחו הודעה בוואטסאפ">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-all">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-[#25D366]"
                      aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.439 5.662 1.439h.056c6.555 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">WhatsApp</p>
                    <p className="text-foreground font-medium group-hover:text-[#25D366] transition-colors">
                      שלחו הודעה
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://katzr.net/5e0c54"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                  aria-label="עקבו אחרינו באינסטגרם">
                  <div className="w-12 h-12 rounded-xl bg-[#E4405F]/10 flex items-center justify-center group-hover:bg-[#E4405F]/20 transition-all">
                    <Instagram className="w-6 h-6 text-[#E4405F]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">Instagram</p>
                    <p className="text-foreground font-medium group-hover:text-[#E4405F] transition-colors">
                      @geta_show
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:getashow123@gmail.com"
                  className="flex items-center gap-4 group"
                  aria-label="שלחו אימייל">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <Mail className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">אימייל</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      getashow123@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
