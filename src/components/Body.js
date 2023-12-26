import React, { useContext } from 'react'
import CardsContainer, { withPromotedLabel } from '../components/CardsContainer'
import { useState, useEffect } from 'react'
import { swiggy_api_URL } from '../utils/urls'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import UserContext from '../utils/userContext'




const Body = () => {

    const { setUserName } = useContext(UserContext)



    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredData, setFilteredData] = useState([]);
    const [serachText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();

    }, [])



    let fetchData = async () => {
        try {
            let req = await fetch(swiggy_api_URL);
            let res = await req.json();

            async function checkJsonData(jsonData) {
                for (let i = 0; i < jsonData?.data?.cards.length; i++) {

                    // initialize checkData for Swiggy Restaurant data
                    let checkData = res?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

                    // if checkData is not undefined then return it
                    if (checkData !== undefined) {
                        return checkData;
                    }
                }
            }


            const resData = await checkJsonData(res)

            setListOfRestaurants(resData)
            setFilteredData(resData)
        }
        catch (error) {
            console.log(error)
        }

    }

    function conditonedFilter() {
        filteredData ? (actionA()) : (actionB());



    }

    function actionA() {
        let filteredRes = filteredData.filter(item => item?.info?.name.toLowerCase().includes(serachText.toLowerCase()))
        setFilteredData(filteredRes)


    }

    function actionB() {
        let filteredRes = listOfRestaurants.filter(item => item?.info?.name.toLowerCase().includes(serachText.toLowerCase()))
        setFilteredData(filteredRes)

    }



    const restaurantsCardsPromoted = withPromotedLabel(CardsContainer);



    return (
        <div className=''>
            <div className='ml-32 flex justify-center items-center gap-5'>



                <button className='border rounded-md bg-gray-500 text-white font-semibold py-2 px-4' onClick={() => {
                    let filtered = listOfRestaurants.filter(item => item?.info?.avgRating > 4)
                    setFilteredData(filtered)


                }}>Top Restaurants</button>
                <div>

                    <input type='text' value={serachText} className='border py-2 px-4' onChange={(e) => {
                        setSearchText(e.target.value)

                    }} />
                    <button className='border rounded-md bg-lime-500 hover:bg-lime-800 transition text-white font-semibold py-2 px-4' onClick={conditonedFilter}>Search</button>
                </div>
                <input className='border p-2' type='text' placeholder=' Change your Nav Title' onChange={(e) => {
                    setUserName(e.target.value)


                }} />
            </div>

            {
                filteredData?.length == 0 ? (<Shimmer />) : (
                    <div className='grid grid-cols-4 p-16 gap-8 '>


                        {
                            filteredData.map((data) => {
                                return (

                                    <Link key={data?.info?.id} to={'/restaurants/' + data?.info?.id}>

                                        {
                                            data?.info?.promoted ? (<restaurantsCardsPromoted  {...data?.info} />) : (<CardsContainer   {...data?.info} />)

                                        }







                                    </Link>


                                )
                            })
                        }
                    </div>
                )

            }




        </div>

    )


}

export default Body