import { Phone, Mail, MessageCircle } from "lucide-react";

export function FooterSection() {
  const links = [
    { title: "درباره ما", href: "#" },
    { title: "راهنمای نصب", href: "#" },
    { title: "شرایط استفاده", href: "#" },
    { title: "حریم خصوصی", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <span className="text-xl font-bold">دستیار هوشمند هلو</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              یک تصمیم بهتر، یک کسب‌وکار هوشمندتر
            </p>
          </div>
          
          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">لینک‌های مفید</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">تماس با ما</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">support@holoo.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">چت آنلاین</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">H</span>
              </div>
              <span className="text-sm text-gray-400">HSA</span>
            </div>
            <span className="text-gray-400">+</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">H</span>
              </div>
              <span className="text-sm text-gray-400">Holoo</span>
            </div>
          </div>
          
          <div className="text-sm text-gray-400">
            © ۱۴۰۳ دستیار هوشمند هلو. تمام حقوق محفوظ است.
          </div>
        </div>
      </div>
    </footer>
  );
}