import { toast } from "sonner";
import { useState } from "react"


const useFetch = (cb) => {
    const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const func = async (...args) => {
    setLoading(true)
    setError(null)

    try {
        const res = await cb(...args);
        setData(res);
        setError(null);

    } catch (error) {
        setError(error)
        toast.error(error.message);
    } finally {
        setLoading(false)
    }

 }

 return {data,loading,error,func, setData}

}

export default useFetch;