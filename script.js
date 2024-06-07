document.querySelector(".hamburger").onclick = function() {
    document.querySelector("header").classList.toggle("active");
    document.querySelector(".links").classList.toggle("active");
    document.querySelector("nav").classList.toggle("active");
    document.querySelector(".hamburger").classList.toggle("active");
    this.classList.toggle("is-active"); 
    }

    document.querySelectorAll('.featured').forEach(function(container) {
        container.addEventListener('click', function() {
            // Remove active class from all containers and descriptions
            document.querySelectorAll('.featured').forEach(function(c) {
                c.classList.remove('active');
            });
            document.querySelectorAll('.featured-description').forEach(function(d) {
                d.classList.remove('active');
            });
            document.querySelectorAll('.featured-title').forEach(function(d) {
                d.classList.remove('active');
            });
            // Add active class to the clicked container and its description
            container.classList.toggle('active');
            container.querySelector('.featured-description').classList.toggle('active');
            container.querySelector('.featured-title').classList.toggle('active');
        });
    });
       

    function scrollToContact(targetId) {
        window.location.href = 'about.html#' + targetId;
    }
    function scrollToTarget() {
        var targetElement = document.getElementById('contact');
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
  
    function showThankYou(event) {
        event.preventDefault(); 
        var emailInput = event.target.querySelector('input[type="email"]');
        if (emailInput.value.trim() === '') {
            alert('Please enter your email address!');
            return;
        }
        alert('Thank you for subscribing!');
        event.target.reset();
    }
    function contactFormMessage(event) {
        event.preventDefault(); 
        alert('Your message has been sent successfully!');
        event.target.reset();
    }


    /* Itinerary */
    document.querySelector('.saved').addEventListener('click', function() {
        this.classList.toggle('active');
    });

    function changePageContent(city){
        window.location.href = "itinerary.html#" + city;
    }

    function getContentIdFromUrl() {
        const url = window.location.href;
        const hashIndex = url.indexOf("#");
        if (hashIndex !== -1) {
            return url.substring(hashIndex + 1);
        }
        return null;
    }

    function changeContent(contentId) {
        const contentPage = document.getElementById("contentPage");
        if (contentId === "Barcelona") {
            document.title = "Wanderlust: Barcelona Itinerary";
            contentPage.innerHTML = `
            <div class="itinerary">
                <img src="https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="aerial-view-of-Barcelona-buildings-during-daytime">
                <div class="itinerary-details">
                    <div>
                        <h4>3 Days Itinerary for</h4>
                        <h2>Barcelona, <span>Spain</span></h2>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <p>Barcelona, the enchanting capital of Catalonia, Spain, beckons travelers with its captivating blend of history, art, and culinary delights. Nestled along the picturesque Mediterranean coast, this vibrant city boasts a rich cultural heritage, stunning architecture, and a laid-back atmosphere that invites exploration and discovery.</p>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                            <h3>Day 1: Explore the Gothic Quarter</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Barcelona Cathedral - Begin your day with a visit to the magnificent Barcelona Cathedral, known for its Gothic architecture and stunning interior.</li>
                            <li>La Boqueria Market - Explore the bustling market known for its fresh produce, local delicacies, and vibrant atmosphere.</li>
                        </ul>
                    
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Picasso Museum - Discover the works of Pablo Picasso at the Picasso Museum, housed in a medieval palace in the heart of the Gothic Quarter.</li>
                            <li>Lunch at a Tapas Bar - Enjoy traditional Spanish tapas for lunch at a cozy tapas bar in the Gothic Quarter.</li>
                        </ul>
                    
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Walk along La Rambla - Take a leisurely stroll along La Rambla, Barcelona's most famous boulevard, lined with shops, cafes, and street performers.</li>
                            <li>Dinner at Plaça Reial - Dine at one of the restaurants in the picturesque Plaça Reial square, known for its lively atmosphere.</li>
                        </ul>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                            <h3>Day 2: Modernisme and Gaudí Architecture</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Sagrada Família - Start your day with a visit to the iconic Sagrada Família, Antoni Gaudí's masterpiece and a UNESCO World Heritage site.</li>
                            <li>Casa Batlló - Explore the surreal architecture of Casa Batlló, another masterpiece by Gaudí, known for its organic forms and colorful façade.</li>
                        </ul>
                    
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Park Güell - Wander through the whimsical Park Güell, filled with colorful mosaics, quirky sculptures, and panoramic views of Barcelona.</li>
                            <li>Lunch with a View - Enjoy lunch with a view at one of the restaurants overlooking Barcelona from Park Güell.</li>
                        </ul>
                    
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Casa Milà (La Pedrera) - Visit Casa Milà, also known as La Pedrera, another architectural marvel designed by Gaudí, featuring undulating stone façades and rooftop sculptures.</li>
                            <li>Dinner at El Born - Explore the trendy El Born neighborhood and dine at one of its many restaurants offering a mix of traditional and modern Catalan cuisine.</li>
                        </ul>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                            <h3>Day 3: Beach and Cultural Delights</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Barceloneta Beach - Start your day with a relaxing morning at Barceloneta Beach, soaking up the sun and enjoying the Mediterranean Sea.</li>
                            <li>Breakfast at a Beachfront Cafe - Enjoy breakfast with a view at one of the beachfront cafes along the Barceloneta promenade.</li>
                        </ul>
                    
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Barcelona Aquarium - Explore the marine life at Barcelona Aquarium, home to thousands of species from the Mediterranean and around the world.</li>
                            <li>Lunch at Port Vell - Have lunch at one of the waterfront restaurants at Port Vell, Barcelona's historic harbor.</li>
                        </ul>
                    
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Montjuïc Hill - Take a cable car or hike up Montjuïc Hill for panoramic views of Barcelona and explore attractions like Montjuïc Castle and the Magic Fountain.</li>
                            <li>Farewell Dinner at Gothic Quarter - End your trip with a farewell dinner at one of the charming restaurants in the Gothic Quarter, savoring the flavors of Catalan cuisine.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Additional Tips for Visiting Barcelona</h3>
                        <p><strong>Public Transportation:</strong> Use Barcelona's efficient metro system and buses to get around the city.</p>
                        <p><strong>Language:</strong> Learn some basic Spanish or Catalan phrases to enhance your travel experience.</p>
                        <p><strong>Nightlife:</strong> Experience Barcelona's vibrant nightlife with tapas bars, live music venues, and clubs in neighborhoods like El Raval and Gràcia.</p>
                        <p><strong>Shopping:</strong> Explore the shops and boutiques along Passeig de Gràcia and indulge in some retail therapy.</p>
                        <p><strong>Safety:</strong> Barcelona is generally safe, but be mindful of pickpockets in crowded tourist areas and keep your belongings secure.</p>
                    </div>
                </div>
            </div>
        `;
        } else if (contentId === "Tokyo") {
            document.title = "Wanderlust: Tokyo Itinerary";
            contentPage.innerHTML = `
            <div class="itinerary">
                <img src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shibuya crossing and colourful lit buildings">
                <div class="itinerary-details">
                    <div>
                        <h4>3 Days Itinerary for</h4>
                        <h2>Tokyo, <span>Japan</span></h2>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <p>Immerse yourself in the vibrant energy and rich culture of Tokyo, Japan's dynamic capital city, with this comprehensive three-day itinerary that showcases the best of what Tokyo has to offer. From ancient temples to futuristic skyscrapers, Tokyo promises a captivating blend of tradition and innovation that will enchant visitors of all ages.</p>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                            <h3>Day 1: Discover the Heart of Tokyo</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Asakusa Shrine and Sensoji Temple - Begin your day with a visit to Tokyo's oldest temple and the bustling Nakamise shopping street.</li>
                            <li>Sumida River Cruise - Take a scenic cruise along the Sumida River for panoramic views of Tokyo's skyline.</li>
                        </ul>
                    
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Ueno Park - Explore Ueno Park, home to museums, temples, and cherry blossoms in spring.</li>
                            <li>Lunch at Ameya-Yokochō - Enjoy street food and local delicacies at this lively market street.</li>
                        </ul>
                    
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Shibuya Crossing - Experience the iconic Shibuya Crossing, one of the busiest intersections in the world, and explore the vibrant Shibuya district.</li>
                            <li>Dinner in Shinjuku - Indulge in dinner at one of the many restaurants in Shinjuku, known for its bustling nightlife.</li>
                        </ul>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                            <h3>Day 2: Modern Tokyo and Traditional Culture</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Meiji Shrine - Start your day with a serene stroll through Meiji Shrine, surrounded by lush forests in the heart of Tokyo.</li>
                            <li>Harajuku District - Explore the trendy streets of Harajuku, known for its fashion boutiques, quirky cafes, and cosplay culture.</li>
                        </ul>
                    
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Shinjuku Gyoen National Garden - Relax and unwind in the tranquil oasis of Shinjuku Gyoen, with its landscaped gardens and scenic ponds.</li>
                            <li>Lunch at a Ramen Shop - Enjoy a steaming bowl of authentic ramen at a local ramen shop.</li>
                        </ul>
                    
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Robot Restaurant Show - Experience the futuristic spectacle of the Robot Restaurant Show in Shinjuku, featuring neon lights, robots, and dazzling performances.</li>
                            <li>Dinner in Ginza - End your day with a gourmet dinner in Ginza, Tokyo's upscale shopping and dining district.</li>
                        </ul>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                            <h3>Day 3: Cultural Experiences and City Views</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Tsukiji Outer Market - Explore the bustling Tsukiji Outer Market, known for its fresh seafood, sushi stalls, and food vendors.</li>
                            <li>Tokyo Skytree - Visit the Tokyo Skytree, one of the tallest towers in the world, for panoramic views of Tokyo and beyond.</li>
                        </ul>
                    
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Akihabara District - Dive into the world of anime, manga, and electronics in Akihabara, Tokyo's "Electric Town."</li>
                            <li>Lunch at a Themed Cafe - Experience the unique ambiance of a themed cafe, whether it's a maid cafe, cat cafe, or character cafe.</li>
                        </ul>
                    
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Odaiba Island - Spend your evening exploring Odaiba Island, with its futuristic architecture, shopping malls, and entertainment complexes.</li>
                            <li>Dinner with a View - Dine at one of the waterfront restaurants in Odaiba, overlooking Tokyo Bay and the Rainbow Bridge.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Tips for Visiting Tokyo</h3>
                        <p><strong>Public Transportation:</strong> Use Tokyo's efficient subway and train system to get around the city quickly and easily.</p>
                        <p><strong>Language:</strong> Learn some basic Japanese phrases to help navigate Tokyo and interact with locals.</p>
                        <p><strong>Cultural Etiquette:</strong> Respect local customs and traditions, such as bowing and removing shoes before entering certain estabpshments.</p>
                        <p><strong>Shopping:</strong> Explore Tokyo's diverse shopping districts, from luxury boutiques in Ginza to quirky shops in Harajuku.</p>
                        <p><strong>Reservations:</strong> Make reservations in advance for popular attractions, restaurants, and experiences to avoid long waits.</p>
                    </div>
                </div>
            </div>
        `;
        } else if (contentId === "Newyork") {
            document.title = "Wanderlust: Newyork Itinerary";
            contentPage.innerHTML = `
            <div class="itinerary">
                <img src="https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Liberty State Park, Jersey City, United States">
                <div class="itinerary-details">
                    <div>
                        <h4>3 Days Itinerary for</h4>
                        <h2>New York, <span>United States</span></h2>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <p>Experience the dynamic energy and cultural richness of New York City with this meticulously crafted three-day itinerary, meticulously designed to immerse you in the diverse tapestry of Manhattan, Brooklyn, and beyond.</p>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                            <h3>Day 1: Discover Manhattan</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Central Park - Start your day with a leisurely stroll or bike ride through Central Park, enjoying the scenic views and iconic landmarks.</li>
                            <li>American Museum of Natural History - Explore the exhibits and collections of the American Museum of Natural History, featuring dinosaurs, fossils, and cultural artifacts.</li>
                        </ul>
                    
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>The Metropolitan Museum of Art - Visit the Metropolitan Museum of Art, one of the world's largest and most prestigious art museums, showcasing masterpieces from around the globe.</li>
                            <li>Lunch at The Halal Guys - Enjoy a delicious meal at The Halal Guys, famous for their gyro platters and chicken over rice.</li>
                        </ul>
                    
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Times Square - Experience the dazzling lights and energy of Times Square, with its theaters, shops, and entertainment venues.</li>
                            <li>Dinner at Joe's Pizza - Grab a slice of authentic New York-style pizza at Joe's Pizza, a beloved local institution.</li>
                        </ul>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                            <h3>Day 2: Explore Brooklyn and Beyond</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Brooklyn Bridge - Walk or bike across the Brooklyn Bridge for panoramic views of the Manhattan skyline and Brooklyn waterfront.</li>
                            <li>Brooklyn Botanic Garden - Wander through the beautiful gardens and greenhouses of the Brooklyn Botanic Garden, featuring a diverse collection of plants from around the world.</li>
                        </ul>
                    
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Brooklyn Museum - Explore the galleries and exhibits of the Brooklyn Museum, showcasing art and artifacts spanning diverse cultures and time periods.</li>
                            <li>Lunch at Smorgasburg - Indulge in a variety of delicious food options at Smorgasburg, Brooklyn's renowned outdoor food market.</li>
                        </ul>
                    
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>DUMBO - Spend your evening in DUMBO (Down Under the Manhattan Bridge Overpass), known for its cobblestone streets, art galleries, and scenic waterfront views.</li>
                            <li>Dinner at Grimaldi's Pizzeria - Enjoy coal-fired brick oven pizza at Grimaldi's Pizzeria, with views of the Brooklyn Bridge and Manhattan skyline.</li>
                        </ul>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                            <h3>Day 3: Cultural Immersion and Shopping</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>The High Line - Walk along the High Line, a unique elevated park built on a former railway track, offering green spaces, art installations, and skyline views.</li>
                            <li>Chelsea Market - Explore Chelsea Market, a historic indoor food hall and shopping arcade, with a wide range of vendors and eateries.</li>
                        </ul>
                    
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Empire State Building - Visit the Empire State Building, an iconic skyscraper offering breathtaking views of New York City from its observation deck.</li>
                            <li>Lunch at Katz's Delicatessen - Enjoy classic deli sandwiches and Jewish specialties at Katz's Delicatessen, a New York institution since 1888.</li>
                        </ul>
                    
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Broadway Show - Experience the magic of Broadway with a live theater performance, showcasing world-class productions and talented performers.</li>
                            <li>Dinner in Little Italy - End your day with a delicious Italian meal in Little Italy, known for its authentic restaurants and festive atmosphere.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Tips for Visiting New York</h3>
                        <p><strong>Transportation:</strong> Use the subway system to navigate the city quickly and affordably.</p>
                        <p><strong>Walking:</strong> Wear comfortable shoes for exploring the city on foot, especially in neighborhoods like Manhattan and Brooklyn.</p>
                        <p><strong>Attraction Tickets:</strong> Purchase tickets in advance for popular attractions to skip the lines and save time.</p>
                        <p><strong>Food:</strong> Sample a variety of cuisines from around the world at New York's diverse restaurants, food markets, and street vendors.</p>
                        <p><strong>Safety:</strong> Be aware of your surroundings and avoid crowded or unfamiliar areas, especially at night.</p>
                    </div>
                </div>
            </div>
        `;
        } else if (contentId === "Sydney") {
            document.title = "Wanderlust: Sydney Itinerary";
            contentPage.innerHTML = `
            <div class="itinerary">
                <img src="https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="opera-house-sydney-australia-">
                <div class="itinerary-details">
                    <div>
                        <h4>3 Days Itinerary for</h4>
                        <h2>Sydney, <span>Australia</span></h2>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <p>Escape to the captivating city of Sydney, where stunning landscapes, iconic landmarks, and vibrant culture converge to create an unforgettable travel experience. Embark on a three-day journey that will immerse you in the best that Sydney has to offer, from the architectural marvels of the city center to the pristine beaches and natural wonders along the coast.</p>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                            <h3>Day 1: Explore the City</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Sydney Opera House - Start your day with a guided tour of this architectural masterpiece and iconic symbol of Sydney.</li>
                            <li>The Rocks - Explore Sydney's historic district with its cobblestone streets, heritage buildings, and lively markets.</li>
                        </ul>
                    
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Sydney Harbour Bridge Climb - Experience breathtaking views of Sydney Harbour and the city skyline from the top of the Sydney Harbour Bridge.</li>
                            <li>Lunch at Circular Quay - Enjoy a meal at one of the waterfront restaurants overlooking Sydney Harbour.</li>
                        </ul>
                    
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Dinner at Darling Harbour - Dine at one of the many waterfront restaurants at Darling Harbour and enjoy the vibrant atmosphere.</li>
                            <li>Twilight Cruise - Take a sunset cruise around Sydney Harbour to see the city lights come to life.</li>
                        </ul>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                            <h3>Day 2: Coastal Beauty</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Bondi to Coogee Coastal Walk - Embark on this scenic coastal walk, passing by beautiful beaches, cliffs, and parks.</li>
                            <li>Brunch at Bondi Beach - Stop for brunch at one of the trendy cafes overlooking Bondi Beach.</li>
                        </ul>
                    
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Explore Bondi Beach - Spend the afternoon surfing, swimming, or simply relaxing on the iconic sands of Bondi Beach.</li>
                            <li>Coogee Pavilion - Head to Coogee Pavilion for drinks and snacks with stunning ocean views.</li>
                        </ul>
                    
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Dinner at The Rocks - Enjoy dinner at one of the charming restaurants in The Rocks, offering a mix of international and Australian cuisine.</li>
                            <li>Bar Hopping in Surry Hills - Experience Sydney's vibrant nightlife with a bar-hopping tour in the trendy Surry Hills neighborhood.</li>
                        </ul>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                            <h3>Day 3: Nature and Wildlife</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Taronga Zoo - Spend the morning at Taronga Zoo, home to a diverse range of animals from around the world.</li>
                            <li>Ferry to Taronga - Take a scenic ferry ride from Circular Quay to Taronga Zoo, enjoying panoramic views of Sydney Harbour along the way.</li>
                        </ul>
                    
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Sydney Harbour National Park - Explore the stunning coastal scenery and walking trails of Sydney Harbour National Park.</li>
                            <li>Picnic at Nielsen Park - Enjoy a picnic lunch at Nielsen Park, a picturesque beach with shaded picnic areas and calm waters for swimming.</li>
                        </ul>
                    
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Dinner at Barangaroo - Dine at one of the waterfront restaurants in Barangaroo and enjoy panoramic views of Darling Harbour.</li>
                            <li>Sydney Observatory - Conclude your trip with stargazing and panoramic views of Sydney's skyline at the Sydney Observatory.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Additional Tips for Visiting Sydney</h3>
                        <p><strong>Public Transportation:</strong> Use Sydney's efficient public transportation system, including trains, buses, ferries, and light rail.</p>
                        <p><strong>Beach Safety:</strong> Swim between the flags at patrolled beaches and follow water safety guidelines to ensure a safe beach experience.</p>
                        <p><strong>Outdoor Activities:</strong> Take advantage of Sydney's outdoor lifestyle with activities like surfing, kayaking, and coastal walks.</p>
                        <p><strong>Local Cuisine:</strong> Try iconic Australian dishes like meat pies, fish and chips, and Tim Tams, as well as international cuisines influenced by Sydney's multicultural population.</p>
                        <p><strong>Weather:</strong> Pack sunscreen, a hat, and sunglasses for protection against the sun, and a light jacket for cooler evenings.</p>
                    </div>
                </div>
            </div>
        `;
        } else if (contentId === "Seoul") {
            contentPage.innerHTML = contentPage.innerHTML = `
            <div class="itinerary">
                <img src="https://images.unsplash.com/photo-1583833008338-31a6657917ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Seoul, South Korea">
                <div class="itinerary-details">
                    <div>
                        <h4>3 Days Itinerary for</h4>
                        <h2>Seoul, <span>South Korea</span></h2>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <p>Seoul, the bustling capital of South Korea, is a city that seamlessly blends the old with the new, offering visitors a fascinating glimpse into both its rich history and its vibrant modern culture. As you embark on a journey through Seoul, you'll find yourself immersed in a dynamic metropolis where towering skyscrapers stand side by side with ancient temples, and where traditional tea houses coexist with bustling street markets.</p>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                            <h3>Day 1: Historic Sites and Traditional Culture</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Gyeongbokgung Palace - Explore one of Seoul's most iconic landmarks, the main royal palace of the Joseon dynasty.</li>
                            <li>Bukchon Hanok Village - Wander through this traditional Korean village with beautifully preserved hanok houses.</li>
                        </ul>
                    
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Insa-dong - Discover traditional Korean culture at this lively neighborhood known for its antique shops, art galleries, and street food.</li>
                            <li>Samcheong-dong - Enjoy a leisurely stroll along this charming street lined with trendy boutiques, cafes, and art galleries.</li>
                        </ul>
                    
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Dinner at a Hanok Restaurant - Experience traditional Korean cuisine in a historic hanok setting.</li>
                            <li>N Seoul Tower - End the day with panoramic views of Seoul from the observation deck of N Seoul Tower.</li>
                        </ul>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                            <h3>Day 2: Modern City Life and Shopping</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Myeongdong - Dive into the bustling shopping district of Myeongdong, known for its cosmetics shops, street food stalls, and fashion boutiques.</li>
                            <li>Namsan Hanok Village - Explore this recreated traditional Korean village located at the base of Namsan Mountain.</li>
                        </ul>
                    
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Dongdaemun Design Plaza (DDP) - Visit this iconic landmark and cultural hub featuring exhibitions, shops, and futuristic architecture.</li>
                            <li>Cheonggyecheon Stream - Take a relaxing walk along this urban stream, lined with trees, bridges, and artworks.</li>
                        </ul>
                    
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Dinner at a Korean BBQ Restaurant - Enjoy a delicious meal of grilled meat at one of Seoul's many BBQ restaurants.</li>
                            <li>Hongdae - Experience Seoul's youthful energy in the vibrant neighborhood of Hongdae, known for its street performances, live music, and nightlife.</li>
                        </ul>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                            <h3>Day 3: Cultural Experiences and Outdoor Activities</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Changdeokgung Palace and Secret Garden - Explore the UNESCO-listed palace and its serene garden, a peaceful oasis in the heart of the city.</li>
                            <li>Insadong Ssamziegil - Discover unique shops and artisanal crafts at this cultural complex in Insadong.</li>
                        </ul>
                    
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Han River Park - Enjoy outdoor activities like cycling, picnicking, or taking a cruise along the Han River.</li>
                            <li>Seoul Forest - Explore this urban park with walking trails, gardens, and a deer enclosure.</li>
                        </ul>
                    
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Dinner at a Han River Floating Restaurant - Experience dining on the river with scenic views of Seoul's skyline.</li>
                            <li>Gangnam District - Discover the upscale shopping and entertainment district made famous by Psy's "Gangnam Style" song.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Additional Tips for Visiting Seoul</h3>
                        <p><strong>Public Transportation:</strong> Use Seoul's efficient subway system and buses to navigate the city.</p>
                        <p><strong>Korean Language:</strong> Learn some basic Korean phrases to enhance your travel experience.</p>
                        <p><strong>Street Food:</strong> Don't miss trying delicious Korean street food at local markets like Gwangjang Market and Namdaemun Market.</p>
                        <p><strong>Traditional Tea Houses:</strong> Relax and unwind at one of Seoul's traditional tea houses, perfect for a break from sightseeing.</p>
                        <p><strong>Night Views:</strong> Capture stunning night views of Seoul from spots like Namsan Mountain and Lotte World Tower.</p>
                    </div>
                </div>
            </div>
            `;
        } else if (contentId === "Amsterdam") {
            document.title = "Wanderlust: Amsterdam Itinerary";
            contentPage.innerHTML = `
            <div class="itinerary">
                <img src="https://images.unsplash.com/photo-1586172992865-4dfff50bd23a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tulips near-city-buildings-during-daytime">
                <div class="itinerary-details">
                    <div>
                        <h4>3 Days Itinerary for</h4>
                        <h2>Amsterdam,<span> Netherlands</span></h2>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <p>Amsterdam's picturesque canals are a defining feature of the city. There are over 100 kilometers of canals, about 90 islands, and 1,500 bridges, earning it the nickname "Venice of the North." The canal belt, a UNESCO World Heritage site, is lined with historic buildings, houseboats, and charming cafes. The architecture reflects the city's rich history, with tall, narrow houses that often lean forward, a unique solution to avoid property taxes based on the width of the house.</p>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                        <h3>Day 1: Historic and Cultural Highlights</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Breakfast at Pancakes Amsterdam - Start your day with a delicious Dutch pancake breakfast at this popular spot.</li>
                            <li>Anne Frank House - Visit the Anne Frank House to learn about the history of Anne Frank and her family during WWII. Book tickets in advance to avoid long queues.</li>
                        </ul>
                
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Canal Cruise - Take a scenic boat tour through Amsterdam's iconic canals to get a unique perspective of the city.</li>
                            <li>Lunch at De Kas - Enjoy a farm-to-table dining experience in a beautiful greenhouse setting.</li>
                            <li>Rijksmuseum - Explore the Rijksmuseum, home to a vast collection of Dutch art and history, including works by Rembrandt and Vermeer.</li>
                        </ul>
                
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Dinner at Moeders - Savor traditional Dutch cuisine at this cozy restaurant.</li>
                            <li>Stroll through Jordaan - Wander the charming streets of the Jordaan neighborhood, filled with boutique shops, cafes, and art galleries.</li>
                        </ul>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                        <h3>Day 2: Art, Parks, and Local Markets</h3>
                        </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Breakfast at Bakkerij Wolf - Grab a coffee and a pastry at this artisan bakery.</li>
                            <li>Van Gogh Museum - Visit the Van Gogh Museum to see the world's largest collection of works by Vincent van Gogh.</li>
                        </ul>
                
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Vondelpark - Take a leisurely walk or rent a bike to explore Amsterdam's largest park. Enjoy a picnic or relax by the ponds.</li>
                            <li>Lunch at Foodhallen - Head to this trendy indoor food market to sample a variety of international and local dishes.</li>
                            <li>Albert Cuyp Market - Explore this bustling street market, perfect for shopping for souvenirs, trying local snacks, and experiencing the vibrant atmosphere.</li>
                        </ul>
                
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Dinner at De Plantage - Dine in this elegant restaurant located in a beautiful botanical garden.</li>
                            <li>Concert at Concertgebouw - Check the schedule and enjoy a classical music concert in this world-renowned concert hall.</li>
                        </ul>
                    </div>
                    <div class="itinerary-day">
                        <div class="day-line">
                        <h3>Day 3: Modern Amsterdam and Unique Experiences</h3>
                </div>
                        <p><strong>Morning:</strong></p>
                        <ul>
                            <li>Breakfast at The Avocado Show - Indulge in avocado-inspired dishes at this trendy café.</li>
                            <li>Heineken Experience - Take an interactive tour of the historic Heineken brewery, including tastings and a behind-the-scenes look at the brewing process.</li>
                        </ul>
                
                        <p><strong>Afternoon:</strong></p>
                        <ul>
                            <li>Lunch at Cafe de Jaren - Enjoy a meal with a view at this riverside café.</li>
                            <li>NEMO Science Museum - Visit this family-friendly science museum with interactive exhibits and rooftop views of the city.</li>
                        </ul>
                
                        <p><strong>Evening:</strong></p>
                        <ul>
                            <li>Dinner at Restaurant Breda - Experience modern Dutch cuisine at this chic eatery.</li>
                            <li>Red Light District Tour - Take a guided tour to learn about the history and culture of Amsterdam's famous Red Light District.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Optional Nightlife:</h3>
                        <p> Visit a Brown Café - End your night at a traditional Dutch brown café, such as Café Chris, for a cozy and authentic local experience.</p>
                    </div>
                    <div>
                        <h3> Additional Tips for Visiting Amsterdam</h3>
                        <p><strong>Public Transport:</strong> Get an OV-chipkaart for easy travel on trams, buses, and metros.</p>
                        <p><strong>Biking:</strong> Rent a bike to explore the city like a local, but be mindful of the bike lanes and traffic rules.</p>
                        <p><strong>Weather:</strong> Pack layers and a raincoat, as the weather can be unpredictable.</p>
                        <p><strong>Language:</strong> While Dutch is the official language, most people speak excellent English.</p>
                        <p><strong>Safety:</strong> Amsterdam is generally safe, but keep an eye on your belongings, especially in crowded areas.</p>
                        <p><strong>Booking in Advance:</strong> Pre-book tickets for popular attractions like the Anne Frank House and the Van Gogh Museum to avoid long waits.</p>
                     </div>
                </div>
            </div>
            `;
        } else {
            contentPage.innerHTML = "Content not found";
        }
    }

    window.onload = function() {
        const contentId = getContentIdFromUrl();
        if (contentId) {
            changeContent(contentId);
        }
    };