import React, { useState } from "react";
import classes from "./EstelamKeraye.module.css";

import axios from "axios";

import Select from "react-select";

//  === react-toast ===
import { toast } from "react-toastify";

// === react-activity ===
import { Bounce } from "react-activity";

// === reCAPTCHA ===
import ReCAPTCHA from "react-google-recaptcha";


// === React Select custom style ===
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: state.isFocused ? "0 0 0 1px #01acbc" : null,
    "&:hover": {
      borderColor: "#aaa",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#01acbc" : "white",
    color: state.isSelected ? "white" : "#333",
    "&:hover": {
      backgroundColor: "#01acbc",
      color: "white",
    },
  }),
};

const EstelamKeraye = () => {
  const [progress, setProgress] = useState(0);
  const [toggleColor, setToggleColor] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const [userOrigin, setUserOrigin] = useState();
  const [userDestination, setUserDestination] = useState();
  const [vehicleType, setVehicleType] = useState();

  const [calculatePrice, setCalculatePrice] = useState();

  const [Tonnage, setTonnage] = useState();
  const [destinationCityId, setDestinationCityId] = useState();
  const [originCityId, setOriginCityId] = useState();
  const [equipmentClassId, setEquipmentClassId] = useState();
  const [recaptchaResponse, setRecaptchaResponse] = useState();


  // === Send user data to server ===
  const dataFetchHandler = async () => {
    
    try {
      const { data } = await axios.post(
        "https://api.sababar.net:8443/SababarWebsite/CalculatedPrice",
        {
          DestinationCityId: destinationCityId,
          OriginCityId: originCityId,
          Tonnage: parseInt(Tonnage),
          EquipmentClassId: equipmentClassId,
          RecaptchaResponse: recaptchaResponse,
        }
      );
      toast.success(data.Message, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      })
      // === set price calculated ===
      setCalculatePrice(data.Content.AutoCalculatedPrice);
      setToggleColor(true);
      setShowPrice(true);
      if (progress == 100) {
        return;
      } else {
        setProgress(progress + 100);
      }
    } catch (error) {
      toast.error(error?.response?.data.Message, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      })
    }
  };

  // === get origin and destination city ===
  const getOriginHandler = async () => {
    const { data } = await axios.get(
      "https://api.sababar.net:8443/SababarWebsite/CitiesAndTheirProvinces"
    );
    setUserOrigin(data.Content.List);
    setUserDestination(data.Content.List);
  };

  // === get user car type ===
  const carTypeHandler = async () => {
    if (!Tonnage || Tonnage >= 25) {
      return;
    }
    const { data } = await axios.get(
      `https://api.sababar.net:8443/SababarWebsite/AllLoaderTypes?maxTonnage=${Tonnage}`
    );
    setVehicleType(data.Content.List);
  };

  const tonnageHandler = (e) => {
    if (e.target.value > 25) {
      toast.error("تناژ بیش از حد مجاز است", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      return;
    } else {
      setTonnage(e.target.value);
    }
  };


  // === save recaptcha ===
  const handleRecaptchaChange = (value) => {
    setRecaptchaResponse(value);
  };


  return (
    <div className="w-full min-h-screen bg-[#f1f1f1] pt-2 py-10 md:py-0">
      <div className="w-full mt-[100px] w-screen h-[200px] bg-[#334f6c] p-8 pt-16">
        <h1
          className={`flex align-center justify-start text-3xl font-bold ${classes.title}`}
        >
          استعلام کرایه حمل بار
        </h1>
        <p className="pt-6 font-bold text-xl">
          تجارت سودمند با محاسبه هوشمند کرایه حمل بار
        </p>
      </div>

      <div className="container mx-auto flex items-center justify-center mt-10">
        <div className="w-[90%] md:w-[75%] space-y-8 md:space-y-0 flex flex-col md:flex-row items-center">

          <div className="md:self-start w-[100%] md:w-[70%] bg-white shadow-xl rounded-md">
            <div className="container mx-auto p-8">
              <div className="bg-[#E8E8E8] rounded-xl w-full mb-8">
                <div
                  className="rounded-xl text-center"
                  style={{
                    width: `${progress}%`,
                    height: "20px",
                    backgroundColor: "#01acbc",
                    transition: "width 0.5s ease-in-out",
                  }}
                >
                  {progress >= 50 ? `${progress}%` : ""}
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-[100%] md:w-[48%]">
                  <label className="text-[#000]">
                    مبدا
                    <span className="text-rose-500 pr-1">*</span>
                  </label>
                  <Select
                    name="مبدا"
                    onMenuOpen={getOriginHandler}
                    className="mt-2"
                    styles={customStyles}
                    options={userOrigin}
                    placeholder="انتخاب کنید"
                    // value={originCityId}
                    onChange={(e) => setOriginCityId(e?.value)}
                    isLoading={userOrigin ? false : true}
                    loadingMessage={() => (
                      <Bounce
                        style={{ direction: "ltr" }}
                        size={18}
                        color="#01ACBC"
                      />
                    )}
                    isSearchable={true}
                  />
                </div>

                <div className="w-[100%] md:w-[48%] my-4 md:my-0">
                  <label className="text-[#000]">
                    مقصد
                    <span className="text-rose-500 pr-1">*</span>
                  </label>
                  <Select
                    name="مقصد"
                    onMenuOpen={getOriginHandler}
                    className="mt-2"
                    styles={customStyles}
                    options={userDestination}
                    placeholder="انتخاب کنید"
                    // value={destinationCityId}
                    onChange={(e) => setDestinationCityId(e?.value)}
                    isLoading={userDestination ? false : true}
                    loadingMessage={() => (
                      <Bounce
                        style={{ direction: "ltr" }}
                        size={18}
                        color="#01ACBC"
                      />
                    )}
                    isSearchable={true}
                  />
                </div>
              </div>


              {/* === second inputs === */}
              <div className="flex flex-col md:flex-row items-center justify-between md:mt-10">
                <div className="w-[100%] md:w-[48%] flex flex-col">
                  <label className="text-[#000]">
                    تناژ
                    <span className="text-rose-500 pr-1">*</span>
                  </label>
                  <input
                    onChange={tonnageHandler}
                    className="mt-2 border-2 border-[#E8E8E8] outline-none py-[5px] px-2 text-[#000] bg-[#fff] rounded-md focus:border-[#01acbc]"
                    type="text"
                    placeholder="انتخاب کنید"
                  />
                </div>

                <div className="w-[100%] md:w-[48%] my-4 md:my-0">
                  <label className="text-[#000]">
                    نوع وسیله نقلیه
                    <span className="text-rose-500 pr-1">*</span>
                  </label>
                  <Select
                    name="نوع وسیله نقلیه"
                    onMenuOpen={carTypeHandler}
                    className="mt-2"
                    styles={customStyles}
                    options={vehicleType}
                    placeholder="انتخاب کنید"
                    // value={equipmentClassId}
                    onChange={(e) => setEquipmentClassId(e?.value)}
                    isLoading={vehicleType ? false : true}
                    loadingMessage={() => (
                      <Bounce
                        style={{ direction: "ltr" }}
                        size={18}
                        color="#01ACBC"
                      />
                    )}
                    isSearchable={true}
                  />
                </div>
              </div>

              <div className="mx-auto w-full md:w-full flex items-center justify-center pt-8">
                <ReCAPTCHA
                  sitekey="6LcpaGwoAAAAAMRQPiaWNRtYF3IqWg4EApzxLCVj"
                  onChange={handleRecaptchaChange}
                />
              </div>

              <div className="w-[100%] mx-auto flex items-center justify-center mt-14">
                <button
                  onClick={dataFetchHandler}
                  className="w-full py-2 bg-[#01acbc] text-white text-lg rounded-[4px] cursor-pointer"
                >
                  محاسبه کرایه حمل بار
                </button>
              </div>
            </div>
          </div>

          <div className="md:self-start w-[100%] md:w-[30%] bg-white shadow-xl rounded-md md:mr-3 text-black overflow-hidden">
            {showPrice && (
              <div className="w-full h-full bg-[#334f6c] p-8 text-white">
                <p className="text-center font-bold text-xl mb-4">
                  {calculatePrice?.toLocaleString("en-US")} تومان
                </p>
                {/* <button className="w-full py-2 rounded-lg bg-[#01acbc] text-md">
                  ثبت
                </button> */}
              </div>
            )}

            <div className="p-8">
              <p>
                اگر می‌خواهید هزینه حمل و نقل کالاهایتان را محاسبه کرده و سپس
                برای باربری آن اقدام کنید، به ترتیب مراحل زیر را انجام دهید:
              </p>

              <p
                className={`py-10 ${
                  !toggleColor ? "text-[#01acbc]" : "text-[#000]"
                }`}
              >
                ۱. مبدا و مقصد حمل بار و همچنین نوع کامیون و نوع بارگیر را مشخص
                کنید و سپس دکمه استعلام قیمت را کلیک کنید تا کرایه پیشنهادی
                ترابرنت برای شما نمایش داده شود.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EstelamKeraye;
