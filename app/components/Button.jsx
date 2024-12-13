import { cn } from "@/lib/utils";
import { Spinner } from "@nextui-org/react";
import React from "react";

function Button({ children, className, loading, ...props }) {
  return (
    <div className="text-white">
      <button
        disabled={loading}
        {...props}
        className={cn(
          `p-6 rounded-normal w-full bg-primary  ${
            loading ? "bg-slate-500" : ""
          }            `,
          className
        )}
      >
        {loading ? (
          <span className="loading loading-spinner text-success"></span>
        ) : (
          <div className="text-white">{children}</div>
        )}
      </button>
    </div>
  );
}

export default Button;
