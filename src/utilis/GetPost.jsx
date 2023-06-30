import React, { useState ,useEffect} from "react";
import { useFilterContext } from "../Context/FilterContext";
import { deleteDoc, getDocs, doc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { auth, db } from "../Firebase";


/* 
  the postCollectionRef accesses the with collection from the data base which is being used eg. 'post'
  */
const postCollectionRef = collection(db, "tracker");

/*
  the getpost fuction performs a get request to the database using getDocs ; which accepts one aguement
   postCollectionRef (to know which collection is being used ) 
  */
function GetPost() {
  const [trackList, setTrackList] = useState([]);
//   const { Product } = useFilterContext();

  /*
    getData itirates through the data and get a selected list of data from the request

    */

  async function get() {
    const data = await (getDocs(postCollectionRef));

    const getData = data.docs.map((items) => ({
      ...items.data(),
      id: items.id,
    }));
   return 
    // Product(getData);
  }
  useEffect(() => {
    get();
  }, []);

  return trackList;
}
export default GetPost;
