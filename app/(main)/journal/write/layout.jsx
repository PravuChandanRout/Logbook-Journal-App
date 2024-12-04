import Link from 'next/link';
import React, { Suspense } from 'react'
import { BarLoader } from "react-spinners";


const WriteLayout = ({children}) => {
  return (
    <div className='container mx-auto px-4 py-6'>
        <div>
            <Link href="/dashboard"
            className='text-sm text-cyan-600 hover:text-cyan-700 cursor-pointer'
            >
             ← Back to Dashboard
            </Link>
        </div>
        <Suspense fallback={<BarLoader color="orange" width={"100%"} />}>
        {children}
        </Suspense>
        </div>
  )
}

export default WriteLayout; 