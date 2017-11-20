import $ from "jquery";
import MobileMenu from "./modules/MobileMenu";
import StickyHeader from "./modules/StickyHeader";
import RevealOnScroll from "./modules/RevealOnScroll";



var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
new RevealOnScroll($(".lawyers"), "75%");
new RevealOnScroll($(".practice-item"), "100%");
new RevealOnScroll($(".contact"), "100%");
