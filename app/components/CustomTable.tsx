"use client";
import { FC } from "react";
import { Table, TableBody, TableContainer } from "@mui/material";
import CustomTableRow from "./CustomTableRow";
import { CustomTableProps } from "../assets/TypeExports";

const CustomTable: FC<CustomTableProps> = ({ tableData, type }) => {
  return (
    <TableContainer
      sx={{
        height:
          type === "smallCard" || type === "mediumCard"
            ? "290px"
            : type === "smallWidget" || type === "largeWidget"
            ? "240px"
            : type === "mediumWidget"
            ? "149.8px"
            : type === "largeCard"
            ? "604px"
            : "",
        width: "100%",
        // border: "1px solid red",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        borderRadius: "24px",
      }}
    >
      <Table
        sx={{
          height: "100%",
          margin: "0 auto",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          width: "100%",
          backgroundColor: "backBlack",

          // border: "none",
        }}
      >
        <TableBody
          sx={{
            // border: "1px solid red",
            backgroundColor: "backBlack",
            margin: "0 auto",
            height:
              type === "mediumCard"
                ? "260.9px"
                : type === "smallWidget"
                ? "197.52px"
                : type === "mediumWidget"
                ? "134.77px"
                : type === "largeWidget"
                ? "154.77px"
                : type === "smallCard"
                ? "236px"
                : type === "largeCard"
                ? "550px"
                : "",
            width: "100%",
            transition:
              type === "smallWidget" ||
              type === "mediumWidget" ||
              type === "largeWidget"
                ? "transform 0.5s ease-in-out"
                : "",
            transform:
              type === "smallWidget" ||
              type === "mediumWidget" ||
              type === "largeWidget"
                ? "scale(1.2)"
                : "",
            "&:hover": {
              transform:
                type === "smallWidget" ||
                type === "mediumWidget" ||
                type === "largeWidget"
                  ? "scale(1)"
                  : "",
            },
          }}
        >
          {tableData.map((row, index) => (
            <CustomTableRow
              row={row}
              key={row.label}
              type={type}
              last={tableData.length - 1 === index}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
