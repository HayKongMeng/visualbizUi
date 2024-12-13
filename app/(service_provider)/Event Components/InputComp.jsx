import { Input } from "@nextui-org/react";
import React from "react";

function InputComp({label, name, ...props }) {
  return (
    <div className="flex flex-col gap-4">
      <div>{label}</div>
      <Input
        aria-label="Input"
        radius="sm"
        size="4xl"
        classNames={{
          input: "px-4 text-2xl py-5 border-black",
          inputWrapper: "rounded h-[5rem]",
          base: "focus:border-2 focus:border-blue-500 text-5xl ",
        }}
        className={
          "  focus:border-2  focus:border-blue-500 rounded  text-xl border-black"
        }
        // {...register(name)}
        // className = {{input: "bg-white"}}
        // isInvalid= {error ?  true : false}
        //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
        {...props}
        // {...register(name)}
        // onValueChange={setValue}
      />
    </div>
  );
}

export default InputComp;
