/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

export function useCollection<T>(collectionName: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ref = collection(db, collectionName);

        const snapshot = await getDocs(ref);
        const documents = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(documents);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Ocurrio un error"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName]);

  return {
    data,
    error,
    loading,
  };
}
