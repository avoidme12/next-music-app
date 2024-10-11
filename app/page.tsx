'use client'

import Sidebar from "@/components/Sidebar";
import Display from "@/components/Display";
import {BrowserRouter} from "react-router-dom";

export default function Home() {
  return (
      <BrowserRouter>
          <div className="h-screen bg-black">
              <div className='h-[90%] flex'>
                  <Sidebar/>
                  <Display/>
              </div>
          </div>
      </BrowserRouter>
  );
}
