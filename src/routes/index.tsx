import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Instagram,
  Sparkles,
  Scissors,
  Briefcase,
  Palette,
  Heart,
  BookOpen,
  MapPin,
  MessageCircle,
  Mail,
  Phone,
  ArrowUpRight,
  Flower2,
  Gift,
  Leaf,
  HandHeart,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const LOGO_SRC = "/images/logo/looptie-logo.jpg";
const HERO_SRC = "/images/hero/hero-flowers.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const NAV = [
  { label: "Story", href: "#story" },
  { label: "Our Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const TINTS = ["from-burgundy/40 to-forest", "from-forest to-burgundy/30", "from-burgundy/30 to-forest", "from-forest to-burgundy/20", "from-burgundy/25 to-forest", "from-forest to-burgundy/40"];

const COLLECTIONS: { name: string; label: string; desc: string; tint: string; img: string }[] = [
  { name: "Amigurumi Turtle Family", label: "Amigurumi", desc: "A colourful pod of hand-stitched turtles, each with its own quiet personality." },
  { name: "Ducky Charm", label: "Keychain", desc: "A cheerful yellow duckling knotted onto a soft cotton loop." },
  { name: "Frozen Doll Charm", label: "Amigurumi", desc: "A crocheted princess dressed in lilac, lavender and cream." },
  { name: "Storybook Charm Bunch", label: "Keychain", desc: "A little gathering of characters tied onto a single strap." },
  { name: "Sunflower Bloom Keychain", label: "Keychain", desc: "A pocket-sized sunflower stitched in warm mustard tones." },
  { name: "Charm Cluster", label: "Keychain", desc: "A hand-tied bunch of miniature crochet charms." },
  { name: "Kitty Bow Keychain", label: "Keychain", desc: "A soft white kitten finished with a scarlet bow." },
  { name: "Little Chick", label: "Amigurumi", desc: "A round-cheeked chick perched on cream stripes." },
  { name: "Berry Basket", label: "Handmade Décor", desc: "A tray of tiny crocheted strawberries, packed to gift." },
  { name: "Rose Bouquet, Crimson", label: "Crochet Flowers", desc: "A dozen wool roses arranged for a keepsake vase." },
  { name: "Potted Sunflower", label: "Crochet Flowers", desc: "A single sunflower rising from a woven wool pot." },
  { name: "Frog Pals Tray", label: "Amigurumi", desc: "A parade of little green frog amigurumi, each hand-finished." },
  { name: "White Daisy Bouquet", label: "Crochet Flowers", desc: "A softly-lit gathering of daisies, blossoms and cream leaves." },
  { name: "Garden Rose Bouquet", label: "Crochet Flowers", desc: "Layered roses in dusty pink and cream, tied by hand." },
  { name: "Daisy Scrunchie, Sky", label: "Scrunchies", desc: "A cotton scrunchie sewn with pale-blue crochet daisies." },
  { name: "Flower Rows Display", label: "Crochet Flowers", desc: "A tabletop display of blooms in every seasonal shade." },
  { name: "Lavender Daisy Band", label: "Accessories", desc: "A woven hair band trimmed with a row of purple daisies." },
  { name: "Butterfly Keychain Trio", label: "Keychain", desc: "Ribbon-winged butterflies in scarlet, cream and forest." },
  { name: "Ballet Doll Keychain", label: "Amigurumi", desc: "A pink-dressed dancer with braided hair and tiny slippers." },
  { name: "Piglet Keychain, Blush", label: "Keychain", desc: "A tiny pink pig, palm-sized and hand-embroidered." },
  { name: "Pig Plush", label: "Crochet Toys", desc: "A soft companion pig, weighted just enough to be held." },
  { name: "Chick Duo Keychains", label: "Keychain", desc: "A pair of yellow chicks finished with cherry-red hats." },
  { name: "Fingertip Kitty Charm", label: "Amigurumi", desc: "A cream kitten no bigger than a fingertip." },
  { name: "Peach Bear Charm", label: "Amigurumi", desc: "A round little bear stitched in warm peach tones." },
  { name: "Sunflower Palm Charm", label: "Keychain", desc: "A single sunflower charm that rests in the palm." },
  { name: "Amigurumi Trio", label: "Amigurumi", desc: "Blue, yellow and red character dolls stitched as a matched set." },
  { name: "Duck Family Charms", label: "Keychain", desc: "Three cheerful ducks on hand-braided rope ties." },
  { name: "Yellow Bow Clip", label: "Accessories", desc: "A soft crochet bow in buttery yellow, finished on a clip." },
  { name: "Lavender Bow Hair Piece", label: "Accessories", desc: "A generous lavender bow made for a low ponytail." },
  { name: "Frog Trio Tray", label: "Amigurumi", desc: "Three small frogs arranged on a woven bamboo tray." },
  { name: "Studio Bloom Spread", label: "Crochet Flowers", desc: "An assortment of wool blooms photographed together." },
  { name: "Baby-Blue Pearl Charm", label: "Accessories", desc: "A tiny bell charm strung on a soft pearl chain." },
  { name: "Bluebird Hanging Charm", label: "Amigurumi", desc: "A pale-blue bird tied to a length of natural cotton cord." },
  { name: "Minion Charm", label: "Amigurumi", desc: "A collectible minion in trademark blue and yellow." },
  { name: "Bluebird Pair", label: "Amigurumi", desc: "Two matching bluebirds, palm-sized and softly stuffed." },
  { name: "Bow Trio, Autumn", label: "Accessories", desc: "A trio of bows in navy, blush and warm brown." },
  { name: "Wool Sunflower Stems", label: "Crochet Flowers", desc: "Long-stemmed wool sunflowers, sold as individual stems." },
  { name: "Frog Basket, Wide", label: "Amigurumi", desc: "A wide tray of green frog amigurumi ready to be gifted." },
  { name: "Daisy Basket Bouquet", label: "Crochet Flowers", desc: "A basket bouquet of pink, cream and yellow daisies." },
  { name: "Bluebird, Petite", label: "Amigurumi", desc: "A pocket-sized bluebird finished on a hanging cord." },
  { name: "Kitty Fingertip Charm", label: "Amigurumi", desc: "A tiny fingertip-sized cream kitten with a red bow." },
].map((p, i) => ({ ...p, tint: TINTS[i % TINTS.length], img: `/images/products/product-${String(i + 1).padStart(2, "0")}.jpg` }));

const PAINTINGS: { name: string; label: string; desc: string; tint: string; img: string; category: string }[] = [
  {
    name: "Meadow Whispers",
    label: "Paintings",
    desc: "A textured canvas painting of golden summer wildflowers, set in a natural wood frame.",
    tint: "from-burgundy/40 to-forest",
    img: "/images/gallery/paintings.jpg",
    category: "paintings"
  },
  {
    name: "Forest Echoes",
    label: "Paintings",
    desc: "Acrylic on deep canvas, capturing sunbeams filtering through dense pine treetops.",
    tint: "from-forest to-burgundy/30",
    img: "/images/gallery/paintings.jpg",
    category: "paintings"
  },
  {
    name: "Studio Botanicals",
    label: "Paintings",
    desc: "A watercolor and ink study of pressed flowers and workspace details.",
    tint: "from-burgundy/30 to-forest",
    img: "/images/gallery/paintings.jpg",
    category: "paintings"
  }
];

const getProductCategory = (label: string, name: string): string => {
  if (label === "Amigurumi" || label === "Crochet Toys") return "amigurumi";
  if (label === "Keychain") return "keychains";
  if (label === "Crochet Flowers") return "flowers";
  if (label === "Handmade D\u00e9cor") return "decor";
  if (label === "Scrunchies" || label === "Accessories") {
    const wearables = ["Daisy Scrunchie, Sky", "Lavender Daisy Band", "Yellow Bow Clip", "Lavender Bow Hair Piece", "Bow Trio, Autumn"];
    if (wearables.includes(name)) return "wearables";
    return "accessories";
  }
  const practical = ["Frog Pals Tray", "Frog Trio Tray", "Frog Basket, Wide", "Berry Basket"];
  if (practical.includes(name)) return "practical";
  return "amigurumi";
};

const ALL_PRODUCTS = [
  ...COLLECTIONS.map((p) => ({
    ...p,
    category: getProductCategory(p.label, p.name)
  })),
  ...PAINTINGS
];




const GALLERY = [
  { label: "Studio Moments", tint: "from-burgundy/40 to-forest", tall: true, img: "/images/gallery/studio-moments.jpg" },
  { label: "Work in Progress", tint: "from-forest to-burgundy/30", tall: false, img: "/images/gallery/work-in-progress.jpg" },
  { label: "Crochet Work", tint: "from-burgundy/30 to-forest", tall: false, img: "/images/gallery/crochet-work.jpg" },
  { label: "Paintings", tint: "from-forest to-burgundy/40", tall: true, img: "/images/gallery/paintings.jpg" },
  { label: "Handmade Crafts", tint: "from-burgundy/25 to-forest", tall: false, img: "/images/gallery/handmade-crafts.jpg" },
  { label: "The Atelier", tint: "from-forest to-burgundy/25", tall: false, img: "/images/gallery/atelier.jpg" },
];

const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "amigurumi", label: "Amigurumi and toys" },
  { id: "keychains", label: "Keychains" },
  { id: "flowers", label: "Crochet flowers" },
  { id: "decor", label: "Home décor" },
  { id: "accessories", label: "Accessories" },
  { id: "wearables", label: "Wearables" },
  { id: "practical", label: "Practical & Household Items" },
  { id: "paintings", label: "Paintings" }
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="min-h-screen bg-forest font-sans text-cream">
      {/* Full-bleed hero */}
      <section className="relative min-h-screen overflow-hidden">
        <img src={HERO_SRC} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-forest/60 to-forest" />

        {/* Glass nav */}
        <nav className="relative z-10">
          <div className="mx-auto mt-6 flex h-24 max-w-6xl items-center justify-between rounded-full border border-cream/15 bg-cream/10 py-2 pl-5 pr-6 backdrop-blur-xl">
            <Link to="/" className="flex shrink-0 items-center">
              <img
                src={LOGO_SRC}
                alt="Loop Tie Studio"
                className="h-16 w-auto object-contain rounded-full filter drop-shadow-md"
              />
            </Link>

            <div className="hidden gap-8 text-xs uppercase tracking-widest text-cream/80 md:flex">
              {NAV.map((l) => (
                <a key={l.label} href={l.href} className="hover:text-cream">{l.label}</a>
              ))}
            </div>
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full border border-cream/25 bg-cream/5 px-4 py-2 text-[11px] uppercase tracking-widest text-cream/90 backdrop-blur-xl transition hover:bg-cream/10 md:inline-flex"
            >
              Enquire <ArrowUpRight className="size-3.5" />
            </a>


          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col justify-center px-6 py-12">
          <div className="mb-8 flex flex-col items-center md:items-start gap-4">
            <img
              src={LOGO_SRC}
              alt="Loop Tie Studio Logo"
              className="h-40 w-auto md:h-48 object-contain rounded-[32px] filter drop-shadow-2xl"
            />
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-[11px] uppercase tracking-widest backdrop-blur-xl">
            <Sparkles className="size-3 text-[#F4E0A5]" /> A father-daughter atelier · Est. India
          </div>
          <h1 className="mt-8 max-w-4xl font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
            Handcrafted<br />
            crochet &amp; art,<br />
            <span className="italic text-cream/70">stitched with intention.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-cream/80">
            A father-daughter crochet atelier. Explore our handmade collections and get in touch to commission
            something one-of-a-kind.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#products" className="rounded-full bg-burgundy px-10 py-4 text-sm font-medium uppercase tracking-widest text-cream shadow-2xl shadow-burgundy/40 transition-transform hover:scale-105">
              View Collection
            </a>
            <a href="#contact" className="rounded-full border border-cream/30 bg-cream/5 px-10 py-4 text-sm font-medium uppercase tracking-widest backdrop-blur-xl hover:bg-cream/10">
              Enquire Now
            </a>
          </div>
        </div>

        {/* Floating brand highlight card */}
        <div className="absolute bottom-10 right-28 z-10 hidden rounded-3xl border border-cream/20 bg-cream/10 p-6 backdrop-blur-2xl md:block">
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-3">
              <HandHeart className="size-5 text-[#F4E0A5]" strokeWidth={2} />
              <div className="font-serif text-base leading-tight">100% Handmade<br /><span className="text-xs uppercase tracking-widest text-cream/60">with care</span></div>
            </div>
            <div className="flex items-center gap-3">
              <Leaf className="size-5 text-[#F4E0A5]" strokeWidth={2} />
              <div className="font-serif text-base leading-tight">Proudly Made<br /><span className="text-xs uppercase tracking-widest text-cream/60">in India</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Highlights */}
      <section className="relative border-t border-cream/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: HandHeart, title: "100% Handmade with Care", body: "Every stitch worked by hand, never machine-made." },
              { icon: Heart, title: "Made with Passion", body: "Small-batch pieces created slowly, with intention." },
              { icon: Gift, title: "Perfect for Gifting", body: "Thoughtful, one-of-a-kind creations for people you love." },
              { icon: Leaf, title: "Proudly Handmade in India", body: "Rooted in our home studio, shipped worldwide with care." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="group rounded-3xl border border-cream/15 bg-cream/5 p-6 backdrop-blur-xl transition-transform hover:-translate-y-1">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-cream/20 bg-cream/10">
                  <Icon className="size-5 text-[#F4E0A5]" strokeWidth={2.25} />
                </div>
                <h3 className="mt-5 font-serif text-lg leading-snug">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="relative px-6 py-28 md:py-36">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-burgundy">
            <span className="h-px w-8 bg-burgundy/60" />
            Our Story
          </div>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
            A knot, held loosely — <span className="italic text-cream/70">then pulled just tight enough to hold.</span>
          </h2>

          <div className="mt-14 space-y-7 text-lg leading-relaxed text-cream/80">
            <p className="font-serif text-2xl italic text-cream/90">
              Every loop tie starts the same way: a knot, held loosely, and then pulled just tight enough to hold.
            </p>
            <p>That&apos;s kind of how this studio began.</p>
            <p>
              It started with a hook, a ball of yarn, and a daughter who couldn&apos;t sit still without making
              something with her hands. What began as an after-school hobby — amigurumi toys scattered across
              the living room, scrunchies gifted to every cousin and classmate — slowly became something bigger.
              Not because we planned it, but because she became exceptionally good at it. Soon, people started
              asking, <span className="italic">&ldquo;Can I buy one of these?&rdquo;</span>
            </p>
            <p>That&apos;s where I came in.</p>
            <p>
              I&apos;m the dad. I don&apos;t crochet — I tried, and my &ldquo;amigurumi&rdquo; looked more like
              a lumpy potato than anything with a face. But I understand business. Pricing, sourcing, logistics,
              and everything that transforms a creative hobby into something sustainable. We made a deal:
              she&apos;d help me see the world through a more creative lens, and I&apos;d teach her what it
              takes to build a lasting business.
            </p>

            <div className="my-10 grid gap-6 rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur-xl md:grid-cols-2">
              <p className="text-base text-cream/80">
                She taught me to slow down, appreciate the hours behind every handmade piece, and notice colours
                and textures I would have otherwise overlooked.
              </p>
              <p className="text-base text-cream/80">
                I taught her that discipline isn&apos;t the opposite of creativity — it&apos;s what allows
                creativity to flourish and endure.
              </p>
            </div>

            <p>
              As we grew, we realized countless talented artists shared the same challenge. Painters, sketch
              artists, and makers created beautiful work but often struggled with the business side of things.
            </p>
            <p>Loop Ties Studio gradually evolved into more than a crochet brand.</p>
            <p>
              It became a curated home where independent artists and handmade creators could showcase their
              work and begin transforming passion into profession.
            </p>

            <p className="font-serif text-2xl italic text-cream/90">
              The name &ldquo;Loop Ties&rdquo; felt right almost instantly.
            </p>
            <p>
              A loop tie is a simple knot that quietly holds an entire crochet piece together. It isn&apos;t
              flashy, but without it, nothing works.
            </p>
            <p className="font-serif text-xl text-cream">That&apos;s who we are.</p>
            <p>
              A father and daughter connected by two different strengths — one thread of creativity and one
              thread of discipline — working together to create something meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="relative border-t border-cream/10 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-burgundy">
              <span className="h-px w-8 bg-burgundy/60" />
              About Us
            </div>
            <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
              A father-daughter venture at the <span className="italic text-cream/70">intersection of creativity and commerce.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur-xl transition-transform hover:-translate-y-1">
              <Scissors className="size-6 text-[#F4E0A5]" strokeWidth={2.25} />
              <h3 className="mt-6 font-serif text-2xl">The Creative</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/75">
                My daughter designs and hand-crochets every product in our collection — amigurumi, accessories,
                and home décor. Every stitch is handmade with care, ensuring no two creations are ever exactly
                alike, and that&apos;s what makes each one special.
              </p>
            </div>
            <div className="rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur-xl transition-transform hover:-translate-y-1">
              <Briefcase className="size-6 text-[#F4E0A5]" strokeWidth={2.25} />
              <h3 className="mt-6 font-serif text-2xl">The Operator</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/75">
                Dad manages everything behind the scenes — pricing, sourcing materials, order fulfillment, and
                day-to-day operations — so creativity has a strong business foundation that allows it to thrive
                without compromise.
              </p>
            </div>
            <div className="rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur-xl transition-transform hover:-translate-y-1">
              <Palette className="size-6 text-[#F4E0A5]" strokeWidth={2.25} />
              <h3 className="mt-6 font-serif text-2xl">Growing Beyond Crochet</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/75">
                We&apos;re building a curated platform for talented independent creators and makers who share
                the same dream we once had — to transform creativity into a sustainable livelihood. Every
                collaborator is carefully selected for the same passion, authenticity, and attention to detail
                that define our own creations.
              </p>
            </div>
          </div>

          <div className="mt-24">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-burgundy">
              <span className="h-px w-8 bg-burgundy/60" />
              What We Believe
            </div>
            <h3 className="mt-6 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
              Three principles that thread through <span className="italic text-cream/70">everything we make.</span>
            </h3>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { icon: Heart, title: "Handmade Should Feel Handmade", body: "We're not interested in mass production or perfect uniformity. The small imperfections found in handmade creations are what make every piece unique and personal." },
                { icon: Sparkles, title: "Creativity and Discipline Work Together", body: "Creativity brings ideas to life. Discipline ensures those ideas continue to grow and flourish for years to come." },
                { icon: BookOpen, title: "Every Piece Has a Story", body: "Behind every handmade product is a passionate creator. When you admire a piece, you're also honouring the journey, dedication, and craftsmanship of the person who made it." },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="group relative overflow-hidden rounded-3xl border border-cream/15 bg-forest p-8 transition-all hover:border-burgundy/40">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-burgundy/10 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-cream/20 bg-cream/10">
                      <Icon className="size-5 text-[#F4E0A5]" strokeWidth={2.25} />
                    </div>
                    <h4 className="mt-6 font-serif text-xl leading-snug">{title}</h4>
                    <p className="mt-4 text-sm leading-relaxed text-cream/70">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 overflow-hidden rounded-[2rem] border border-cream/15 bg-gradient-to-br from-burgundy/25 via-forest to-forest p-10 md:p-16">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-[#F4E0A5] font-semibold">
              <MapPin className="size-4 text-[#F4E0A5]" strokeWidth={2.5} />
              The Studio
            </div>
            <p className="mt-6 max-w-3xl font-serif text-3xl leading-snug md:text-4xl">
              Currently based in India, proudly shipping handcrafted creations made with care to homes looking
              for something more meaningful than ordinary mass-produced products.
            </p>
            <p className="mt-10 font-serif text-2xl italic text-cream/80">
              Welcome to the Studio. We&apos;re truly glad you&apos;re here.
            </p>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section id="products" className="relative border-t border-cream/10 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-[#F4E0A5] font-semibold">
                <span className="h-px w-8 bg-[#F4E0A5]/60" />
                Our Products
              </div>
              <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
                A portfolio of pieces, <span className="italic text-cream/70">not a storefront.</span>
              </h2>
              <p className="mt-6 text-cream/70">
                Browse our handmade crochet collections and canvas paintings. For availability, commissions, or a custom order,
                message us on WhatsApp or Instagram.
              </p>
            </div>
            <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/25 bg-cream/5 px-6 py-3 text-[11px] uppercase tracking-widest backdrop-blur-xl hover:bg-cream/10">
              Enquire Now <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          {/* Category Tabs Menu */}
          <div className="mt-12 flex flex-col gap-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-cream/50 font-medium md:text-center">
              Filter by Category
            </div>
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none snap-x md:flex-wrap md:justify-center">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setCurrentPage(1);
                    }}
                    className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? "bg-burgundy text-cream shadow-lg shadow-burgundy/30"
                        : "bg-cream/5 border border-cream/10 text-cream/80 hover:bg-cream/10"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Paginated Product Grid */}
          {(() => {
            const filtered = ALL_PRODUCTS.filter((p) => {
              if (selectedCategory === "all") return true;
              return p.category === selectedCategory;
            });

            const ITEMS_PER_PAGE = 8;
            const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
            const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
            const paginated = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

            if (filtered.length === 0) {
              return (
                <div className="mt-16 text-center py-12 rounded-3xl border border-cream/10 bg-cream/5">
                  <p className="text-cream/60 italic">No products found in this category.</p>
                </div>
              );
            }

            return (
              <>
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {paginated.map((c) => (
                    <div key={c.name} className="group relative overflow-hidden rounded-3xl border border-cream/15 bg-cream/5 transition-transform duration-500 hover:-translate-y-1">
                      <div className={`relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br ${c.tint}`}>
                        <img
                          src={c.img}
                          alt={c.name}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/25 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(128,0,32,0.35),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="absolute left-5 top-5 rounded-full border border-cream/25 bg-forest/50 px-3 py-1 text-[10px] uppercase tracking-widest text-cream/85 backdrop-blur">
                          {c.label}
                        </div>
                        <Flower2 className="absolute bottom-5 right-5 size-8 text-cream/60 transition-transform duration-500 group-hover:rotate-12" strokeWidth={1.25} />
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl leading-snug">{c.name}</h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-cream/70">{c.desc}</p>
                        <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#F4E0A5] transition group-hover:gap-2.5 font-semibold">
                          View Details <ArrowUpRight className="size-3.5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="mt-16 flex items-center justify-center gap-4 border-t border-cream/10 pt-8">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-cream/15 bg-cream/5 text-cream transition hover:bg-cream/10 disabled:opacity-30 disabled:hover:bg-cream/5 cursor-pointer"
                      aria-label="Previous Page"
                    >
                      <ChevronLeft className="size-5" />
                    </button>
                    <span className="text-xs uppercase tracking-widest text-cream/60">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-cream/15 bg-cream/5 text-cream transition hover:bg-cream/10 disabled:opacity-30 disabled:hover:bg-cream/5 cursor-pointer"
                      aria-label="Next Page"
                    >
                      <ChevronRight className="size-5" />
                    </button>
                  </div>
                )}
              </>
            );
          })()}
        </div>
      </section>


      {/* Gallery */}
      <section id="gallery" className="relative border-t border-cream/10 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-burgundy">
              <span className="h-px w-8 bg-burgundy/60" />
              Gallery
            </div>
            <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Moments from the atelier &mdash; <span className="italic text-cream/70">in progress, and at rest.</span>
            </h2>
          </div>

          <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {GALLERY.map((g, i) => (
              <figure
                key={g.label + i}
                className={`group relative overflow-hidden rounded-3xl border border-cream/15 bg-gradient-to-br ${g.tint} ${g.tall ? "row-span-2" : ""}`}
              >
                <img
                  src={g.img}
                  alt={g.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-forest/0 transition-colors duration-500 group-hover:bg-forest/30" />
                <Camera className="absolute right-5 top-5 size-5 text-cream/50 opacity-0 transition-opacity group-hover:opacity-100" strokeWidth={1.5} />
                <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                  <span className="rounded-full border border-cream/25 bg-forest/40 px-3 py-1 text-[10px] uppercase tracking-widest text-cream/85 backdrop-blur">
                    {g.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="relative border-t border-cream/10 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-burgundy">
              <span className="h-px w-8 bg-burgundy/60" />
              Get in Touch
            </div>
            <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Enquiries, collaborations, <span className="italic text-cream/70">and custom orders.</span>
            </h2>
            <p className="mt-6 text-cream/70">
              For a piece from our collection, a commission, or a collaboration &mdash; message us
              directly. We reply personally.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <a href="https://wa.me/917842361772" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-burgundy/40">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-cream/20 bg-cream/10">
                <MessageCircle className="size-5 text-[#F4E0A5]" strokeWidth={2.25} />
              </div>
              <h3 className="mt-6 font-serif text-2xl">WhatsApp</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                The fastest way to reach the studio. Send us a note, a reference, or a question.
              </p>
              <div className="mt-6 flex min-w-0 items-center gap-2 text-sm font-medium tracking-wide text-cream transition-colors duration-300 group-hover:text-burgundy">
                <span className="min-w-0 break-words border-b border-burgundy/0 pb-0.5 transition-colors duration-300 group-hover:border-burgundy">
                  +91 78423 61772
                </span>
                <ArrowUpRight className="size-4 shrink-0" />
              </div>
            </a>
            <a href="tel:+917842361772" className="group relative overflow-hidden rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-burgundy/40">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-cream/20 bg-cream/10">
                <Phone className="size-5 text-[#F4E0A5]" strokeWidth={2.25} />
              </div>
              <h3 className="mt-6 font-serif text-2xl">Phone</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                Prefer to talk? Give us a call &mdash; we&apos;re happy to help with commissions and orders.
              </p>
              <div className="mt-6 flex min-w-0 items-center gap-2 text-sm font-medium tracking-wide text-cream transition-colors duration-300 group-hover:text-burgundy">
                <span className="min-w-0 break-words border-b border-burgundy/0 pb-0.5 transition-colors duration-300 group-hover:border-burgundy">
                  +91 78423 61772
                </span>
                <ArrowUpRight className="size-4 shrink-0" />
              </div>
            </a>
            <a href="https://www.instagram.com/looptiestudio?igsh=MTU5NzZkOWQ2bm94ZA==" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-burgundy/40">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-cream/20 bg-cream/10">
                <Instagram className="size-5 text-[#F4E0A5]" strokeWidth={2.25} />
              </div>
              <h3 className="mt-6 font-serif text-2xl">Instagram</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                See work in progress, new drops, and quiet moments from the atelier.
              </p>
              <div className="mt-6 flex min-w-0 items-center gap-2 text-sm font-medium tracking-wide text-cream transition-colors duration-300 group-hover:text-burgundy">
                <span className="min-w-0 break-words border-b border-burgundy/0 pb-0.5 transition-colors duration-300 group-hover:border-burgundy">
                  @looptiestudio
                </span>
                <ArrowUpRight className="size-4 shrink-0" />
              </div>
            </a>
            <a href="mailto:looptiestudio@gmail.com" className="group relative overflow-hidden rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-burgundy/40">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-cream/20 bg-cream/10">
                <Mail className="size-5 text-[#F4E0A5]" strokeWidth={2.25} />
              </div>
              <h3 className="mt-6 font-serif text-2xl">Email</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                For commissions, collaborations, and press &mdash; write to us and we&apos;ll get back within a
                day or two.
              </p>
              <div className="mt-6 flex min-w-0 items-center gap-2 text-sm font-medium tracking-wide text-cream transition-colors duration-300 group-hover:text-burgundy">
                <span className="min-w-0 break-words border-b border-burgundy/0 pb-0.5 transition-colors duration-300 group-hover:border-burgundy">
                  looptiestudio@gmail.com
                </span>
                <ArrowUpRight className="size-4 shrink-0" />
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest px-6 py-16 text-cream/80">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center">
              <img src={LOGO_SRC} alt="Loop Tie Studio" className="h-16 w-auto object-contain rounded-2xl filter drop-shadow-sm" />
            </div>
            <p className="mt-4 text-sm text-cream/60">A father-daughter atelier &mdash; slow, handmade, and quietly curated.</p>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-burgundy">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-cream">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-burgundy">Studio</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="mailto:looptiestudio@gmail.com" className="group inline-flex min-w-0 items-center font-medium text-cream/90 transition-colors duration-300 hover:text-cream">
                  <span className="min-w-0 break-words border-b border-burgundy/0 pb-0.5 transition-colors duration-300 group-hover:border-burgundy/80">
                    looptiestudio@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+917842361772" className="group inline-flex min-w-0 items-center font-medium text-cream/90 transition-colors duration-300 hover:text-cream">
                  <span className="min-w-0 break-words border-b border-burgundy/0 pb-0.5 transition-colors duration-300 group-hover:border-burgundy/80">
                    +91 78423 61772
                  </span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/917842361772" target="_blank" rel="noopener noreferrer" className="group inline-flex min-w-0 items-center font-medium text-cream/90 transition-colors duration-300 hover:text-cream">
                  <span className="min-w-0 break-words border-b border-burgundy/0 pb-0.5 transition-colors duration-300 group-hover:border-burgundy/80">
                    WhatsApp: +91 78423 61772
                  </span>
                </a>
              </li>
              <li className="text-cream/70">Based in India</li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-burgundy">Follow</div>
            <div className="mt-4 flex gap-3">
              <a href="mailto:looptiestudio@gmail.com" aria-label="Email" className="rounded-full border border-cream/20 p-2 text-cream/80 transition-colors duration-300 hover:bg-cream/10 hover:text-burgundy">
                <Mail className="size-4" strokeWidth={1.75} />
              </a>
              <a href="tel:+917842361772" aria-label="Phone" className="rounded-full border border-cream/20 p-2 text-cream/80 transition-colors duration-300 hover:bg-cream/10 hover:text-burgundy">
                <Phone className="size-4" strokeWidth={1.75} />
              </a>
              <a href="https://wa.me/917842361772" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-full border border-cream/20 p-2 text-cream/80 transition-colors duration-300 hover:bg-cream/10 hover:text-burgundy">
                <MessageCircle className="size-4" strokeWidth={1.75} />
              </a>
              <a href="https://www.instagram.com/looptiestudio?igsh=MTU5NzZkOWQ2bm94ZA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-cream/20 p-2 text-cream/80 transition-colors duration-300 hover:bg-cream/10 hover:text-burgundy">
                <Instagram className="size-4" strokeWidth={1.75} />
              </a>
            </div>
          </div>

        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-cream/10 pt-6 text-center text-[11px] uppercase tracking-widest text-cream/40">
          &copy; {new Date().getFullYear()} Loop Ties Studio &middot; Handmade in India
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917842361772"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.588 1.45 5.621 1.451 5.536 0 10.04-4.507 10.04-10.043.002-2.661-1.03-5.166-2.906-7.042C17.527 1.68 15.034.65 12.38.65c-5.543 0-10.046 4.507-10.046 10.046-.002 2.074.542 4.1 1.572 5.864l-.998 3.648 3.738-.98zm11.387-5.464c-.307-.154-1.817-.897-2.097-.999-.28-.102-.484-.154-.686.154-.203.308-.785.999-.962 1.205-.178.205-.355.231-.662.077-.307-.154-1.3-.48-2.476-1.53-1.155-1.03-1.93-2.302-2.158-2.61-.227-.308-.024-.475.129-.628.138-.137.307-.359.461-.539.154-.18.205-.308.307-.513.102-.205.051-.385-.026-.539-.077-.154-.686-1.654-.94-2.267-.247-.595-.503-.513-.686-.523-.178-.008-.382-.01-.587-.01s-.538.077-.82.384c-.282.309-1.077 1.051-1.077 2.564 0 1.513 1.102 2.974 1.256 3.179.154.205 2.167 3.31 5.248 4.64.733.317 1.307.505 1.75.646.737.234 1.408.201 1.94.122.592-.088 1.817-.743 2.072-1.461.254-.718.254-1.333.178-1.461-.077-.128-.282-.205-.589-.359z" />
        </svg>
      </a>
    </div>
  );
}
