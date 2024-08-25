import React, { useEffect } from "react";
import "./Navbar.css";
import $ from "jquery";

const Navbar = () => {
  useEffect(() => {
    // Function to handle dropdown menu toggle
    const handleDropdownClick = function (e) {
      e.stopPropagation(); // Prevents the event from bubbling up to the document
      const $dropdown = $(this).siblings(".nav-dropdown");
      $dropdown.toggle(); // Toggle dropdown visibility
      $(".nav-dropdown").not($dropdown).hide(); // Hide other dropdowns
    };

    // Function to handle click outside the dropdown to close it
    const handleClickOutside = function () {
      $(".nav-dropdown").hide();
    };

    // Function to handle the mobile nav toggle button
    const handleNavToggleClick = function () {
      $("nav ul").slideToggle(); // Toggle the navigation menu
      $(this).toggleClass("active"); // Toggle the hamburger menu icon
    };

    // Function to handle window resizing
    const handleResize = function () {
      if ($(window).width() > 798) {
        $("nav ul").show(); // Show the menu on larger screens
        $("#nav-toggle").removeClass("active"); // Remove active class
      } else {
        $("nav ul").hide(); // Hide the menu on smaller screens
      }
    };

    // Bind event handlers
    $("nav ul li a:not(:only-child)").on("click", handleDropdownClick);
    $("html").on("click", handleClickOutside);
    $("#nav-toggle").on("click", handleNavToggleClick);
    $(window).on("resize", handleResize);

    // Run resize handler to set initial state
    handleResize();

    // Cleanup event handlers on component unmount
    return () => {
      $("nav ul li a:not(:only-child)").off("click", handleDropdownClick);
      $("html").off("click", handleClickOutside);
      $("#nav-toggle").off("click", handleNavToggleClick);
      $(window).off("resize", handleResize);
    };
  }, []);

  // Close the nav menu on link click in mobile view
  const handleLinkClick = () => {
    if ($(window).width() <= 798) {
      $("nav ul").slideUp();
      $("#nav-toggle").removeClass("active");
    }
  };

  return (
    <div className="navigation">
      <div className="brand">
        <a href="/admc">ADMC</a>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <a href="/admc" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="/admc/about" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="/admc/service">Services</a>
            </li>
            <li>
              <a href="/admc/gallery" onClick={handleLinkClick}>
                Gallery
              </a>
            </li>
            <li>
              <a href="/admc/contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div id="nav-toggle">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
