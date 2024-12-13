"use client";
import NotificationIcon from "@/app/components/Icons/NotificationIcon";
import Notification from "@/app/components/Notification/Notification";
import ProfilePage from "@/app/components/Profile/Profile";
import { shopManagement } from "@/app/services/client-services/seller/shopManagement";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

function SellerProfile() {
  const {
    data: user = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["shopManagement"],
    queryFn: shopManagement,
  });

  return (
    <>
      <Notification />

      <ProfilePage user={user} />
    </>
  );
}

export default SellerProfile;
