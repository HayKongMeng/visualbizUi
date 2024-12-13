"use client";
import Image from "next/image";
import React from "react";
import { ErrorComponent } from "./components/Error/ErrorComponent";

const error = ({ error, reset }) => <ErrorComponent reset={reset} />;

export default error;
