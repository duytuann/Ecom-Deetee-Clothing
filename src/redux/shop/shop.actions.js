import ShopActionTypes from "./shop.types";
import { getDocs, collection } from "firebase/firestore";

import {
  db,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
    const collectionRef = collection(db, "collections");
    dispatch(fetchCollectionsStart());

    const collectionSnap = await getDocs(collectionRef);
    const collectionsMap = convertCollectionsSnapshotToMap(collectionSnap);
    dispatch(fetchCollectionsSuccess(collectionsMap));

    // .catch((error) =>
    //   dispatch(fetchCollectionsFailure(error.message))
    // );
  };
};

