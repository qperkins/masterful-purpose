import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ShoppingCart, Heart, Star } from "lucide-react"

export default function ShopPage() {
  // Placeholder products - replace with actual products
  const products = [
    {
      id: 1,
      name: "Masterful Purpose Daily and Goal Action Planner",
      price: "$29.99",
      originalPrice: "$39.99",
      image: "/product-placeholder-1.jpg",
      rating: 5,
      reviews: 24,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "The Seven Keys to S.U.C.C.E.S.S. Workbook",
      price: "$19.99",
      originalPrice: null,
      image: "/product-placeholder-2.jpg",
      rating: 5,
      reviews: 18,
      badge: "New"
    },
    {
      id: 3,
      name: "Narrative Medicine Poetry Collection",
      price: "$24.99",
      originalPrice: null,
      image: "/product-placeholder-3.jpg",
      rating: 4,
      reviews: 12,
      badge: null
    },
    {
      id: 4,
      name: "Wake Up On Purpose - Morning Routine Guide",
      price: "$17.99",
      originalPrice: "$24.99",
      image: "/product-placeholder-4.jpg",
      rating: 5,
      reviews: 31,
      badge: "Popular"
    },
    {
      id: 5,
      name: "Goal Achievement Masterclass - Digital Course",
      price: "$149.99",
      originalPrice: "$199.99",
      image: "/product-placeholder-5.jpg",
      rating: 5,
      reviews: 45,
      badge: "Premium"
    },
    {
      id: 6,
      name: "Transformation Journal Set",
      price: "$34.99",
      originalPrice: null,
      image: "/product-placeholder-6.jpg",
      rating: 4,
      reviews: 8,
      badge: null
    },
    {
      id: 7,
      name: "Inspirational Quote Cards Deck",
      price: "$14.99",
      originalPrice: null,
      image: "/product-placeholder-7.jpg",
      rating: 5,
      reviews: 22,
      badge: null
    },
    {
      id: 8,
      name: "Masterful Purpose Complete Bundle",
      price: "$199.99",
      originalPrice: "$249.99",
      image: "/product-placeholder-8.jpg",
      rating: 5,
      reviews: 15,
      badge: "Best Value"
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-normal text-foreground">
              Shop
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Transform your life with tools, resources, and guides designed to help you achieve your goals and live with purpose
            </p>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters/Sort Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-sm text-foreground/70">Showing {products.length} products</span>
            </div>
            <div className="flex items-center gap-4">
              <select className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <div className="text-center p-4">
                      <p className="text-sm font-medium mb-1">Product Image</p>
                      <p className="text-xs">[Image Placeholder]</p>
                    </div>
                  </div>
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                    <button className="w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Heart size={18} />
                    </button>
                    <button className="w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-primary-foreground transition-colors">
                      <ShoppingCart size={18} />
                    </button>
                  </div>

                  {/* Sale Badge */}
                  {product.originalPrice && (
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                        Sale
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-serif font-normal text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-foreground/60">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4 mt-auto">
                    <span className="text-xl font-semibold text-foreground">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-foreground/50 line-through">{product.originalPrice}</span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors">
              Load More Products
            </button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-6 lg:px-8 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-serif font-normal text-foreground mb-4">
                New Arrivals
              </h2>
              <p className="text-foreground/70 mb-6">
                Discover our latest resources and tools designed to help you on your journey to achieving your goals and living with purpose.
              </p>
              <button className="px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors">
                Shop New Arrivals
              </button>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-serif font-normal text-foreground mb-4">
                Best Sellers
              </h2>
              <p className="text-foreground/70 mb-6">
                Our most popular products, loved by thousands of people on their transformation journey.
              </p>
              <button className="px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors">
                View Best Sellers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <blockquote className="text-2xl md:text-3xl font-serif font-normal text-foreground italic leading-relaxed">
              &quot;I complete my top seven goals every day. My top seven task everyday give me the most results towards my 30-day goal.&quot;
            </blockquote>
            <p className="text-lg text-foreground/70">— Pamela Peté</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

