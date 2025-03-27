USE vietnam_travel;

-- Insert sample destinations
INSERT INTO destinations (name, slug, description, full_description, best_time_to_visit, image, rating, review_count, region, latitude, longitude) VALUES
('Ha Long Bay', 'ha-long-bay', 'Discover the emerald waters and thousands of towering limestone islands', 'Ha Long Bay is a UNESCO World Heritage Site and popular travel destination in Quang Ninh Province, Vietnam. The bay features thousands of limestone karsts and isles in various shapes and sizes. Ha Long Bay is a center of a larger zone which includes Bai Tu Long Bay to the northeast, and Cat Ba Island to the southwest. These larger zones share similar geological, geographical, geomorphological, climate, and cultural characters.', 'October to April', '/images/destinations/halong-bay.jpg', 4.9, 1240, 'Northern Vietnam', 20.9100512, 107.1839024),
('Hoi An Ancient Town', 'hoi-an-ancient-town', 'Explore the charming streets of this well-preserved trading port', 'Hoi An is an ancient town located in Vietnam\'s central Quang Nam Province. It was a major Southeast Asian trading port from the 15th to the 19th centuries. The town is known for its well-preserved Ancient Town, cut through with canals. The former port city\'s melting-pot history is reflected in its architecture, a mix of eras and styles from wooden Chinese shophouses and temples to colorful French colonial buildings, ornate Vietnamese tube houses and the iconic Japanese Covered Bridge with its pagoda.', 'February to July', '/images/destinations/hoi-an.jpg', 4.8, 980, 'Central Vietnam', 15.8800584, 108.3380469),
('Sapa', 'sapa', 'Trek through terraced rice fields and visit ethnic minority villages', 'Sapa is a town in the Hoàng Liên Son Mountains of northwestern Vietnam. A popular trekking base, it overlooks the terraced rice fields of the Muong Hoa Valley, and is near the 3,143m-tall Phang Xi Pang peak, which is climbable via a steep, multiday guided walk. Hill tribes, such as the Hmong, Tay and Dao, make up much of the local population.', 'March to May and September to November', '/images/destinations/sapa.jpg', 4.7, 856, 'Northern Vietnam', 22.3363608, 103.8437852),
('Ho Chi Minh City', 'ho-chi-minh-city', 'Experience the vibrant energy of Vietnam\'s largest metropolis', 'Ho Chi Minh City (commonly known as Saigon) is a city in southern Vietnam famous for the pivotal role it played in the Vietnam War. It\'s also known for its French colonial landmarks, including Notre-Dame Cathedral, made entirely of materials imported from France, and the 19th-century Central Post Office. Food stalls line the city\'s streets, especially around bustling Bến Thành Market.', 'December to April', '/images/destinations/ho-chi-minh-city.jpg', 4.6, 1120, 'Southern Vietnam', 10.8230989, 106.6296638),
('Hue Imperial City', 'hue-imperial-city', 'Step back in time at the historic imperial citadel', 'Hue was the seat of Nguyen Dynasty emperors and the national capital from 1802 to 1945. A major attraction is its vast, 19th-century Đại Nội Citadel, surrounded by a moat and thick stone walls. It encompasses the Imperial City, with palaces and shrines; the Forbidden Purple City (Tử cấm thành), once the emperor\'s home; and a replica of the Royal Theater.', 'January to April', '/images/destinations/hue.jpg', 4.7, 760, 'Central Vietnam', 16.4637117, 107.5908628),
('Mekong Delta', 'mekong-delta', 'Cruise through the maze of rivers in Vietnam\'s rice bowl', 'The Mekong Delta is a vast maze of rivers, swamps and islands, home to floating markets, Khmer pagodas and villages surrounded by rice paddies. Boats are the main means of transportation, and tours of the region often start in nearby Ho Chi Minh City or Can Tho, a bustling town in the heart of the delta.', 'November to April', '/images/destinations/mekong-delta.jpg', 4.5, 680, 'Southern Vietnam', 9.7741637, 105.6311573);

-- Insert destination highlights
INSERT INTO destination_highlights (destination_id, highlight) VALUES
(1, 'Overnight cruise experience'),
(1, 'Kayaking through limestone caves'),
(1, 'Fresh seafood dining'),
(1, 'Swimming in emerald waters'),
(1, 'Visit to floating villages'),
(2, 'Lantern-lit streets at night'),
(2, 'Traditional tailoring shops'),
(2, 'Japanese Covered Bridge'),
(2, 'Boat rides on Thu Bon River'),
(2, 'Local cooking classes'),
(3, 'Trekking through rice terraces'),
(3, 'Homestays with local families'),
(3, 'Fansipan mountain cable car'),
(3, 'Local markets and handicrafts'),
(3, 'Stunning mountain views');

-- Insert destination gallery images
INSERT INTO destination_gallery (destination_id, image_url, alt_text) VALUES
(1, '/images/gallery/halong-bay-1.jpg', 'Ha Long Bay sunset view'),
(1, '/images/gallery/halong-bay-2.jpg', 'Limestone karsts in Ha Long Bay'),
(1, '/images/gallery/halong-bay-3.jpg', 'Traditional junk boat in Ha Long Bay'),
(2, '/images/gallery/hoi-an-1.jpg', 'Lanterns in Hoi An Ancient Town'),
(2, '/images/gallery/hoi-an-2.jpg', 'Japanese Covered Bridge'),
(2, '/images/gallery/hoi-an-3.jpg', 'Hoi An riverside at night'),
(3, '/images/gallery/sapa-1.jpg', 'Terraced rice fields in Sapa'),
(3, '/images/gallery/sapa-2.jpg', 'Hmong people in traditional dress'),
(3, '/images/gallery/sapa-3.jpg', 'Fansipan mountain view');

-- Insert sample tours
INSERT INTO tours (title, slug, duration, price, description, full_description, image, rating, review_count) VALUES
('Northern Vietnam Explorer', 'northern-vietnam-explorer', '7 Days', 899.00, 'Explore Hanoi, Ha Long Bay, and Sapa\'s terraced fields', 'Experience the best of Northern Vietnam with this 7-day adventure. Begin in the charming capital of Hanoi, cruise through the emerald waters of Ha Long Bay, and trek through the stunning rice terraces of Sapa. This tour includes accommodation, transportation, guided tours, and select meals.', '/images/tours/northern-vietnam.jpg', 4.8, 124),
('Central Vietnam Heritage', 'central-vietnam-heritage', '5 Days', 699.00, 'Discover Hue, Da Nang, and the ancient town of Hoi An', 'Immerse yourself in the rich cultural heritage of Central Vietnam. Explore the imperial city of Hue, enjoy the beaches of Da Nang, and wander through the lantern-lit streets of Hoi An. This tour includes accommodation, transportation, guided tours, and select meals.', '/images/tours/central-vietnam.jpg', 4.9, 98),
('Southern Vietnam Highlights', 'southern-vietnam-highlights', '6 Days', 799.00, 'Experience Ho Chi Minh City, Mekong Delta, and Phu Quoc Island', 'Discover the vibrant south of Vietnam. Explore the bustling metropolis of Ho Chi Minh City, cruise through the maze of waterways in the Mekong Delta, and relax on the pristine beaches of Phu Quoc Island. This tour includes accommodation, transportation, guided tours, and select meals.', '/images/tours/southern-vietnam.jpg', 4.7, 86),
('Vietnam Complete Journey', 'vietnam-complete-journey', '14 Days', 1599.00, 'Comprehensive tour from north to south Vietnam', 'Experience the complete Vietnam journey from north to south. This comprehensive 14-day tour takes you through all the highlights of Vietnam, from the mountains of the north to the deltas of the south, with plenty of cultural experiences along the way.', '/images/tours/vietnam-complete.jpg', 4.9, 65),
('Vietnam Culinary Adventure', 'vietnam-culinary-adventure', '8 Days', 999.00, 'Explore Vietnam\'s diverse cuisine and food culture', 'Embark on a culinary journey through Vietnam, discovering the unique flavors and cooking techniques of different regions. Learn to cook traditional dishes, visit local markets, and enjoy food tours in major cities.', '/images/tours/culinary-tour.jpg', 4.8, 42);

-- Insert tour itinerary
INSERT INTO tour_itinerary (tour_id, day_number, title, description) VALUES
(1, 1, 'Arrive in Hanoi', 'Airport pickup and welcome dinner'),
(1, 2, 'Hanoi City Tour', 'Visit Ho Chi Minh Mausoleum, Temple of Literature, and Old Quarter'),
(1, 3, 'Ha Long Bay Cruise', 'Overnight cruise through limestone karsts'),
(1, 4, 'Ha Long Bay to Hanoi', 'Morning activities and return to Hanoi'),
(1, 5, 'Hanoi to Sapa', 'Scenic train journey to the highlands'),
(1, 6, 'Sapa Trekking', 'Trek through rice terraces and ethnic minority villages'),
(1, 7, 'Return to Hanoi', 'Departure assistance'),
(2, 1, 'Arrive in Hue', 'Airport pickup and welcome dinner'),
(2, 2, 'Hue Imperial City', 'Explore the Citadel and Thien Mu Pagoda'),
(2, 3, 'Hue to Da Nang', 'Scenic drive through Hai Van Pass'),
(2, 4, 'Da Nang to Hoi An', 'Marble Mountains and Hoi An walking tour'),
(2, 5, 'Hoi An and Departure', 'Free morning and departure assistance'),
(3, 1, 'Arrive in Ho Chi Minh City', 'Airport pickup and welcome dinner'),
(3, 2, 'Ho Chi Minh City Tour', 'War Remnants Museum, Reunification Palace, and Ben Thanh Market'),
(3, 3, 'Mekong Delta Day Trip', 'Boat cruise, fruit orchards, and local villages'),
(3, 4, 'Fly to Phu Quoc Island', 'Beach resort check-in and free afternoon'),
(3, 5, 'Phu Quoc Island', 'Snorkeling and island tour'),
(3, 6, 'Return to Ho Chi Minh City', 'Departure assistance');

-- Connect tours with destinations (many-to-many)
INSERT INTO tour_destinations (tour_id, destination_id) VALUES
(1, 1), -- Northern Vietnam Explorer includes Ha Long Bay
(1, 3), -- Northern Vietnam Explorer includes Sapa
(2, 2), -- Central Vietnam Heritage includes Hoi An
(2, 5), -- Central Vietnam Heritage includes Hue
(3, 4), -- Southern Vietnam Highlights includes Ho Chi Minh City
(3, 6), -- Southern Vietnam Highlights includes Mekong Delta
(4, 1), -- Vietnam Complete Journey includes Ha Long Bay
(4, 2), -- Vietnam Complete Journey includes Hoi An
(4, 3), -- Vietnam Complete Journey includes Sapa
(4, 4), -- Vietnam Complete Journey includes Ho Chi Minh City
(4, 5), -- Vietnam Complete Journey includes Hue
(4, 6); -- Vietnam Complete Journey includes Mekong Delta

-- Insert sample testimonials
INSERT INTO testimonials (name, location, image, rating, testimonial, is_featured) VALUES
('Sarah Johnson', 'United States', '/images/testimonials/sarah.jpg', 5, 'Our trip to Vietnam was absolutely amazing! The tour was well-organized, and our guide was knowledgeable and friendly. Ha Long Bay was breathtaking!', TRUE),
('David Chen', 'Australia', '/images/testimonials/david.jpg', 5, 'From the bustling streets of Hanoi to the serene beauty of Hoi An, every moment was special. The food tours were a highlight - Vietnamese cuisine is incredible!', TRUE),
('Emma Wilson', 'United Kingdom', '/images/testimonials/emma.jpg', 4, 'Sapa\'s rice terraces were even more beautiful than in photos. Our homestay experience with a local family was unforgettable and gave us real insight into local life.', TRUE),
('Michael Rodriguez', 'Canada', '/images/testimonials/michael.jpg', 5, 'The Vietnam Complete Journey tour was worth every penny. In two weeks, we experienced so much of Vietnam\'s culture, history, and natural beauty.', FALSE),
('Akiko Tanaka', 'Japan', '/images/testimonials/akiko.jpg', 4, 'Hoi An was my favorite part of the trip. The ancient town is so charming, especially at night when all the lanterns are lit up.', FALSE);

