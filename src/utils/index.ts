import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getProducts = async () => {
  const productsCollection = collection(db, "products");
  const productSnapshot = await getDocs(productsCollection);
  const productList = productSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return productList;
};
