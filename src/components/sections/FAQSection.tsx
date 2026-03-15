import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    q: "כמה זמן זה יום צילום?",
    a: "יום צילום הוא עד 4 שעות צילום — זמן שמספיק ליצירת תוכן לחודש שלם.",
  },
  {
    q: "איזה סוגי עריכת סרטונים יש?",
    a: "יש שני סוגי עריכת סרטונים ושניהם ברמה גבוהה מאוד. ההבדל ביניהם הוא שבאחד מהם יש תוספת של אנימציות ואפקטים לפי הצורך.",
  },
  {
    q: "עם איזה ציוד אני מגיע?",
    a: "ציוד מקצועי מלא הכולל מצלמה מקצועית, מיקרופון, תאורה ועוד.",
  },
  {
    q: "מאיפה הידע בעריכה?",
    a: "למדתי צילום ועריכה במכללת הוידאו של ישראל ואני עורך בתוכנות מחשב מקצועיות ולא באפליקציות עריכה בטלפון.",
  },
  {
    q: "כמה סרטונים יש בחבילות?",
    a: "החבילות נבנות לפי צורך ועד כ-10 סרטונים בחודש.",
  },
  {
    q: "תוך כמה זמן מקבלים את הסרטונים?",
    a: "קבלת הסרטונים עד 14 ימים רגילים.",
  },
  {
    q: "מה בעצם מקבלים כשעובדים יחד?",
    a: "זמינות תמידית, צילום ברמה גבוהה, עריכה מקצועית — ובעיקר שקט לחודש שלם מבחינת תוכן.",
  },
  {
    q: "רווק, נשוי, ילדים?",
    a: "למה לחצתם? 😉 לא רלוונטי… אבל עכשיו כבר חייבים להשאיר פרטים ולהכיר.",
  },
];

const half = Math.ceil(faqItems.length / 2);
const leftColumn = faqItems.slice(0, half);
const rightColumn = faqItems.slice(half);

const FAQColumn = ({ items, startIndex }: { items: typeof faqItems; startIndex: number }) => (
  <Accordion type="single" collapsible className="space-y-3">
    {items.map((item, i) => (
      <AccordionItem
        key={startIndex + i}
        value={`faq-${startIndex + i}`}
        className="card-cosmic border-border/30 px-5 py-1 rounded-xl hover:border-primary/30 transition-colors"
      >
        <AccordionTrigger className="text-foreground text-base font-semibold text-right hover:no-underline gap-4 py-4">
          {item.q}
        </AccordionTrigger>
        <AccordionContent className="text-foreground-muted text-base leading-relaxed pb-4">
          {item.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

const FAQSection = () => {
  return (
    <section id="FAQ" className="relative py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-14"
        >
          שאלות נפוצות
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <FAQColumn items={leftColumn} startIndex={0} />
          <FAQColumn items={rightColumn} startIndex={half} />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
