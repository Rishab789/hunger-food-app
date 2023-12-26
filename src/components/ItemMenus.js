
import { IMG_CDN_URL } from '../utils/urls'
import veg from '../public/assets/veg-icon.svg'
import nonveg from '../public/assets/non-veg-icon.svg'
import { addItem, addTitle } from '../utils/cartSlice'

import { useDispatch } from 'react-redux'


const ItemMenus = ({ data, accordion, setShowItems, resInfo }) => {
    // console.log("this is resInfo  ", resInfo)





    function handleAccordion() {
        setShowItems()

    }

    ////function for add to Cart item on onClick method through react Redux
    const dispatch = useDispatch();

    const handleAddItem = (menu, resInfo) => {
        dispatch(addItem(menu))

        dispatch(addTitle(resInfo))

    }


    return (
        <div >
            <div className='border flex justify-between p-5 my-3 cursor-pointer' onClick={handleAccordion}>
                <h2 className='font-bold text-xl'>{data?.title}</h2>
                {
                    accordion ? (<i className="bi bi-chevron-up font-bold"></i>) : (<i className="bi bi-chevron-down"></i>)

                }

            </div>


            {accordion &&
                data.itemCards.map(menu => {

                    const { id, isVeg, name, price, imageId } = menu?.card?.info || {};




                    return <div key={id} className="border-b pb-6 h-24 mt-5 flex justify-between">

                        < div className="" >

                            <p>{isVeg ? (<img src={veg} width={15} height={15} />) : (<img src={nonveg} width={15} height={15} />)}</p>


                            <h3>{name}</h3>
                            <h6 className="text-xs">&#8377;{price / 100}</h6>
                        </div>
                        <div className="flex flex-col justify-center">
                            <img src={IMG_CDN_URL + imageId} width={110} ></img>
                            <button onClick={() => handleAddItem(menu, resInfo)} className="border py-1 text-sm font-bold text-green-400 rounded-md">ADD +</button>
                        </div>
                    </div>





                })
            }


        </div>


    )

}

export default ItemMenus;