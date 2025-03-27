import { NextResponse } from 'next/server';
import { query } from '@/database/connection';

export async function GET() {
  try {
    // Get featured testimonials by default
    const featured = await query(
      `SELECT id, name, location, image, rating, testimonial
       FROM testimonials
       WHERE is_featured = TRUE
       ORDER BY id DESC
       LIMIT 3`
    );
    
    return NextResponse.json(featured);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'rating', 'testimonial'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Validate rating is between 1 and 5
    if (data.rating < 1 || data.rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }
    
    // Insert testimonial into database
    await query(
      `INSERT INTO testimonials 
        (name, location, image, rating, testimonial, is_featured)
       VALUES (?, ?, ?, ?, ?, FALSE)`,
      [
        data.name,
        data.location || null,
        data.image || null,
        data.rating,
        data.testimonial
      ]
    );
    
    return NextResponse.json({
      success: true,
      message: "Thank you for your testimonial. It will be reviewed and published soon."
    });
    
  } catch (error) {
    console.error('Testimonial submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit testimonial' },
      { status: 500 }
    );
  }
}

