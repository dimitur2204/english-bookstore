/*
Dimitar Nizamov

This is a hook that fetches the posts from the API based on a FirebaseQuery you provide to the hook
Returns an array of posts and a boolean that indicates if the posts are still loading
*/
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useCallback, useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import firebaseApp from "../firebase-config";

const storage = getStorage(firebaseApp);
export const usePosts = (query) => {
  const [value, loading, error] = useCollection(query);
  const [postsLoading, setLoading] = useState(loading);
  const [postsError, setError] = useState(error);
  const [postsWithImg, setPostsWithImage] = useState([]);
  const fetchData = useCallback(async (postCollection) => {
    if (!postCollection) return;
    const posts = await Promise.all(
      postCollection?.docs?.map((snapshot) => {
        const doc = snapshot.data();
        return getDownloadURL(ref(storage, `/${snapshot.id}/1-${snapshot.id}`))
          .then((url) => {
            setLoading(false);
            return { ...doc, id: snapshot.id, url };
          })
          .catch((err) => {
            setError(err);
          });
      })
    );
    return posts;
  }, []);
  useEffect(() => {
    fetchData(value).then((res) => {
      setPostsWithImage(res);
    });
  }, [value, fetchData]);
  return { postsWithImg, error: postsError, loading: postsLoading };
};
