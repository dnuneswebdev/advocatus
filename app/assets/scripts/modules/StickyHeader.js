import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";


class StickyHeader {
    constructor() {
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".large-hero__btn");
        this.createHeaderWaypoint();
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createPageSectionWaypoints();
        this.addSmothScrolling();
        
    }

    addSmothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
                if (direction == "down") {
                    that.siteHeader.addClass("site-header--fixed primary-nav--fixed");
                }
                else {
                    that.siteHeader.removeClass("site-header--fixed primary-nav--fixed");
                }
            }
        });
    }

    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function() {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == "down") {
                    var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                    that.headerLinks.removeClass("is-current-link");
                    $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == "up") {
                    var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                    that.headerLinks.removeClass("is-current-link");
                    $(matchingHeaderLink).addClass("is-current-link");
                    }  
                },
                offset: "-40%"
            });
        });
    }
}    


export default StickyHeader;