import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Inventory from "@/components/Inventory";
import Financing from "@/components/Financing";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home(){return <main><Navbar/><Hero/><section className="trust shell" aria-label="Why choose AutoMax"><div><b>200+</b><span>Cars to choose from</span></div><div><b>Fast</b><span>On-site approval</span></div><div><b>Flexible</b><span>Down payments</span></div><div><b>Miami</b><span>Locally trusted</span></div></section><Inventory/><Financing/><Reviews/><About/><Footer/></main>}
