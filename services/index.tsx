import request, { gql } from "graphql-request";

const MASTER_URL="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cllmh3ude1l2o01t6helv0pu0/master";

export const getCarList = async () => {
  const query = gql`
    query CarLists {
      carLists {
      carAvg
      createdAt
      id
      name
      price
      carType
      carBrand
      publishedAt
      updatedAt
      seat
      image {
        url
      }
    }
  }
  `;

  const result = await request(MASTER_URL, query);
  return result;
}

export const getStoreLocations = async () => {
  const query = gql`
  query storeLocation {
    storesLocations {
      address
    }
  }  
  `;
  
  const result = await request(MASTER_URL, query);
  return result;
}

export const createBooking = async (formValue: any) => {
  const mutationQuery = gql`
  mutation MyMutation {
    createBooking(
      data: {
        userName: "`+formValue.userName+`", 
        pickUpDate: "`+formValue.pickUpDate+`", 
        pickUpTime: "`+formValue.pickUpTime+`", 
        dropOffDate: "`+formValue.dropOffDate+`", 
        dropOffTime: "`+formValue.dropOffTime+`", 
        contactNumber: "`+formValue.contactNumber+`", 
        carId: {
          connect: {
            id: "`+formValue.carId+`"
          }
        }
      }
    ) {
      id
    }
  }
  `;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
}