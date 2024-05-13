import axios from 'axios';
import React, { useEffect, useState } from "react";
import { MyNavbar } from "./navbar";

export function Home() {
  return (
    <>
      <MyNavbar />
      <h1>Home Page</h1>
    </>
  );
}

