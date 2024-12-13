"use client"

import React from 'react'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function AuthTabs() {
    const usePathName = usePathname();

  return (
    <Tabs aria-label="Options" selectedKey={usePathName} color="primary" className="" size="lg"  variant="bordered">
    <Tab key="/register" title={<Link href="/register">Register</Link>}  className=" text-xl p-10"></Tab>
    <Tab key="/login" title={<Link href="/login">Login</Link>}  className=" text-xl p-10"></Tab>
  </Tabs>
  )
}

export default AuthTabs