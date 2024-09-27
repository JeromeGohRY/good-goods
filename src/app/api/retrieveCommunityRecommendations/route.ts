// app/api/retrieveRecommendations/route.ts
import connectToDB from "../../../../lib/mongodb";
import CommunityRecommendation from "../../../../models/communityRecommendation";
import { NextResponse } from "next/server";

// RETRIEVES ALL RECOMMENDATIONS
export async function GET() {
  try {
    // Connect to MongoDB
    await connectToDB();

    // // Fetch recommendations
    const recommendations = await CommunityRecommendation.find();


    // Return the enterprises as JSON
    return NextResponse.json({recommendations});
  } catch (error) {
    return NextResponse.json(
      { message: "Cannot fetch community recommendations", error },
      { status: 500 }
    );
  }
}
