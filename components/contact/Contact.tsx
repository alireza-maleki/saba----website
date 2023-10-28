import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Image from "next/image";

import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { Bounce } from "react-activity";

interface MyFormValues {
  name: string;
}

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      FullName: "",
      EmailAddress: "",
      Subject: "",
      PhoneNumber: "",
      Content: "",
    },
    validationSchema: Yup.object().shape({
      FullName: Yup.string()
        .required("فیلد اجباری است")
        .max(15, "نام باید کمتر از 15 کاراکتر باشد"),
      EmailAddress: Yup.string()
        .required("فیلد اجباری است")
        .email("ایمیل وارد شده نامعتبر است."),
      Subject: Yup.string().required("فیلد اجباری است"),
      PhoneNumber: Yup.string()
        .required("فیلد اجباری است")
        .max(10, "شماره تلفن اشتباه است")
        .min(10, "شماره تلفن اشتباه است"),
      Content: Yup.string().required("فیلد اجباری است"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("jsonValue", JSON.stringify(values));

      setIsLoading(true);
      try {
        const response = await axios.post(
          "https://apiaut.sababar.net:9452/Support/WebsiteTicket",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
        const responseMassage = `شماره پیگیری شما : ${response.data.Content} <br /> ${response.data.Message}`;
        toast.success(
          <div dangerouslySetInnerHTML={{ __html: responseMassage }} />,
          {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      } catch (error) {
        toast.error("خطا در ارسال درخواست", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      } finally {
        setIsLoading(false);
      }

      resetForm();
    },
  });

  return (
    <div
      className="relative w-screen min-h-[700px] flex items-center justify-center"
      id="contact"
    >
      <div className="w-full h-[1500px] lg:h-[900px] bg-fixed">
        <Image
          width={2000}
          height={800}
          alt={"contact"}
          className="w-full h-full object-cover"
          src="/images/contact/contact.jpg"
        />
      </div>

      <div className="absolute top-[10%] min-h-[600px] space-y-8 lg:space-y-0 container flex flex-col lg:flex-row items-center justify-between rounded-3xl">
        <div className="bg-[#ffffff99] w-[90%] lg:w-[30%] backdrop-blur-[5px] rounded-3xl p-8 text-black min-h-[450px] text-center lg:text-start flex flex-col lg:self-start justify-between">
          <div className="text-center lg:text-start text-black">
            <p>تماس با ما</p>
            <h3
              className="font-bold text-3xl pt-4 w-full lg:w-1/2"
              style={{ direction: "ltr" }}
            >
              ۰۲۱ - ۲۲۷۷۸۲۰۰
            </h3>
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
                id="FullName"
                // name="userName"
                type="text"
                autoComplete="off"
                placeholder="نام"
                {...formik.getFieldProps("FullName")}
                className=" px-3 py-3 rounded-xl w-[100%] md:w-[100%] border-none outline-none text-black bg-[#f1f1f1] backdrop-blur-[10px]"
              />
              {formik.touched.FullName && formik.errors.FullName ? (
                <p className="absolute font-bold text-rose-700 font-bold pt-2">
                  {formik.errors.FullName}
                </p>
              ) : null}
            </div>

            <div className="relative w-full h-full px-2 pb-8">
              <input
                id="EmailAddress"
                // name="email"
                type="email"
                autoComplete="off"
                placeholder="ایمیل"
                {...formik.getFieldProps("EmailAddress")}
                className="px-3 py-3 rounded-xl w-[100%] md:w-[100%] border-none outline-none text-black bg-[#f1f1f1] backdrop-blur-[10px]"
              />
              {formik.touched.EmailAddress && formik.errors.EmailAddress ? (
                <p className="absolute font-bold text-rose-700 font-bold pt-2">
                  {formik.errors.EmailAddress}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-around mx-auto w-[90%] py-4 md:py-8">
            <div className="relative w-full h-full px-2 pb-8">
              <input
                id="Subject"
                // name="title"
                type="text"
                placeholder="موضوع"
                {...formik.getFieldProps("Subject")}
                className="px-3 py-3 rounded-xl w-[100%] md:w-[100%] border-none outline-none text-black bg-[#f1f1f1] backdrop-blur-[10px]"
              />
              {formik.touched.Subject && formik.errors.Subject ? (
                <p className="absolute font-bold text-rose-700 font-bold pt-2">
                  {formik.errors.Subject}
                </p>
              ) : null}
            </div>

            <div className="relative w-full h-full px-2 pb-8">
              <input
                id="PhoneNumber"
                // name="phone"
                type="number"
                placeholder="شماره تلفن"
                {...formik.getFieldProps("PhoneNumber")}
                className="px-3 py-3 rounded-xl w-[100%] md:w-[100%] border-none outline-none text-black bg-[#f1f1f1] backdrop-blur-[10px]"
              />
              {formik.touched.PhoneNumber && formik.errors.PhoneNumber ? (
                <p className="absolute font-bold text-rose-700 font-bold pt-2">
                  {formik.errors.PhoneNumber}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex pt-8 md:pt-0 items-center justify-center w-full h-full">
            <textarea
              id="Content"
              // name="desc"
              placeholder="پیام"
              {...formik.getFieldProps("Content")}
              className="w-[88%] min-h-[200px] p-4 rounded-xl border-none outline-none text-black bg-[#f1f1f1] backdrop-blur-[10px]"
            />
          </div>
          <div className="ps-12 py-2">
            {formik.touched.Content && formik.errors.Content ? (
              <p className="absolute font-bold text-rose-700 font-bold">
                {formik.errors.Content}
              </p>
            ) : null}
          </div>

          <div className="flex items-center justify-center w-full pt-12">
            <button
              onClick={() => formik.handleSubmit()}
              type="submit"
              className="w-[88%] text-white py-4 bg-[#263d5a] rounded-3xl hover:-translate-y-1 transition duration-300 ease-in"
            >
              {isLoading ? (
                <Bounce
                  className="Bounce"
                  color="#01acbc"
                  size={28}
                  speed={1}
                  animating={true}
                />
              ) : (
                "ثبت"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
