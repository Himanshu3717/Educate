// AOS animation
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    // Video modal autoplay
    const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("youtubeVideo");
  const videoURL =
    "https://www.youtube.com/embed/Wq6NdxJ-rVU?si=xXxUeT5_tDIxIK8t"

  if (modal && iframe) {
    modal.addEventListener("show.bs.modal", () => {
      iframe.src = videoURL;
    });

    modal.addEventListener("hide.bs.modal", () => {
      iframe.src = "";
    });
  }

  

    // API sections
    loadSeatTable();
    loadTestimonials();
  });
  
  //
  // Seat price table
  //
  async function loadSeatTable() {
    const tbody = document.getElementById("seatTableBody");
    const errorEl = document.getElementById("seatError");
  
    if (!tbody) return;
  
    // loading state
    tbody.innerHTML = `
      <tr>
        <td colspan="3">Loading seat data...</td>
      </tr>
    `;
  
    try {
      const res = await fetch("https://viaje.ai/seatinfo_api/");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
  
      const json = await res.json(); // { data: [...] }
      const rows = json.data || [];
  
      if (!rows.length) {
        tbody.innerHTML = `
          <tr><td colspan="3">No seat data available.</td></tr>
        `;
        return;
      }
  
      tbody.innerHTML = rows
        .map(
          (item) => `
          <tr>
            <td>${item.seat_no}</td>
            <td>${item.price}</td>
            <td>${item.status}</td>
          </tr>`
        )
        .join("");
  
      if (errorEl) errorEl.classList.add("d-none");
    } catch (err) {
      console.error("Seat API error:", err);
      tbody.innerHTML = `
        <tr><td colspan="3">Error loading data</td></tr>
      `;
      if (errorEl) errorEl.classList.remove("d-none");
    }
  }
  
  //
  // Testimonials slider
  //
  let testimonialsData = [];
  let currentTestimonial = 0;
  
  async function loadTestimonials() {
    const commentEl = document.getElementById("testimonialComment");
    const nameEl = document.getElementById("testimonialName");
    const starsEl = document.getElementById("testimonialStars");
    const errorEl = document.getElementById("testimonialError");
  
    if (!commentEl || !nameEl || !starsEl) return;
  
    commentEl.textContent = "Loading testimonial...";
  
    try {
      const res = await fetch("https://viaje.ai/testimonial_api/");
      if (!res.ok) throw new Error("Network error");
  
      const json = await res.json(); // { data: [...] }
      testimonialsData = json.data || [];
  
      if (!testimonialsData.length) {
        commentEl.textContent = "No testimonials available.";
        return;
      }
  
      currentTestimonial = 0;
      renderTestimonial();
      if (errorEl) errorEl.classList.add("d-none");
  
      // dots click listeners
      document.querySelectorAll(".testimonial-dots .dot").forEach((dot) => {
        dot.addEventListener("click", () => {
          const idx = Number(dot.dataset.index);
          if (!Number.isNaN(idx) && testimonialsData[idx]) {
            currentTestimonial = idx;
            renderTestimonial();
          }
        });
      });
    } catch (err) {
      console.error("Testimonial API error:", err);
      commentEl.textContent = "Error loading testimonial.";
      if (errorEl) errorEl.classList.remove("d-none");
    }
  }
  
  function renderTestimonial() {
    const t = testimonialsData[currentTestimonial];
    if (!t) return;
  
    const commentEl = document.getElementById("testimonialComment");
    const nameEl = document.getElementById("testimonialName");
    const starsEl = document.getElementById("testimonialStars");
  
    commentEl.textContent = t.comment.trim();
    nameEl.textContent = t.comment_by;
  
    // rating to stars (simple)
    const rating = Number(t.rating) || 0;
    const fullStars = Math.floor(rating);
    const half = rating - fullStars >= 0.5;
  
    let starsHtml = "";
    for (let i = 0; i < fullStars; i++) starsHtml += "★";
    if (half) starsHtml += "☆";
  
    starsEl.innerHTML = starsHtml;
  
    // update dots active state
    const dots = document.querySelectorAll(".testimonial-dots .dot");
    dots.forEach((d, i) => {
      d.classList.toggle("active", i === currentTestimonial);
    });
  }
  
