import { NextResponse } from 'next/server';
import { query } from '@/database/connection';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params;

    // Get the tour by slug
    const tours = await query(
      `SELECT 
        id, title, slug, duration, price, description, 
        full_description, image, rating, review_count
      FROM tours
      WHERE slug = ?`,
      [slug]
    );

    if (!tours.length) {
      return NextResponse.json(
        { error: 'Tour not found' },
        { status: 404 }
      );
    }

    const tour = tours[0];

    // Get itinerary
    const itinerary = await query(
      `SELECT day_number as day, title, description 
       FROM tour_itinerary 
       WHERE tour_id = ? 
       ORDER BY day_number ASC`,
      [tour.id]
    );
    tour.itinerary = itinerary;

    // Get destinations included in this tour
    const destinations = await query(
      `SELECT 
        d.id, d.name, d.slug, d.description, d.image
      FROM destinations d
      JOIN tour_destinations td ON d.id = td.destination_id
      WHERE td.tour_id = ?`,
      [tour.id]
    );
    tour.destinations = destinations;

    return NextResponse.json(tour);
  } catch (error) {
    console.error('Error fetching tour:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tour' },
      { status: 500 }
    );
  }
}

