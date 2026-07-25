import clientPromise from "../../../../lib/mongodb"

export async function POST(request) {
    try {
       
        const body = await request.json()

        const client = await clientPromise;
        const db = client.db("bittree")
        const collection = db.collection("links")


        const doc=await collection.findOne({handle: body.handle})
        if(doc){
            return Response.json({ success: false, error: true ,message: 'This Bittree is already genereted', result: null })         
            
        }
        const result = await collection.insertOne(body)
        
        return Response.json({ success: true, error: false, message: 'Added', result: result })
    } catch (err) {
        console.error("Database connection error details:", err)
        return Response.json({ success: false, error: true, message: err.message }, { status: 500 })
    }
}