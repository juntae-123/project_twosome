"use client";

import React, { useEffect, useState } from "react";

import AdminPage from "./admin/admin";
import LoginPage from "./login/LoginPage";

interface MenuItem {
  id: string;
  ename: string;
  pricename: string;
  explanation: string;
  imgurl: string;
}

export default function Home() {
  return (
<<<<<<< HEAD
    <div>
      {/* <AdminPage />
      <LoginPage></LoginPage> */}
    </div>
=======
    <>
      <PageDesert></PageDesert>
    </>
>>>>>>> origin/my-LHB
  );
}
