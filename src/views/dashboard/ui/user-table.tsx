import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Chip } from "@heroui/chip";
import { User } from "@heroui/user";
import type { DashboardUser } from "../model/types-user";
import { USER_STATUS_COLOR_MAP } from "../const/user-status-colors";

interface UserTableProps {
  users: DashboardUser[];
}

export const UserTable = ({ users }: UserTableProps) => {
  return (
    <Table
      removeWrapper
      aria-label="대시보드 사용자 목록 테이블"
      className="min-w-full"
    >
      <TableHeader>
        <TableColumn>사용자</TableColumn>
        <TableColumn>역할</TableColumn>
        <TableColumn>상태</TableColumn>
        <TableColumn>이메일</TableColumn>
        <TableColumn>가입일</TableColumn>
      </TableHeader>
      <TableBody>
        {users.map((user: DashboardUser) => (
          <TableRow key={user.id}>
            <TableCell>
              <User
                name={user.name}
                description={`ID: ${user.id}`}
                avatarProps={{
                  src: `https://i.pravatar.cc/150?u=${user.id}`,
                  size: "sm",
                }}
              />
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <p className="text-bold text-sm capitalize">{user.role}</p>
              </div>
            </TableCell>
            <TableCell>
              <Chip
                className="capitalize"
                color={USER_STATUS_COLOR_MAP[user.status]}
                size="sm"
                variant="flat"
              >
                {user.status}
              </Chip>
            </TableCell>
            <TableCell>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {user.email}
              </p>
            </TableCell>
            <TableCell>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {new Date(user.joinDate).toLocaleDateString("ko-KR")}
              </p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
