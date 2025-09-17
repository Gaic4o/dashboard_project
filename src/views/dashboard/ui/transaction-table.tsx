import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Chip } from "@heroui/chip";
import type { Transaction } from "../model/types-transaction";
import {
  TRANSACTION_STATUS_COLOR_MAP,
  TRANSACTION_TYPE_COLOR_MAP,
} from "../const/transaction-colors";
import { formatCurrency } from "../model/currency-formatter";
import {
  getTransactionTypeLabel,
  getTransactionStatusLabel,
} from "../model/transaction-labels";
import { cn } from "@/src/shared/cn";

interface TransactionTableProps {
  /** 표시할 거래 목록 */
  transactions: Transaction[];
}

export const TransactionTable = ({ transactions }: TransactionTableProps) => {
  return (
    <Table removeWrapper aria-label="거래 내역 테이블" className="min-w-full">
      <TableHeader>
        <TableColumn>거래 유형</TableColumn>
        <TableColumn>금액</TableColumn>
        <TableColumn>설명</TableColumn>
        <TableColumn>카테고리</TableColumn>
        <TableColumn>상태</TableColumn>
        <TableColumn>계좌 정보</TableColumn>
        <TableColumn>거래일</TableColumn>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction: Transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>
              <Chip
                className="capitalize"
                color={TRANSACTION_TYPE_COLOR_MAP[transaction.type]}
                size="sm"
                variant="flat"
              >
                {getTransactionTypeLabel(transaction.type)}
              </Chip>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <p
                  className={cn(
                    "text-bold text-sm",
                    transaction.type === "income" &&
                      "text-green-600 dark:text-green-400",
                    transaction.type === "expense" &&
                      "text-red-600 dark:text-red-400",
                    transaction.type === "transfer" &&
                      "text-blue-600 dark:text-blue-400"
                  )}
                >
                  {(() => {
                    switch (transaction.type) {
                      case "income":
                        return "+";
                      case "expense":
                        return "-";
                      case "transfer":
                        return "";
                      default:
                        return "";
                    }
                  })()}
                  {formatCurrency(transaction.amount, transaction.currency)}
                </p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <p className="text-bold text-sm">{transaction.description}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  ID: {transaction.id}
                </p>
              </div>
            </TableCell>
            <TableCell>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {transaction.category}
              </p>
            </TableCell>
            <TableCell>
              <Chip
                className="capitalize"
                color={TRANSACTION_STATUS_COLOR_MAP[transaction.status]}
                size="sm"
                variant="flat"
              >
                {getTransactionStatusLabel(transaction.status)}
              </Chip>
            </TableCell>
            <TableCell>
              <div className="flex flex-col text-xs text-gray-600 dark:text-gray-400">
                {transaction.accountFrom && (
                  <p>출금: {transaction.accountFrom}</p>
                )}
                {transaction.accountTo && <p>입금: {transaction.accountTo}</p>}
              </div>
            </TableCell>
            <TableCell>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {new Date(transaction.date).toLocaleDateString("ko-KR")}
              </p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
