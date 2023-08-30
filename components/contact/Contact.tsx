import React from "react";
import { useFormik } from "formik";

import * as Yup from 'yup';

interface MyFormValues {
  name: string;
}

const Contact = () => {
  const formik = useFormik({

    initialValues: {
      userName: "",
      email: "",
      title: "",
      phone: "",
      desc: "",
    },
    validationSchema: Yup.object().shape({
      userName: Yup.string()
                    .required('فیلد اجباری است')
                    .max(15, 'نام باید کمتر از 15 کاراکتر باشد'),
      email: Yup.string()
                .required('فیلد اجباری است')
                .email("ایمیل وارد شده نامعتبر است."),
      title: Yup.string()
                .required("فیلد اجباری است"),
      phone: Yup.string()
                .required("فیلد اجباری است")
                .max(10, "شماره تلفن اشتباه است")
                .min(10, "شماره تلفن اشتباه است"),
      desc: Yup.string()
                .required("فیلد اجباری است") 
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });


  return (
    <div
      className="relative w-screen min-h-[700px] flex items-center justify-center"
      id="contact"
    >
      <div className="w-full h-[1500px] lg:h-[900px] bg-fixed">
        <img
          className="w-full h-full object-cover"
          src="/images/slider/3.jpg"
        />
      </div>

      <div className="absolute top-[10%] min-h-[600px] space-y-8 lg:space-y-0 container flex flex-col lg:flex-row items-center justify-between rounded-3xl">
        
        <div className="bg-[#ffffff99] backdrop-blur-[5px] rounded-3xl p-8 text-black min-h-[450px] text-center lg:text-start flex flex-col lg:self-start justify-between">
          <div className="text-center lg:text-start text-black">
            <p>تماس با ما</p>
            <h1
              className="font-bold text-3xl pt-4 w-full lg:w-1/2"
              style={{ direction: "ltr" }}
            >
              ۰۲۱ - ۲۲۷۷۸۲۰۰
            </h1>
          </div>

          <div className="text-black text-lg">
            <p className="font-bold">آدرس :</p>
            <p>تهران - خیابان پاسداران - بین نیستان نهم و دهم - پلاک ۳۰۴ -</p>
          </div>

          <div className="text-blak text-lg">
            <p className="font-bold">کد پستی : </p>
            <p className="text-2xl">۱۹۴۶۸۵۳۶۱۴</p>
          </div>

          <div>
            <p>
              <span className="font-bold">ایمیل</span> : info@sababar.com
            </p>
          </div>
        </div>

        <div className="py-14 lg:py-24 border-2 border-white w-[94%] lg:w-1/2 min-h-[500px] bg-[#ffffff99] backdrop-blur-[5px] rounded-3xl">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-around mx-auto w-[90%]">
            
            <div className="relative w-full h-full px-2 pb-8">
              <input
                id="userName"
                // name="userName"
                type="text"
                autoComplete="off"
                placeholder="نام"
                {...formik.getFieldProps("userName")}
                className=" px-3 py-3 rounded-xl w-[100%] md:w-[100%] border-none outline-none text-black bg-[#f1f1f1] backdrop-blur-[10px]"
              />
                {formik.touched.userName && formik.errors.userName ? (
                    <p className="absolute font-bold text-rose-700 font-bold pt-2">{formik.errors.userName}</p>
                ) : null}
            </div>
            
            <div className="relative w-full h-full px-2 pb-8">
            <input
              id="email"
              // name="email"
              type="email"
              autoComplete="off"
              placeholder="ایمیل"
              {...formik.getFieldProps("email")}
              className="px-3 py-3 rounded-xl w-[100%] md:w-[100%] border-none outline-none text-black bg-[#f1f1f1] backdrop-blur-[10px]"
              />
              {formik.touched.email && formik.errors.email ? (
                    <p className="absolute font-bold text-rose-700 font-bold pt-2">{formik.errors.email}</p>
                ) : null}
            </div>

          </div>



          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-around mx-auto w-[90%] py-4 md:py-8">
            
            <div className="relative w-full h-full px-2 pb-8">
              <input
                  id="title"
                  // name="title"
                  type="text"
                  placeholder="موضوع"
                  {...formik.getFieldProps("title")}
                  className="px-3 py-3 rounded-xl w-[100%] md:w-[100%] border-none outline-none text-black bg-[#f1f1f1] backdrop-blur-[10px]"
              />
              {formik.touched.title && formik.errors.title ? (
                <p className="absolute font-bold text-rose-700 font-bold pt-2">{formik.errors.title}</p>
            ) : null}
            </div>

            <div className="relative w-full h-full px-2 pb-8">
              <input
                  id="phone"
                  // name="phone"
                  type="number"
                  placeholder="شماره تلفن"
                  {...formik.getFieldProps("phone")}
                  className="px-3 py-3 rounded-xl w-[100%] md:w-[100%] border-none outline-none text-black bg-[#f1f1f1] backdrop-blur-[10px]"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <p className="absolute font-bold text-rose-700 font-bold pt-2">{formik.errors.phone}</p>
            ) : null}
            </div>


          </div>

        
          <div className="flex pt-8 md:pt-0 items-center justify-center w-full h-full">
            <textarea
              id="desc"
              // name="desc"
              placeholder="پیام"
              {...formik.getFieldProps("desc")}
              className="w-[88%] min-h-[200px] p-4 rounded-xl border-none outline-none text-black bg-[#f1f1f1] backdrop-blur-[10px]"
            />
            
          </div>
            <div className="ps-12 py-2">
            {formik.touched.desc && formik.errors.desc ? (
                <p className="absolute font-bold text-rose-700 font-bold">{formik.errors.desc}</p>
            ) : null}
            </div>

          <div className="flex items-center justify-center w-full pt-12">
            <button
              onClick={() => formik.handleSubmit()}
              type="submit"
              className="w-[88%] px-2 py-4 bg-[#263d5a] rounded-3xl hover:-translate-y-1 transition duration-300 ease-in"
            >
              ارسال
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
