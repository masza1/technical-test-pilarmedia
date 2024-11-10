import { prisma } from "../../../../../lib/prisma";

export async function GET( req ) {
    const salesData = await prisma.$queryRaw`
        SELECT 
            YEAR(SalesDate) as Year, 
            MONTH(SalesDate) as Month, 
            SUM(SalesAmount) as TotalSales 
        FROM Sales 
        GROUP BY YEAR(SalesDate), MONTH(SalesDate)
    `;
    return new Response( JSON.stringify( salesData ), {
        headers: { 'Content-Type': 'application/json' },
    } );
}
