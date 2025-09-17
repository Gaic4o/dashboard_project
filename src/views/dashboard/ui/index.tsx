"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "@suspensive/react";
import { SuspenseQuery } from "@suspensive/react-query";
import { UserTable } from "./user-table";
import { TransactionTable } from "./transaction-table";
import { fetchDashboardUsers } from "../api/fetch-dashboard-users";
import { fetchDashboardTransactions } from "../api/fetch-dashboard-transactions";
import { dashboardQueryKeys } from "../api/dashboard-query-keys";
import type { DashboardApiResponse } from "../model/types-user";
import type { TransactionApiResponse } from "../model/types-transaction";
import { DashboardErrorFallback } from "./page-error-fallback";
import { DashboardLoadingFallback } from "./page-loading-fallback";

export const DashboardPage = () => {
  const page = 1;
  const limit = 10;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* 사용자 관리 Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                사용자 관리
              </h2>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
              <ErrorBoundary fallback={<DashboardErrorFallback />}>
                <Suspense fallback={<DashboardLoadingFallback />}>
                  <SuspenseQuery
                    queryKey={dashboardQueryKeys.usersList(page, limit)}
                    queryFn={() => fetchDashboardUsers(page, limit)}
                  >
                    {({ data }: { data: DashboardApiResponse }) => (
                      <UserTable users={data.users} />
                    )}
                  </SuspenseQuery>
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>

          {/* 거래 내역 Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                거래 내역
              </h2>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
              <ErrorBoundary fallback={<DashboardErrorFallback />}>
                <Suspense fallback={<DashboardLoadingFallback />}>
                  <SuspenseQuery
                    queryKey={dashboardQueryKeys.transactionsList(page, limit)}
                    queryFn={() => fetchDashboardTransactions(page, limit)}
                  >
                    {({ data }: { data: TransactionApiResponse }) => (
                      <TransactionTable transactions={data.transactions} />
                    )}
                  </SuspenseQuery>
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
