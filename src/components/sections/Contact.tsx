import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              בואו נדבר
            </h2>
            <p className="text-foreground-muted mb-8 leading-relaxed">
              יש לכם רעיון? פרויקט? או סתם רוצים לשמוע עוד? 
              נשמח לשמוע מכם ולהתחיל לעבוד יחד.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground-muted">אימייל</p>
                  <p className="text-foreground">hello@cosmicstudio.co.il</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground-muted">טלפון</p>
                  <p className="text-foreground">03-123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground-muted">כתובת</p>
                  <p className="text-foreground">רחוב הברזל 42, תל אביב</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-cosmic p-6 md:p-8"
          >
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-foreground-muted mb-2 block">שם מלא</label>
                  <Input placeholder="השם שלך" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm text-foreground-muted mb-2 block">אימייל</label>
                  <Input type="email" placeholder="email@example.com" className="bg-background/50" />
                </div>
              </div>
              
              <div>
                <label className="text-sm text-foreground-muted mb-2 block">נושא</label>
                <Input placeholder="במה נוכל לעזור?" className="bg-background/50" />
              </div>
              
              <div>
                <label className="text-sm text-foreground-muted mb-2 block">הודעה</label>
                <Textarea 
                  placeholder="ספרו לנו על הפרויקט שלכם..." 
                  rows={4}
                  className="bg-background/50 resize-none"
                />
              </div>
              
              <Button variant="cosmic" size="lg" className="w-full">
                שלחו הודעה
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
