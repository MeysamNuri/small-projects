import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestions: '',
    features: ''
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.suggestions) {
      toast.error('لطفاً فیلدهای اجباری را پر کنید');
      return;
    }
    
    toast.success('بازخورد شما با موفقیت ارسال شد');
    setIsOpen(false);
    setFormData({
      name: '',
      email: '',
      suggestions: '',
      features: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="brand-blue px-8 py-3 text-base">
          در مسیر توسعه همراه ما باشید
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="text-right">بازخورد و پیشنهادات</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">نام *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="نام خود را وارد کنید"
              required
            
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">ایمیل *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ایمیل خود را وارد کنید"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="suggestions">پیشنهادات شما *</Label>
            <Textarea
              id="suggestions"
              name="suggestions"
              value={formData.suggestions}
              onChange={handleChange}
              placeholder="پیشنهادات خود را بنویسید"
              rows={4}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="features">قابلیت‌های مورد نیاز</Label>
            <Textarea
              id="features"
              name="features"
              value={formData.features}
              onChange={handleChange}
              placeholder="قابلیت‌های مورد نیاز خود را بنویسید"
              rows={3}
            />
          </div>
          
          <Button type="submit" className="w-full brand-blue">
            ارسال بازخورد
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}