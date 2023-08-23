"use client"

import CarFilter from "@/components/Home/CarFilter";
import CarList from "@/components/Home/CarList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarList } from '@/services';
import { useEffect, useState } from 'react';
import ToastMsg from "@/components/ToastMsg";
import { BookCreatedContext } from "@/context/BookCreatedContext";

export default function Home() {
  const [carList, setCarList] = useState<any>([]);
  const [carOrgList, setCarOrgList] = useState<any>([]);
  const [showToastMsg, setShowToastMsg] = useState<boolean>(false);

  useEffect(() => {
    getCars();
  }, []);
  
  const getCars = async () => {
    const cars: any = await getCarList();
    setCarList(cars?.carLists);
    setCarOrgList(cars?.carLists);
  };

  const filterCarList = (brand: string) => {
    const filterList = carOrgList.filter((item: any) => item.carBrand == brand);
    setCarList(filterList);
  }

  const orderCarList = (order: any) => {
    const sortedData = [...carOrgList].sort((a, b) => order==-1? a.price - b.price:b.price - a.price);
    setCarList(sortedData);
  }

  useEffect(() => {
    if (showToastMsg) {
      setTimeout(function() {
        setShowToastMsg(false)
      }, 4000);
    }
  }, [showToastMsg]);

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookCreatedContext.Provider value={{showToastMsg, setShowToastMsg}}>
        <Hero />
        <SearchInput />
        <CarFilter carList={carOrgList} setBrand={(value: string) => filterCarList(value)} orderCarList={(value:string) => orderCarList(value)} />
        <CarList carList={carList} />
        {
          showToastMsg ? <ToastMsg msg={'Booking Created Successfully!'} /> : null
        }
      </BookCreatedContext.Provider>
    </div>
  )
}
