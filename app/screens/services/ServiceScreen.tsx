/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { ScreenProps } from "../constants";
import ButtonLeft2 from "@/components/ButtonLeft2";
import ScreenLayout from "../ScreenLayout";
import { GoProject } from "react-icons/go";
import { MdApartment } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { SiMarketo } from "react-icons/si";
import { BsPeople } from "react-icons/bs";

const ServiceScreen = ({ active, onChangeScreen }: ScreenProps) => {
  const [tab, setTab] = useState("services");

  return (
    <ScreenLayout
      active={active}
      onChangeScreen={(s) => {
        if (onChangeScreen) onChangeScreen(s);
      }}
    >
      <div className="w-full grid grid-cols-4 gap-3 row-start-2 row-end-8 overflow-hidden">
        <div className="w-full bg-black/50 border border-black py-2">
          <h1 className="text-md lg:text-xl font-semibold text-center mb-4">
            My Services
          </h1>
          <div className=" w-full h-[65dvh] overflow-y-auto lg:space-y-2">
            <ButtonLeft2
              icon={<GoProject />}
              active={tab == "services"}
              onClick={() => {
                setTab("services");
              }}
              title="My Services"
            />
          </div>
        </div>
        <div className=" w-full col-start-2 col-end-5 bg-black/50 border border-black p-4">
          <main className="w-full h-[75dvh] overflow-auto pb-4">
            <div className="mb-4">
              <h1 className="text-md lg:text-xl font-bold">
                Jasa Web Development
              </h1>
              <p className="text-[10px] lg:text-base">
                Lihat semua Jasa Yang Sudah Saya Sediakan.
              </p>
            </div>
            <div className="w-full grid grid-cols-3 gap-2">
              <div className="bg-red-500/50 rounded-md min-h-32 lg:min-h-52 p-2">
                <MdApartment className="size-12 lg:size-16 lg:mb-4" />
                <h1 className="text-md lg:text-xl font-bold">
                  Website Perusahaan
                </h1>
                <p className="text-[10px] lg:text-base">
                  Membuat Website Untuk Perusahaan dan instasi.
                </p>
              </div>

              <div className="bg-red-500/50 rounded-md min-h-32 lg:min-h-52 p-2">
                <GrAnalytics className="size-12 lg:size-16 lg:mb-4" />
                <h1 className="text-md lg:text-xl font-bold">
                  Website Marketing
                </h1>
                <p className="text-[10px] lg:text-base">
                  Membuat Website Untuk Penjualan.
                </p>
              </div>

              <div className="bg-red-500/50 rounded-md min-h-32 lg:min-h-52 p-2">
                <SiMarketo className="size-12 lg:size-16 lg:mb-4" />
                <h1 className="text-md lg:text-xl font-bold">
                  Website UMKM / Bisnis
                </h1>
                <p className="text-[10px] lg:text-base">
                  Membuat Website Untuk Website Berbagai Bisnis Tradisional
                  Maupun Modern.
                </p>
              </div>

              <div className="bg-red-500/50 rounded-md min-h-32 lg:min-h-52 p-2">
                <BsPeople className="size-12 lg:size-16 lg:mb-4" />
                <h1 className="text-md lg:text-xl font-bold">
                  Website Personal
                </h1>
                <p className="text-[10px] lg:text-base">
                  Membuat Website Untuk Website Personal Branding dan Portofolio
                  Diri.
                </p>
              </div>
              <div className="bg-red-500/50 rounded-md min-h-32 lg:min-h-52 p-2 flex flex-col justify-evenly">
                <div>
                  <h1 className="text-md lg:text-xl font-bold">
                    Dan Lain-Lainnya.
                  </h1>
                  <p className="text-[10px] lg:text-base">
                    Klik Untuk Pesan Sekarang
                  </p>
                </div>
                <a
                  href="https://api.whatsapp.com/send/?phone=62882009557659&text=Hai+Mas+Angga%2C+Saya+Ingin+Bertanya+Seputar+Website&type=phone_number&app_absent=0"
                  className="bg-white py-2 lg:py-4 hover:bg-gray-200 rounded-md duration-300 transition text-black font-semibold text-center"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default ServiceScreen;
