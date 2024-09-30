import axios from "axios";
import { useState, useEffect } from "react";
// if sec change , then cleanup interval is needed.
function useRefresh(sec) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNewData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log("res data", res.data);
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      console.log("Error on getting data");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const intevalId = setInterval(() => {
      getNewData();
    }, sec * 1000);

    getNewData();
    return () => {
      clearInterval(intevalId);
    };
  }, [sec]);

  return { data, loading };
}

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine); // its true if browser is connected to network.

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};



const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
};



export { useRefresh, useOnlineStatus, useMousePosition };
