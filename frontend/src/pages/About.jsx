import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const About = () => {
  const { t } = useContext(ShopContext);

  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={t('about.title1')} text2={t('about.title2')} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>{t('about.intro')}</p>
          <p>{t('about.craftsmanship')}</p>
          <b className="text-gray-800">{t('about.missionTitle')}</b>
          <p>{t('about.mission')}</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={t('about.whyTitle1')} text2={t('about.whyTitle2')} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>{t('about.qualityTitle')}:</b>
          <p className="text-gray-600">{t('about.quality')}</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>{t('about.convenienceTitle')}:</b>
          <p className="text-gray-600">{t('about.convenience')}</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>{t('about.serviceTitle')}:</b>
          <p className="text-gray-600">{t('about.service')}</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
