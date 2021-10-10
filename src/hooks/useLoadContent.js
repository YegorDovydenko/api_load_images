import {useCallback, useEffect, useState} from "react";
import FetchMoreButton from "../components/FetchMoreButton/index";

export const useLoadContent = () => {

  const [allItems, setAllItems] = useState([]);
  const [imgList, setImgList] = useState([]);
  const [displayedImgs, setdisplayedImgs] = useState(0);

  const handleShowMore = () => {
    const delta = allItems.length - displayedImgs
    const showAmount = delta > 10 ? 10 : delta

    setdisplayedImgs(displayedImgs + showAmount)
    setImgList(allItems.slice(0, displayedImgs + showAmount))
  }

  useEffect(() => {
    handleShowMore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allItems])

  const getContent = useCallback(async (value) => {

    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`)
    const data = await response.json()

    setAllItems(data.results)
  }, [])

  const FetchMore = () =>{
    if(allItems.length - displayedImgs > 0){
      return (
        <FetchMoreButton onClick={handleShowMore}>Load more</FetchMoreButton>
      )
    } 
    else return null
  }

  return {imgList, getContent, FetchMore}
}