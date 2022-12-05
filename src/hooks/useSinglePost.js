/*
Dimitar Nizamov

This is a hook that fetches a single post from the API based on a FirebaseQuery you provide to the hook
Returns a single post and a boolean that indicates if the post is still loading
*/
import { doc, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useCallback, useEffect, useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import firebaseApp from "../firebase-config";

const storage = getStorage(firebaseApp);
export const useSinglePost = (id) => {
  const [value, loading, error] = useDocument(
    doc(getFirestore(firebaseApp), "posts", id)
  );
  const [postLoading, setLoading] = useState(loading);
  const [postError, setError] = useState(error);
  const [postWithImg, setPostWithImage] = useState([]);
  const fetchData = useCallback(async (post) => {
    if (!post) return;
    return await getDownloadURL(ref(storage, `/${post.id}/1-${post.id}`))
      .then((url) => {
        setLoading(false);
        return { ...post.data(), id: post.id, url };
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  useEffect(() => {
    fetchData(value).then((res) => {
      setPostWithImage(res);
    });
  }, [value, fetchData]);
  return { postWithImg, error: postError, loading: postLoading };
};
