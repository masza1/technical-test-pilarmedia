const { PrismaClient } = require( '@prisma/client' );
const { faker } = require( '@faker-js/faker' );
const prisma = new PrismaClient();

async function main() {
    console.log( 'Start seeding...' );

    // Delete all existing records
    await prisma.sales.deleteMany( {} );
    await prisma.products.deleteMany( {} );
    await prisma.salespersons.deleteMany( {} );
    console.log( 'Deleted all existing records' );

    // Seed Products
    const products = [];
    for ( let i = 0; i < 100; i++ ) {
        products.push( {
            ProductName: faker.commerce.productName(),
            ProductPrice: parseFloat( faker.commerce.price() ),
            Description: faker.commerce.productDescription()
        } );
    }
    const createdProducts = await prisma.products.createMany( {
        data: products
    } );
    console.log( 'Seeded Products' );

    // Get valid ProductIDs
    const productIDs = await prisma.products.findMany( {
        select: { ProductID: true }
    } );

    // Seed Salespersons
    const salespersons = [];
    for ( let i = 0; i < 50; i++ ) {
        salespersons.push( {
            SalesPersonName: faker.person.fullName(),
            Address: faker.location.streetAddress(),
            PhoneNumber: faker.phone.number()
        } );
    }
    const createdSalespersons = await prisma.salespersons.createMany( {
        data: salespersons
    } );
    console.log( 'Seeded Salespersons' );

    // Get valid SalesPersonIDs
    const salesPersonIDs = await prisma.salespersons.findMany( {
        select: { SalesPersonID: true }
    } );

    // Seed Sales using bulk inserts
    const BATCH_SIZE = 100000; // 100k // Adjust batch size as needed
    const salesData = [];
    for ( let i = 0; i < 2000000; i++ ) {
        salesData.push( {
            SalesDate: faker.date.past(),
            ProductID: productIDs[ faker.number.int( { min: 0, max: productIDs.length - 1 } ) ].ProductID,
            SalesAmount: parseFloat( faker.commerce.price() ),
            SalesPersonID: salesPersonIDs[ faker.number.int( { min: 0, max: salesPersonIDs.length - 1 } ) ].SalesPersonID
        } );

        // Insert batch when reached the BATCH_SIZE
        if ( salesData.length === BATCH_SIZE ) {
            await prisma.sales.createMany( {
                data: salesData
            } );
            salesData.length = 0; // Clear the array
            console.log( `Seeded ${ i + 1 } sales records` );
        }
    }

    // Insert any remaining records
    if ( salesData.length > 0 ) {
        await prisma.sales.createMany( {
            data: salesData
        } );
        console.log( 'Seeded remaining sales records' );
    }

    console.log( 'Finished seeding Sales' );
}

main()
    .catch( ( e ) => {
        console.error( e );
        process.exit( 1 );
    } )
    .finally( async () => {
        await prisma.$disconnect();
    } );
