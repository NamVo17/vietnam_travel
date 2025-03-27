import { NextResponse } from 'next/server';
import { query } from '@/database/connection';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params;

    // Get the destination by slug
    const destinations = await query(
      `SELECT 
        d.id, d.name, d.slug, d.description, d.full_description, 
        d.best_time_to_visit, d.image, d.rating, d.review_count,
        d.region, d.latitude as lat, d.longitude as lng
      FROM destinations d
      WHERE d.slug = ?`,
      [slug]
    );

    if (!destinations.length) {
      return NextResponse.json(
        { error: 'Destination not found' },
        { status: 404 }
      );
    }

    const destination = destinations[0];

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

    // Get related tours
    const relatedTours = await query(
      `SELECT 
        t.id, t.title, t.slug, t.duration, t.price, 
        t.description, t.image, t.rating, t.review_count
      FROM tours t
      JOIN tour_destinations td ON t.id = td.tour_id
      WHERE td.destination_id = ?
      LIMIT 3`,
      [destination.id]
    );

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

    return NextResponse.json({
      destination,
      relatedTours
    });
  } catch (error) {
    console.error('Error fetching destination:', error);
    return NextResponse.json(
      { error: 'Failed to fetch destination' },
      { status: 500 }
    );
  }
}

