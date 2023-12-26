import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import ItemMenus from './ItemMenus'
import { useState } from "react"




const RestrauntMenus = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showItems, setShowItems] = useState(0);

    if (resInfo === null) return <Shimmer />;

    const { cuisines, avgRating, totalRatingsString, feeDetails, name } = resInfo?.cards[0]?.card?.card?.info;






    const ItemCategoryFilter = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(menu => menu?.card?.card?.['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(ItemCategoryFilter)



    return (

        <div className="w-[50%] mt-20 m-auto ">
            <div className="flex justify-between border-b-2 border-dashed pb-10">
                <div>
                    <h1 className="font-semibold mb-2">{name}</h1>
                    <h6 className="text-sm">{cuisines.join(',')}</h6>
                    <p className="text-xs">{feeDetails.message}</p>
                </div>
                <div className="flex flex-col border justify-center items-center rounded-md p-1">
                    <span className="bi bi-star-fill border-b" style={
                        avgRating < 4 ? { color: "red" } : { color: "green" }
                    }>{avgRating}</span>

                    <span>{totalRatingsString}</span>


                </div>

            </div>

            {/* ......................... Menu Section...................... */}

            <div>

                {
                    ItemCategoryFilter.map((category, index) => (
                        <ItemMenus key={category?.card?.card?.title} data={category?.card?.card} resInfo={resInfo}
                            accordion={index == showItems ? true : false}
                            // toggle={index !== showItems ? false : true}


                            setShowItems={() => {


                                setShowItems(index)


                            }

                            }
                        />
                    ))
                }







            </div>
        </div >
    )


}
export default RestrauntMenus