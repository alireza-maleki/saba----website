import React, { useState, useEffect, useRef } from "react";
import classes from "./EstelamKeraye.module.css";

import axios from "axios";

// import Select from "react-select";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });

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

const EstelamKeraye = ({ allCity }) => {
  const recaptchaRef = useRef();

  const [progress, setProgress] = useState(0);
  const [toggleColor, setToggleColor] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const [showCity, setShowCity] = useState();
  const [vehicleType, setVehicleType] = useState();

  const [calculatePriceMax, setCalculatePriceMax] = useState();
  const [calculatePriceMin, setCalculatePriceMin] = useState();

  const [Tonnage, setTonnage] = useState();
  const [destinationCityId, setDestinationCityId] = useState();
  const [originCityId, setOriginCityId] = useState();
  const [equipmentClassId, setEquipmentClassId] = useState();
  const [recaptchaResponse, setRecaptchaResponse] = useState();

  const [carTypeLabel, setCarTypeLabel] = useState();
  const [destinationLabel, setDestinationLabel] = useState();
  const [originLabel, setOriginLabel] = useState();

  const [disabledCarType, setDisabledCarType] = useState(true);

  const [isConditionExecutedOrigin, setIsConditionExecutedOrigin] = useState(false);
  const [isConditionExecutedDestination, setIsConditionExecutedDestination] = useState(false);
  const [isConditionExecutedTonnage, setIsConditionExecutedTonnage] = useState(false);
  const [isConditionExecutedCarType, setIsConditionExecutedCarType] = useState(false);


  useEffect(() => {
    setShowCity(allCity.Content.List);
  }, []);

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
      });
      // === set price calculated ===
      setCalculatePriceMax(data.Content.AutoCalculatedPrice);
      setCalculatePriceMin(data.Content.BaseCalculatedPrice);
      setToggleColor(true);
      setShowPrice(true);
      recaptchaRef.current.reset();
      if (progress == 100) {
        return;
      } else {
        setProgress(progress + 50);
      }
    } catch (error) {
      recaptchaRef.current.reset();
      setCalculatePriceMax(0);
      setCalculatePriceMin(0);
      toast.error(error?.response?.data.Message, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  };

  // === get user car type ===
  const carTypeHandler = async () => {
    if (!Tonnage || Tonnage > 25) {
      return;
    }
    const { data } = await axios.get(
      `https://api.sababar.net:8443/SababarWebsite/AllLoaderTypes?maxTonnage=${Tonnage}`
    );
    setVehicleType(data.Content.List);
  };

  const tonnageHandler = (e) => {
    setCarTypeLabel(null);
    if (e.target.value > 25 || !e.target.value || e.target.value == 0) {
      setDisabledCarType(true);
    } else {
      setDisabledCarType(false);

      if(!isConditionExecutedTonnage) {
        setProgress((prevState) => prevState + 12.5);
        setIsConditionExecutedTonnage(true);
      }
    }

    if (e.target.value > 25) {
      toast.error("تناژ بیش از حد مجاز است", {
        position: "bottom-left",
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

  const carTypeChangeHadler = (e) => {
    setEquipmentClassId(e?.value);
    setCarTypeLabel(e?.lable);

      if(!isConditionExecutedCarType) {
        setProgress((prevState) => prevState + 12.5);
        setIsConditionExecutedCarType(true);
      }
  };

  const destinationHandler = (e) => {
    setDestinationCityId(e?.value);
    setDestinationLabel(e?.label);

      if(!isConditionExecutedDestination) {
        setProgress((prevState) => prevState + 12.5);
        setIsConditionExecutedDestination(true);
      }
  };

  const originHandler = (e) => {
    setOriginCityId(e?.value);
    setOriginLabel(e?.label);
    
    if(!isConditionExecutedOrigin) {
      setProgress((prevState) => prevState + 12.5);
      setIsConditionExecutedOrigin(true);
    }
  };

  // === save recaptcha ===
  const handleRecaptchaChange = (value) => {
    setRecaptchaResponse(value);
  };

  return (
    <div className="w-full min-h-screen bg-[#f1f1f1] pt-2 py-10 md:py-0">
      <div className="text-white w-full mt-[100px] w-screen h-[200px] bg-[#334f6c] p-8 pt-16">
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
                  className="rounded-xl text-center text-white"
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
                    className="mt-2 cursor-pointer"
                    styles={customStyles}
                    options={showCity}
                    placeholder="انتخاب کنید"
                    // value={originLabel}
                    onChange={originHandler}
                    isLoading={showCity ? false : true}
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
                    className="mt-2"
                    styles={customStyles}
                    options={showCity}
                    placeholder="انتخاب کنید"
                    // value={destinationLabel}
                    onChange={destinationHandler}
                    isLoading={showCity ? false : true}
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
                    isDisabled={disabledCarType ? true : null}
                    name="نوع وسیله نقلیه"
                    onMenuOpen={carTypeHandler}
                    className="mt-2"
                    styles={customStyles}
                    options={vehicleType}
                    placeholder="انتخاب کنید"
                    value={carTypeLabel}
                    onChange={carTypeChangeHadler}
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
                  ref={recaptchaRef}
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
              <div className="flex flex-col items-center justify-center w-full h-full bg-[#334f6c] p-8 text-white">
                <div
                  className="border-b-2 border-[#aaa] w-[100%] mb-[12px] flex flex-col items-center justiy-between text-center"
                  style={{ borderBottom: "1px solid #aaa" }}
                >
                  <p className="pb-4 text-md">حداکثر قیمت : </p>
                  <p className="text-center font-bold text-xl mb-4">
                    {calculatePriceMax?.toLocaleString("en-US")}
                    <span className="mr-2">ريال</span>
                  </p>
                </div>

                <div className="flex flex-col items-center justiy-between text-center">
                  <p className="pb-4 text-md">کف قیمت : </p>
                  <p className="text-center font-bold text-xl mb-4">
                    {calculatePriceMin?.toLocaleString("en-US")}
                    <span className="mr-2">ريال</span>
                  </p>
                </div>
              </div>
            )}

            <div className="p-6 text-sm">
              <p>
                اگر می‌خواهید هزینه حمل و نقل کالاهایتان را محاسبه کرده و سپس
                برای باربری آن اقدام کنید، به ترتیب مراحل زیر را انجام دهید:
              </p>

              <p className="pt-4 text-sm text-[#01acbc]">
                ۱. مبدا و مقصد حمل بار و همچنین تناژ و نوع وسیله نقلیه را مشخص
                کنید و سپس دکمه محاسبه کرایه حمل بار را کلیک کنید تا کرایه
                پیشنهادی صبا بار برای شما نمایش داده شود.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstelamKeraye;
