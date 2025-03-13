import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function MetricItem({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center p-2 sm:p-3 border rounded-md bg-white shadow-sm">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-sm font-semibold text-blue-900 mt-1">{value}</div>
    </div>
  )
}

export default function FundCard() {
  return (
    <Card className="mb-8">
      <CardHeader className="pb-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 sm:p-6 gap-4">
          <div className="mb-4 md:mb-0">
            <CardTitle className="text-base font-medium text-gray-700">
              FUND SIZE
            </CardTitle>
            <div className="text-2xl sm:text-3xl font-bold text-blue-900 mt-1">
              $4,700,532.21
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 bg-blue-50 bg-opacity-80 p-3 rounded-md w-full md:w-auto">
            <div className="text-sm text-blue-900 sm:text-right">
              <div className="mb-1">Distribution</div>
              <div className="text-lg sm:text-xl font-medium">$23,804,365.41</div>
            </div>
            <div className="text-sm text-blue-900 sm:text-right">
              <div className="mb-1">Carried Interest</div>
              <div className="text-lg sm:text-xl font-medium">$3,045,612.18</div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 min-[916px]:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
          {/* First Column */}
          <div>
            <div className="grid grid-cols-2 min-[740px]:grid-cols-3 min-[916px]:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <MetricItem label="Total Committed" value="$4,700,532.21" />
              <MetricItem label="Capital Called" value="$4,700,532.21" />
              <MetricItem label="Capital Contributed" value="$4,700,532.21" />
              <MetricItem label="Active Companies" value="42" />
              <MetricItem label="MOIC" value="2.1x" />
              <MetricItem label="Unrealized MOIC" value="1.7x" />
            </div>
          </div>

          
          <div>
            <div className="grid grid-cols-2 min-[740px]:grid-cols-3 min-[916px]:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-0">
              <MetricItem label="Capital Invested" value="$4,700,532.21" />
              <MetricItem label="Total Invested" value="$4,700,532.21" />
              <MetricItem label="Fair Market Value" value="$4,700,532.21" />
              <MetricItem label="Gross TVPI" value="1.9x" />
              <MetricItem label="Net IRR" value="18.5%" />
              <MetricItem label="Gross IRR" value="22.3%" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}