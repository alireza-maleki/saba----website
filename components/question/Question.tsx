import React, { useState } from "react";

import AccordionItem from "../collapse/AccordionItem";

const DUMMY_ACOORDION = [
  {
    id: 1,
    title: "آرامش خاطر رانندگان",
    desc: "یکی از دغدغه های همیشگی رانندگان زحمت کش حوزه حمل و نقل جاده ای، نحوه تسویه حساب با صاحبان بار است. آن ها گاهی مجبورند بارها و بارها به محل باربری و یا محل تخلیه بار مراجعه کنند. با استفاده از صبا کارت دیگر نیازی به مراجه حضوری نخواهد بود.",
  },
  {
    id: 2,
    title: "اطمینان صاحبان بار",
    desc: "عدم آگاهی دقیق صاحب بار نسبت به بارنامه هایی که برایش صادر می شود موجب مشکلاتی فروانی می شود. به خصوص برای آنان که حجم عظیمی از بار را به صورت روزانه دریافت می کنند. مدیریت بارنامه در سامانه صبا به شما آگاهی های لازم را خواهد داد.",
  },
  {
    id: 3,
    title: "حذف واسطه ها",
    desc: "مهمترین قابلیت استفاده از شبکه صبا کارت برای پرداخت بارنامه ها، حذف واسطه هاست. واسطه های بلای جان رانندگان و صاحبان بار شده اند و با بد قولی در پرداخت بارنامه ها موجب ناراضایتی هر دو طرف می شوند. با صبا کارت، راننده و صاحب بار بدون واسطه با یکدیگر تسویه حساب می کنند.",
  },
  {
    id: 4,
    title: "اطمینان صاحبان بار",
    desc: "عدم آگاهی دقیق صاحب بار نسبت به بارنامه هایی که برایش صادر می شود موجب مشکلاتی فروانی می شود. به خصوص برای آنان که حجم عظیمی از بار را به صورت روزانه دریافت می کنند. مدیریت بارنامه در سامانه صبا به شما آگاهی های لازم را خواهد داد.",
  },
];

const Question = () => {
  const [open, setOpen] = useState<boolean | number | null>(false);

  const toggle = (index: any) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div className="w-screen flex items-center justify-center overflow-hidden min-h-[600px] p-4 md:p-12 bg-gradient-to-r from-[#d6f4fd] to-[#e0e7fe]">
      <div className="min-h-[600px]">
        <div className="container mx-auto py-10 w-full max-h-full md:w-[90%] lg:w-1/2 bg-[#e8f4fe] p-6 md:p-12 rounded-[40px] drop-shadow-2xl">
          <div className="text-center md:text-start">
            <h2 className="font-bold text-xl md:text-2xl text-[#263d5a] pb-2 md:pb-4">
              به چه می اندیشیم ؟{" "}
            </h2>
          </div>

          <div className="pt-8 md:pt-12">
            {DUMMY_ACOORDION.map((data, index) => {
              return (
                <AccordionItem
                  key={index}
                  open={index === open}
                  title={data.title}
                  desc={data.desc}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
