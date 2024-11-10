import { prisma } from "../../../../../lib/prisma";

export async function GET( req ) {
    const salesData = await prisma.$queryRaw`
        SELECT 
            YEAR(SalesDate) as Year, 
            SUM(SalesAmount) as TotalSales 
        FROM Sales 
        GROUP BY YEAR(SalesDate)
    `;
    return new Response( JSON.stringify( salesData ), {
        headers: { 'Content-Type': 'application/json' },
    } );
}
