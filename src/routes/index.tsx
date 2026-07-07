import { createFileRoute, Link } from "@tanstack/react-router";
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
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const LOGO_SRC = "/images/logo/looptie-logo-clean.png";
const HERO_SRC = "/images/hero/hero-flowers.jpg";
const WOOL_ICON_SRC = "/images/logo/wool-icon.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const NAV = [
  { label: "Story", href: "#story" },
  { label: "Our Products", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const TINTS = ["from-burgundy/40 to-forest", "from-forest to-burgundy/30", "from-burgundy/30 to-forest", "from-forest to-burgundy/20", "from-burgundy/25 to-forest", "from-forest to-burgundy/40"];

const COLLECTIONS_RAW: { name: string; category: "Crochets" | "Paintings"; subcategory: string; desc: string }[] = [
  { name: "Amigurumi Turtle Family", category: "Crochets", subcategory: "Crochet Toys", desc: "A colourful pod of hand-stitched turtles, each with its own quiet personality." },
  { name: "Ducky Charm", category: "Crochets", subcategory: "Keychains", desc: "A cheerful yellow duckling knotted onto a soft cotton loop." },
  { name: "Frozen Doll Charm", category: "Crochets", subcategory: "Crochet Toys", desc: "A crocheted princess dressed in lilac, lavender and cream." },
  { name: "Storybook Charm Bunch", category: "Crochets", subcategory: "Keychains", desc: "A little gathering of characters tied onto a single strap." },
  { name: "Sunflower Bloom Keychain", category: "Crochets", subcategory: "Keychains", desc: "A pocket-sized sunflower stitched in warm mustard tones." },
  { name: "Charm Cluster", category: "Crochets", subcategory: "Keychains", desc: "A hand-tied bunch of miniature crochet charms." },
  { name: "Kitty Bow Keychain", category: "Crochets", subcategory: "Keychains", desc: "A soft white kitten finished with a scarlet bow." },
  { name: "Little Chick", category: "Crochets", subcategory: "Crochet Toys", desc: "A round-cheeked chick perched on cream stripes." },
  { name: "Berry Basket", category: "Crochets", subcategory: "Handloom Decor", desc: "A tray of tiny crocheted strawberries, packed to gift." },
  { name: "Rose Bouquet, Crimson", category: "Crochets", subcategory: "Handloom Decor", desc: "A dozen wool roses arranged for a keepsake vase." },
  { name: "Potted Sunflower", category: "Crochets", subcategory: "Handloom Decor", desc: "A single sunflower rising from a woven wool pot." },
  { name: "Frog Pals Tray", category: "Crochets", subcategory: "Crochet Toys", desc: "A parade of little green frog amigurumi, each hand-finished." },
  { name: "White Daisy Bouquet", category: "Crochets", subcategory: "Handloom Decor", desc: "A softly-lit gathering of daisies, blossoms and cream leaves." },
  { name: "Garden Rose Bouquet", category: "Crochets", subcategory: "Handloom Decor", desc: "Layered roses in dusty pink and cream, tied by hand." },
  { name: "Daisy Scrunchie, Sky", category: "Crochets", subcategory: "Scrunchies", desc: "A cotton scrunchie sewn with pale-blue crochet daisies." },
  { name: "Flower Rows Display", category: "Crochets", subcategory: "Handloom Decor", desc: "A tabletop display of blooms in every seasonal shade." },
  { name: "Lavender Daisy Band", category: "Crochets", subcategory: "Accessories", desc: "A woven hair band trimmed with a row of purple daisies." },
  { name: "Butterfly Keychain Trio", category: "Crochets", subcategory: "Keychains", desc: "Ribbon-winged butterflies in scarlet, cream and forest." },
  { name: "Ballet Doll Keychain", category: "Crochets", subcategory: "Crochet Toys", desc: "A pink-dressed dancer with braided hair and tiny slippers." },
  { name: "Piglet Keychain, Blush", category: "Crochets", subcategory: "Keychains", desc: "A tiny pink pig, palm-sized and hand-embroidered." },
  { name: "Pig Plush", category: "Crochets", subcategory: "Crochet Toys", desc: "A soft companion pig, weighted just enough to be held." },
  { name: "Chick Duo Keychains", category: "Crochets", subcategory: "Keychains", desc: "A pair of yellow chicks finished with cherry-red hats." },
  { name: "Fingertip Kitty Charm", category: "Crochets", subcategory: "Crochet Toys", desc: "A cream kitten no bigger than a fingertip." },
  { name: "Peach Bear Charm", category: "Crochets", subcategory: "Crochet Toys", desc: "A round little bear stitched in warm peach tones." },
  { name: "Sunflower Palm Charm", category: "Crochets", subcategory: "Keychains", desc: "A single sunflower charm that rests in the palm." },
  { name: "Amigurumi Trio", category: "Crochets", subcategory: "Crochet Toys", desc: "Blue, yellow and red character dolls stitched as a matched set." },
  { name: "Duck Family Charms", category: "Crochets", subcategory: "Keychains", desc: "Three cheerful ducks on hand-braided rope ties." },
  { name: "Yellow Bow Clip", category: "Crochets", subcategory: "Accessories", desc: "A soft crochet bow in buttery yellow, finished on a clip." },
  { name: "Lavender Bow Hair Piece", category: "Crochets", subcategory: "Accessories", desc: "A generous lavender bow made for a low ponytail." },
  { name: "Frog Trio Tray", category: "Crochets", subcategory: "Crochet Toys", desc: "Three small frogs arranged on a woven bamboo tray." },
  { name: "Studio Bloom Spread", category: "Crochets", subcategory: "Handloom Decor", desc: "An assortment of wool blooms photographed together." },
  { name: "Baby-Blue Pearl Charm", category: "Crochets", subcategory: "Accessories", desc: "A tiny bell charm strung on a soft pearl chain." },
  { name: "Bluebird Hanging Charm", category: "Crochets", subcategory: "Crochet Toys", desc: "A pale-blue bird tied to a length of natural cotton cord." },
  { name: "Minion Charm", category: "Crochets", subcategory: "Crochet Toys", desc: "A collectible minion in trademark blue and yellow." },
  { name: "Bluebird Pair", category: "Crochets", subcategory: "Crochet Toys", desc: "Two matching bluebirds, palm-sized and softly stuffed." },
  { name: "Bow Trio, Autumn", category: "Crochets", subcategory: "Accessories", desc: "A trio of bows in navy, blush and warm brown." },
  { name: "Wool Sunflower Stems", category: "Crochets", subcategory: "Handloom Decor", desc: "Long-stemmed wool sunflowers, sold as individual stems." },
  { name: "Frog Basket, Wide", category: "Crochets", subcategory: "Crochet Toys", desc: "A wide tray of green frog amigurumi ready to be gifted." },
  { name: "Daisy Basket Bouquet", category: "Crochets", subcategory: "Handloom Decor", desc: "A basket bouquet of pink, cream and yellow daisies." },
  { name: "Bluebird, Petite", category: "Crochets", subcategory: "Crochet Toys", desc: "A pocket-sized bluebird finished on a hanging cord." },
  { name: "Kitty Fingertip Charm", category: "Crochets", subcategory: "Crochet Toys", desc: "A tiny fingertip-sized cream kitten with a red bow." },
];

const COLLECTIONS: { name: string; category: "Crochets" | "Paintings"; subcategory: string; desc: string; tint: string; img: string }[] = COLLECTIONS_RAW.map((p, i) => {
  const imgUrl = `/images/products/product-${String(i + 1).padStart(2, "0")}.jpg`;
  return { ...p, tint: TINTS[i % TINTS.length], img: imgUrl };
});




const GALLERY = [
  { label: "Studio Moments", tint: "from-burgundy/40 to-forest", tall: true, img: "/images/gallery/studio-moments.jpg" },
  { label: "Work in Progress", tint: "from-forest to-burgundy/30", tall: false, img: "/images/gallery/work-in-progress.jpg" },
  { label: "Crochet Work", tint: "from-burgundy/30 to-forest", tall: false, img: "/images/gallery/crochet-work.jpg" },
  { label: "Paintings", tint: "from-forest to-burgundy/40", tall: true, img: "/images/gallery/paintings.jpg" },
  { label: "Handmade Crafts", tint: "from-burgundy/25 to-forest", tall: false, img: "/images/gallery/handmade-crafts.jpg" },
  { label: "The Atelier", tint: "from-forest to-burgundy/25", tall: false, img: "/images/gallery/atelier.jpg" },
];

function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<"Crochets" | "Paintings">("Crochets");
  const [modalSubcategory, setModalSubcategory] = useState<string>("Keychains");
  const [inlineCategory, setInlineCategory] = useState<"Crochets" | "Paintings">("Crochets");
  const [inlineSubcategory, setInlineSubcategory] = useState<string>("Keychains");
  const [lightboxItems, setLightboxItems] = useState<typeof COLLECTIONS>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-forest font-sans text-cream">
      {/* Full-bleed hero */}
      <section className="relative min-h-screen overflow-hidden">
        <img src={HERO_SRC} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-forest/60 to-forest" />

        {/* Wool + knitting needles watermark (extracted from logo) — centered, original colors */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <img
            src={WOOL_ICON_SRC}
            alt=""
            aria-hidden="true"
            className="w-[22rem] max-w-[85vw] opacity-30 sm:w-[30rem] md:w-[40rem] md:opacity-40 lg:w-[46rem]"
          />
        </div>



        {/* Floating glass nav */}
        <nav className="fixed inset-x-0 top-4 z-50 px-4">

          <div className="mx-auto flex h-24 max-w-6xl items-center justify-between rounded-full border border-cream/15 bg-forest/40 py-2 pl-5 pr-4 shadow-2xl shadow-forest/40 backdrop-blur-2xl sm:pr-6">
            <Link to="/" className="flex shrink-0 items-center">
              <img
                src={LOGO_SRC}
                alt="LoopTieStudio"
                className="h-14 w-auto object-contain sm:h-16 md:h-18"
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

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-cream/25 bg-cream/5 text-cream/90 backdrop-blur-xl transition hover:bg-cream/10 md:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          {mobileOpen && (
            <div className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl border border-cream/15 bg-forest/80 shadow-2xl shadow-forest/40 backdrop-blur-2xl md:hidden">
              <div className="flex flex-col p-3">
                {NAV.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl px-4 py-3 text-xs uppercase tracking-widest text-cream/85 transition hover:bg-cream/10 hover:text-cream"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 bg-cream/5 px-4 py-3 text-[11px] uppercase tracking-widest text-cream/90 transition hover:bg-cream/10"
                >
                  Enquire <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          )}
        </nav>



        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-32">
          <h1 className="max-w-4xl font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
            Handcrafted & Customized <span className="italic text-cream/70">Artwork from Artizens Across India</span>
          </h1>
          <div className="mt-12 flex flex-wrap gap-4">
            <button
              onClick={() => {
                setIsModalOpen(true);
                setModalCategory("Crochets");
                setModalSubcategory("Keychains");
              }}
              className="rounded-full bg-burgundy px-10 py-4 text-sm font-medium uppercase tracking-widest text-cream shadow-2xl shadow-burgundy/40 transition-transform hover:scale-105"
            >
              View Our Products
            </button>
            <a href="#contact" className="rounded-full border border-cream/30 bg-cream/5 px-10 py-4 text-sm font-medium uppercase tracking-widest backdrop-blur-xl hover:bg-cream/10">
              Enquire Now
            </a>
          </div>
        </div>

        {/* Floating brand highlight card */}
        <div className="absolute bottom-10 right-10 z-10 hidden rounded-3xl border border-cream/20 bg-cream/10 p-6 backdrop-blur-2xl md:block">
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-3">
              <HandHeart className="size-5 text-cream/90" strokeWidth={1.75} />
              <div className="font-serif text-base leading-tight">100% Handmade<br /><span className="text-xs uppercase tracking-widest text-cream/60">with care</span></div>
            </div>
            <div className="flex items-center gap-3">
              <Leaf className="size-5 text-cream/90" strokeWidth={1.75} />
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
                <div className="flex size-12 items-center justify-center rounded-2xl border border-cream/15 bg-cream/5">
                  <Icon className="size-5 text-cream/90" strokeWidth={1.75} />
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
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-cream/90">
            <span className="h-px w-8 bg-cream/40" />
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
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-cream/90">
              <span className="h-px w-8 bg-cream/40" />
              About Us
            </div>
            <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
              A father-daughter venture at the <span className="italic text-cream/70">intersection of creativity and commerce.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur-xl transition-transform hover:-translate-y-1">
              <Scissors className="size-6 text-cream/90" strokeWidth={1.75} />
              <h3 className="mt-6 font-serif text-2xl">The Creative</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/75">
                My daughter designs and hand-crochets every product in our collection — amigurumi, accessories,
                and home décor. Every stitch is handmade with care, ensuring no two creations are ever exactly
                alike, and that&apos;s what makes each one special.
              </p>
            </div>
            <div className="rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur-xl transition-transform hover:-translate-y-1">
              <Briefcase className="size-6 text-cream/90" strokeWidth={1.75} />
              <h3 className="mt-6 font-serif text-2xl">The Operator</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/75">
                Dad manages everything behind the scenes — pricing, sourcing materials, order fulfillment, and
                day-to-day operations — so creativity has a strong business foundation that allows it to thrive
                without compromise.
              </p>
            </div>
            <div className="rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur-xl transition-transform hover:-translate-y-1">
              <Palette className="size-6 text-cream/90" strokeWidth={1.75} />
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
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-cream/90">
              <span className="h-px w-8 bg-cream/40" />
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
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-cream/15 bg-cream/5">
                      <Icon className="size-5 text-cream/90" strokeWidth={1.75} />
                    </div>
                    <h4 className="mt-6 font-serif text-xl leading-snug">{title}</h4>
                    <p className="mt-4 text-sm leading-relaxed text-cream/70">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 overflow-hidden rounded-[2rem] border border-cream/15 bg-gradient-to-br from-burgundy/25 via-forest to-forest p-10 md:p-16">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-cream/90">
              <MapPin className="size-3.5" strokeWidth={2} />
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

      {/* Collections (portfolio, not shop) */}
      <section id="collections" className="relative border-t border-cream/10 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-cream/90">
                <span className="h-px w-8 bg-cream/40" />
                Our Products
              </div>
              <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
                A portfolio of pieces, <span className="italic text-cream/70">not a storefront.</span>
              </h2>
              <p className="mt-6 text-cream/70">
                Browse the work — each piece is one of a kind. For availability, commissions, or a custom order,
                message us on WhatsApp or Instagram.
              </p>
            </div>
            <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/25 bg-cream/5 px-6 py-3 text-[11px] uppercase tracking-widest backdrop-blur-xl hover:bg-cream/10">
              Enquire Now <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          {/* Category tabs */}
          <div className="mt-14 flex gap-4 border-b border-cream/10 pb-4">
            {["Crochets", "Paintings"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setInlineCategory(cat as any);
                  setInlineSubcategory(cat === "Crochets" ? "Keychains" : "Paintings");
                }}
                className={`rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all ${
                  inlineCategory === cat
                    ? "bg-[#F4E0A5] text-forest shadow-md"
                    : "bg-cream/5 text-cream/80 border border-cream/10 hover:bg-cream/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Subcategory selectors */}
          <div className="mt-4 flex flex-wrap gap-2.5">
            {(inlineCategory === "Crochets"
              ? ["Keychains", "Handloom Decor", "Scrunchies", "Accessories", "Crochet Toys"]
              : ["Paintings"]
            ).map((sub) => (
              <button
                key={sub}
                onClick={() => setInlineSubcategory(sub)}
                className={`rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-widest transition-all ${
                  inlineSubcategory === sub
                    ? "bg-burgundy text-cream shadow-md"
                    : "bg-cream/5 text-cream/60 border border-cream/5 hover:bg-cream/10"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Inline grid of products */}
          {(() => {
            const filteredItems = COLLECTIONS.filter(
              (item) => item.category === inlineCategory && item.subcategory === inlineSubcategory
            );

            return (
              <div className="mt-10 animate-in fade-in duration-300">
                {inlineCategory === "Paintings" ? (
                  <div className="flex flex-col items-center justify-center py-20 px-6 text-center border border-cream/10 rounded-[2.5rem] bg-cream/5 min-h-[350px] max-w-4xl mx-auto">
                    <div className="flex size-20 items-center justify-center rounded-full border border-cream/15 bg-cream/5 text-[#F4E0A5]/80 animate-pulse">
                      <Palette className="size-10" strokeWidth={1.25} />
                    </div>
                    <h3 className="mt-8 font-serif text-3xl md:text-4xl text-[#F4E0A5]">Paintings Coming Soon</h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
                      We are quietly curating our first collection of original canvas paintings. 
                      Commission requests and custom orders are currently open.
                    </p>
                    <a
                      href="#contact"
                      className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-burgundy px-8 py-3 text-xs font-semibold uppercase tracking-widest text-cream hover:bg-burgundy/90 transition-colors shadow-lg"
                    >
                      Enquire for Requests <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredItems.map((c) => (
                      <div
                        key={c.name}
                        className="group relative overflow-hidden rounded-3xl border border-cream/15 bg-cream/5 transition-transform duration-500 hover:-translate-y-1"
                      >
                        <div 
                          className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-forest to-burgundy/30 cursor-pointer"
                          onClick={() => {
                            setLightboxItems(filteredItems);
                            setLightboxIndex(filteredItems.findIndex(item => item.name === c.name));
                          }}
                        >
                          <img
                            src={c.img}
                            alt={c.name}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/25 to-transparent" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(128,0,32,0.35),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                          <div className="absolute left-5 top-5 rounded-full border border-cream/25 bg-forest/50 px-3 py-1 text-[10px] uppercase tracking-widest text-cream/85 backdrop-blur">
                            {c.subcategory}
                          </div>
                          <Flower2 className="absolute bottom-5 right-5 size-8 text-cream/60 transition-transform duration-500 group-hover:rotate-12" strokeWidth={1.25} />
                        </div>
                        <div className="p-6">
                          <h3 className="font-serif text-xl leading-snug">{c.name}</h3>
                          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-cream/70">{c.desc}</p>
                          <a
                            href="#contact"
                            className="mt-5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-cream/90 transition group-hover:gap-2.5"
                          >
                            View Collection <ArrowUpRight className="size-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </section>


      {/* Gallery */}
      <section id="gallery" className="relative border-t border-cream/10 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-cream/90">
              <span className="h-px w-8 bg-cream/40" />
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
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-cream/90">
              <span className="h-px w-8 bg-cream/40" />
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
              <div className="flex size-12 items-center justify-center rounded-2xl border border-cream/15 bg-cream/5">
                <MessageCircle className="size-5 text-cream/90" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-serif text-2xl">WhatsApp</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                The fastest way to reach the studio. Send us a note, a reference, or a question.
              </p>
              <div className="mt-6 flex min-w-0 items-center gap-2 text-sm font-medium tracking-wide text-cream transition-colors duration-300">
                <span className="min-w-0 break-words border-b border-burgundy/0 pb-0.5 transition-colors duration-300">
                  +91 78423 61772
                </span>
                <ArrowUpRight className="size-4 shrink-0" />
              </div>
            </a>
            <a href="tel:+917842361772" className="group relative overflow-hidden rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-burgundy/40">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-cream/15 bg-cream/5">
                <Phone className="size-5 text-cream/90" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-serif text-2xl">Phone</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                Prefer to talk? Give us a call &mdash; we&apos;re happy to help with commissions and orders.
              </p>
              <div className="mt-6 flex min-w-0 items-center gap-2 text-sm font-medium tracking-wide text-cream transition-colors duration-300">
                <span className="min-w-0 break-words border-b border-burgundy/0 pb-0.5 transition-colors duration-300">
                  +91 78423 61772
                </span>
                <ArrowUpRight className="size-4 shrink-0" />
              </div>
            </a>
            <a href="https://www.instagram.com/looptiestudio?igsh=MTU5NzZkOWQ2bm94ZA==" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-burgundy/40">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-cream/15 bg-cream/5">
                <Instagram className="size-5 text-cream/90" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-serif text-2xl">Instagram</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                See work in progress, new drops, and quiet moments from the atelier.
              </p>
              <div className="mt-6 flex min-w-0 items-center gap-2 text-sm font-medium tracking-wide text-cream transition-colors duration-300">
                <span className="min-w-0 break-words border-b border-burgundy/0 pb-0.5 transition-colors duration-300">
                  @looptiestudio
                </span>
                <ArrowUpRight className="size-4 shrink-0" />
              </div>
            </a>
            <a href="mailto:looptiestudio@gmail.com" className="group relative overflow-hidden rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-burgundy/40">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-cream/15 bg-cream/5">
                <Mail className="size-5 text-cream/90" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-serif text-2xl">Email</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                For commissions, collaborations, and press &mdash; write to us and we&apos;ll get back within a
                day or two.
              </p>
              <div className="mt-6 flex min-w-0 items-center gap-2 text-sm font-medium tracking-wide text-cream transition-colors duration-300">
                <span className="min-w-0 break-words border-b border-burgundy/0 pb-0.5 transition-colors duration-300">
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
            <img src={LOGO_SRC} alt="LoopTieStudio" className="h-16 w-auto object-contain" />
            <p className="mt-4 text-sm text-cream/60">A father-daughter atelier &mdash; slow, handmade, and quietly curated.</p>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-cream/90">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-cream">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-cream/90">Studio</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="mailto:looptiestudio@gmail.com" className="group inline-flex min-w-0 items-center font-medium text-cream/90 transition-colors duration-300 hover:text-cream">
                  <span className="min-w-0 break-words border-b border-burgundy/0 pb-0.5 transition-colors duration-300">
                    looptiestudio@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+917842361772" className="group inline-flex min-w-0 items-center font-medium text-cream/90 transition-colors duration-300 hover:text-cream">
                  <span className="min-w-0 break-words border-b border-burgundy/0 pb-0.5 transition-colors duration-300">
                    +91 78423 61772
                  </span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/917842361772" target="_blank" rel="noopener noreferrer" className="group inline-flex min-w-0 items-center font-medium text-cream/90 transition-colors duration-300 hover:text-cream">
                  <span className="min-w-0 break-words border-b border-burgundy/0 pb-0.5 transition-colors duration-300">
                    WhatsApp: +91 78423 61772
                  </span>
                </a>
              </li>
              <li className="text-cream/70">Based in India</li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-cream/90">Follow</div>
            <div className="mt-4 flex gap-3">
              <a href="mailto:looptiestudio@gmail.com" aria-label="Email" className="rounded-full border border-cream/20 p-2 text-cream/80 transition-colors duration-300 hover:bg-cream/10 hover:text-cream/90">
                <Mail className="size-4" strokeWidth={1.75} />
              </a>
              <a href="tel:+917842361772" aria-label="Phone" className="rounded-full border border-cream/20 p-2 text-cream/80 transition-colors duration-300 hover:bg-cream/10 hover:text-cream/90">
                <Phone className="size-4" strokeWidth={1.75} />
              </a>
              <a href="https://wa.me/917842361772" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-full border border-cream/20 p-2 text-cream/80 transition-colors duration-300 hover:bg-cream/10 hover:text-cream/90">
                <MessageCircle className="size-4" strokeWidth={1.75} />
              </a>
              <a href="https://www.instagram.com/looptiestudio?igsh=MTU5NzZkOWQ2bm94ZA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-cream/20 p-2 text-cream/80 transition-colors duration-300 hover:bg-cream/10 hover:text-cream/90">
                <Instagram className="size-4" strokeWidth={1.75} />
              </a>
            </div>
          </div>

        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-cream/10 pt-6 text-center text-[11px] uppercase tracking-widest text-cream/40">
          &copy; {new Date().getFullYear()} Loop Ties Studio &middot; Handmade in India
        </div>
      </footer>

      {/* Floating social buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/917842361772"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="group flex size-12 items-center justify-center rounded-full border border-cream/20 bg-forest/80 text-cream shadow-xl shadow-forest/40 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-burgundy hover:shadow-2xl hover:shadow-burgundy/40"
        >
          <MessageCircle className="size-5 transition-transform duration-300 group-hover:rotate-6" strokeWidth={1.75} />
        </a>
        <a
          href="https://instagram.com/looptiestudio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="group flex size-12 items-center justify-center rounded-full border border-cream/20 bg-forest/80 text-cream shadow-xl shadow-forest/40 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-burgundy hover:shadow-2xl hover:shadow-burgundy/40"
        >
          <Instagram className="size-5 transition-transform duration-300 group-hover:rotate-6" strokeWidth={1.75} />
        </a>
      </div>

      {/* View Our Products Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-forest/80 backdrop-blur-md cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          />
          
          <div className="relative z-10 flex h-[85vh] w-full max-w-5xl flex-col rounded-[2.5rem] border border-cream/15 bg-forest/95 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:p-10 animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute right-6 top-6 flex size-10 items-center justify-center rounded-full border border-cream/15 bg-cream/5 text-cream/70 hover:bg-cream/10 hover:text-cream transition-all"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>

            <div className="mb-6 flex flex-col gap-2">
              <h2 className="font-serif text-3xl md:text-4xl text-[#F4E0A5]">Our Products</h2>
              <p className="text-sm text-cream/60">Explore our slowly crafted and curated collections.</p>
            </div>

            {/* Category tabs */}
            <div className="flex gap-4 border-b border-cream/10 pb-4">
              {["Crochets", "Paintings"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setModalCategory(cat as any);
                    setModalSubcategory(cat === "Crochets" ? "Keychains" : "Paintings");
                  }}
                  className={`rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all ${
                    modalCategory === cat
                      ? "bg-[#F4E0A5] text-forest shadow-md"
                      : "bg-cream/5 text-cream/80 border border-cream/10 hover:bg-cream/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Subcategory selectors */}
            <div className="mt-4 flex flex-wrap gap-2.5">
              {(modalCategory === "Crochets"
                ? ["Keychains", "Handloom Decor", "Scrunchies", "Accessories", "Crochet Toys"]
                : ["Paintings"]
              ).map((sub) => (
                <button
                  key={sub}
                  onClick={() => setModalSubcategory(sub)}
                  className={`rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-widest transition-all ${
                    modalSubcategory === sub
                      ? "bg-burgundy text-cream shadow-md"
                      : "bg-cream/5 text-cream/60 border border-cream/5 hover:bg-cream/10"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* Products Grid inside Modal */}
            <div className="mt-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {(() => {
                const filteredItems = COLLECTIONS.filter(
                  (item) => item.category === modalCategory && item.subcategory === modalSubcategory
                );

                return (
                  <div className="animate-in fade-in duration-300">
                    {modalCategory === "Paintings" ? (
                      <div className="flex flex-col items-center justify-center py-16 px-6 text-center border border-cream/10 rounded-[2.5rem] bg-cream/5 min-h-[300px]">
                        <div className="flex size-16 items-center justify-center rounded-full border border-cream/15 bg-cream/5 text-[#F4E0A5]/80 animate-pulse">
                          <Palette className="size-8" strokeWidth={1.25} />
                        </div>
                        <h3 className="mt-6 font-serif text-2xl md:text-3xl text-[#F4E0A5]">Paintings Coming Soon</h3>
                        <p className="mt-3 max-w-md text-xs leading-relaxed text-cream/70">
                          We are quietly curating our first collection of original canvas paintings. 
                          Commission requests and custom orders are currently open.
                        </p>
                        <a
                          href="#contact"
                          onClick={() => setIsModalOpen(false)}
                          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-burgundy px-6 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-cream hover:bg-burgundy/90 transition-colors shadow-lg"
                        >
                          Enquire for Requests <ArrowUpRight className="size-3" />
                        </a>
                      </div>
                    ) : (
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredItems.map((c) => (
                          <div
                            key={c.name}
                            className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-cream/5 transition-all duration-300 hover:border-cream/20"
                          >
                            <div 
                              className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-forest to-burgundy/30 cursor-pointer"
                              onClick={() => {
                                setLightboxItems(filteredItems);
                                setLightboxIndex(filteredItems.findIndex(item => item.name === c.name));
                              }}
                            >
                              <img
                                src={c.img}
                                alt={c.name}
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
                            </div>
                            <div className="p-5">
                              <h3 className="font-serif text-lg leading-snug">{c.name}</h3>
                              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-cream/70">{c.desc}</p>
                              <a
                                href="https://wa.me/917842361772"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#F4E0A5] hover:text-cream transition-colors"
                              >
                                Enquire on WhatsApp <ArrowUpRight className="size-3" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Slideshow Overlay */}
      {lightboxIndex !== null && lightboxItems[lightboxIndex] && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-in fade-in duration-200">
          {/* Backdrop overlay */}
          <div 
            className="absolute inset-0 bg-forest/90 backdrop-blur-lg cursor-pointer"
            onClick={() => setLightboxIndex(null)}
          />

          {/* Close button */}
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute right-6 top-6 z-50 flex size-12 items-center justify-center rounded-full border border-cream/25 bg-cream/5 text-cream/70 hover:bg-cream/10 hover:text-cream transition-all"
            aria-label="Close preview"
          >
            <X className="size-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => 
                prev !== null ? (prev === 0 ? lightboxItems.length - 1 : prev - 1) : null
              );
            }}
            className="absolute left-6 z-50 flex size-12 items-center justify-center rounded-full border border-cream/25 bg-cream/5 text-cream/70 hover:bg-cream/10 hover:text-cream transition-all md:left-10"
            aria-label="Previous product"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => 
                prev !== null ? (prev === lightboxItems.length - 1 ? 0 : prev + 1) : null
              );
            }}
            className="absolute right-6 z-50 flex size-12 items-center justify-center rounded-full border border-cream/25 bg-cream/5 text-cream/70 hover:bg-cream/10 hover:text-cream transition-all md:right-10"
            aria-label="Next product"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Centered Lightbox Card with animations */}
          <div className="relative z-10 flex w-full max-w-3xl flex-col items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-300">
            <div className={`relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border border-cream/15 bg-gradient-to-br ${lightboxItems[lightboxIndex].tint} shadow-2xl`}>
              <img
                src={lightboxItems[lightboxIndex].img}
                alt={lightboxItems[lightboxIndex].name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent" />
            </div>

            {/* Product Details below the image */}
            <div className="mt-6 text-center max-w-md">
              <span className="rounded-full border border-cream/25 bg-forest/50 px-3 py-1 text-[10px] uppercase tracking-widest text-[#F4E0A5] backdrop-blur">
                {lightboxItems[lightboxIndex].subcategory}
              </span>
              <h3 className="mt-4 font-serif text-2xl md:text-3xl text-cream">{lightboxItems[lightboxIndex].name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{lightboxItems[lightboxIndex].desc}</p>
              <a
                href="https://wa.me/917842361772"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-burgundy px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-cream hover:bg-burgundy/90 transition-colors shadow-lg"
              >
                Enquire on WhatsApp <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
