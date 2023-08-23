import { useState, useEffect } from 'react';

const CarFilter = ({ carList, setBrand, orderCarList }: any) => {
  const [brandList, setBrandList] = useState<any>();
  const BrandSet = new Set();

  useEffect(() => {
    if (carList) filterCar();
  }, [carList]);
  
  const filterCar = () => {
    carList.forEach((car: any) => { BrandSet.add(car.carBrand) });
    setBrandList(Array.from(BrandSet));
  }

  return (
    <div className='mt-10 flex items-center justify-between'>
      <div>
        <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
        <h2>Explore our cars you might likes</h2>
      </div>
      <div className='flex gap-5'>
        <select onChange={(e)=>orderCarList(e.target.value)} className="select select-bordered w-full max-w-xs" defaultValue={'Price'}>
          <option disabled value='Price'>Price</option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select onChange={(e) => setBrand(e.target.value)} className="select select-bordered w-full md:block max-w-xs hidden" defaultValue={'Brand'}>
          <option disabled value='Brand'>Brand</option>
            {
              brandList && brandList.map((brand: string, index: number) => (
                <option key={index}>{brand}</option>
              ))
            }
        </select>
      </div>
    </div>
  )
}

export default CarFilter;