import { NextResponse } from 'next/server';
import { query } from '@/database/connection';

export async function GET() {
  try {
    // Get all tours with their basic information
    const tours = await query(`
      SELECT 
        id, title, slug, duration, price, description, 
        full_description, image, rating, review_count
      FROM tours
      ORDER BY title ASC
    `);

    // For each tour, get its itinerary
    for (const tour of tours) {
      const itinerary = await query(
        `SELECT day_number as day, title, description 
         FROM tour_itinerary 
         WHERE tour_id = ? 
         ORDER BY day_number ASC`,
        [tour.id]
      );
      tour.itinerary = itinerary;
    }

    return NextResponse.json(tours);
  } catch (error) {
    console.error('Error fetching tours:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tours' },
      { status: 500 }
    );
  }
}

