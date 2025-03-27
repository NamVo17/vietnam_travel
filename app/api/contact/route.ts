import { NextResponse } from 'next/server';
import { query } from '@/database/connection';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'message'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Insert contact submission into database
    await query(
      `INSERT INTO contact_submissions 
        (name, email, subject, message, status)
       VALUES (?, ?, ?, ?, 'new')`,
      [
        data.name,
        data.email,
        data.subject || null,
        data.message
      ]
    );
    
    // In a real application, you would:
    // 1. Send notification email to admin
    // 2. Send confirmation email to user
    
    return NextResponse.json({
      success: true,
      message: "Thank you for contacting us. We will get back to you shortly."
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}

