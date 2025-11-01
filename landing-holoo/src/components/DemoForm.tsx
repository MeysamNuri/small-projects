import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";

interface DemoFormProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function DemoForm({ isOpen = false, onOpenChange }: DemoFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    industry: '',
    productSerial: ''
  });

  const businessCategories = [
    'خدمات مالی و بانکی',
    'خرده‌فروشی و فروشگاهی',
    'صنعت و تولید',
    'کشاورزی و دامداری',
    'ساختمان و املاک',
    'حمل و نقل و لجستیک',
    'فناوری اطلاعات',
    'پزشکی و درمانی',
    'آموزش و تربیت',
    'رستوران و هتلداری',
    'خدمات حرفه‌ای',
    'سایر'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.productSerial) {
      toast.error('لطفاً فیلدهای اجباری را پر کنید');
      return;
    }
    
    toast.success('درخواست دمو شما با موفقیت ارسال شد');
    if (onOpenChange) {
      onOpenChange(false);
    }
    setFormData({
      name: '',
      phone: '',
      industry: '',
      productSerial: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      industry: value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-right">درخواست دمو</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">نام کامل *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="نام کامل خود را وارد کنید"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">شماره تماس *</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="شماره تماس خود را وارد کنید"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="industry">صنف / حوزه کسب‌وکار (اختیاری)</Label>
            <Select value={formData.industry} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="حوزه کسب‌وکار خود را انتخاب کنید" />
              </SelectTrigger>
              <SelectContent>
                {businessCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="productSerial">سریال محصول *</Label>
            <Input
              id="productSerial"
              name="productSerial"
              value={formData.productSerial}
              onChange={handleChange}
              placeholder="سریال محصول را وارد کنید"
              required
            />
          </div>
          
          <Button type="submit" className="w-full brand-blue">
            ارسال درخواست
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}