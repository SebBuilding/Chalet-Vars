(function () {
  const translations = {
    fr: {
      page_lang: "fr",
      skip_link: "Aller au contenu",
      nav_about: "Le chalet",
      nav_photos: "Photos",
      nav_location: "Localisation",
      nav_station: "Station",
      nav_request: "Demande",
      hero_kicker: "VARS-LES-CLAUX, FRANCE",
      hero_title: "Chalet Les Ecrins - Vars-les-Claux",
      hero_text:
        "À 5 min à pied des pistes l'hiver, sur les sentiers l'été, au cœur du village. Un chalet chaleureux, vivant et facile d'accès.",
      hero_cta: "Demander les disponibilités",
      details_name: "CHÂLET LES ECRINS",
      details_location_line: "Vars-les-Claux, Hautes-Alpes, France",
      details_meta_line: "17 couchages · 7 chambres · 5 min des pistes · 4 min des commerces",
      details_description:
        "Chalet Les Ecrins combine esprit montagne, confort simple et vie pratique au centre de Vars-les-Claux. L'atmosphère est chaleureuse, conviviale et pensée pour les séjours en groupe ou en famille.",
      details_link: "Voir les photos",
      signal1_title: "Signature Collection",
      signal1_text: "Une expérience chalet chaleureuse, avec les essentiels pour un séjour agréable.",
      signal1_link: "En savoir plus",
      signal2_title: "Avis clients",
      signal2_text: "Ce chalet est noté 5 sur 5 par nos visiteurs récents.",
      signal2_link: "Découvrir les avis",
      key_features_title: "Atouts",
      kf1: "Vue montagne",
      kf2: "Terrasse ensoleillée",
      kf3: "Ambiance chalet cosy",
      kf4: "Stationnement facile",
      kf5: "Accès sentiers à pied",
      kf6: "Proche des pistes",
      kf7: "Salle de skis",
      kf8: "Sound system",
      kf9: "Wifi",
      kf10: "Cheminée",
      details_kicker: "CHALET FAMILIAL",
      details_title: "Un séjour alpin simple, central et accueillant",
      details_intro:
        "Le Chalet Les Ecrins n'est pas le plus moderne, mais il offre une ambiance chaleureuse, des espaces pratiques et une vraie vie de station à pied.",
      f1_title: "17 couchages • 7 chambres",
      f1_text: "Idéal pour les séjours en famille ou entre amis.",
      f2_title: "5 min à pied des pistes",
      f2_text: "Départ rapide le matin en saison d'hiver.",
      f3_title: "4 min des commerces",
      f3_text: "Tous les services essentiels à proximité.",
      f4_title: "Parking et accès facile",
      f4_text: "Arrivée simple et stationnement confortable.",
      panel_title: "Informations rapides",
      panel_l1: "17 couchages dans 7 chambres",
      panel_l2: "Sur les sentiers de randonnée l'été",
      panel_l3: "Très central à Vars-les-Claux",
      panel_l4: "Adresse : 103 All. Jean Navarre, 05560 Vars",
      panel_cta: "Faire une demande",
      gallery_title: "Découvrir le chalet en images",
      gallery_subtitle: "Cliquez sur une catégorie pour afficher toutes les photos correspondantes.",
      cat_facade: "Façade",
      cat_coin_tele: "Coin télé",
      cat_espace_repas_salon: "Espace repas/salon convivial",
      cat_cuisine: "Cuisine",
      cat_chambres_1er: "Chambres 1er étage",
      cat_chambres_2e: "Chambres 2e étage",
      cat_salles_bain: "Salles de bain",
      lightbox_close: "Fermer",
      location_kicker: "LOCALISATION",
      location_title: "Au cœur de Vars-les-Claux",
      location_text:
        "Adresse : 103 All. Jean Navarre, 05560 Vars, France. Accès facile et position centrale pour profiter de la station sans voiture.",
      location_note: "Accès facile, central.",
      map_title: "Carte de localisation du chalet",
      station_title: "Découvrir Vars",
      station_text:
        "Vars, au cœur des Hautes-Alpes, séduit par son ensoleillement et ses 185 km de pistes au sein de la Forêt Blanche, dans un décor de montagne spectaculaire été comme hiver. Une destination idéale pour skier, randonner et se ressourcer.",
      station_muted: "Ski l’hiver • Randonnées l’été • Ambiance de village",
      station_summer_title: "Été",
      station_winter_title: "Hiver",
      carousel_prev: "Image précédente",
      carousel_next: "Image suivante",
      request_kicker: "DISPONIBILITÉS",
      request_title: "Envoyer une demande de séjour",
      request_text:
        "Dites-nous vos dates et votre groupe. Nous revenons rapidement vers vous avec disponibilités et détails.",
      request_note: "Demande non engageante : nous confirmons ensuite par email ou téléphone.",
      label_name: "Nom",
      label_guests: "Nombre de personnes *",
      label_email: "Email *",
      label_phone: "Téléphone",
      label_start: "Date d'arrivée *",
      label_end: "Date de départ *",
      label_comment: "Commentaire",
      comment_placeholder: "Parlez-nous de votre séjour (groupe, attentes, questions).",
      required_note: "* Champs obligatoires.",
      submit_button: "Envoyer la demande",
      submit_loading: "Envoi...",
      footer_note: "Demande non engageante.",
      err_missing_start: "Merci de sélectionner une date d'arrivée.",
      err_missing_end: "Merci de sélectionner une date de départ.",
      err_end_before_start: "La date de départ doit être après la date d'arrivée.",
      err_guests_int: "Le nombre de personnes doit être un entier entre 1 et 17.",
      err_guests_range: "Le nombre de personnes doit être compris entre 1 et 17.",
      err_missing_email: "Merci de renseigner votre email.",
      err_invalid_email: "Merci d'indiquer une adresse email valide.",
      err_form_not_configured:
        "Formulaire non configuré : remplacez YOUR_FORM_ID dans index.html par votre ID Formspree.",
      submit_success:
        "Merci. Votre demande non engageante a été envoyée. Nous revenons vers vous rapidement.",
      submit_error: "Une erreur est survenue. Merci de réessayer dans un instant.",
      submit_network: "Impossible d'envoyer pour le moment. Vérifiez votre connexion puis réessayez.",
      photos_word_singular: "photo",
      photos_word_plural: "photos",
    },
    en: {
      page_lang: "en",
      skip_link: "Skip to content",
      nav_about: "Chalet",
      nav_photos: "Photos",
      nav_location: "Location",
      nav_station: "Resort",
      nav_request: "Request",
      hero_kicker: "VARS-LES-CLAUX, FRANCE",
      hero_title: "Chalet Les Ecrins - Vars-les-Claux",
      hero_text:
        "5 minutes on foot to the pistes in winter, direct access to trails in summer, right in the village center. A warm, lively chalet with easy access.",
      hero_cta: "Request availability",
      details_name: "CHALET LES ECRINS",
      details_location_line: "Vars-les-Claux, French Alps, France",
      details_meta_line: "17 beds · 7 bedrooms · 5 min to pistes · 4 min to shops",
      details_description:
        "Chalet Les Ecrins blends alpine spirit, practical comfort and a central village location in Vars-les-Claux. The atmosphere is warm, social and built for group stays or with family.",
      details_link: "View photos",
      signal1_title: "Signature Collection",
      signal1_text: "A warm chalet experience with key essentials for a smooth stay.",
      signal1_link: "Learn more",
      signal2_title: "Customer reviews",
      signal2_text: "This chalet is rated 5 out of 5 by recent guests.",
      signal2_link: "Discover the reviews",
      key_features_title: "Key features",
      kf1: "Mountain view",
      kf2: "Sunny terrace",
      kf3: "Cozy chalet atmosphere",
      kf4: "Easy parking",
      kf5: "Walking trails nearby",
      kf6: "Close to ski slopes",
      kf7: "Ski room",
      kf8: "Sound system",
      kf9: "Wifi",
      kf10: "Fireplace",
      details_kicker: "FAMILY CHALET",
      details_title: "A simple, central and welcoming alpine stay",
      details_intro:
        "Chalet Les Ecrins is not the most modern, but it offers real warmth, practical spaces, and a true walkable resort experience.",
      f1_title: "17 beds • 7 rooms",
      f1_text: "Great for family trips and group stays.",
      f2_title: "5 min walk to pistes",
      f2_text: "Quick morning access during winter season.",
      f3_title: "4 min to shops",
      f3_text: "All essentials within short walking distance.",
      f4_title: "Parking and easy access",
      f4_text: "Straightforward arrival and plenty of space.",
      panel_title: "Quick facts",
      panel_l1: "17 beds across 7 rooms",
      panel_l2: "On walking trails in summer",
      panel_l3: "Very central in Vars-les-Claux",
      panel_l4: "Address: 103 All. Jean Navarre, 05560 Vars",
      panel_cta: "Make a request",
      gallery_title: "Discover the chalet in photos",
      gallery_subtitle: "Click a category to display all matching photos.",
      cat_facade: "Facade",
      cat_coin_tele: "TV corner",
      cat_espace_repas_salon: "Dining/lounge area",
      cat_cuisine: "Kitchen",
      cat_chambres_1er: "Bedrooms 1st floor",
      cat_chambres_2e: "Bedrooms 2nd floor",
      cat_salles_bain: "Bathrooms",
      lightbox_close: "Close",
      location_kicker: "LOCATION",
      location_title: "In the heart of Vars-les-Claux",
      location_text:
        "Address: 103 All. Jean Navarre, 05560 Vars, France. Easy access and central position to enjoy the resort without relying on a car.",
      location_note: "Easy access, central.",
      map_title: "Map of chalet location",
      station_title: "Discover Vars",
      station_text:
        "Vars, in the heart of the Hautes-Alpes, stands out for its sunshine and 185 km of slopes in the Forêt Blanche, set in dramatic mountain scenery in both summer and winter. An ideal destination to ski, hike and recharge.",
      station_muted: "Ski in winter • Hiking in summer • Village atmosphere",
      station_summer_title: "Summer",
      station_winter_title: "Winter",
      carousel_prev: "Previous image",
      carousel_next: "Next image",
      request_kicker: "AVAILABILITY",
      request_title: "Send a stay request",
      request_text:
        "Share your dates and group size. We will quickly reply with availability and details.",
      request_note: "Request is non-binding - we will confirm by email or phone.",
      label_name: "Name",
      label_guests: "Number of guests *",
      label_email: "Email *",
      label_phone: "Phone",
      label_start: "Arrival date *",
      label_end: "Departure date *",
      label_comment: "Comment",
      comment_placeholder: "Tell us about your stay (group, preferences, questions).",
      required_note: "* Required fields.",
      submit_button: "Send request",
      submit_loading: "Sending...",
      footer_note: "Non-binding request.",
      err_missing_start: "Please select an arrival date.",
      err_missing_end: "Please select a departure date.",
      err_end_before_start: "Departure date must be after arrival date.",
      err_guests_int: "Number of guests must be a whole number between 1 and 17.",
      err_guests_range: "Number of guests must be between 1 and 17.",
      err_missing_email: "Please provide your email address.",
      err_invalid_email: "Please enter a valid email address.",
      err_form_not_configured:
        "Form not configured yet: replace YOUR_FORM_ID in index.html with your Formspree ID.",
      submit_success: "Thank you. Your non-binding request was sent. We will reply shortly.",
      submit_error: "Something went wrong. Please try again in a moment.",
      submit_network: "Unable to send right now. Please check your connection and try again.",
      photos_word_singular: "photo",
      photos_word_plural: "photos",
    },
  };

  const galleryCatalog = [
    {
      id: "facade",
      labelKey: "cat_facade",
      files: ["Exterieur ete 2.jpg", "Exterieur hiver 2.jpg"],
    },
    {
      id: "coin-tele",
      labelKey: "cat_coin_tele",
      files: ["Coin tele.JPG"],
    },
    {
      id: "espace-repas-salon",
      labelKey: "cat_espace_repas_salon",
      files: [
        "Salle de sejour coin repas.jpg",
        "Salle de sejour coin salon.JPG",
        "Salle de sejour coin salon 1.JPG",
      ],
    },
    {
      id: "cuisine",
      labelKey: "cat_cuisine",
      files: ["Cuisine.JPG", "Cuisine 2.JPG"],
    },
    {
      id: "chambres-1er",
      labelKey: "cat_chambres_1er",
      files: [
        "Chambre double 1er etage 1.jpg",
        "Chambre 3 lits 1er etage.jpg",
        "Chambre double 1er etage 2-1.jpg",
        "Chambre double 1er etage 2-2.jpg",
        "Dortoir 4 lits 1er etage.jpg",
        "Dortoir 4 lits 1er etage 2.jpg",
      ],
    },
    {
      id: "chambres-2e",
      labelKey: "cat_chambres_2e",
      files: [
        "Chambre double 2e etage 1.JPG",
        "Chambre double 2e etage 2.JPG",
        "Chambre double 2e etage 2-2.JPG",
        "Chambre 2 lits 2e etage.JPG",
      ],
    },
    {
      id: "salles-de-bain",
      labelKey: "cat_salles_bain",
      files: [
        "Salle de bain 1er etage.jpg",
        "Salle de bain 1er etage 2.jpg",
        "Salle de bain 2e etage.JPG",
        "Salle de bain 2e etage 2.JPG",
      ],
    },
  ];

  const bookingForm = document.getElementById("booking-form");
  const messageEl = document.getElementById("form-message");
  const submitButton = bookingForm ? bookingForm.querySelector('button[type="submit"]') : null;
  const startDateInput = document.getElementById("start-date");
  const endDateInput = document.getElementById("end-date");
  const emailInput = document.getElementById("email");
  const guestsInput = document.getElementById("guests");
  const langButtons = document.querySelectorAll(".lang-btn");
  const langSwitch = document.querySelector(".lang-switch");
  const heroMedia = document.querySelector(".hero-media");

  const galleryCategoriesEl = document.getElementById("gallery-categories");
  const galleryGridEl = document.getElementById("gallery-grid");
  const galleryActiveTitleEl = document.getElementById("gallery-active-title");
  const galleryActiveCountEl = document.getElementById("gallery-active-count");
  const lightboxEl = document.getElementById("gallery-lightbox");
  const lightboxImageEl = document.getElementById("gallery-lightbox-image");
  const lightboxCaptionEl = document.getElementById("gallery-lightbox-caption");
  const stationCarousels = document.querySelectorAll("[data-carousel]");

  let currentLang = "fr";
  let activeGalleryCategory = "facade";

  function t(key) {
    const table = translations[currentLang] || translations.fr;
    return table[key] || key;
  }

  function photoSrc(fileName) {
    return `assets/photos/${encodeURIComponent(fileName).replace(/%2F/g, "/")}`;
  }

  function prettifyFileName(fileName) {
    return fileName
      .replace(/\.[^.]+$/, "")
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getGalleryCountLabel(count) {
    const word = count > 1 ? t("photos_word_plural") : t("photos_word_singular");
    return `${count} ${word}`;
  }

  function getCategoryById(id) {
    return galleryCatalog.find((category) => category.id === id) || galleryCatalog[0];
  }

  function renderGallery() {
    if (!galleryGridEl || !galleryCategoriesEl || !galleryActiveTitleEl || !galleryActiveCountEl) return;

    const category = getCategoryById(activeGalleryCategory);
    const fragment = document.createDocumentFragment();

    category.files.forEach((fileName, index) => {
      const figure = document.createElement("figure");
      figure.className = "gallery-photo";
      figure.tabIndex = 0;
      figure.setAttribute("role", "button");
      figure.setAttribute("aria-label", `${t(category.labelKey)} ${index + 1}`);

      const image = document.createElement("img");
      image.loading = "lazy";
      image.decoding = "async";
      image.src = photoSrc(fileName);
      image.alt = `${t(category.labelKey)} - ${index + 1}`;
      image.addEventListener("load", () => {
        if (image.naturalHeight > image.naturalWidth) {
          figure.classList.add("is-portrait");
        } else {
          figure.classList.remove("is-portrait");
        }
      });

      const caption = document.createElement("figcaption");
      caption.textContent = prettifyFileName(fileName);

      figure.dataset.fullSrc = photoSrc(fileName);
      figure.dataset.fullAlt = image.alt;
      figure.dataset.caption = caption.textContent;

      figure.appendChild(image);
      figure.appendChild(caption);
      fragment.appendChild(figure);
    });

    galleryGridEl.replaceChildren(fragment);
    galleryActiveTitleEl.textContent = t(category.labelKey);
    galleryActiveCountEl.textContent = getGalleryCountLabel(category.files.length);

    galleryCategoriesEl.querySelectorAll(".gallery-category").forEach((button) => {
      const isActive = button.dataset.category === category.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function openLightbox(src, alt, caption) {
    if (!lightboxEl || !lightboxImageEl || !lightboxCaptionEl) return;
    lightboxImageEl.src = src;
    lightboxImageEl.alt = alt;
    lightboxCaptionEl.textContent = caption;
    lightboxEl.hidden = false;
    lightboxEl.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    if (!lightboxEl || !lightboxImageEl || !lightboxCaptionEl) return;
    lightboxEl.hidden = true;
    lightboxEl.setAttribute("aria-hidden", "true");
    lightboxImageEl.src = "";
    lightboxImageEl.alt = "";
    lightboxCaptionEl.textContent = "";
    document.body.classList.remove("lightbox-open");
  }

  function applyTranslations(lang) {
    if (!translations[lang]) return;

    currentLang = lang;
    document.documentElement.lang = translations[lang].page_lang;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
    });

    document.querySelectorAll("[data-i18n-title]").forEach((node) => {
      node.setAttribute("title", t(node.dataset.i18nTitle));
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
      node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
    });

    if (submitButton) {
      submitButton.textContent = t(submitButton.dataset.defaultKey);
    }

    langButtons.forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    renderGallery();

    try {
      localStorage.setItem("chalet_lang", lang);
    } catch (_err) {
      // Ignore storage issues.
    }
  }

  function getTodayLocalISO() {
    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60000;
    return new Date(now.getTime() - offsetMs).toISOString().split("T")[0];
  }

  function setTodayAsMinDate() {
    if (!startDateInput || !endDateInput) return;
    const today = getTodayLocalISO();
    startDateInput.min = today;
    endDateInput.min = today;
  }

  function updateEndDateMin() {
    if (!startDateInput || !endDateInput) return;
    if (startDateInput.value) {
      endDateInput.min = startDateInput.value;
    } else {
      endDateInput.min = getTodayLocalISO();
    }
  }

  function setMessage(text, type) {
    if (!messageEl) return;
    messageEl.textContent = text;
    messageEl.classList.remove("success", "error");
    if (type) {
      messageEl.classList.add(type);
    }
  }

  function setSubmittingState(isSubmitting) {
    if (!submitButton) return;
    submitButton.disabled = isSubmitting;
    submitButton.textContent = isSubmitting
      ? t(submitButton.dataset.loadingKey)
      : t(submitButton.dataset.defaultKey);
  }

  function getValidationErrors() {
    const errors = [];
    if (!startDateInput || !endDateInput || !guestsInput || !emailInput) {
      return errors;
    }

    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    const guestsRaw = guestsInput.value.trim();
    const email = emailInput.value.trim();

    if (!startDate) {
      errors.push(t("err_missing_start"));
    }

    if (!endDate) {
      errors.push(t("err_missing_end"));
    }

    if (startDate && endDate) {
      const start = new Date(startDate + "T00:00:00");
      const end = new Date(endDate + "T00:00:00");
      if (end <= start) {
        errors.push(t("err_end_before_start"));
      }
    }

    if (!/^\d+$/.test(guestsRaw)) {
      errors.push(t("err_guests_int"));
    } else {
      const guests = Number.parseInt(guestsRaw, 10);
      if (guests < 1 || guests > 17) {
        errors.push(t("err_guests_range"));
      }
    }

    if (!email) {
      errors.push(t("err_missing_email"));
    }

    if (email && !emailInput.checkValidity()) {
      errors.push(t("err_invalid_email"));
    }

    return errors;
  }

  async function submitForm(event) {
    event.preventDefault();
    setMessage("", null);

    if (!bookingForm) return;

    const formAction = bookingForm.getAttribute("action") || "";
    if (formAction.includes("YOUR_FORM_ID")) {
      setMessage(t("err_form_not_configured"), "error");
      return;
    }

    const errors = getValidationErrors();
    if (errors.length > 0) {
      setMessage(errors[0], "error");
      return;
    }

    const formData = new FormData(bookingForm);
    setSubmittingState(true);

    try {
      const response = await fetch(formAction, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        bookingForm.reset();
        updateEndDateMin();
        setMessage(t("submit_success"), "success");
        return;
      }

      let errorMessage = t("submit_error");
      try {
        const responseBody = await response.json();
        if (responseBody && Array.isArray(responseBody.errors) && responseBody.errors.length > 0) {
          errorMessage = responseBody.errors[0].message || errorMessage;
        }
      } catch (_err) {
        // Keep fallback error message.
      }

      setMessage(errorMessage, "error");
    } catch (_err) {
      setMessage(t("submit_network"), "error");
    } finally {
      setSubmittingState(false);
    }
  }

  function onLanguageToggle(event) {
    const button = event.target.closest(".lang-btn");
    if (!button) return;
    applyTranslations(button.dataset.lang);
  }

  function onGalleryCategoryClick(event) {
    const button = event.target.closest(".gallery-category");
    if (!button) return;
    activeGalleryCategory = button.dataset.category;
    renderGallery();
  }

  function getInitialLanguage() {
    try {
      const saved = localStorage.getItem("chalet_lang");
      if (saved && translations[saved]) {
        return saved;
      }
    } catch (_err) {
      // Ignore localStorage read issues.
    }
    return "fr";
  }

  function initCarousel(rootEl, options) {
    if (!rootEl) return null;

    const track = rootEl.querySelector("[data-carousel-track]");
    const slides = track ? Array.from(track.children) : [];
    const prevButton = rootEl.querySelector("[data-carousel-prev]");
    const nextButton = rootEl.querySelector("[data-carousel-next]");
    const statusEl = rootEl.querySelector("[data-carousel-status]");

    if (!track || slides.length === 0) return null;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const configuredInterval = Number(options && options.intervalMs);
    const intervalMs = Number.isFinite(configuredInterval) ? configuredInterval : 3200;
    let currentIndex = 0;
    let autoplayId = null;

    function updateStatus() {
      if (!statusEl) return;
      statusEl.textContent = `${currentIndex + 1} / ${slides.length}`;
    }

    function render() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      slides.forEach((slide, idx) => {
        slide.setAttribute("aria-hidden", String(idx !== currentIndex));
      });
      updateStatus();
    }

    function goTo(index) {
      currentIndex = (index + slides.length) % slides.length;
      render();
    }

    function next() {
      goTo(currentIndex + 1);
    }

    function prev() {
      goTo(currentIndex - 1);
    }

    function stopAutoplay() {
      if (autoplayId) {
        window.clearInterval(autoplayId);
        autoplayId = null;
      }
    }

    function startAutoplay() {
      stopAutoplay();
      if (prefersReducedMotion || slides.length < 2) return;
      autoplayId = window.setInterval(next, intervalMs);
    }

    prevButton &&
      prevButton.addEventListener("click", () => {
        prev();
        startAutoplay();
      });

    nextButton &&
      nextButton.addEventListener("click", () => {
        next();
        startAutoplay();
      });

    rootEl.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
        startAutoplay();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
        startAutoplay();
      }
    });

    rootEl.addEventListener("mouseenter", stopAutoplay);
    rootEl.addEventListener("mouseleave", startAutoplay);
    rootEl.addEventListener("focusin", stopAutoplay);
    rootEl.addEventListener("focusout", (event) => {
      if (!rootEl.contains(event.relatedTarget)) {
        startAutoplay();
      }
    });

    render();
    startAutoplay();
    return { stopAutoplay, startAutoplay };
  }

  if (heroMedia) {
    heroMedia.style.backgroundImage = `url("${photoSrc("Exterieur ete 2.jpg")}")`;
  }

  setTodayAsMinDate();
  updateEndDateMin();
  applyTranslations(getInitialLanguage());

  if (startDateInput) {
    startDateInput.addEventListener("change", updateEndDateMin);
  }

  if (bookingForm) {
    bookingForm.addEventListener("submit", submitForm);
  }

  if (langSwitch) {
    langSwitch.addEventListener("click", onLanguageToggle);
  }

    if (galleryCategoriesEl) {
      galleryCategoriesEl.addEventListener("click", onGalleryCategoryClick);
    }

  function onGalleryPhotoClick(event) {
    const card = event.target.closest(".gallery-photo");
    if (!card || !galleryGridEl || !galleryGridEl.contains(card)) return;
    openLightbox(card.dataset.fullSrc || "", card.dataset.fullAlt || "", card.dataset.caption || "");
  }

  function onGalleryPhotoKeydown(event) {
    const card = event.target.closest(".gallery-photo");
    if (!card || !galleryGridEl || !galleryGridEl.contains(card)) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(card.dataset.fullSrc || "", card.dataset.fullAlt || "", card.dataset.caption || "");
    }
  }

  function onLightboxClick(event) {
    const closeTrigger = event.target.closest("[data-lightbox-close]");
    if (closeTrigger) {
      closeLightbox();
    }
  }

  function onEscapeClose(event) {
    if (event.key === "Escape" && lightboxEl && !lightboxEl.hidden) {
      closeLightbox();
    }
  }

  if (galleryGridEl) {
    galleryGridEl.addEventListener("click", onGalleryPhotoClick);
    galleryGridEl.addEventListener("keydown", onGalleryPhotoKeydown);
  }

  if (lightboxEl) {
    lightboxEl.addEventListener("click", onLightboxClick);
  }

  stationCarousels.forEach((carousel) => {
    const intervalMs = Number(carousel.dataset.interval) || 3200;
    initCarousel(carousel, { intervalMs });
  });

  document.addEventListener("keydown", onEscapeClose);
})();
