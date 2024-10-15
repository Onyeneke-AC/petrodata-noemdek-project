"use client";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { ButtonProps } from "../assets/TypeExports";

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  href,
  className = "bg-darkerGray",
  disabled = false,
  type = "button",
  imgSrc,
  imgAlt = "",
  imgWidth = 24,
  imgHeight = 24,
}) => {
  const baseClass = `flex items-center justify-center border border-secondaryGray p-[8px] rounded-full hover:cursor-pointer ${
    disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-backGray"
  } ${className}`;

  const content = (
    <>
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={imgWidth}
          height={imgHeight}
          className={`${children ? "inline-block mr-2" : ""}`}
        />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClass}`}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={` ${baseClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
