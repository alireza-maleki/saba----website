import ThreePic from "../threepic/ThreePic";
import classes from "./CardBank.module.css";


// === React Icons ===
import {
  MdOutlineQuestionAnswer,
  MdAccountBalanceWallet,
} from "react-icons/md";
import {TbBus} from "react-icons/tb";
import {LuDatabaseBackup} from "react-icons/lu";

const CardBank = () => {
  return (
    <div className="w-screen min-h-[600px] pb-12 lg:pb-0 pt-24 bg-[#f3f5f7]">
      <div className="container mx-auto flex items-center flex-col lg:flex-row">

        <div className="w-full lg:w-1/3 h-full px-4">
          <ThreePic />
        </div>

        <div className="w-full lg:w-2/3 h-full text-black">

          <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16">

            <div className="p-4 mb-8 md:mb-0 md:p-8">
              <div className="flex items-center justify-between w-full pb-5">
                <p className={`font-bold text-lg md:text-xl ${classes['title-border']}`}>انتقال وجه دو طرفه</p>
                <MdOutlineQuestionAnswer className="text-3xl md:text-5xl" />
              </div>

              <p className="text-sm leading-8">
                صبا کارت ها قابلیت دریافت وجه به صورت کارت به کارت را دارا می
                باشند. علاوه بر آن شما می توانید وجوه مورد نظر را به این کارت ها
                انتقال دهید.
              </p>
            </div>

            <div className="p-4 mb-8 md:mb-0 md:p-8">
              <div className="flex items-center justify-between pb-5">
                <p className={`font-bold text-lg md:text-xl ${classes['title-border']}`}>عدم نیاز به افتتاح حساب</p>
                <MdAccountBalanceWallet className="text-3xl md:text-5xl" />
              </div>
              <p className="text-sm leading-8">
                برای دریافت صبا کارت نیازی به افتتاح حساب نیست. رانندگان عزیز می
                توانند با اولین ثبت بارنامه در سیستم صبا، عضو شبکه شتابی صبا
                کارت شوند.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16">

            <div className="w-full md:w-1/2 p-4 mb-8 md:mb-0 md:p-8">
              <div className="flex items-center justify-between pb-5">
                <p className={`font-bold text-lg md:text-xl ${classes['title-border']}`}>پشتیبانی ۲۴/۷</p>
                <TbBus className="text-3xl md:text-5xl" />
              </div>
              <p className="text-sm leading-8">
                صبا کارت ها به صورت ۲۴ ساعته توسط شرکت صنعت بار الکترونیک
                پشتیبانی می شوند. در صورت مفقودی یا سوختن کارت ها جای نگرانی
                نیست.
              </p>
            </div>

            {/* <div className="p-4 mb-8 md:mb-0 md:p-8">
              <div className="flex items-center justify-between pb-5">
                <p className={`font-bold text-lg md:text-xl ${classes['title-border']}`}>عضو شبکه شتاب</p>
                <LuDatabaseBackup className="text-3xl md:text-5xl" />
              </div>
              <p className="text-sm leading-8">
              صبا کارت همانند تمامی کارت های بانکی، عضو شبکه شتاب می باشد. تمامی ATM ها و دستگاه های POS در سطح کشور، میزبان صبا کارت هستند.
              </p>
            </div> */}

          </div>

        </div>
      </div>
    </div>
  );
};

export default CardBank;
