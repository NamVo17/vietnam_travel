import { NextResponse } from 'next/server';
import { query } from '@/database/connection';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'tourId', 'startDate', 'participants'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Get tour details to calculate total price
    const tours = await query(
      'SELECT price FROM tours WHERE id = ?',
      [data.tourId]
    );
    
    if (!tours.length) {
      return NextResponse.json(
        { error: 'Tour not found' },
        { status: 404 }
      );
    }
    
    const tour = tours[0];
    const totalPrice = tour.price * data.participants;
    
    // Generate a unique booking reference
    const bookingReference = `BK-${Math.floor(Math.random() * 10000)}`;
    
    // Insert booking into database
    await query(
      `INSERT INTO bookings 
        (booking_reference, tour_id, name, email, phone, start_date, 
         participants, special_requests, total_price, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`,
      [
        bookingReference,
        data.tourId,
        data.name,
        data.email,
        data.phone || null,
        data.startDate,
        data.participants,
        data.specialRequests || null,
        totalPrice
      ]
    );
    
    // In a real application, you would:
    // 1. Send confirmation email
    // 2. Process payment
    // 3. Possibly integrate with a CRM or booking management system
    
    return NextResponse.json({
      success: true,
      bookingId: bookingReference,
      message: "Booking received successfully. We will contact you shortly to confirm your reservation."
    });
    
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}

