import { NextResponse } from 'next/server';
import { query } from '@/database/connection';

export async function GET() {
  try {
    // Get all destinations with their basic information
    const destinations = await query(`
      SELECT 
        d.id, d.name, d.slug, d.description, d.full_description, 
        d.best_time_to_visit, d.image, d.rating, d.review_count,
        d.region, d.latitude as lat, d.longitude as lng
      FROM destinations d
      ORDER BY d.name ASC
    `);

    // For each destination, get its highlights and gallery images
    for (const destination of destinations) {
      // Get highlights
      const highlights = await query(
        'SELECT highlight FROM destination_highlights WHERE destination_id = ?',
        [destination.id]
      );
      destination.highlights = highlights.map(h => h.highlight);

      // Get gallery images
      const gallery = await query(
        'SELECT image_url FROM destination_gallery WHERE destination_id = ?',
        [destination.id]
      );
      destination.gallery = gallery.map(g => g.image_url);

      // Structure location data
      destination.location = {
        region: destination.region,
        coordinates: {
          lat: destination.lat,
          lng: destination.lng
        }
      };

      // Remove redundant fields
      delete destination.region;
      delete destination.lat;
      delete destination.lng;
    }

    return NextResponse.json(destinations);
  } catch (error) {
    console.error('Error fetching destinations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch destinations' },
      { status: 500 }
    );
  }
}

