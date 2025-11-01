import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "آیا برای استفاده از دستیار باید نرم‌افزار هلو داشته باشم؟",
      answer: "بله، دستیار هوشمند هلو برای کاربران نرم‌افزار هلو طراحی شده است و برای دسترسی به داده‌ها و عملکرد بهتر، نیاز به نرم‌افزار هلو دارید."
    },
    {
      question: "آیا استفاده رایگان است؟",
      answer: "بله، استفاده از دستیار هوشمند هلو برای کاربران با پشتیبانی فعال رایگان است. کاربران می‌توانند از تمام قابلیت‌های پایه بدون هیچ هزینه‌ای استفاده کنند."
    },
    {
      question: "امنیت داده‌ها چگونه تضمین می‌شود؟",
      answer: "ما از بالاترین استانداردهای امنیتی برای محافظت از داده‌های شما استفاده می‌کنیم. تمام اطلاعات رمزگذاری شده و در سرورهای امن نگهداری می‌شوند. همچنین هیچ‌گونه دسترسی غیرمجاز به داده‌های شما وجود ندارد."
    },
    {
      question: "آیا دستیار روی موبایل کار می‌کند؟",
      answer: "بله، دستیار هوشمند هلو برای دستگاه‌های اندروید و iOS (نسخه وب) در دسترس است. می‌توانید از تمام قابلیت‌ها روی گوشی هوشمند خود استفاده کنید."
    },
    {
      question: "چطور می‌توانم پشتیبانی دریافت کنم؟",
      answer: "تیم پشتیبانی ما آماده کمک به شما است. می‌توانید از طریق تلفن، ایمیل یا چت آنلاین با ما در ارتباط باشید. همچنین راهنمای کاملی برای استفاده از دستیار در اختیار شما قرار داده شده است."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            سوالات متداول
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-right text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-right text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}