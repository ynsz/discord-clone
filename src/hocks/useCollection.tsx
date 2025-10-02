import { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  query,
  type DocumentData,
  Query,
} from "firebase/firestore";
import db from "../firebase";

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);

  useEffect(() => {
    const collectionRef: Query<DocumentData> = query(collection(db, data));
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channels[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelsResults);
    });
  }, []);

  return { documents };
};

export default useCollection;
