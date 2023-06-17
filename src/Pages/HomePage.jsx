import React, { useEffect, useState } from "react";
import StickyHeadTable from "../Components/Table";
import ResponsiveDialog from "../Components/Dialog";
import { deleteDoc, getDocs, doc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { auth, db } from "../Firebase";


const HomePage = () => {
  return (
    <div>
      <ResponsiveDialog />
      <StickyHeadTable />
    </div>
  );
}

export default HomePage
