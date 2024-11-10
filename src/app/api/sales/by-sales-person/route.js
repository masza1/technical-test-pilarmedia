import { prisma } from "../../../../../lib/prisma";

export async function GET( req ) {
    const salesData = await prisma.$queryRaw`
        SELECT 
            s.SalesPersonID, 
            sp.SalesPersonName, 
            SUM(s.SalesAmount) as TotalSales 
        FROM 
            Sales s
        JOIN 
            Salespersons sp ON s.SalesPersonID = sp.SalesPersonID
        GROUP BY 
            s.SalesPersonID, 
            sp.SalesPersonName
    `;
    return new Response( JSON.stringify( salesData ), {
        headers: { 'Content-Type': 'application/json' },
    } );
}
