import React from 'react'
import { IMG_CDN_URL } from '../utils/urls'




const CardsContainer = ({ id, cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo }) => {
    // const { info } = props;
    // const { id,
    //     cloudinaryImageId, name, cuisines, avgRating, lastMileTravelString, costForTwoString
    // } = info?.data;
    return (


        <div key={id} className='border h-[100%] w-[100%] flex flex-col items-start cursor-pointer p-3 rounded-md shadow-lg hover:scale-110 duration-500 justify-between '>



            <img src={IMG_CDN_URL + cloudinaryImageId} className='rounded-lg'></img>
            <p className='font-semibold'>{name}</p>
            <p className='text-sm'>{cuisines}</p>
            <div className=''>


                <span className='bi bi-star-fill text-end mr-6 text-sm border text-white  p-1 rounded-md' style={
                    avgRating < 4 ? { backgroundColor: "red" } : { backgroundColor: "green" }
                }>{avgRating}</span>

                <span className='mr-5 text-sm font-semibold'>{sla.slaString}</span>
                <span className='text-sm font-semibold'>{costForTwo}</span>
            </div>




        </div>




    )
}


export const withPromotedLabel = (CardsContainer) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <CardsContainer {...props} />
            </div>
        )
    }
}

export default CardsContainer