import { ChartRadialLabel } from "@/components/chart-radial-label"
import { ChartAreaStacked } from "@/components/chart-area-stacked"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
export default function Page() {
  return (
    <main className="min-h-svh p-4 md:p-6">
      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="min-w-0">
          <ChartRadialLabel />
        </div>
        <div className="min-w-0">
          <ChartAreaStacked />
        </div>

        <div className="min-w-0 rounded-xl border bg-card p-4">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  )
}
