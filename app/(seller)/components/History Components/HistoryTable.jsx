import React from "react";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import HistoryCustomer from "./HistoryCustomer";
function HistoryTable({ filteredItems }) {
  const columns = [
    { key: 'customer_history', label: 'Customer History' },
    { key: 'order_no_history', label: 'Order No' },
    { key: 'amount_history', label: 'Amount' },
    { key: 'date_history', label: 'Date' },
    { key: 'status_history', label: 'Status' },
  ];

  return (
    <Table
      isHeaderSticky
      removeWrapper
      topContentPlacement="outside"
      classNames={{
        wrapper: "bg-bg",
        base: "max-h-[200rem] bg-bg overflow-y-scroll",
      }}
      aria-label="History Table"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.key} className="bg-primary">
            <div className="text-2xl text-left text-white">
              {column.label}
            </div>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={<div className="h-full">No more content</div>}>
        {filteredItems.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <HistoryCustomer item={item.customers_history} />
            </TableCell>
            <TableCell>
              <div className="text-[1.4rem]">{item.order_no_history}</div>
            </TableCell>
            <TableCell>
              <div className="text-[1.4rem]">{item.amount_history}</div>
            </TableCell>
            <TableCell>
              <div className="text-[1.4rem]">{item.date_history}</div>
            </TableCell>
            <TableCell>
              <div className="text-[1.4rem]">{item.status_history}</div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default HistoryTable;
