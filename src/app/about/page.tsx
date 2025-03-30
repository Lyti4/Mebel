import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import MainLayout from '@/components/layout/MainLayout';

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-zinc-900 text-white py-32">
        <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-zinc-900 to-zinc-800">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mixBlendMode: 'overlay'
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Crafting premium furniture for over 25 years, combining traditional craftsmanship with modern design.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our History</h2>
              <p className="text-zinc-600 mb-4">
                LuxaWood was founded in 1997 by master craftsman Michael Thornton with a simple mission: to create furniture that lasts a lifetime. What started as a small workshop with three artisans has grown into a respected furniture design and manufacturing company with over 50 skilled employees.
              </p>
              <p className="text-zinc-600 mb-4">
                In our early years, we specialized in custom wooden dining tables and bedroom furniture for local clients. As our reputation for quality and attention to detail grew, so did our product range and customer base. By 2005, we had expanded our workshop and begun shipping nationwide.
              </p>
              <p className="text-zinc-600">
                The turning point came in 2010 when we collaborated with renowned interior designers to create exclusive collections that combined our traditional craftsmanship with contemporary design sensibilities. Today, LuxaWood is known for our blend of timeless quality and modern aesthetics, serving both residential clients and commercial spaces across the country.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1507419257258-e23ac4540878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-zinc-600 max-w-3xl mx-auto">
              We believe that furniture is more than just functional objects—they're the backdrop to your life's most important moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="h-12 w-12 bg-zinc-900 text-white rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                  <path d="M21 12a9 9 0 0 0-9-9v9h9z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Craftsmanship</h3>
              <p className="text-zinc-600">
                We are committed to exceptional craftsmanship, using time-tested techniques and premium materials to create furniture that will last for generations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="h-12 w-12 bg-zinc-900 text-white rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Practices</h3>
              <p className="text-zinc-600">
                We are committed to environmental responsibility, using sustainably sourced wood, eco-friendly finishes, and minimizing waste in our production processes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="h-12 w-12 bg-zinc-900 text-white rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Exceptional Service</h3>
              <p className="text-zinc-600">
                We believe in building relationships, not just furniture. Our dedicated team provides personalized service from design consultation to delivery and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-zinc-600 max-w-3xl mx-auto">
              Our talented team of designers, craftsmen, and specialists bring together decades of experience in furniture making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Michael Thornton',
                role: 'Founder & Head Designer',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
                bio: 'With over 30 years of experience in furniture craftsmanship, Michael founded LuxaWood with a vision to create enduring pieces that blend traditional techniques with modern design.'
              },
              {
                name: 'Sarah Chen',
                role: 'Lead Interior Designer',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
                bio: 'Sarah brings 15 years of interior design experience to LuxaWood. Her keen eye for aesthetics and functionality helps clients find the perfect furniture solutions for their spaces.'
              },
              {
                name: 'David Rodriguez',
                role: 'Master Craftsman',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
                bio: 'David has been with LuxaWood for 18 years, specializing in intricate woodworking techniques. His attention to detail ensures each piece meets our exacting quality standards.'
              },
              {
                name: 'Emily Taylor',
                role: 'Sustainability Director',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
                bio: 'Emily oversees our sustainability initiatives, ensuring we source materials responsibly and implement eco-friendly practices throughout our production process.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border">
                <div className="aspect-square relative">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url('${member.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-zinc-500 text-sm mb-3">{member.role}</p>
                  <p className="text-zinc-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-zinc-600 max-w-3xl mx-auto">
              We follow a meticulous process from design to delivery to ensure each piece meets our high standards.
            </p>
          </div>

          <div className="relative">
            {/* Process timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 -translate-x-1/2"></div>

            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-zinc-900 -translate-x-1/2"></div>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-16 md:text-right mb-8 md:mb-0">
                    <Badge className="mb-2">Step 1</Badge>
                    <h3 className="text-xl font-semibold mb-3">Design Consultation</h3>
                    <p className="text-zinc-600">
                      Our process begins with understanding your needs, preferences, and space. We offer personalized consultations where our designers work with you to conceptualize furniture that perfectly fits your vision.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-16">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-zinc-900 -translate-x-1/2"></div>
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="md:w-1/2 md:pl-16 md:text-left mb-8 md:mb-0">
                    <Badge className="mb-2">Step 2</Badge>
                    <h3 className="text-xl font-semibold mb-3">Material Selection</h3>
                    <p className="text-zinc-600">
                      We carefully select premium, sustainably sourced materials that meet our quality standards. You can choose from various wood types, finishes, and fabrics to customize your piece to your exact specifications.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pr-16">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1581430279827-5748a34d9f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-zinc-900 -translate-x-1/2"></div>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-16 md:text-right mb-8 md:mb-0">
                    <Badge className="mb-2">Step 3</Badge>
                    <h3 className="text-xl font-semibold mb-3">Crafting & Production</h3>
                    <p className="text-zinc-600">
                      Our skilled craftsmen bring designs to life using both traditional techniques and modern technology. Each piece is handcrafted with meticulous attention to detail in our workshop, ensuring exceptional quality.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-16">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1611325606557-1b447a3e8af4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-zinc-900 -translate-x-1/2"></div>
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="md:w-1/2 md:pl-16 md:text-left">
                    <Badge className="mb-2">Step 4</Badge>
                    <h3 className="text-xl font-semibold mb-3">Delivery & Installation</h3>
                    <p className="text-zinc-600">
                      Once your furniture is completed and passes our quality inspection, our white-glove delivery service ensures it arrives safely at your home. We handle installation and placement, making sure you're completely satisfied with your new pieces.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pr-16">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1620570723936-1e415a251e25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section id="showroom" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Visit Our Showroom</h2>
              <p className="text-zinc-600 mb-4">
                Experience our furniture in person at our New York showroom. Our 5,000 square foot space showcases our complete collection, allowing you to see and feel the quality craftsmanship that goes into each piece.
              </p>
              <p className="text-zinc-600 mb-4">
                Our design consultants are available to help you explore options, answer questions, and provide expert advice on selecting pieces that will work perfectly in your space.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">123 Furniture Avenue, Design District</p>
                    <p className="text-zinc-500">New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M3 9h18"></path>
                      <path d="M9 21V9"></path>
                      <path d="M15 21V9"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-zinc-500">Saturday: 10AM - 4PM | Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-4">
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-zinc-300 max-w-3xl mx-auto">
              We take pride in the relationships we build with our clients and the furniture we create for them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The custom dining table from LuxaWood is the centerpiece of our home. The craftsmanship is exceptional, and it's clear that every detail was carefully considered.",
                author: "Sarah Johnson",
                role: "Homeowner"
              },
              {
                quote: "We commissioned LuxaWood to furnish our entire office space, and we couldn't be happier with the results. Their team worked closely with us to understand our needs and delivered beautiful, functional pieces.",
                author: "Michael Chen",
                role: "CEO, Tech Startup"
              },
              {
                quote: "Working with LuxaWood was a pleasure from start to finish. Their design team helped us select pieces that perfectly complement our home, and the quality is outstanding.",
                author: "Emma & David Miller",
                role: "Residential Clients"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600 mb-4">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
                <p className="italic text-zinc-300 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-zinc-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto mb-8">
            Contact us to discuss your project or visit our showroom to experience our furniture in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/catalog">Browse Our Collection</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
