"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function Skills() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={skills}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Technical Skills <br />

            </h1>
          </>
        }
      />
    </div>
  );
}

export const skills = [
    {
      name: "Python",
      designation: "Versatile programming language",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/172px-Python-logo-notext.svg.png",
      badge: "",
    },
    {
      name: "PyTorch",
      designation: "Deep learning framework",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/640px-PyTorch_logo_icon.svg.png",
      badge: "",
    },
    {
      name: "TensorFlow",
      designation: "Machine learning library",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQ8ZZmdGIl0jJAqJ-vBc9qiWof0qL2dTrQSXFtAWao4O6gSZBQSBXnN7NxdMNmTI4Dfk&usqp=CAU",
      badge: "",
    },
    {
      name: "Pandas",
      designation: "Data manipulation tool",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSOR8LzJZ7Sb6TQUcTxcOQdD7827KytVmxFCCW3MTxS036jRGiT45XHV8TxzoTVl51mo&usqp=CAU",
      badge: "",
    },
    {
      name: "NumPy",
      designation: "Numerical computing library",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrWA66pevCxmOXgsTrugDf-7MCcZ_QbaPrlVoICdhh5lHO2PiD7bntvbr00yga5zm7awo&usqp=CAU",
      badge: "",
    },
    {
      name: "OpenCV",
      designation: "Computer vision library",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwByjXBHZ_SVt94Sj3Ulr2aeDsN1oVGLbvo_ft9aaz06ut5y5C8BPdNthoHz2fsYYrrU&usqp=CAU",
      badge: "",
    },
    {
      name: "scikit-learn (SKlearn)",
      designation: "Machine learning library",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",
      badge: "",
    },
    {
      name: "ONNX",
      designation: "Open Neural Network Exchange",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gMuOR9HcYSJDeP5ea89QpyysaUpc5UdIVRMcyZRjnXLEKOZbXYTQjMYZ6qQRNbjj85g&usqp=CAU",
      badge: "",
    },
    {
      name: "TensorRT",
      designation: "High-performance inference engine",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozY9XUtdHtTHItItq7lmvgSjhmt_hWIGbyGfJASGeCCDgFcGRRx6U9N6bGTOz4yctMFk&usqp=CAU",
      badge: "",
    },
    {
      name: "Triton Server",
      designation: "Inference serving software",
      image: "https://miro.medium.com/v2/resize:fit:630/1*i4z0IsPidhNiiCiZkQRcBg.png",
      badge: "",
    },
    {
      name: "Flask",
      designation: "Micro web framework",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9qv4RA5w_mpaHQwfUfduHTkNEtbWCz0MfUrKvnPhIAse1xzgsaqZLOVNP7FihXEWCTPM&usqp=CAU",
      badge: "",
    },
    {
      name: "API Development",
      designation: "Creating application programming interfaces",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Qgm27zbxvxCr36LzdoKDc5DczFxnOyTMEE_xbx96FmBLgfeEN8QNNU5e0-j0abHx5eE&usqp=CAU",
      badge: "",
    },
    {
      name: "HTML",
      designation: "Markup language for web",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMsCZuf2yDarsyQwLTT2qDDM4TrpBOwD3uhKl4TIDa8ZpyIVpy_z4S0xxjt9ch_EOczc&usqp=CAU",
      badge: "",
    },
    {
      name: "CSS",
      designation: "Style sheet language",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLFgvNYe1Ti4Z6XdGJ1xSZyXOoGuNflDCIsiJ5ogFQubN6t2tbF4tQ1XTHPA4HeYErles&usqp=CAU",
      badge: "",
    },
  ];
  

  
