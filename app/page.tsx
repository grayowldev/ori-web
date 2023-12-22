import Image from 'next/image'
import TopNavbar from "@/components/Navbar/topNavbar";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

export default function Home() {
  return (
      <main>
        <TopNavbar />
        <div className={"content-container"}>
          <div className={"title-container"}>
            <h1 className={"title"}>Dashboard</h1>
          </div>

          <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
            <div>
              <Card className={"w-72"}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Inventory</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">400 items</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className={"w-72"}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">5 orders</p>
                </CardContent>
              </Card>
            </div>

          </div>


        </div>

      </main>
  )
}
