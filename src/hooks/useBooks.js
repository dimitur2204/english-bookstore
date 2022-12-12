import { useState, useEffect } from "react";
export const WP_API_URL = "https://english-bookstore.dimtar-nizamov.dk/wp-json/wp/v2";
export const useBooks = (options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${WP_API_URL}/items`, options);
        const json = await res.json();
        if (!signal.aborted) {
          setResponse(json.map(item => ({id: item.id,...item.acf})));
        }
      } catch (e) {
        if (!signal.aborted) {
          setError(e);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    doFetch();
    return () => {
      abortController.abort();
    };
  }, [options]);
  return { response, error, loading };
};
export default useBooks;