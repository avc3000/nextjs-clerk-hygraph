import { useState } from 'react';
import CarCard from './CarCard';
import BookingModal from '../CarBooking/BookingModal';

const CarList = ({ carList }: any) => {
  const [selectedCar, setSelectedCar] = useState<any>([]);

  const handleModal = (car: any) => {
    (window as any).my_modal_4.showModal();
    setSelectedCar(car);
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {
        carList.map((car: any, index: number) => (
          <div key={index} onClick={() => handleModal(car)}>
            <CarCard car={car} />
          </div>
        ))
      }
      <dialog id="my_modal_4" className="modal">
        <BookingModal car={selectedCar} />
      </dialog>
    </div>
  )
}

export default CarList;